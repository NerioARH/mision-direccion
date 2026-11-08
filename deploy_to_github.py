import os
import sys
import subprocess
import urllib.request
import json
import mimetypes

WORK_DIR = r"C:\Users\NERIO\.gemini\antigravity\scratch\mision_direccion"

def get_token():
    p = subprocess.Popen(
        ['git', 'credential', 'fill'],
        stdin=subprocess.PIPE,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        text=True
    )
    out, _ = p.communicate('protocol=https\nhost=github.com\n\n')
    for line in out.splitlines():
        if line.startswith('password='):
            return line.split('=', 1)[1].strip()
    return None

def api_request(url, method='GET', data=None, token=None, content_type='application/json'):
    headers = {
        'Authorization': f'token {token}',
        'User-Agent': 'MisionDireccion-Deployer',
        'Accept': 'application/vnd.github+json'
    }
    if content_type:
        headers['Content-Type'] = content_type

    body = None
    if data is not None:
        if isinstance(data, (dict, list)):
            body = json.dumps(data).encode('utf-8')
        else:
            body = data

    req = urllib.request.Request(url, data=body, headers=headers, method=method)
    try:
        with urllib.request.urlopen(req) as resp:
            content = resp.read()
            if content:
                try:
                    return resp.status, json.loads(content.decode('utf-8'))
                except Exception:
                    return resp.status, content
            return resp.status, None
    except urllib.error.HTTPError as e:
        err_msg = e.read().decode('utf-8')
        return e.code, err_msg
    except Exception as e:
        return 500, str(e)

def run_cmd(cmd, cwd=WORK_DIR):
    print(f"Running: {' '.join(cmd)}")
    res = subprocess.run(cmd, cwd=cwd, capture_output=True, text=True)
    if res.stdout:
        print("STDOUT:", res.stdout.strip())
    if res.stderr:
        print("STDERR:", res.stderr.strip())
    if res.returncode != 0:
        raise RuntimeError(f"Command failed with code {res.returncode}")
    return res.stdout.strip()

def main():
    token = get_token()
    if not token:
        print("ERROR: Token not found")
        sys.exit(1)

    # 1. Get authenticated user
    status, user_data = api_request('https://api.github.com/user', token=token)
    if status != 200:
        print(f"Failed to get user: {status} - {user_data}")
        sys.exit(1)
    username = user_data['login']
    print(f"Authenticated as: {username}")

    repo_name = "mision-direccion"

    # 2. Check if repo exists or create it
    status, repo_info = api_request(f'https://api.github.com/repos/{username}/{repo_name}', token=token)
    if status == 404:
        print(f"Creating repo {repo_name}...")
        payload = {
            "name": repo_name,
            "description": "🎯 Misión Dirección — Juego didáctico de memoria y estrategia administrativa sobre la etapa de Dirección (Teoría Administrativa).",
            "homepage": f"https://{username.lower()}.github.io/{repo_name}/",
            "private": False,
            "has_issues": True,
            "has_projects": True,
            "has_wiki": True
        }
        status, repo_info = api_request('https://api.github.com/user/repos', method='POST', data=payload, token=token)
        if status not in (200, 201):
            print(f"Error creating repository: {status} - {repo_info}")
            sys.exit(1)
        print("Repository created successfully!")
    else:
        print(f"Repository {repo_name} already exists.")

    html_url = repo_info.get('html_url', f'https://github.com/{username}/{repo_name}')
    clone_url = repo_info.get('clone_url', f'https://github.com/{username}/{repo_name}.git')
    print(f"Repository URL: {html_url}")

    # 3. Local Git initialization & commit
    # Clean up temp deployer script if exists from tracking
    if os.path.exists(os.path.join(WORK_DIR, "setup_and_push.py")):
        os.remove(os.path.join(WORK_DIR, "setup_and_push.py"))

    # Check if .git exists
    if not os.path.exists(os.path.join(WORK_DIR, ".git")):
        run_cmd(['git', 'init', '-b', 'main'])

    run_cmd(['git', 'config', 'user.name', username])
    run_cmd(['git', 'config', 'user.email', user_data.get('email') or 'nerioarh2004@gmail.com'])

    # Check remotes
    remotes = subprocess.run(['git', 'remote'], cwd=WORK_DIR, capture_output=True, text=True).stdout.strip().split()
    if 'origin' in remotes:
        run_cmd(['git', 'remote', 'set-url', 'origin', clone_url])
    else:
        run_cmd(['git', 'remote', 'add', 'origin', clone_url])

    # Add files
    run_cmd(['git', 'add', '.'])

    # Commit
    # Check if there is anything to commit
    status_out = subprocess.run(['git', 'status', '--porcelain'], cwd=WORK_DIR, capture_output=True, text=True).stdout
    if status_out.strip():
        run_cmd(['git', 'commit', '-m', 'feat: inicializar Misión Dirección - Juego de Memoria y Dirección Administrativa'])
    else:
        print("Nothing to commit, working tree clean.")

    # 4. Push to remote
    print("Pushing to GitHub...")
    # Use credential helper or explicit URL with token if needed
    push_url = f"https://{username}:{token}@github.com/{username}/{repo_name}.git"
    run_cmd(['git', 'push', '-u', push_url, 'main', '--force'])
    # Reset remote back to standard https without embedding token
    run_cmd(['git', 'remote', 'set-url', 'origin', clone_url])
    print("Code pushed successfully!")

    # 5. Enable GitHub Pages
    print("Configuring GitHub Pages...")
    pages_payload = {
        "source": {
            "branch": "main",
            "path": "/"
        }
    }
    status, pages_resp = api_request(f'https://api.github.com/repos/{username}/{repo_name}/pages', method='POST', data=pages_payload, token=token)
    if status in (200, 201):
        print(f"GitHub Pages enabled at: https://{username.lower()}.github.io/{repo_name}/")
    else:
        print(f"Pages status: {status} ({pages_resp})")

    # 6. Create Release v1.0.0 and upload MisionDireccion.exe
    exe_path = os.path.join(WORK_DIR, "MisionDireccion.exe")
    if os.path.exists(exe_path):
        print("Creating GitHub Release v1.0.0...")
        rel_payload = {
            "tag_name": "v1.0.0",
            "target_commitish": "main",
            "name": "Misión Dirección v1.0.0 — Versión Final para Salón de Clases",
            "body": (
                "## 🎯 Misión Dirección v1.0.0\n\n"
                "Juego didáctico y competitivo por equipos para la materia **Teoría Administrativa** (etapa de **Dirección**).\n\n"
                "### 📦 Novedades y Características:\n"
                "- **20 barajas** (10 parejas) con ilustraciones vectoriales SVG de alta definición y gran escala.\n"
                "- **Textos compactos y nítidos**, optimizados para proyectores en aulas escolares.\n"
                "- **Modal MOMENTO RETO** en letras gigantes para dinámicas presenciales.\n"
                "- **Reto final del equipo ganador al perdedor** al completar la partida.\n"
                "- Efectos de sonido Web Audio y temporizador interactivo de 10s.\n\n"
                "### 📥 Descarga del Ejecutable para Windows:\n"
                "Descarga `MisionDireccion.exe` a continuación y ejecútalo directamente."
            ),
            "draft": False,
            "prerelease": False
        }
        status, rel_data = api_request(f'https://api.github.com/repos/{username}/{repo_name}/releases', method='POST', data=rel_payload, token=token)
        if status in (200, 201):
            release_id = rel_data['id']
            upload_url = rel_data['upload_url'].split('{')[0]
            print(f"Release created with ID {release_id}. Uploading MisionDireccion.exe...")

            exe_size = os.path.getsize(exe_path)
            with open(exe_path, 'rb') as f:
                exe_bytes = f.read()

            upload_target = f"{upload_url}?name=MisionDireccion.exe"
            status, upload_resp = api_request(
                upload_target,
                method='POST',
                data=exe_bytes,
                token=token,
                content_type='application/octet-stream'
            )
            if status in (200, 201):
                print("MisionDireccion.exe uploaded to GitHub Release successfully!")
            else:
                print(f"Asset upload response: {status} - {upload_resp}")
        else:
            print(f"Release response: {status} - {rel_data}")

    print("\n=======================================================")
    print(f"🎉 ¡TODO PUBLICADO CON ÉXITO EN GITHUB!")
    print(f"📂 Repositorio: {html_url}")
    print(f"🌐 GitHub Pages: https://{username.lower()}.github.io/{repo_name}/")
    print(f"📦 Release v1.0.0: {html_url}/releases/tag/v1.0.0")
    print("=======================================================\n")

if __name__ == '__main__':
    main()

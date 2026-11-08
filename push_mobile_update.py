import subprocess
import os

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

def main():
    token = get_token()
    if not token:
        print("ERROR: No token found")
        return

    # Add all
    subprocess.run(['git', 'add', '.'], cwd=WORK_DIR, check=True)

    # Commit
    subprocess.run(['git', 'commit', '-m', 'feat: optimizar diseño responsivo para dispositivos móviles y teléfonos'], cwd=WORK_DIR, check=True)

    # Push
    push_url = f"https://NerioARH:{token}@github.com/NerioARH/mision-direccion.git"
    env = os.environ.copy()
    env['GIT_TERMINAL_PROMPT'] = '0'
    subprocess.run(['git', 'push', push_url, 'main'], cwd=WORK_DIR, env=env, check=True)

    # Reset remote back to standard https
    subprocess.run(['git', 'remote', 'set-url', 'origin', 'https://github.com/NerioARH/mision-direccion.git'], cwd=WORK_DIR, check=True)
    print("Mobile update pushed to GitHub successfully!")

if __name__ == '__main__':
    main()

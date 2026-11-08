import os
import sys
import webview

def get_resource_path(relative_path):
    if hasattr(sys, '_MEIPASS'):
        return os.path.join(sys._MEIPASS, relative_path)
    return os.path.join(os.path.dirname(os.path.abspath(__file__)), relative_path)

def load_html():
    html_file = get_resource_path("index.html")
    if os.path.exists(html_file):
        with open(html_file, "r", encoding="utf-8") as f:
            return f.read()
    # Check current working directory
    if os.path.exists("index.html"):
        with open("index.html", "r", encoding="utf-8") as f:
            return f.read()
    return "<h1>Error: no se pudo cargar el archivo del juego.</h1>"

def main():
    content = load_html()
    window = webview.create_window(
        title="Misión Dirección — Juego de Memoria y Estrategia",
        html=content,
        width=1340,
        height=880,
        min_size=(1024, 720),
        resizable=True,
        background_color="#2563eb"
    )
    webview.start()

if __name__ == '__main__':
    main()

from PIL import Image, ImageDraw

def create_app_icon():
    # Create high-res 256x256 image
    img = Image.new("RGBA", (256, 256), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)

    # Blue rounded circular background
    draw.ellipse([8, 8, 248, 248], fill="#1e4570", outline="#3b82f6", width=8)

    # Inner bright aura
    draw.ellipse([30, 30, 226, 226], fill="#2563eb")

    # Yellow glowing lightbulb
    # Head
    draw.ellipse([70, 50, 186, 160], fill="#ffca28", outline="#f57f17", width=6)
    # Base trapezoid
    draw.polygon([(100, 150), (156, 150), (145, 190), (111, 190)], fill="#ffca28")
    # Screws
    draw.rounded_rectangle([105, 190, 151, 204], radius=4, fill="#cfd8dc", outline="#90a4ae", width=3)
    draw.rounded_rectangle([110, 206, 146, 218], radius=4, fill="#cfd8dc", outline="#90a4ae", width=3)

    # Brain silhouette inside bulb (stylized white)
    draw.ellipse([88, 80, 126, 130], fill="#ffffff")
    draw.ellipse([130, 80, 168, 130], fill="#ffffff")
    draw.ellipse([100, 70, 156, 120], fill="#ffffff")

    # Brain convolutions
    draw.arc([92, 85, 122, 115], start=45, end=270, fill="#f57f17", width=4)
    draw.arc([134, 85, 164, 115], start=-90, end=135, fill="#f57f17", width=4)
    draw.line([(128, 75), (128, 130)], fill="#f57f17", width=4)

    # Save as .ico with multiple standard resolutions
    icon_sizes = [(256, 256), (128, 128), (64, 64), (48, 48), (32, 32), (16, 16)]
    img.save("icon.ico", format="ICO", sizes=icon_sizes)
    print("icon.ico created successfully!")

if __name__ == "__main__":
    create_app_icon()

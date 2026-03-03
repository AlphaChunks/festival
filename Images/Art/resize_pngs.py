import os
from PIL import Image

TARGET_SIZE = (250, 250)

for filename in os.listdir("."):
    if filename.lower().endswith(".png"):
        try:
            # Open and ensure RGBA (so transparency/mask works properly)
            img = Image.open(filename).convert("RGBA")

            # Resize while keeping aspect ratio
            img.thumbnail(TARGET_SIZE, Image.LANCZOS)

            # Create a blank 250x250 transparent canvas
            canvas = Image.new("RGBA", TARGET_SIZE, (0, 0, 0, 0))
            x = (TARGET_SIZE[0] - img.width) // 2
            y = (TARGET_SIZE[1] - img.height) // 2

            # Paste with alpha
            canvas.paste(img, (x, y), img)

            # Save back over original
            canvas.save(filename)
            print(f"Resized: {filename}")

        except Exception as e:
            print(f"Error processing {filename}: {e}")

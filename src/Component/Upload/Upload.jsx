import { useState } from "react";

function FilePicker() {
  const [images, setImages] = useState([]);

  const openFilePicker = async () => {
    try {
      const files = await window.showOpenFilePicker({
        multiple: true,
        types: [
          {
            description: "Images",
            accept: {
              "image/*": [".png", ".jpg", ".jpeg", ".webp"]
            }
          }
        ]
      });

      const selectedImages = await Promise.all(
        files.map(async (fileHandle) => {
          const file = await fileHandle.getFile();
          return {
            name: file.name,
            url: URL.createObjectURL(file)
          };
        })
      );

      setImages((prev) => [...prev, ...selectedImages]);
    } catch (err) {
      console.log("File selection cancelled or failed");
    }
  };

  return (
    <div>
      <button onClick={openFilePicker}>Upload Images</button>

      <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
        {images.map((img, index) => (
          <img
            key={index}
            src={img.url}
            alt={img.name}
            width="120"
          />
        ))}
      </div>
    </div>
  );
}

export default FilePicker;

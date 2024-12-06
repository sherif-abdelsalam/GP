import { forwardRef, useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

const MainSectoin = forwardRef(
  ({ selectedFile, setSelectedFile, setColorPalette, children }, ref) => {
    const [loading, setLoading] = useState(false); // Manage loading state

    const onDrop = useCallback(
      (acceptedFiles) => {
        const file = acceptedFiles[0];
        if (file) {
          setSelectedFile(file);
        }
      },
      [setSelectedFile]
    );

    const getColorPalette = async (file) => {
      try {
        const arrayBuffer = await file.arrayBuffer();

        const response = await fetch("http://localhost:5000/process_image", {
          method: "POST",
          headers: {
            "Content-Type": file.type,
          },
          body: arrayBuffer,
        });

        const data = await response.json();
        return data;
      } catch (error) {
        console.error("Error while fetching the color palette:", error);
        return null;
      }
    };

    const handleCreatePalette = async () => {
      setColorPalette([]);
      if (!selectedFile) {
        alert("Please select an image first.");
        return;
      }

      setLoading(true); // Start the loader
      try {
        const response = await getColorPalette(selectedFile);
        if (response && response.color_palettes) {
          setColorPalette(response.color_palettes);
        }
      } catch (error) {
        console.error("Error while generating color palette:", error);
      } finally {
        setLoading(false); // Stop the loader
      }
    };

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
      onDrop,
    });

    return (
      <div id="main-section" ref={ref}>
        <h1>Create a Color Palette</h1>
        <div {...getRootProps()} className="dropzone">
          <input {...getInputProps()} />
          {selectedFile ? (
            <img
              src={URL.createObjectURL(selectedFile)}
              alt="Uploaded"
              className="uploaded-image"
            />
          ) : isDragActive ? (
            <p>Drop the image here...</p>
          ) : (
            <p>Drag and drop an image here, or click to select one</p>
          )}
        </div>

        {/* Button to generate color palette */}
        <button className="image-preview-button" onClick={handleCreatePalette}>
          Generate Color Palette
        </button>

        {/* Loader */}
        {loading && <Loader />}

        <div className="children">
          {children}

          {/* <div className="new-palette">
            <button onClick={ChangePalette}>New Palette</button>
          </div> */}
        </div>
      </div>
    );
  }
);

export default MainSectoin;

function Loader() {
  return <div className="loader"></div>;
}

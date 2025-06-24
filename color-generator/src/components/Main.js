import { forwardRef, useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import Loader from "./Loader";
import "./Main.css";

const MainSection = forwardRef(
  (
    { selectedFile, setSelectedFile, setColorPalette, ChangePalette, children },
    ref
  ) => {
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
      console.log("Generate Color Palette button clicked!"); // Debug log
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

    const handleChangePalette = () => {
      console.log("New Palette button clicked!"); // Debug log
      ChangePalette();
    };

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
      onDrop,
    });

    return (
      <div className="main-section" ref={ref}>
        <h3>
          Start by uploading any image to extract its colors <br /> to create a
          color palette
        </h3>
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
            <div className="drag-drop">
              <img src="/darg.svg" alt="Upload" />
              <p className="drag-drop-text">
                Drag and drop image here, or click to select one
              </p>
            </div>
          )}
        </div>

        {/* Button to generate color palette */}
        <button
          className="btn image-preview-button"
          onClick={handleCreatePalette}
        >
          Generate Color Palette
        </button>

        {/* Loader */}
        {loading && <Loader />}

        <div className="color-palette-container">
          {children}
          <div>
            <button className="btn new-palette" onClick={handleChangePalette}>
              New Palette
            </button>
          </div>
        </div>
      </div>
    );
  }
);

export default MainSection;

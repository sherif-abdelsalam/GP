import "./Result.css";

function Result({ colorPalette }) {
  console.log(colorPalette); // Debug log
  return (
    <div id="result">
      <div className="box">
        {Array(4) // Create 4 boxes dynamically for the color palette
          .fill(null)
          .map((_, index) => (
            <div key={index}>
              <div
                className="color-box"
                style={{
                  backgroundColor: colorPalette
                    ? colorPalette[index]
                    : "transparent", // Apply color or transparent
                }}
              ></div>
              <div className="color-code">
                {colorPalette ? colorPalette[index] : ""}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Result;

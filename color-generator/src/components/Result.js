function Result({ colorPalette }) {
  return (
    <div id="result">
      <div className="box">
        {Array(6) // Create 6 boxes dynamically
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

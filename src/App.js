import { DevBundlerService } from "next/dist/server/lib/dev-bundler-service";
import React, { useEffect, useState } from "react";

const BASE_IMG_URL = "https://picsum.photos/seed/sameimage/300";

function App() {
  return <CustomBlur />;
}

const CustomBlur = () => {
  const [blurValue, setBlurValue] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = `${BASE_IMG_URL}`;
    img.onload = () => setImageLoaded(true);
  }, []);

  return (
    <div stlye={{ textAlign: "center" }}>
      {imageLoaded ? (
        <img
          src={`${BASE_IMG_URL}`}
          alt="Random"
          style={{
            filter: `blur(${blurValue}px)`,
            transition: "filter 0.3s ease",
          }}
        />
      ) : (
        <p>Loading...</p>
      )}
      <div style={{ marginTop: "20px" }}>
        <label htmlFor="blurRange">Blur:</label>
        <input
          id="blurRange"
          type="range"
          min="0"
          max="100"
          value={blurValue}
          onChange={(e) => setBlurValue(e.target.value)}
          style={{ marginLeft: "10px" }}
        />
      </div>
    </div>
  );
};

export default App;

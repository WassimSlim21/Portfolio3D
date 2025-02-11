import React, { useMemo } from "react";
import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
    const { progress } = useProgress();

    const displayProgress = useMemo(() => (progress !== 0 ? `${progress.toFixed(2)}%` : "Loading..."), [progress]);

    return (
        <Html as="div" center>
      <span className="canvas-loader">
        <p style={{ fontSize: 14, color: "#F1F1F1", fontWeight: 800, marginTop: 40 }}>
          {displayProgress}
        </p>
      </span>
        </Html>
    );
};

export default CanvasLoader;
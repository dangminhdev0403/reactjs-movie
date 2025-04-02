import { useEffect, useState } from "react";

const ImageComponent = ({ src, width, height, className }) => {
  const [currentSrc, setCurrentSrc] = useState(
    `https://placehold.co/${width}x${height}?text=loading`,
  );
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (src) {
      const image = new Image();
      image.src = src;
      image.onload = () => {
        setCurrentSrc(src);
        setIsLoaded(true);
      };
      image.onerror = () => {
        setCurrentSrc(
          'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="%23666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"%3E%3Crect x="3" y="3" width="18" height="18" rx="2" ry="2"%3E%3C/rect%3E%3Ccircle cx="8.5" cy="8.5" r="1.5"%3E%3C/circle%3E%3Cpolyline points="21 15 16 10 5 21"%3E%3C/polyline%3E%3C/svg%3E',
        );
      };

      return () => {
        image.onload = null;
        image.onerror = null;
      };
    }
  }, [src]);

  return (
    <div
      style={{
        position: "relative",
        width: `${width}px`,
        height: `${height}px`,
        background: "#1a1a1a",
        borderRadius: "12px",
        overflow: "hidden",
      }}
    >
      {!isLoaded && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(90deg, #1a1a1a 0%, #222 50%, #1a1a1a 100%)",
            backgroundSize: "200% 100%",
            animation: "shimmer 1.5s infinite linear",
          }}
        />
      )}
      <img
        src={currentSrc}
        width={width}
        height={height}
        alt=""
        className={className}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: isLoaded ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      />
    </div>
  );
};

// Thêm keyframes thông qua style tag
const AnimationStyles = () => (
  <style>
    {`
      @keyframes shimmer {
        0% { background-position: 200% 0; }
        100% { background-position: -200% 0; }
      }
    `}
  </style>
);

// Component chính bao gồm animation
const ImageComponentWithAnimation = (props) => (
  <>
    <AnimationStyles />
    <ImageComponent {...props} />
  </>
);

export default ImageComponentWithAnimation;

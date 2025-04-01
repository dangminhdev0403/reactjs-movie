import anime from "animejs/lib/anime.es.js";
import React, { useEffect } from "react";
import styled from "styled-components";

const LoadingAnimation = () => {
  useEffect(() => {
    // Create particles
    const particlesContainer = document.getElementById("particles");
    for (let i = 0; i < 50; i++) {
      const particle = document.createElement("div");
      particle.className = "particle";
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.opacity = Math.random();
      particlesContainer.appendChild(particle);
    }

    // Animations
    anime({
      targets: ".cube",
      rotateY: [0, 360],
      rotateX: [0, 360],
      duration: 8000,
      easing: "linear",
      loop: true,
    });

    anime({
      targets: ".core",
      scale: [1, 1.5],
      opacity: [0.8, 0.2],
      duration: 1000,
      loop: true,
      direction: "alternate",
      easing: "easeInOutQuad",
    });

    anime({
      targets: ".loading-text",
      opacity: [0.5, 1],
      duration: 800,
      loop: true,
      direction: "alternate",
      easing: "easeInOutQuad",
    });

    anime({
      targets: ".progress",
      width: ["0%", "100%"],
      duration: 2000,
      loop: true,
      easing: "easeInOutQuad",
      direction: "alternate",
    });

    anime({
      targets: ".dots",
      opacity: [0, 1],
      duration: 500,
      loop: true,
      direction: "alternate",
      easing: "easeInOutQuad",
    });
  }, []);

  return (
    <Container>
      <Particles id="particles" />
      <MainContainer>
        <Cube className="cube">
          <CubeFace style={{ transform: "translateZ(100px)" }} />
          <CubeFace style={{ transform: "rotateY(90deg) translateZ(100px)" }} />
          <CubeFace
            style={{ transform: "rotateY(180deg) translateZ(100px)" }}
          />
          <CubeFace
            style={{ transform: "rotateY(-90deg) translateZ(100px)" }}
          />
          <CubeFace style={{ transform: "rotateX(90deg) translateZ(100px)" }} />
          <CubeFace
            style={{ transform: "rotateX(-90deg) translateZ(100px)" }}
          />
        </Cube>

        <Circle size={250} />
        <Circle size={200} $reverse="true" />
        <Circle size={150} />

        <Core className="core" />

        <TextContainer>
          <LoadingText className="loading-text">
            Loading<span className="dots">...</span>
          </LoadingText>
          <ProgressBar>
            <Progress className="progress" />
          </ProgressBar>
        </TextContainer>
      </MainContainer>
    </Container>
  );
};

// Styled components
const Container = styled.div`
  margin: 0;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #000000, #1a1a1a, #000000);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto;
  overflow: hidden;
`;

const Particles = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;

  .particle {
    position: absolute;
    width: 2px;
    height: 2px;
    background: white;
    border-radius: 50%;
    pointer-events: none;
    animation: float ${() => 5 + Math.random() * 10}s linear infinite;
  }
`;

const MainContainer = styled.div`
  position: relative;
  width: 400px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 1000px;
`;

const Cube = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  transform-style: preserve-3d;
`;

const CubeFace = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  border: 2px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(5px);
`;

const Circle = styled.div`
  position: absolute;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border: ${(props) => 6 - props.size / 50}px solid
    rgba(255, 255, 255, ${(props) => props.size / 1250});
  border-radius: 50%;
  animation: rotate3D ${(props) => 6 - props.size / 100}s linear infinite
    ${(props) => (props.reverse ? "reverse" : "")};
`;

const Core = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0) 70%
  );
  border-radius: 50%;
  filter: blur(5px);
`;

const TextContainer = styled.div`
  position: absolute;
  bottom: -80px;
  text-align: center;
`;

const LoadingText = styled.div`
  color: #ffffff;
  font-size: 24px;
  letter-spacing: 5px;
  font-weight: 200;
  text-transform: uppercase;
  text-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
`;

const ProgressBar = styled.div`
  margin-top: 20px;
  width: 200px;
  height: 4px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  overflow: hidden;
  position: relative;
`;

const Progress = styled.div`
  width: 0%;
  height: 100%;
  background: linear-gradient(90deg, #ffffff, rgba(255, 255, 255, 0.5));
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.7);
  border-radius: 4px;
`;

const GlobalStyle = styled.div`
  @keyframes rotate3D {
    0% {
      transform: rotate3d(1, 1, 1, 0deg);
    }
    100% {
      transform: rotate3d(1, 1, 1, 360deg);
    }
  }

  @keyframes float {
    0% {
      transform: translateY(0) translateX(0);
    }
    50% {
      transform: translateY(-100px) translateX(50px);
    }
    100% {
      transform: translateY(-200px) translateX(0);
      opacity: 0;
    }
  }
`;

export default LoadingAnimation;

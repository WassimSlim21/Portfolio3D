import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, useTexture, Environment, MeshReflectorMaterial } from "@react-three/drei";
import MyRoom from "../components/MyRoom.jsx";
import CanvasLoader from "../components/CanvasLoader.jsx";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from '../constants/index.js';
import PowerBI from "../components/PowerBI.jsx";
import PythonLogo from "../components/PythonLogo.jsx";
import ReactLogo from "../components/ReactLogo.jsx";
import HeroCamera from "./HeroCamera.jsx";
import Robot from "../components/Robot.jsx";
import { Leva } from "leva";
import AzureLogo from "../components/AzureLogo.jsx";
import CsharpLogo from "../components/CsharpLogo.jsx";
import Button from "../components/Button.jsx";
import MicrosoftLogo from "../components/MicrosoftLogo.jsx";
import About from "./About.jsx";

const Hero = () => {
    const isSmall = useMediaQuery({ maxWidth: 440 });
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
    const sizes = calculateSizes(isSmall, isMobile, isTablet);

    // State to store robot's position
    const [robotPosition, setRobotPosition] = useState(sizes.robotPosition);

    // Adjust robot position when keyboard keys are pressed
    useEffect(() => {
        const handleKeyDown = (event) => {
            setRobotPosition((prevPosition) => {
                const newPos = [...prevPosition];
                let newDirection = 0;

                // Handle movement keys and update position
                if (event.key === 'ArrowUp') {
                    newPos[2] -= 0.2;  // Move forward
                    newDirection = 0;
                }
                if (event.key === 'ArrowDown') {
                    newPos[2] += 0.2;  // Move backward
                    newDirection = Math.PI;
                }
                if (event.key === 'ArrowLeft') {
                    newPos[0] -= 0.2;  // Move left
                    newDirection = Math.PI / 2;
                }
                if (event.key === 'ArrowRight') {
                    newPos[0] += 0.2;  // Move right
                    newDirection = -Math.PI / 2;
                }

                setRobotPosition(newPos);  // Update position
                return newPos;
            });
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <section className="min-h-screen w-full flex flex-col relative">
            <div className="text-white w-full mx-auto flex flex-col sm:mt-30 mt-20 c-space">
                <p className="sm-text-3xl text-xl font-medium text-white text-center font-generalsans">
                    Hi, I am Wassim <span className="waving-hand">👋</span>
                </p>
                <h1 className="hero_tag text-gray_gradient">Data Engineer / Analyst</h1>
            </div>
            <div className="w-full h-full absolute insert-0">
                <Canvas className="w-full h-full" shadows>
                    <Suspense fallback={<CanvasLoader />}>
                        <Leva hidden />
                        <PerspectiveCamera makeDefault position={[0, 0, 30]} />
                        <HeroCamera isMobile={isMobile}>
                            <MyRoom
                                position={sizes.deskPosition}
                                rotation={[-5.8, -Math.PI, 0]}
                                scale={sizes.deskScale}
                            />

{/*
                            <Robot position={robotPosition} scale={sizes.robotScale} />
*/}

                        </HeroCamera>
                        <group visible={!isSmall && !isMobile && !isTablet}>
                            <PowerBI position={sizes.powerBIPosition} scale={sizes.powerBIScale} />
                            <PythonLogo position={sizes.pythonPosition} scale={sizes.pythonScale} />
                            <ReactLogo position={sizes.reactLogoPosition} scale={sizes.reactLogoScale} />
                            <AzureLogo position={sizes.azureLogoPosition} scale={sizes.azureLogoScale} />
                            <CsharpLogo position={sizes.csharpLogoPosition} scale={sizes.csharpLogoScale} />
                            <MicrosoftLogo position={sizes.microsoftLogoPosition} scale={sizes.microsoftLogoScale} />
                        </group>
                        {/* Ambient Light for general scene illumination */}
{/*
                        <ambientLight intensity={0.2} />
*/}

                        {/* Directional Light for strong shadows */}
                       {/* <directionalLight
                            position={[-5, 8, -4]}
                            intensity={1}
                            color={"#FFAC61"}
                            castShadow
                            shadow-mapSize-width={4096}  // High-res shadows
                            shadow-mapSize-height={4096}
                            shadow-bias={-0.002}
                        />*/}
                        <ambientLight intensity={1.5} />
                        <directionalLight position={[10, 10, 10]} intensity={0.5} />
                        {/* Point Light for reflections */}
                        <pointLight position={[5, -6, 5]} intensity={2} color={"#FFAC61"} />

                        {/* Soft Spotlight for a glow effect */}
                        <spotLight
                            position={[10, 15, 10]}
                            angle={0.3}
                            intensity={1.2}
                            penumbra={0.5}
                            castShadow
                        />

                    </Suspense>
                </Canvas>
                <About/>
            </div>
            <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
                <a href="#contact" className="w-fit">
                    <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
                </a>
            </div>
        </section>
    );
};

export default Hero;
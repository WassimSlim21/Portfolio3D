import React, {Suspense, useEffect, useState} from 'react'
import {Canvas} from "@react-three/fiber";
import {PerspectiveCamera, useTexture} from "@react-three/drei";
import MyRoom from "../components/MyRoom.jsx";
import CanvasLoader from "../components/CanvasLoader.jsx";
import {useMediaQuery} from "react-responsive";
import { calculateSizes } from '../constants/index.js';
import PowerBI from "../components/PowerBI.jsx";
import AzureSynapseLogo from "../components/AzureSynapseLogo.jsx";
import PythonLogo from "../components/PythonLogo.jsx";
import ReactLogo from "../components/ReactLogo.jsx";
import HeroCamera from "./HeroCamera.jsx";
import Robot from "../components/Robot.jsx";
import {Leva} from "leva";
import AzureLogo from "../components/AzureLogo.jsx";
import CsharpLogo from "../components/CsharpLogo.jsx";
import Button from "../components/Button.jsx";


const Hero = () => {

    const isSmall = useMediaQuery({ maxWidth: 440 });
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
    const sizes = calculateSizes(isSmall, isMobile, isTablet);
    const [robotPosition, setRobotPosition] = useState(sizes.robotPosition);

    useEffect(() => {
        const handleKeyDown = (event) => {
            setRobotPosition((prevPos) => {
                let [x, y, z] = prevPos;
                const speed = 0.5;

                switch (event.key) {
                    case "ArrowUp":
                        z -= speed;
                        break;
                    case "ArrowDown":
                        z += speed;
                        break;
                    case "ArrowLeft":
                        x -= speed;
                        break;
                    case "ArrowRight":
                        x += speed;
                        break;
                    default:
                        return prevPos;
                }

                return [x, y, z];
            });
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);


    return (
        <section className="min-h-screen w-full flex flex-col relative">
            <div className="text-white w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space">
                <p className="sm-text-3xl text-xl font-medium text-white text-center font-generalsans">
                    Hi, I am Wassim
                    <span className="waving-hand">👋</span>
                </p>
                <h1 className="hero_tag text-gray_gradient">Data Engineer / Analyst</h1>
            </div>
            <div className="w-full h-full absolute insert-0">

                <Canvas className="w-full h-full">
                    <Suspense fallback={<CanvasLoader />}>
                        <Leva hidden />
                    <PerspectiveCamera makeDefault position={[0,0, 30]}    />
                        <HeroCamera isMobile={isMobile}>
                        <MyRoom
                        position={sizes.deskPosition}
                        rotation={[-5.8, -Math.PI, 0]}
                            scale={sizes.deskScale}

                    />

                            <Robot position={robotPosition} scale={sizes.robotScale} />

                        </HeroCamera>

                        <group>
                            <PowerBI position={sizes.powerBIPosition} scale={sizes.powerBIScale}/>

                            <PythonLogo position={sizes.pythonPosition} scale={sizes.pythonScale} />
                            <ReactLogo position={sizes.reactLogoPosition} scale={sizes.reactLogoScale} />
                            <AzureLogo position={sizes.azureLogoPosition} scale={sizes.azureLogoScale} />
                            <CsharpLogo position={sizes.csharpLogoPosition} scale={sizes.csharpLogoScale} />

                        </group>

                        <ambientLight intensity={1.5} />
                        <directionalLight position={[10, 10, 10]} intensity={1.5} />
                    </Suspense>
                </Canvas>
            </div>
            <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
                <a href="#contact" className="w-fit">
                    <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />

                </a>

            </div>
        </section>
    )
}
export default Hero

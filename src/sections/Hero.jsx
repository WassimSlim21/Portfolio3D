import React, {Suspense} from 'react'
import {Canvas} from "@react-three/fiber";
import {PerspectiveCamera} from "@react-three/drei";
import MyRoom from "../components/MyRoom.jsx";
import CanvasLoader from "../components/CanvasLoader.jsx";
import {useMediaQuery} from "react-responsive";
import { calculateSizes } from '../constants/index.js';
import PowerBI from "../components/PowerBI.jsx";
import AzureSynapseLogo from "../components/AzureSynapseLogo.jsx";
import PythonLogo from "../components/PythonLogo.jsx";
import MicrosoftLogo from "../components/MicrosoftLogo.jsx";
import ReactLogo from "../components/ReactLogo.jsx";
import HeroCamera from "./HeroCamera.jsx";


const Hero = () => {

    const isSmall = useMediaQuery({ maxWidth: 440 });
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
    const sizes = calculateSizes(isSmall, isMobile, isTablet);


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
                    <PerspectiveCamera makeDefault position={[0,0, 30]}    />
                        <HeroCamera isMobile={isMobile}>
                        <MyRoom
                        position={sizes.deskPosition}
                        rotation={[-5.8, -Math.PI, 0]}
                            scale={sizes.deskScale}

                    />
                        </HeroCamera>

                        <group>
                            <PowerBI position={sizes.powerBIPosition} scale={sizes.powerBIScale}/>

                            <PythonLogo position={sizes.pythonPosition} scale={sizes.pythonScale} />
                            <AzureSynapseLogo position={sizes.azureSynapsePosition} scale={sizes.azureSynapseScale} />
                            <ReactLogo position={sizes.reactLogoPosition} scale={sizes.reactLogoScale} />

                        </group>

                        <ambientLight intensity={1.5} />
                        <directionalLight position={[10, 10, 10]} intensity={0.5} />
                    </Suspense>
                </Canvas>

            </div>
        </section>
    )
}
export default Hero

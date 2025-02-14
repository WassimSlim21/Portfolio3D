import React, {Suspense, useState} from 'react'
import Button from "../components/Button.jsx";
import GlobeWithRxJS from "../components/GlobeWithRxJS.jsx";
import {Canvas} from "@react-three/fiber";
import CanvasLoader from "../components/CanvasLoader.jsx";
import {Leva} from "leva";
import {PerspectiveCamera} from "@react-three/drei";
import HeroCamera from "./HeroCamera.jsx";
import MyRoom from "../components/MyRoom.jsx";

import {useMediaQuery} from "react-responsive";
import {calculateSizes} from "../constants/index.js";
import Robot from "../components/Robot.jsx";

const About = () => {

    const isSmall = useMediaQuery({ maxWidth: 440 });
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
    const sizes = calculateSizes(isSmall, isMobile, isTablet);

    const [robotPosition, setRobotPosition] = useState(sizes.robotPosition);

    const [hasCopied, setHasCopied] = useState(false);
    const handleCopy = () => {
        navigator.clipboard.writeText(' wassimslim18@gmail.com');
        setHasCopied(true);

        setTimeout(() => {
            setHasCopied(false);
        }, 2000);
    };

    return (
        <section className="c-space my-20">
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">

            <div className="col-span-1 xl:row-span-3">
                <div className="grid-container">
                    <img src="assets/Me/wassim.png" alt="grid21" className="w-full sm:h-[276px] h-fit object-contain" />

                    <div>
                        <p className="grid-headtext">Hi, I’m Wassim SLIM</p>
                        <p className="grid-subtext">
                            As a Data Engineer and Analyst, I specialize in building scalable data pipelines,
                            optimizing ETL workflows, and converting raw data into actionable insights.
                        </p>
                    </div>
                </div>
            </div>
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />

                        <div>
                            <p className="grid-headtext">Tech Stack</p>
                            <p className="grid-subtext">
                                I specialize in BI, full-stack development, and DevOps, bridging the gap between data infrastructure and decision-making.
                                With expertise in data workflows (SSIS, Azure Synapse), Power BI, and QlikView for seamless insights,
                                along with backend technologies (NodeJS, .NET), and DevOps tools (Docker, SonarQube, Jenkins), I create automated, efficient solutions that drive strategic impact.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                            <GlobeWithRxJS scale={sizes.globeLogoScale}/>
                        </div>
                        <div>
                            <p className="grid-headtext">I seamlessly adapt to different time zones and work environments.</p>
                            <p className="grid-subtext">Based in Tunisia, I'm open to hybrid or remote opportunities worldwide,
                                ensuring smooth collaboration across global teams.
                            </p>
                            <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-2 xl:row-span-2">
                    <div className="grid-container">



                        <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

                        <div>
                            <p className="grid-headtext">My Passion for Data</p>
                            <p className="grid-subtext">
                                For me, data and code are like music when everything is in harmony,
                                the result is powerful. I see patterns, structure, and flow in everything I build.
                                I thrive on solving problems, creating efficient solutions,
                                and continuously exploring new technologies to refine my craft.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-1 xl:row-span-2">
                    <div className="grid-container">
                        <img
                            src="assets/grid4.png"
                            alt="grid-4"
                            className="w-full md:h-[120px] sm:h-[276px] h-fit object-cover sm:object-top"
                        />

                        <div className="space-y-2">
                            <p className="grid-subtext text-center">Contact me</p>
                            <div className="copy-container" onClick={handleCopy}>
                                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">wassimslim18@gmail.com</p>
                            </div>
                        </div>
                        <Canvas className="w-full h-full" shadows>
                            <Suspense fallback={<CanvasLoader />}>
                                <Leva hidden />
                                <PerspectiveCamera makeDefault position={[0, 0, 30]} />
                                <HeroCamera isMobile={isMobile}>

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
                                    <Robot position={sizes.robotPosition} scale={sizes.robotScale} />


                                </HeroCamera>

                            </Suspense>
                        </Canvas></div>
                </div>
            </div>
        </section>
    )
}
export default About;

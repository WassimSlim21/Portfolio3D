import React, { useRef } from 'react'
import {Float, useGLTF} from '@react-three/drei'
import {useMediaQuery} from "react-responsive";
import {calculateSizes} from "../constants/index.js";
const MicrosoftLogo = (props) => {
    const isSmall = useMediaQuery({ maxWidth: 440 });
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
    const sizes = calculateSizes(isSmall, isMobile, isTablet);

        const { nodes, materials } = useGLTF('/models/microsoftLogo.glb')
        return (
            <Float floatIntensity={1}>
                {/* Ambient Light for Soft Illumination */}

                {/* Point Light for a Focused Glow on the Logo */}
                <pointLight position={sizes.microsoftLogoPosition} intensity={20} color={"#FFFFFF"} />


            <group {...props} dispose={null}>
                <group position={[-0.059, 0.26, -0.188]} rotation={[-Math.PI / 2, 0, 0]} scale={12}>
                    <group rotation={[Math.PI / 2, 0, 0]}>
                        <group position={[0.02, -0.023, 0.058]} scale={0.001}>
                            <group
                                position={[-161.981, 64.229, 203.577]}
                                rotation={[0, 0, -Math.PI]}
                                scale={[-0.431, -0.431, -0.04]}>
                                <mesh
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Object_6.geometry}
                                    material={materials.material}
                                    position={[65.634, 443.086, 850.925]}
                                    scale={0.635}
                                />
                            </group>
                            <group
                                position={[-225.784, 64.208, 203.577]}
                                rotation={[0, 0, -Math.PI]}
                                scale={[-0.431, -0.431, -0.04]}>
                                <mesh
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Object_8.geometry}
                                    material={materials.material_1}
                                    position={[119.721, 443.105, 850.925]}
                                    scale={0.635}
                                />
                            </group>
                            <group
                                position={[-225.785, -0.766, 203.577]}
                                rotation={[0, 0, -Math.PI]}
                                scale={[-0.431, -0.431, -0.04]}>
                                <mesh
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Object_10.geometry}
                                    material={materials.material_2}
                                    position={[119.722, 498.185, 850.925]}
                                    scale={0.635}
                                />
                            </group>
                            <group
                                position={[-162.042, -0.744, 203.577]}
                                rotation={[0, 0, -Math.PI]}
                                scale={[-0.431, -0.431, -0.04]}>
                                <mesh
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Object_12.geometry}
                                    material={materials.material_3}
                                    position={[65.685, 498.167, 850.925]}
                                    scale={0.635}
                                />
                            </group>
                        </group>
                        <group position={[0.074, 0.003, 0.242]} scale={0.002}>
                            <group position={[-70, 10, 2.5]}>
                                <mesh
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Object_15.geometry}
                                    position={[-10, 75.996, -15]}
                                    scale={0.504}
                                >
                                    <meshStandardMaterial color={"#FFFFFF"} />
                                </mesh>
                            </group>
                        </group>
                    </group>
                </group>
            </group>
            </Float>
        )
    }

    useGLTF.preload('/models/microsoftLogo.glb')

export default MicrosoftLogo

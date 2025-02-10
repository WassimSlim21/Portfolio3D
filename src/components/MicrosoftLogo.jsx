import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
const MicrosoftLogo = (props) => {


        const { nodes, materials } = useGLTF('/models/microsoft.glb')
        return (
            <group {...props} dispose={null}>
                <group position={[-0.059, 0.26, -0.188]} rotation={[-Math.PI / 2, 0, 0]} scale={3.144}>
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
                                    position={[108.87, 568.345, 1059.232]}
                                    scale={2.072}
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
                                    position={[-49.818, 568.292, 1059.232]}
                                    scale={2.072}
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
                                    position={[-49.822, 406.69, 1059.232]}
                                    scale={2.072}
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
                                    position={[108.721, 406.743, 1059.232]}
                                    scale={2.072}
                                />
                            </group>
                        </group>
                        <group position={[0.074, 0.003, 0.242]} scale={0.002}>
                            <group position={[-62.378, -10.815, 7.5]}>
                                <mesh
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Object_15.geometry}
                                    material={materials.material_4}
                                    position={[28.761, 72.943, -17.548]}
                                    scale={2.072}
                                />
                            </group>
                        </group>
                    </group>
                </group>
            </group>
        )
    }

    useGLTF.preload('/models/microsoft.glb')

export default MicrosoftLogo

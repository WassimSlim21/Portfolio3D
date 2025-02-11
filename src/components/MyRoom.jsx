import React, { useRef } from 'react'
import { useGLTF, useTexture } from '@react-three/drei';

const MyRoom = (props) => {

        const { nodes, materials } = useGLTF('/models/Room.glb');
  // const monitorTexture = useTexture('/textures/desk/monitor.png');
   // const screenTexture = useTexture('/textures/desk/screen.png');
     return (

            <group {...props} dispose={null}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.screen_screens_0.geometry}
                    material={materials.screens}

                    >

                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.screen_glass_glass_0.geometry}
                    material={materials['Material.002']}
                >

                </mesh>
                <group
                    position={[-38.371, 73.542, -27.937]}
                    rotation={[-1.603, -0.008, -1.488]}
                    scale={[-3.175, -5.912, -5.814]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Plane.geometry}
                        material={materials['B Buttons.001']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Plane_1.geometry}
                        material={materials['Base Color.001']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Plane_2.geometry}
                        material={materials['Emission Red']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Plane_3.geometry}
                        material={materials['Emissin Cream']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Plane_4.geometry}
                        material={materials['Base Color']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Plane_5.geometry}
                        material={materials['Base Color.004']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Plane_6.geometry}
                        material={materials['button frame']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Plane_7.geometry}
                        material={materials.Screen}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Plane_8.geometry}
                        material={materials['Base Color.002']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Plane_9.geometry}
                        material={materials['Black Hole']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Plane_10.geometry}
                        material={materials.Glass}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Plane_11.geometry}
                        material={materials['L Buttons']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Plane_12.geometry}
                        material={materials['Base Color.003']}
                    />
                </group>
                <group
                    position={[-51.996, 0.303, -54.383]}
                    rotation={[1.597, 0.361, -1.743]}
                    scale={[113.331, 113.33, 113.331]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.GuitarFenderTelecaster_1.geometry}
                        material={materials['Metal.Chrome']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.GuitarFenderTelecaster_2.geometry}
                        material={materials.Strings}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.GuitarFenderTelecaster_3.geometry}
                        material={materials['Guitar.Fender.Telecaster']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.GuitarFenderTelecaster_4.geometry}
                        material={materials['Guitar.Fender.Telecaster.Metalic']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.GuitarFenderTelecaster_5.geometry}
                        material={materials['Plastic.Black']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.GuitarFenderTelecaster_6.geometry}
                        material={materials['Amp.Peavey.Leather']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.GuitarFenderTelecaster_7.geometry}
                        material={materials['Amp.Peavey']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.GuitarFenderTelecaster_8.geometry}
                        material={materials['Plastic.White']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.GuitarFenderTelecaster_9.geometry}
                        material={materials['Guitar.Fender.Stratocaster']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.GuitarFenderTelecaster_10.geometry}
                        material={materials['Guitar.Fender.Stratocaster.Metallic']}
                    />
                </group>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.table_table_mat_0_1.geometry}
                    material={materials.table_mat}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.table_table_mat_0_2.geometry}
                    material={materials.computer_mat}
                >
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.table_table_mat_0_3.geometry}
                    material={materials.server_mat}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.table_table_mat_0_4.geometry}
                    material={materials.vhsPlayer_mat}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.table_table_mat_0_5.geometry}
                    material={materials.stand_mat}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.table_table_mat_0_6.geometry}
                    material={materials.mat_mat}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.table_table_mat_0_7.geometry}
                    material={materials.arm_mat}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.table_table_mat_0_8.geometry}
                    material={materials.tv_mat}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.table_table_mat_0_9.geometry}
                    material={materials.cables_mat}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.table_table_mat_0_10.geometry}
                    material={materials.props_mat}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.table_table_mat_0_11.geometry}
                    material={materials.ground_mat}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.table_table_mat_0_12.geometry}
                    material={materials.key_mat}
                />
            </group>
        )
}
useGLTF.preload('/models/Room.glb')
export default MyRoom;


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
             />
             <mesh
                 castShadow
                 receiveShadow
                 geometry={nodes.screen_glass_glass_0.geometry}
                 material={materials['Material.002']}
             />
             <mesh
                 castShadow
                 receiveShadow
                 geometry={nodes.Object_4_1.geometry}
                 material={materials['Dark_metal.001']}
             />
             <mesh
                 castShadow
                 receiveShadow
                 geometry={nodes['AKAI_LP_03_-_Default_0'].geometry}
                 material={materials['03_-_Default']}
                 position={[-48.885, 74.1, -28.497]}
                 rotation={[-Math.PI / 2, 0, 3.128]}
                 scale={0.083}
             />
             <mesh
                 castShadow
                 receiveShadow
                 geometry={nodes.Object_4.geometry}
                 material={materials['Material.001']}
                 position={[0, 0.003, 0]}
             />
             <mesh
                 castShadow
                 receiveShadow
                 geometry={nodes.Object_7.geometry}
                 material={materials.Dark_marble}
                 position={[-20.035, 78.881, 17.072]}
                 rotation={[2.498, 0.431, -2.89]}
                 scale={2.436}
             />
             <mesh
                 castShadow
                 receiveShadow
                 geometry={nodes.Object_9.geometry}
                 material={materials.Dark_metal}
                 position={[-30.344, 83.748, 10.593]}
                 rotation={[2.498, 0.431, -2.89]}
                 scale={2.436}
             />
             <mesh
                 castShadow
                 receiveShadow
                 geometry={nodes.Object_23.geometry}
                 material={materials['Material.003']}
                 position={[-30.141, 85.187, 10.097]}
                 rotation={[-2.126, 0.236, 2.705]}
                 scale={0.183}
             />
             <mesh
                 castShadow
                 receiveShadow
                 geometry={nodes.Object_21.geometry}
                 material={materials['Dark_metal.001']}
                 position={[-26.456, 80.06, 9.413]}
                 rotation={[Math.PI / 2, 0, 2.036]}
                 scale={[-0.688, 1.238, 5.202]}
             />
             <mesh
                 castShadow
                 receiveShadow
                 geometry={nodes.Object_5001.geometry}
                 material={materials['motu-m2']}
                 position={[54.809, 70.962, -22.213]}
                 rotation={[Math.PI, 0.001, -Math.PI]}
                 scale={123.345}
             />
             <mesh
                 castShadow
                 receiveShadow
                 geometry={nodes.BezierCurve_Auto_03_0.geometry}
                 material={materials.Auto_03}
                 position={[-27.404, 93.609, 32.659]}
                 rotation={[-Math.PI / 2, 0, 3.075]}
                 scale={13.621}
             />
             <mesh
                 castShadow
                 receiveShadow
                 geometry={nodes.Cube_Auto_04_0.geometry}
                 material={materials.Auto_04}
                 position={[-37.03, 103.093, 23.583]}
                 rotation={[-1.2, -0.024, 1.509]}
                 scale={13.621}
             />
             <mesh
                 castShadow
                 receiveShadow
                 geometry={nodes.Cube004_Auto_01_0.geometry}
                 material={materials.Auto_01}
                 position={[-36.884, 92.735, 21.381]}
                 rotation={[-Math.PI / 2, 0, 3.075]}
                 scale={13.621}
             />
             <mesh
                 castShadow
                 receiveShadow
                 geometry={nodes.Cube012_Auto_02_0.geometry}
                 material={materials.Auto_02}
                 position={[-24.368, 92.753, 20.104]}
                 rotation={[-Math.PI / 2, 0, 3.075]}
                 scale={13.621}
             />
             <mesh
                 castShadow
                 receiveShadow
                 geometry={nodes.Table_LP_Table_0.geometry}
                 material={materials.Table}
                 position={[82.188, 52.422, -68.316]}
                 rotation={[-Math.PI / 2, 0, -1.994]}
                 scale={5.248}
             />
             <mesh
                 castShadow
                 receiveShadow
                 geometry={nodes.Object_14.geometry}
                 material={materials.MacBookPro}
                 position={[93.913, 66.413, -60.271]}
                 rotation={[0, -0.423, 0]}
                 scale={92.94}
             />
             <mesh
                 castShadow
                 receiveShadow
                 geometry={nodes.Object_10.geometry}
                 material={materials['Material.010']}
                 position={[106.848, 69.094, -57.281]}
                 rotation={[Math.PI, 0.383, 1.761]}
                 scale={12.038}
             />
             <mesh
                 castShadow
                 receiveShadow
                 geometry={nodes.Object_11001.geometry}
                 material={materials['Material.018']}
                 position={[106.848, 69.094, -57.281]}
                 rotation={[Math.PI, 0.383, 1.761]}
                 scale={12.038}
             />
             <mesh
                 castShadow
                 receiveShadow
                 geometry={nodes.Object_4002.geometry}
                 material={materials['Material.004']}
                 position={[106.848, 69.094, -57.281]}
                 rotation={[Math.PI, 0.383, 1.761]}
                 scale={12.038}
             />
             <mesh
                 castShadow
                 receiveShadow
                 geometry={nodes.Object_5002.geometry}
                 material={materials['Material.005']}
                 position={[106.848, 69.094, -57.281]}
                 rotation={[Math.PI, 0.383, 1.761]}
                 scale={12.038}
             />
             <mesh
                 castShadow
                 receiveShadow
                 geometry={nodes.Object_6.geometry}
                 material={materials['Material.006']}
                 position={[106.848, 69.094, -57.281]}
                 rotation={[Math.PI, 0.383, 1.761]}
                 scale={12.038}
             />
             <mesh
                 castShadow
                 receiveShadow
                 geometry={nodes.Object_7001.geometry}
                 material={materials['Material.007']}
                 position={[106.848, 69.094, -57.281]}
                 rotation={[Math.PI, 0.383, 1.761]}
                 scale={12.038}
             />
             <mesh
                 castShadow
                 receiveShadow
                 geometry={nodes.Object_8.geometry}
                 material={materials['Material.008']}
                 position={[106.848, 69.094, -57.281]}
                 rotation={[Math.PI, 0.383, 1.761]}
                 scale={12.038}
             />
             <mesh
                 castShadow
                 receiveShadow
                 geometry={nodes.Object_9001.geometry}
                 material={materials['Material.009']}
                 position={[106.848, 69.094, -57.281]}
                 rotation={[Math.PI, 0.383, 1.761]}
                 scale={12.038}
             />
             <mesh
                 castShadow
                 receiveShadow
                 geometry={nodes.Object_13001.geometry}
                 material={materials['Material.011']}
                 position={[93.465, 67.939, -62.674]}
                 rotation={[Math.PI, 0.383, -Math.PI]}
                 scale={12.038}
             />
             <mesh
                 castShadow
                 receiveShadow
                 geometry={nodes.Object_14001.geometry}
                 material={materials['Material.012']}
                 position={[93.465, 67.939, -62.674]}
                 rotation={[Math.PI, 0.383, -Math.PI]}
                 scale={12.038}
             />
             <mesh
                 castShadow
                 receiveShadow
                 geometry={nodes.Object_16.geometry}
                 material={materials['Material.014']}
                 position={[93.465, 67.939, -62.674]}
                 rotation={[Math.PI, 0.383, -Math.PI]}
                 scale={12.038}
             />
             <mesh
                 castShadow
                 receiveShadow
                 geometry={nodes.Object_17001.geometry}
                 material={materials['Material.015']}
                 position={[93.465, 67.939, -62.674]}
                 rotation={[Math.PI, 0.383, -Math.PI]}
                 scale={12.038}
             />
             <mesh
                 castShadow
                 receiveShadow
                 geometry={nodes.Object_18.geometry}
                 material={materials['Material.016']}
                 position={[93.465, 67.939, -62.674]}
                 rotation={[Math.PI, 0.383, -Math.PI]}
                 scale={12.038}
             />
             <mesh
                 castShadow
                 receiveShadow
                 geometry={nodes.amp_amblem_low_big_object_0.geometry}
                 material={materials.big_object}
                 position={[-60.391, 21.737, -108.862]}
                 rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                 scale={133.183}
             />
             <mesh
                 castShadow
                 receiveShadow
                 geometry={nodes.amp_backplate_low_frame_mat_0.geometry}
                 material={materials.frame_mat}
                 position={[-73.668, 21.737, -77.964]}
                 rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                 scale={133.183}
             />
             <mesh
                 castShadow
                 receiveShadow
                 geometry={nodes.amp_dial_low_detailed_mat_0.geometry}
                 material={materials.detailed_mat}
                 position={[-60.391, 40.076, -78.3]}
                 rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                 scale={133.183}
             />
             <mesh
                 castShadow
                 receiveShadow
                 geometry={nodes.led_inner_white_additional_0.geometry}
                 material={materials.additional}
                 position={[-60.391, 39.376, -87.568]}
                 rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                 scale={133.183}
             />
             <mesh
                 castShadow
                 receiveShadow
                 geometry={nodes.Object_10001.geometry}
                 material={materials.MetalPartsMaterial}
                 position={[-23.07, 10.939, -10.333]}
                 rotation={[-1.39, -0.407, 1.438]}
                 scale={106.593}
             />
             <mesh
                 castShadow
                 receiveShadow
                 geometry={nodes.Object_2.geometry}
                 material={materials['null']}
                 position={[-23.07, 10.939, -10.333]}
                 rotation={[-1.39, -0.407, 1.438]}
                 scale={106.593}
             />
             <mesh
                 castShadow
                 receiveShadow
                 geometry={nodes.Object_27.geometry}
                 material={materials.StringMaterial}
                 position={[-23.07, 10.939, -10.333]}
                 rotation={[-1.39, -0.407, 1.438]}
                 scale={106.593}
             />
             <mesh
                 castShadow
                 receiveShadow
                 geometry={nodes.Object_3.geometry}
                 material={materials.BodyMaterial}
                 position={[-23.07, 10.939, -10.333]}
                 rotation={[-1.39, -0.407, 1.438]}
                 scale={106.593}
             />
             <mesh
                 castShadow
                 receiveShadow
                 geometry={nodes.Object_30.geometry}
                 material={materials.NeckMaterial}
                 position={[-23.07, 10.939, -10.333]}
                 rotation={[-1.39, -0.407, 1.438]}
                 scale={106.593}
             />
             <mesh
                 castShadow
                 receiveShadow
                 geometry={nodes['cables__cables+_0'].geometry}
                 material={materials.cables}
                 position={[-33.331, 82.978, -9.552]}
                 scale={0.095}
             />
             <mesh
                 castShadow
                 receiveShadow
                 geometry={nodes.driverL_driverL_0.geometry}
                 material={materials.driverL}
                 position={[-34.643, 86.969, -5.631]}
                 scale={0.095}
             />
             <mesh
                 castShadow
                 receiveShadow
                 geometry={nodes.driverR_driverR_0.geometry}
                 material={materials.driverR}
                 position={[-26.93, 87.338, -5.631]}
                 scale={0.095}
             />
             <mesh
                 castShadow
                 receiveShadow
                 geometry={nodes.header_header_0.geometry}
                 material={materials.header}
                 position={[-30.787, 97.404, -5.678]}
                 scale={0.095}
             />
             <mesh
                 castShadow
                 receiveShadow
                 geometry={nodes.stand_stand_0.geometry}
                 material={materials.stand}
                 position={[-30.785, 84.883, -5.636]}
                 scale={0.095}
             />
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
             />
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
             <ambientLight intensity={0.1} />
             <directionalLight
                 position={[2, 8, -4]} // Slightly adjust for a softer angle
                 intensity={2}
                 color={"#FFAC61"}
                 castShadow

                 shadow-bias={-0.002} // Reduces sharp edges on shadows
             />

         </group>

        )
}
useGLTF.preload('/models/Room.glb')
export default MyRoom;


import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const PythonLogo = (props) =>
{
    const pythonRef = useRef();
    const { nodes, materials } = useGLTF('/models/python_programming_language.glb')

    useGSAP(() => {
       /* gsap.to(pythonRef.current.position, {
            y: pythonRef.current.position.y + 0.5,
            duration: 1.5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
*/
        gsap.to(pythonRef.current.rotation, {
            x: Math.PI * 2, // Full rotation on X-axis
            duration: 3,
            repeat: -1,
            ease: "power1.inOut"
        });
    });

    return (
    <group ref={pythonRef} {...props} dispose={null}>
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_4.geometry}
            material={materials.material}
            position={[-0.002, 0, 0]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={2.501}
        />
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_6.geometry}
            material={materials['.001']}
            position={[-0.002, 0, 0]}
            rotation={[-Math.PI / 2, 0, -Math.PI]}
            scale={2.501}
        />
    </group>
)
}

useGLTF.preload('/models/python_programming_language.glb')


export default PythonLogo

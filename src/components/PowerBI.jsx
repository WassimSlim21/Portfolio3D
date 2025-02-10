import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const PowerBi = (props) => {
    const powerBIRef = useRef();
    const { nodes, materials } = useGLTF('/models/PowerBi.glb');

    useGSAP(() => {
        gsap.to(powerBIRef.current.position, {
            y: powerBIRef.current.position.y + 0.5,
            duration: 1.5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });

        gsap.to(powerBIRef.current.rotation, {
            y: Math.PI * 2, // Full rotation on X-axis
            duration: 2,
            repeat: -1,
            ease: "power1.inOut"
        });
    });

    return (
        <group ref={powerBIRef} {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube.geometry}
                material={materials['Material.003']}
                position={[1.327, 0.991, -0.482]}
                scale={[0.845, 2.519, 0.458]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube001.geometry}
                material={materials['Material.002']}
                position={[0.126, 0.438, -0.015]}
                scale={[0.845, 1.977, 0.458]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube002.geometry}
                material={materials['Material.001']}
                position={[-1.073, -0.075, 0.431]}
                scale={[0.845, 1.465, 0.458]}
            />
        </group>
    );
};

useGLTF.preload('/models/PowerBi.glb');

export default PowerBi;
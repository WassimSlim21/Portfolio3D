import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


const AzureLogo = (props)=> {
    const azureRef = useRef();

    const { nodes, materials } = useGLTF('/models/AzureLogo.glb')
    nodes.Text.material.color.setHex(0xffffff); // Set text color to white
    nodes.Text.material.emissive.setHex(0xaaaaaa); // Add slight glow
    useGSAP(() => {
        gsap.to(azureRef.current.position, {
            y: azureRef.current.position.y + 0.5,
            duration: 1.5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });

        gsap.to(azureRef.current.rotation, {
            y: Math.PI * 2, // Full rotation on X-axis
            duration: 2,
            repeat: -1,
            ease: "power1.inOut"
        });
    });


    return (
        <group ref={azureRef} {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Azure_Feet_for_Azure_Percept.geometry}
                material={materials['Material.004']}
                position={[-0.119, 1.004, -0.5]}
                scale={0.03}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Text.geometry}
                material={nodes.Text.material}
                position={[-2.045, 0.108, -0.622]}
                rotation={[1.569, 0.008, -0.5]}
                scale={1.2}
            />
        </group>
    )
}

useGLTF.preload('/models/AzureLogo.glb')

export default AzureLogo

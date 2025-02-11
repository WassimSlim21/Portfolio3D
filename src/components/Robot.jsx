import React, { useEffect, useState } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const Robot = (props) => {
    const { scene, animations } = useGLTF('/models/robot-draco.glb');
    const { actions } = useAnimations(animations, scene);
    const [position, setPosition] = useState([0, 0, 0]);
    const speed = 0.2;
    const jumpHeight = 1;  // Height for the jump

    useEffect(() => {
        if (actions?.Dance) {
            actions.Dance.play();
        }
        scene.traverse((obj) => {
            if (obj.isMesh) {
                obj.receiveShadow = true;
                obj.castShadow = true;
            }
        });
    }, [actions, scene]);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (actions?.Running) {
                actions.Running.play();
            }

            setPosition((prev) => {
                const newPos = [...prev];

                if (event.key === 'ArrowUp') newPos[2] -= speed;
                if (event.key === 'ArrowDown') newPos[2] += speed;
                if (event.key === 'ArrowLeft') newPos[0] -= speed;
                if (event.key === 'ArrowRight') newPos[0] += speed;

                if (event.key === ' ' && actions?.Jump) {
                    // Trigger the Jump animation
                    actions.Jump.play();

                    // Move the robot upwards to simulate a jump
                    newPos[1] += jumpHeight;

                    setTimeout(() => {
                        // Bring the robot back down after the jump
                        setPosition((prevPos) => {
                            const landedPos = [...prevPos];
                            landedPos[1] -= jumpHeight;
                            actions.Jump.stop();

                            return landedPos;
                        });
                    }, 500); // Jump duration before returning to the ground
                }

                return newPos;
            });
        };

        const handleKeyUp = () => {
            if (actions?.Running) {
                actions.Running.stop();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
        };
    }, [actions]);

    return <primitive object={scene} position={position} {...props} />;
};

// Preload the model for better performance
useGLTF.preload('/models/robot-draco.glb');

export default Robot;
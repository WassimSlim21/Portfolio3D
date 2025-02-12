import React, { useEffect, useState } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants/index.js";

const Robot = (props) => {
    const { scene, animations } = useGLTF('/models/robot-draco.glb');
    const { actions } = useAnimations(animations, scene);
    const isSmall = useMediaQuery({ maxWidth: 440 });
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
    const sizes = calculateSizes(isSmall, isMobile, isTablet);
    const [position, setPosition] = useState(sizes.robotPosition);
    const [direction, setDirection] = useState(0);  // Track facing direction (in radians)
    const speed = 0.2;
    const jumpHeight = 1;  // Height for the jump

    // Helper function to stop current animations
    const stopCurrentAnimations = () => {
        Object.keys(actions).forEach(actionName => {
            const action = actions[actionName];
            action.stop();
        });
    };

    useEffect(() => {
        if (actions?.Dance && actions?.Wave) {
            actions.Wave.play();
            actions.Dance.play();

            // Adjust weight to blend animations smoothly
            actions.Wave.setEffectiveWeight(6.4);
            actions.Dance.setEffectiveWeight(5); // Adjust as needed
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
            setPosition((prev) => {
                const newPos = [...prev];
                let newDirection = direction;

                // Stop the current animation before starting a new one
                stopCurrentAnimations();

                // Handling movement
                if (event.key === 'ArrowUp') {
                    newPos[2] -= speed; // Move forward
                    if (actions?.Running) actions.Running.play();
                    newDirection = Math.PI;  // Face forward
                }
                if (event.key === 'ArrowDown') {
                    newPos[2] += speed; // Move backward
                    if (actions?.Running) actions.Running.play();
                    newDirection = 0;  // Face backward
                }
                if (event.key === 'ArrowLeft') {
                    newPos[0] -= speed; // Move left
                    if (actions?.Walking) actions.Walking.play();
                    newDirection = -Math.PI / 2;  // Face left
                }
                if (event.key === 'ArrowRight') {
                    newPos[0] += speed; // Move right
                    if (actions?.Walking) actions.Walking.play();
                    newDirection = Math.PI / 2;  // Face right
                }

                // Jump animation with space
                if (event.key === ' ' && actions?.Jump) {
                    actions.Jump.play();
                    newPos[1] += jumpHeight; // Move the robot upwards for the jump

                    setTimeout(() => {
                        setPosition((prevPos) => {
                            const landedPos = [...prevPos];
                            landedPos[1] -= jumpHeight;
                            actions.Jump.stop();
                            return landedPos;
                        });
                    }, 500);
                }

                // Animation changes on key press (2 sec duration)
                if (event.key === 't' && actions?.ThumbsUp) {
                    actions.ThumbsUp.play();
                    setTimeout(() => actions.ThumbsUp.stop(), 2000);  // Stop after 2 seconds
                }

                if (event.key === 's' && actions?.Sitting) {
                    actions.Sitting.play();
                    setTimeout(() => actions.Sitting.stop(), 2000);  // Stop after 2 seconds
                }

                if (event.ctrlKey && actions?.Dance) {
                    actions.Dance.play();
                    setTimeout(() => actions.Dance.stop(), 2000);  // Stop after 2 seconds
                }

                if (event.key === 'p' && actions?.Punch) {
                    actions.Punch.play();
                    setTimeout(() => actions.Punch.stop(), 2000);  // Stop after 2 seconds
                }

                if (event.key === 'w' && actions?.Wave) {
                    actions.Wave.play();
                    setTimeout(() => actions.Wave.stop(), 2000);  // Stop after 2 seconds
                }

                if (event.key === 'n' && actions?.No) {
                    actions.No.play();
                    setTimeout(() => actions.No.stop(), 2000);  // Stop after 2 seconds
                }

                if (event.key === 'i' && actions?.Idle) {
                    actions.Idle.play();
                    setTimeout(() => actions.Idle.stop(), 2000);  // Stop after 2 seconds
                }

                if (event.key === 'd' && actions?.Death) {
                    actions.Death.play();
                    setTimeout(() => actions.Death.stop(), 2000);  // Stop after 2 seconds
                }

                // Update the facing direction
                setDirection(newDirection);
                return newPos;
            });
        };

        const handleKeyUp = (event) => {
            // Stop animations when keys are released
            if (event.key === 'ArrowUp' || event.key === 'ArrowDown' || event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
                if (actions?.Running) actions.Running.stop();
                if (actions?.Walking) actions.Walking.stop();
            }

            if (event.key === ' ' && actions?.Jump) {
                actions.Jump.stop();
            }

            if (event.key === 't' && actions?.ThumbsUp) {
                actions.ThumbsUp.stop();
            }

            if (event.key === 's' && actions?.Sitting) {
                actions.Sitting.stop();
            }

            if (event.key === 'w' && actions?.Wave) {
                actions.Wave.stop();
            }

            if (event.key === 'p' && actions?.Punch) {
                actions.Punch.stop();
            }

            if (event.key === 'n' && actions?.No) {
                actions.No.stop();
            }

            if (event.key === 'i' && actions?.Idle) {
                actions.Idle.stop();
            }

            if (event.key === 'd' && actions?.Death) {
                actions.Death.stop();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
        };
    }, [actions, direction]);

    // Use frame to update the robot's rotation based on the direction
    useFrame(() => {
        scene.rotation.y = direction; // Apply rotation to face the correct direction
    });

    return <primitive object={scene} position={position} {...props} />;
};

// Preload the model for better performance
useGLTF.preload('/models/robot-draco.glb');

export default Robot;
import { Plane, useTexture, Box } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from 'react'
import portraitImage from '../../images/Profile_Pic_JDA.jpg'
import Grid from "./Grid";


export default function Portrait() {
    const portraitImageTexture = useTexture(portraitImage)
    const portraitRef = useRef()
    const gravity = -0.001
    let velocity = 0
    let acceleration 

    useFrame(() => {
        console.log(velocity, portraitRef.current.rotation.x);
        velocity += gravity
        portraitRef.current.rotation.x += velocity
        if (portraitRef.current.rotation.x < -1.5) {
            
            velocity += 0.01
        }
        // if (velocity > 0.1) {
        //     velocity += gravity
        // } 
        // if (velocity < -0.1) {
        //     velocity -= gravity
        // }
        //  if (portraitRef.current.rotation.x > 0.6) {
        //     portraitRef.current.rotation.x -= velocity
        //  }
        //  if (portraitRef.current.rotation.x < -0.6) {
        //     portraitRef.current.rotation.x += velocity
        //  }
    })

    return (
        <>
            <group position={[10, 0, 0]} ref={portraitRef} onClick={() => velocity = 0.05}>
                <Grid size={20} />
                <ambientLight />
                <Plane position={[3.3, -4.5, 0]} args={[6.6, 9]}>
                    <meshBasicMaterial map={portraitImageTexture} reflectivity={[1]} />
                </Plane>
                <Box position={[3.3, -4.5, -0.251]} args={[6.6, 9, 0.5]}>
                    <meshNormalMaterial />
                </Box>
            </group>
        </>
    )
}
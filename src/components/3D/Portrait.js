import { Plane, useTexture, Box } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useEffect } from 'react'
import portraitImage from '../../images/Profile_Pic_JDA.jpg'
import Grid from "./Grid";




export default function Portrait({posX, posY, posZ}) {
    const portraitImageTexture = useTexture(portraitImage)
    const portraitRef = useRef()
    let gravity = -0.005
    let velocity = 0
    let energy = 0

    useFrame(() => {
        velocity += gravity
        portraitRef.current.rotation.x += velocity
        if (portraitRef.current.rotation.x < 0) {
            velocity = 0.1 * energy
            energy -= 0.1
        }
        if (energy < 0) {
            portraitRef.current.rotation.x = 0
        }
        portraitRef.current.rotation.y = window.scrollY / 200
    })


    const bouncePortrait = () => {
        velocity = 0.15;
        energy = .5
    }

    useEffect(() => {
        portraitRef.current.visible = false
        bouncePortrait()
        setTimeout(() => { portraitRef.current.visible = true}, 1000)
        
    }, [])

    useEffect(() => {
        // console.log(window.scrollY);
    }, [window])

    return (
        <>
            <group position={[posX, posY, posZ]} ref={portraitRef} onClick={bouncePortrait}>
                {/* <Grid size={20} /> */}
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
import { Box, Plane } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useRef, useEffect } from 'react'
import Grid from "./Grid"

export default function IndustrialDesignCollection() {

    const groupRef = useRef()
    const smartphoneRef = useRef()


    function Headphone() {
        return (
            <group rotation={[0, 0, 0]} >
                <Box position={[0, 0, 5]} >
                    <meshNormalMaterial />
                </Box>
            </group>
        )
    }

    function Smartphone() {
        return (
            <Box position={[4.33, 0, -2.5]} rotation={[0, -1, 0]} ref={smartphoneRef}>
                {/* <Grid size={5} /> */}
                <meshNormalMaterial />
            </Box>
        )
    }

    function Sextoy() {

        return (
            <group>
                <Box position={[-4.33, 0, -2.5]} rotation={[0, 1, 0]}>
                    <meshNormalMaterial />
                </Box>
            </group>
        )
    }

    const bkwd = 0.00015
    const fwd = -0.00015
    let direction = true
    let gravity = -0.001
    // let velocity = 0.01
    let speedSwitch = true
    // console.log(speedSwitch);



    let velocity = 0.001
    let accelleration = 0.05
    let width = 0;

    function move() {

        
        const id = setInterval(frame, 29.75);
        function frame() {
            if (width > 20) {
                velocity -= accelleration
                width += velocity;
            } else {
                velocity += accelleration
                width += velocity;
            }
        }
    }

    move()

    useFrame(() => {
// console.log(width.toFixed(2));
        // velocity += gravity
        groupRef.current.rotation.y += width / 1000
        // console.log(velocity);
        // if ((groupRef.current.rotation.y % 12).toFixed(1) == 0) {
        //     velocity = 0.01
        // }
        // if ((groupRef.current.rotation.y % 13).toFixed(1) == 0) {
        //     velocity = 0.05  
        // }
        // setTimeout(() => {console.log('0.1'); velocity = 0.1},10000)
        // setTimeout(() => {console.log('0.05'); velocity = 0.05},5000)


        // if ((smartphoneRef.current.rotation.z % 0.05).toFixed(4) == 0) {
        //     // console.log('++++++++++++++++++++++++++++++++++')
        //     direction = !direction
        // }
        // if (direction) {
        //     smartphoneRef.current.rotation.x -= fwd
        //     smartphoneRef.current.rotation.z -= fwd
        // } else {
        //     smartphoneRef.current.rotation.x -= bkwd
        //     smartphoneRef.current.rotation.z -= bkwd
        // }

        // if (direction) {
        //     smartphoneRef.current.rotation.x -= fwd
        //     smartphoneRef.current.rotation.z -= fwd
        // } else {
        //     smartphoneRef.current.rotation.x -= bkwd
        //     smartphoneRef.current.rotation.z -= bkwd
        // }
        // smartphoneRef.current.rotation.x -= 0.01
        // smartphoneRef.current.rotation.y -= 0.01
        // console.log(direction, smartphoneRef.current.rotation.x.toFixed(1), smartphoneRef.current.rotation.z.toFixed(1));
        // console.log((smartphoneRef.current.rotation.x % 1.5).toFixed(2));
        // smartphoneRef.current.rotation.z -= 0.01

    })

    return (
        <group ref={groupRef} rotation={[0.3, 0, 0.3]} position={[0, -10, 0]}>
            {/* <Grid size={20} /> */}
            <Headphone />
            <Smartphone />
            <Sextoy />
        </group>
    )
}
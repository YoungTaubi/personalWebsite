import { Canvas, useFrame } from '@react-three/fiber'
import { ScrollControls, useScroll, PerspectiveCamera, OrbitControls, Box, ambientLight } from '@react-three/drei'
import React, { useRef, useState } from 'react'
import { Mesh } from 'three'
import * as THREE from 'three'
import Grid from '../components/3D/Grid'
import Portrait from '../components/3D/Portrait'
import IndustrialDesignCollection from '../components/3D/IndustrialDesinCollection'
import IronHackBatch from '../../src/3D-data/Iron-Hack-Batch'


export default function AboutMe() {

    // function Box() {
    //     const boxRef = useRef()

    //     useFrame(() => {
    //         boxRef.current.rotation.x += 0.05
    //         boxRef.current.rotation.y += 0.02
    //     })

    //     return (
    //         <mesh position={[-5, 0, 0]} ref={boxRef}>
    //             
    //                 <boxGeometry args={[2, 2, 2]} />
    //                 <meshNormalMaterial />
    //             
    //         </mesh>
    //     )
    // }

    function Cube() {
        const boxRef = useRef()



        useFrame(() => {
            //  boxRef.current.rotation.x += 0.05
            if (true) {
                boxRef.current.position.y -= 0.02
                boxRef.current.rotation.y -= 0.02
            }

            //  boxRef.current.rotation.x += 0.05
        })


        return (
            <group position={[-5, 0, 10]} rotation={[0.5, 0, 0]}>
                {/* <Grid size={20} /> */}
                {/* <Box position={[0, 0, 0]}>
                    <meshNormalMaterial />
                </Box> */}
                <Box position={[0, 10, 0]} ref={boxRef}>
                    <meshNormalMaterial />
                </Box>
            </group>
        )
    }





    function MoveCamera() {

        const cameraRef = useRef()

        let cameralookAtX = -5
        let cameralookAtY = 0
        let cameralookAtZ = 0



        useFrame(() => {
            cameraRef.current.position.x = 0
            cameraRef.current.position.y = 0
            cameraRef.current.position.z = 15
            cameraRef.current.rotation.x = 0
            cameraRef.current.lookAt(cameralookAtX,cameralookAtY,cameralookAtZ)

            cameraRef.current.position.y = - window.scrollY / 50
            
            
            
        })

        // console.log(window.scrollY / 10);



        return (
            <>
                <PerspectiveCamera makeDefault
                    ref={cameraRef}
                    fov={[40]}
                />
            </>
        )
    }

    // useFrame((state, delta) => (ref.current.rotation.x += 0.01))

    // window.addEventListener('scroll', MoveCamera)



    return (
        <>
            <div className='aboutMeContainer'>
                <div className='aboutMetextContainer'>
                    <div className='textBlockContainer'>
                        <h3 style={{ color: 'black' }}>About Me</h3>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className='textBlockContainer'>
                        <h3 style={{ color: 'black' }}>Work experience</h3>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className='textBlockContainer'>
                        <h3 style={{ color: 'black' }}>Bla</h3>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>

                <Canvas>
                    <MoveCamera />
                    <OrbitControls />
                    <Portrait 
                        posX={-3}
                        posY={5}
                        posZ={0}
                    />
                    <IndustrialDesignCollection />
                    {/* <IronHackBatch /> */}
                    {/* <MoveCamera /> */}
                    {/* <Grid size={20} /> */}

                    {/* <PerspectiveCamera makeDefault
                        position={[0, 10, 10]}
                    />  */}

                    {/* <Cube /> */}
                    {/* <mesh position={[0, 0, 0]}>
                        <sphereGeometry
                            args={[2, 62, 32]}
                        />
                        <meshNormalMaterial />
                    </mesh> */}
                    {/* <mesh position={[5, 0, 0]}>
                        <boxGeometry
                            args={[2, 2, 2]}
                        />
                        <meshNormalMaterial />
                    </mesh> */}
                </Canvas>
            </div>
        </>

    )
}
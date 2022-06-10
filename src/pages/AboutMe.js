import { Canvas, useFrame } from '@react-three/fiber'
import { ScrollControls, useScroll, PerspectiveCamera, OrbitControls } from '@react-three/drei'
import React, { useRef, useState } from 'react'
import { Mesh, Camera } from 'three'
import * as THREE from 'three'

export default function AboutMe() {

    function Box() {
        const boxRef = useRef()

        useFrame(() => {
            boxRef.current.rotation.x += 0.05
            boxRef.current.rotation.y += 0.02
        })

        return (
            <mesh position={[-5, 0, 0]} ref={boxRef}>
                <boxGeometry args={[2, 2, 2]} />
                <meshNormalMaterial />
            </mesh>
        )

    }


    function MoveCamera() {



        const cameraRef = useRef()

        let cameraX = window.scrollY / 10
        let cameraZ = window.scrollY / 10

        useFrame(() => {
            console.log(cameraRef);
            cameraRef.current.position.x = window.scrollY / 10
            cameraRef.current.position.y = window.scrollY / 3
            cameraRef.current.position.z = window.scrollY / 5
            cameraRef.current.rotation.z = window.scrollY / 100
        })

        // console.log(window.scrollY / 10);



        return (
            <>
                <PerspectiveCamera makeDefault
                    // position={[0, cameraX, cameraZ]}
                    ref={cameraRef}
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
                    {/* <PerspectiveCamera makeDefault
                        position={[0, 10, 10]}
                    />  */}
                    <OrbitControls />
                    <Box />
                    <mesh position={[0, 0, 0]}>
                        <sphereGeometry
                            args={[2, 62, 32]}
                        />
                        <meshNormalMaterial />
                    </mesh>
                    <mesh position={[5, 0, 0]}>
                        <boxGeometry
                            args={[2, 2, 2]}
                        />
                        <meshNormalMaterial />
                    </mesh>
                </Canvas>
            </div>
        </>

    )
}
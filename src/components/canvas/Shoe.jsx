import useStore from '@/helpers/store'
import { A11y } from '@react-three/a11y'
import React, { useRef, Suspense } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame, Canvas } from '@react-three/fiber'

const ShoeComponent = ({ props, route })=> {
    const router = useStore((s) => s.router)
    const group = useRef()
    const { nodes, materials } = useGLTF('/HANIF FINAL GLB from Babylong.glb')
    
    useFrame((state, delta) =>
    group.current
      ? (group.current.rotation.y = group.current.rotation.x += 0.01)
      : null
  )
  
  
  return (
    <A11y
    role='link'
    href={route}
    actionCall={() => {
      router.push(route)
    }}
    >
        <Canvas
            colorManagement
            camera={{ position: [0, 0, 120], fov: 70 }}
        >
            <Suspense fallback={null}>
                <group ref={group} {...props} dispose={null}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.L_Air_J_quarter.geometry}
                        material={nodes.L_Air_J_quarter.material}>
                        <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.L_Air_J_collarstrap_primitive1.geometry}
                        material={nodes.L_Air_J_collarstrap_primitive1.material}
                        />
                        <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.L_Air_J_collarstrap_primitive0.geometry}
                        material={nodes.L_Air_J_collarstrap_primitive0.material}
                        />
                        <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.L_Air_J_heelcounter_primitive1.geometry}
                        material={nodes.L_Air_J_heelcounter_primitive1.material}
                        />
                        <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.L_Air_J_heelcounter_primitive0.geometry}
                        material={nodes.L_Air_J_heelcounter_primitive0.material}
                        />
                        <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.L_Air_J_outsole_primitive1.geometry}
                        material={nodes.L_Air_J_outsole_primitive1.material}
                        />
                        <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Plane005.geometry}
                        material={nodes.Plane005.material}
                        />
                        <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.L_Air_J_outsole_primitive0.geometry}
                        material={materials.midsole}
                        />
                        <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube003.geometry}
                        material={materials['aj1 stitch a']}
                        />
                        <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.L_Air_J_swoosh_primitive1.geometry}
                        material={nodes.L_Air_J_swoosh_primitive1.material}
                        />
                        <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.L_Air_J_swoosh_primitive0.geometry}
                        material={nodes.L_Air_J_swoosh_primitive0.material}
                        />
                        <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Plane013.geometry}
                        material={nodes.Plane013.material}
                        />
                        <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.L_Air_J_collar.geometry}
                        material={nodes.L_Air_J_collar.material}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.L_Air_J_Linning.geometry}
                            material={materials['aj1 linning']}>
                            <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.L_Air_J_Linning001.geometry}
                            material={nodes.L_Air_J_Linning001.material}>
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.L_Air_J_insole.geometry}
                                material={nodes.L_Air_J_insole.material}
                            />
                            </mesh>
                        </mesh>
                        </mesh>
                        <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.L_Air_J_facing000.geometry}
                        material={nodes.L_Air_J_facing000.material}
                        />
                        <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.L_Air_J_facing009.geometry}
                        material={nodes.L_Air_J_facing009.material}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.L_Air_J_toeboxvamp_primitive1.geometry}
                            material={nodes.L_Air_J_toeboxvamp_primitive1.material}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.L_Air_J_toeboxvamp_primitive0.geometry}
                            material={nodes.L_Air_J_toeboxvamp_primitive0.material}
                        />
                        </mesh>
                        <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.L_Air_J_facing010.geometry}
                        material={nodes.L_Air_J_facing010.material}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.R_Air_j_1_lace.geometry}
                            material={materials['aj1 lace']}
                        />
                        </mesh>
                        <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.L_Air_J_tongue.geometry}
                        material={materials['aj1 tongue']}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.L_Air_J_tonguetag_primitive1.geometry}
                            material={materials['tongue label back side']}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.L_Air_J_tonguetag_primitive0.geometry}
                            material={materials['aj1 tag']}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.L_Air_J_tonguelinning.geometry}
                            material={nodes.L_Air_J_tonguelinning.material}
                        />
                        </mesh>
                    </mesh>
                </group>
            </Suspense>
        </Canvas>
    </A11y>
  )
}

useGLTF.preload('/HANIF FINAL GLB from Babylong.glb')

export default ShoeComponent
import Instructions from '@/components/dom/instructions'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

const Shoe = dynamic(() => import('@/components/canvas/Shoe'), {
  ssr: false,
})

const Page = () => {
  return (
    <>
        <Canvas
            // camera={{ position: [0, 0, 0], zoom: 0, up: [0, 0, 0] }}
        >
            <OrbitControls />
            <ambientLight intensity={0.7}/>
            <Suspense fallback={null}>
                <Shoe r3f/>
            </Suspense>

        </Canvas>
      <Instructions />
    </>
  )
}

export default Page

export async function getStaticProps() {
  return {
    props: {
      title: 'Shoe',
    },
  }
}
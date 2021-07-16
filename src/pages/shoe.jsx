import Instructions from '@/components/dom/instructions'
import dynamic from 'next/dynamic'
// import Shoe from '@/components/canvas/Shoe'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'

const Shoe = dynamic(() => import('@/components/canvas/ShoeOne'), {
  ssr: false,
})

const Page = () => {
  return (
    <>
        <Canvas>
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
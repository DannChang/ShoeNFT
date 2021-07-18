import Instructions from '@/components/dom/instructions'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Html, Sky } from '@react-three/drei'
import NavMenu from '@/components/NavMenu'

const Shoe = dynamic(() => import('@/components/canvas/Shoe'), {
  ssr: false,
})

const Page = () => {
  return (
    <>  
        

        <Canvas
            // camera={{ position: [0, 0, 0], zoom: 0, up: [0, 0, 0] }}
        >            
            {/* <Html fullscreen="true" zIndexRange={[0,0]}>
                <div className='w-screen h-1/2 px-16 py-16 bg-black'
                    style={{
                        width: '100vw',
                        maxWidth: '3840px',
                    }}
                >
                    <div style={{
                        bottom: '200px'
                    }}>
                        <NavMenu eth="2.07"/>
                    </div>
                    
                </div>
                
            </Html> */}
            <Sky 
                sunPosition={[0, 0, 1]}
                inclination={0.25}

            />
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
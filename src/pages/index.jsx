import Artpiece from '@/components/Artpiece'
import Buttons from '@/components/Buttons'
import useStore from '@/helpers/store'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import NavMenu from '@/components/NavMenu'


const Box = dynamic(() => import('@/components/canvas/Box'), {
  ssr: false,
})

const Page = ({ title }) => {
  useStore.setState({ title })
  return (
    <div className="z-auto flex flex-col">
      <div className='z-0 w-screen h-1/2 px-16 py-16 bg-black'
          style={{
            position: 'relative',
            maxWidth: '3840px'
          }}
      >
        <Image 
          src="/icons/bd.svg"
          alt="Bad Decision Co Icon"
          width={25}
          height={25}
        />
        <div className='flex justify-between'>
          <div>
            <Artpiece 
              name='Hardy' 
              artist='Corrina Kopf' 
              usd='4,712'
              eth='1.2'
            />
          </div>
          <div className="mb-12">
            <NavMenu eth='2.03'/>
          </div>
        </div>

        <div className="flex justify-center align-middle"
          style={{
            position: "absolute",
            left: "600px",
            top: "50px"
          }}
        >

            <video id="airjordans" width="350" height="50" autoPlay>
                <source src="/Vertical Social Levitate.mp4" type="video/mp4">
                </source>
            </video>
        </div>


      </div>


      <div className="z-10 w-screen h-1/2 py-10 bg-white "
        style={{
          maxWidth: '3840px'
        }}
      >
        <Buttons />




      </div>
      



    </div>

    
  )
}

export default Page

export async function getStaticProps() {
  return {
    props: {
      title: 'Product View',
    },
  }
}

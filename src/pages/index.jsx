import Artpiece from '@/components/Artpiece'
import Buttons from '@/components/Buttons'
import useStore from '@/helpers/store'
import dynamic from 'next/dynamic'
import Image from 'next/image'


const Box = dynamic(() => import('@/components/canvas/Box'), {
  ssr: false,
})

const Page = ({ title }) => {
  useStore.setState({ title })
  return (
    <div className="z-auto flex flex-col">
        
              
      {/* absolute w-screen max-w-full */}
      <div className='z-0 w-screen h-1/2 px-16 py-16 bg-black'
          style={{
            maxWidth: '3840px'
          }}
      >
        <Image 
          src="/icons/bd.svg"
          alt="Bad Decision Co Icon"
          width={25}
          height={25}
        />

        <Artpiece 
          name='Hardy' 
          artist='Corrina Kopf' 
          usd='4,712'
          eth='1.2'
        />

      </div>
      <Box className="z-30" r3f route='/shoe' />
      {/* <div className="object-none object-bottom">
        <Image
           
          src="/img/levitator.png"
          alt="levitator"
          width={650}
          height={650}
        />
      </div> */}
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

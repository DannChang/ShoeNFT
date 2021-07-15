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
    <div className="flex flex-col">
        <Box r3f route='/box' />      
      {/* absolute w-screen max-w-full */}
      <div className='w-full h-1/2 px-16 py-16'
          style={{
            backgroundColor: 'rgb(30, 30, 30, 1)',
            maxWidth: '1440px',
            maxHeight: '416px'
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

      {/* <div className="object-none object-bottom">
        <Image
           
          src="/img/levitator.png"
          alt="levitator"
          width={650}
          height={650}
        />
      </div> */}
      <div className="w-full h-1/2 py-10 bg-white ">
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

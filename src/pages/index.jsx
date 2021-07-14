import Artpiece from '@/components/Artpiece'
import useStore from '@/helpers/store'
import dynamic from 'next/dynamic'
import Image from 'next/image'


const Box = dynamic(() => import('@/components/canvas/Box'), {
  ssr: false,
})

const Page = ({ title }) => {
  useStore.setState({ title })
  return (
    <div>      

      <div className='absolute w-screen max-w-full  px-16 py-16 shadow-xl left-1/2 h-1/2 transform -translate-x-1/2'
          style={{
            backgroundColor: 'rgb(30, 30, 30, 1)',
            maxWidth: '1440px',
            maxHeight: '416px'
          }}
      >
        <Image 
          src="/icons/bd.svg"
          alt="Bad Decision Co Icon"
          width={31}
          height={37}
        />

        <Artpiece 
          name='Hardy' 
          artist='Corrina Kopf' 
          usd='4,712'
          eth='1.2'
        />



      </div>
        <Box r3f route='/box' />
    </div>

    
  )
}

export default Page

export async function getStaticProps() {
  return {
    props: {
      title: 'Not Box',
    },
  }
}

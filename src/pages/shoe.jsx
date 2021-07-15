import Instructions from '@/components/dom/instructions'
import dynamic from 'next/dynamic'

const Shoe = dynamic(() => import('@/components/canvas/Shoe'), {
  ssr: false,
})

const Page = () => {
  return (
    <>
      <Shoe r3f route='/' />
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
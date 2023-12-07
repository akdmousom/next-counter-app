import Image from 'next/image'
import Counter from '@/components/counter'

export default function Home() {
  return (
      <div>

        <h1 className='text-center text-4xl mt-5 font-bold underline mb-5'>The Next Level Counter App</h1>
        <Counter/>
        

      </div>
  )
}

import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'

//import bannerImg from '@/assests/alif.jpg'

const Banner = () => {
    return (
        <div className='bg-amber-100'>
            <div className='px-4 py-8 lg:px-8 grid grid-cols-1 md:grid-cols-2 items-center gap-8'>
                {/* img */}
                <div>
                    {/*<Image src={bannerImg} alt='bannerImg' />*/}                
                        <Image
                        src="https://images.unsplash.com/photo-1753010835622-41014195864a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="alif"
                       width={300}
                       height={600}
                    />

                </div>

                <div className='space-y-4 '>
                    <h4 className='text-sm font-medium text-gray-900'>Technology</h4>
                    <h2 className='text-3xl font-bold'>OpenAI Is Growing Fast and Burning
                        <br /> Through Piles of Money</h2>
                    <p>
                        OpenAI monthly revenue hit us$300 million in August, up 1,700% since
                        the beginning of 2023, and the company expects about $3.7 billion in
                        annual sales this yera, according to finacial documents reviewed by The New York Times
                        <br></br>
                        <br></br>
                        OpenAI estimates that is revenue will balloon to copy1.6 billion
                        next year. OpenAI revenue in Agust more than tripled from a year
                        earlier, according to the documents, and about 350 million people -
                        up from around 100 million in March of this year - used its services
                        each month asa of June.
                    </p>
                    <Button variant='default'>Read More</Button>
                </div>
            </div>
        </div>
    )
}

export default Banner
import React from 'react'
import { StaggerParaOnScroll } from '../../../components/shared/StaggerOnScroll'

const ServiceList = [
    { id: 1, title: 'Digital experience', subTitle: '/website' },
    { id: 2, title: 'Physical experience', subTitle: '/customer experience' },
    { id: 3, title: 'Copywriting', subTitle: '/messaging' },
    { id: 4, title: 'Art direction', subTitle: '/creative direction' },
    { id: 5, title: 'Photography', subTitle: '& videography' },
    { id: 6, title: 'Campaign', subTitle: '' },
]
const Services = () => {
    return (
        <div className='max-w-[75%] mx-auto'>
            <div className='flex justify-between items-center overflow-hidden'>
                <StaggerParaOnScroll className='font-semibold w-1/5'>Here's exactly what we do regarding design</StaggerParaOnScroll>
                <StaggerParaOnScroll className='text-[12rem] leading-tight font-semibold'>services</StaggerParaOnScroll>
            </div>
            <ServiceImageCard />
            {
                ServiceList.map((service, index) => {
                    return <ServiceCard key={index} info={service} />
                })
            }
        </div>
    )
}

export default Services


const ServiceImageCard = () => {
    return <div className='relative border-t-2 border-black'>
        <div className='grid grid-cols-3 gap-4 font-semibold border-b-2 border-black py-4'>
            <div>
                /01
            </div>
            <div className='flex flex-col justify-between gap-4 items-start'>
                <p>Visual Identity</p>
                <p className='w-3/4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, inventore! Quibusdam in asperiores inventore minima dicta natus ad reiciendis quos commodi cum suscipit dolorum, nam omnis aliquid unde nobis quo?</p>
                <a href="#" className='hover:bg-gray-500/10 border-b-2 border-black py-2 duration-300 text-black'>Let's work together</a>
            </div>
            <div className='self-center text-right overflow-hidden'>
                <img src="/images/imac.webp" alt="imac on table" className='max-h-96 w-full object-cover' />
            </div>
        </div>
    </div>
}

const ServiceCard = ({ key, info }) => {
    return <div className='grid grid-cols-3 gap-4 font-semibold border-b-2 border-black py-12'>
        <div>
            <p>/0{info.id + 1}</p>
        </div>
        <div>
            <p>{info.title}</p>
            <p>{info.subTitle}</p>
        </div>
        <div className='text-end self-center'>
            <a href="#" className='hover:bg-gray-500/10 border-b-2 border-black py-2 duration-300 text-black'>More Information</a>
        </div>
    </div>
}
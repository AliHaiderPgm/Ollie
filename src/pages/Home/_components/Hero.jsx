import React from 'react'
import { StaggerLetters, StaggerParagraph, StaggerWords } from '../../../components/shared/Stagger'
import { motion } from 'framer-motion'


const Hero = () => {
    return (
        <div className='relative overflow-hidden max-w-[1500px] mx-auto'>
            <div className='min-h-[calc(100vh_-_56px)] flex items-center relative'>
                <h1 className='text-8xl md:text-9xl lg:text-[10rem] xl:text-[12rem] leading-none font-semibold'>
                    <div className='grid grid-cols-6 grid-rows-2 sm:gap-y-4 relative z-10'>
                        <StaggerParagraph className="col-start-2 sm:col-start-2 col-span-6 sm:col-span-4 text-nowrap">
                            let's talk
                        </StaggerParagraph>
                        <StaggerWords className="text-xs font-medium self-center hidden sm:block">
                            Design is how we communicate ideas, crafting spaces and products that resonate both functionally and emotionally.
                        </StaggerWords>
                        <StaggerLetters className="row-start-2 sm:col-start-2 col-span-6 sm:leading-[10rem] lg:leading-[8rem]">
                            design
                        </StaggerLetters>
                    </div>
                </h1>
            </div>
            <div className='md:w-3/4 absolute top-[60%] sm:top-2/3'>
                <motion.img layoutId='hero-image' transition={{ layout: { duration: 1, ease: 'linear' } }} src="/images/hero-image.jpg" alt="" />
            </div>
        </div>
    )
}

export default Hero
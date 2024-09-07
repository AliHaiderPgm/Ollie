import React from 'react'
import { motion } from 'framer-motion'

const Loader = ({ setLoading }) => {
    return (
        <div className='min-h-lvh mx-auto flex'>
            <div className='relative mx-auto self-center overflow-hidden'>
                <motion.img
                    layoutId='hero-image'
                    width={600}
                    height={400}
                    src="/images/hero-image.jpg"
                    alt="yellow color sofa with picture hanging on wall"
                />
                <motion.div
                    animate={{ y: ['0%', '-15%', '-40%', '-75%', '-100%'] }}
                    transition={{ duration: 2.7, delay: 0.5 }}
                    className='bg-gray-50/55 absolute inset-0'
                    onAnimationComplete={() => setLoading(false)}
                />
            </div >
        </div>
    )
}

export default Loader
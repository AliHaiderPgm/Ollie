import React, { useEffect, useRef } from 'react'
import { letterVariants } from '../constant/letterVariants'
import { useAnimationControls, useInView, motion } from 'framer-motion'

export const StaggerParaOnScroll = ({ children, className }) => {
    const paraRef = useRef()
    const isInView = useInView(paraRef, { once: true, amount: 0.80 })
    const letters = children.split(' ')
    const controls = useAnimationControls()
    useEffect(() => {
        isInView && controls.start('show')
    }, [isInView])
    return (
        <>
            <p ref={paraRef} className={`${className} text-wrap`}>
                {
                    letters.map((letter, i) => {
                        return <span className='overflow-hidden inline-block' key={i}>
                            <motion.span
                                initial="hidden"
                                animate={controls}
                                variants={letterVariants}
                                custom={3}
                                className='inline-block overflow-hidden'
                            >
                                {letter + (letters.length - 1 === i ? '' : '\u00A0')}
                            </motion.span>
                        </span>
                    })
                }
            </p>
        </>
    )
}


export const StaggerWordOnScroll = ({ children, className }) => {
    const paraRef = useRef()
    const isInView = useInView(paraRef, { once: true, amount: 0.80 })
    const controls = useAnimationControls()
    useEffect(() => {
        isInView && controls.start('show')
    }, [isInView])
    return (
        <>
            <p ref={paraRef} className={`${className} text-wrap`}>
                <span className='overflow-hidden inline-block'>
                    <motion.span
                        initial="hidden"
                        animate={controls}
                        variants={letterVariants}
                        custom={2}
                        className='inline-block overflow-hidden'
                    >
                        {children}
                    </motion.span>
                </span>
            </p>
        </>
    )
}
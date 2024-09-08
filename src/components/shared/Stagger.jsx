import React from 'react'
import { motion } from 'framer-motion'
import { letterVariants } from '../constant/letterVariants'


export const StaggerLetters = ({ children, className }) => {
    const lettersArr = children.split('')

    return <div className={`overflow-hidden ${className}`}>
        {
            lettersArr.map((letter, i) => {
                return <motion.span
                    initial="hidden"
                    animate="show"
                    variants={letterVariants}
                    custom={i}
                    className='inline-block'
                    key={i}
                >
                    {letter}
                </motion.span>
            })
        }
    </div>
}

export const StaggerWords = ({ children, className }) => {
    const wordsArr = children.split(' ')
    return <div className={`${className}`}>
        {
            wordsArr.map((word, i) => {
                return <span className='overflow-hidden inline-block' key={i}>
                    <motion.span
                        initial="hidden"
                        animate="show"
                        variants={letterVariants}
                        custom={4}
                        className='inline-block'
                    >
                        {word + (wordsArr.length - 1 === i ? '' : '\u00A0')}
                    </motion.span>
                </span>
            })
        }
    </div>
}

export const StaggerParagraph = ({ children, className }) => {
    const wordsArr = children.split(' ')
    return <div className={`flex flex-col sm:flex-row ${className}`}>
        {
            wordsArr.map((word, i) => {
                const lettersArr = word.split('')
                return <div className='overflow-hidden' key={i}>
                    {
                        lettersArr.map((letter, i, j) => {
                            return <motion.span
                                initial="hidden"
                                animate="show"
                                variants={letterVariants}
                                custom={i}
                                className='inline-block'
                                key={i}
                            >
                                {letter + (j.length === i + 1 ? '\u00A0' : '')}
                            </motion.span>
                        })
                    }
                </div>
            })
        }
    </div>
}
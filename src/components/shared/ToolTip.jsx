import React, { useEffect, useRef } from 'react'
import { delay, motion, useAnimationControls } from 'framer-motion'

const ToolTip = ({ title }) => {
    const tipControls = useAnimationControls()
    const animateTip = async () => {
        await tipControls.start({ opacity: 1, transition: { delay: 1, transition: 0.5 } })
        await tipControls.start({ width: '100%', transition: { duration: 0.5, delay: 0.3 } })
        tipControls.start("visible")
    }
    useEffect(() => { animateTip() }, [])

    const bgVariants = {
        hidden: { opacity: 0, width: '0%' },
    }

    const pVariants = {
        hidden: {
            opacity: 0,
            y: 10,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3,
                delay: 0.2
            }
        },
    }
    return (
        <motion.div
            initial="hidden"
            animate={tipControls}
            variants={bgVariants}
            className='bg-white rounded-full overflow-hidden relative z-[49] px-8 py-4'
        >
            <motion.p
                variants={pVariants}
                className='font-semibold inline-block text-center truncate'
            >
                {title ? title : "Hello world! 🙂"}
            </motion.p>
        </motion.div>
    )
}

export default ToolTip
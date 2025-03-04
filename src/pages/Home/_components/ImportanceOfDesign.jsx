import React, { useEffect } from 'react'
import { StaggerParaOnScroll, StaggerWordOnScroll } from '../../../components/shared/StaggerOnScroll'
import { useInView, motion, useAnimate } from 'framer-motion'
import ToolTip from '../../../components/shared/ToolTip'

const ImportanceOfDesign = () => {
    return (
        <>
            <div className='max-w-[75%] mx-auto px-4'>
                <div className='py-12'>
                    <StaggerParaOnScroll className="text-4xl leading-tight font-medium">
                        Here'll go a small paragraph that talking about why you need design and how we think about it. The list below is what exactly what we do in design for your company. Lorem ipsum dolor sit amet.
                    </StaggerParaOnScroll>
                </div>
                <div className='flex justify-between gap-4 flex-col md:flex-row font-semibold'>
                    <div className='md:max-w-[30%]'>
                        <StaggerParaOnScroll>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde provident vitae necessitatibus sed.
                        </StaggerParaOnScroll>
                    </div>
                    <div className='space-y-8 md:max-w-[60%]'>
                        <StaggerParaOnScroll>
                            Here will go a short paragraph in which we will describe what we as a design company. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis omnis rerum dolorum molestias quaerat ratione architecto, placeat labore? Id, facilis!
                        </StaggerParaOnScroll>
                        {
                            TestParagraphs.map((item, i) => {
                                return <div key={i} className='flex gap-12 max-w-[70%] mx-auto md:mx-p'>
                                    <StaggerWordOnScroll className="oldstyle-nums">
                                        /0{i + 1}
                                    </StaggerWordOnScroll>
                                    <StaggerParaOnScroll>
                                        {item.content}
                                    </StaggerParaOnScroll>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
            <ScrollTriggerImages />
        </>
    )
}

export default ImportanceOfDesign


const TestParagraphs = [
    {
        content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis omnis rerum dolorum!'
    },
    {
        content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis omnis rerum dolorum!'
    },
    {
        content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis omnis rerum dolorum!'
    },
]

// const ScrollTriggerImages = () => {
//     const ref = useRef()
//     const isInView = useInView(ref, { once: true, amount: 0.50 })
//     const controls = useAnimationControls()

//     const sideImageVariants = {
//         hidden: { opacity: 0 },
//         visible: {
//             opacity: 1,
//             transition: {
//                 delay: 0.7,
//                 duration: 1,
//                 ease: 'easeInOut',
//             }
//         },
//     }

//     useEffect(() => {
//         isInView && controls.start('visible')
//     }, [isInView])
//     return <>
//         <div className='grid grid-cols-3 items-center' ref={ref}>
//             <motion.div
//                 initial="hidden"
//                 animate={controls}
//                 variants={sideImageVariants}
//             >
//                 <img src="/images/laptop-on-table.jpg" className='aspect-square object-cover w-3/4' alt="Laptop on table with clock" />
//             </motion.div>
//             <motion.div
//                 initial={{ scale: 1.5, opacity: 0 }}
//                 animate={isInView && { scale: 1, opacity: 1 }}
//                 transition={{ duration: 0.4, delay: 0.3, ease: 'easeInOut' }}
//             >
//                 <img src="/images/convo.jpg" alt="People talking" />
//             </motion.div>
//             <motion.div
//                 initial="hidden"
//                 animate={controls}
//                 variants={sideImageVariants}
//             >
//                 <img src="/images/mac-on-table.jpg" className='aspect-square object-cover w-3/4 ms-auto' alt="People talking" />
//             </motion.div>
//         </div>
//     </>
// }

const ScrollTriggerImages = () => {
    const [scope, animate] = useAnimate()
    const isInView = useInView(scope, { once: true, amount: 0.35 })
    const sequence = [
        [
            '.middle',
            { opacity: [0, 1], scale: [1.5, 1] },
            { duration: 1, ease: [0.32, 0, 0.67, 0] }
        ],
        [
            '.first, .last',
            { opacity: [0, 1] },
            { duration: 1, ease: [0.32, 0, 0.67, 0] }
        ],
    ]
    useEffect(() => {
        if (isInView) {
            animate(sequence)
        }
    }, [isInView, animate])
    return <>
        <div ref={scope} className='grid grid-cols-3 items-center relative'>
            <div>
                <motion.img initial={{ opacity: 0 }} src="/images/laptop-on-table.jpg" className='aspect-square object-cover w-3/4 first' alt="Laptop on table with clock" />
            </div>
            <div>
                <motion.img initial={{ opacity: 0 }} src="/images/convo.jpg" alt="People talking" className='middle' />
            </div>
            <div>
                <motion.img initial={{ opacity: 0 }} src="/images/mac-on-table.jpg" className='aspect-square object-cover w-3/4 ms-auto last' alt="People talking" />
            </div>
            <div className="absolute top-2/3 left-[60%]">
                <ToolTip title="view full 👀" />
            </div>
        </div>
    </>
}
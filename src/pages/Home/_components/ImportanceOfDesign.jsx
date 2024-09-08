import React from 'react'
import { StaggerParaOnScroll, StaggerWordOnScroll } from '../../../components/shared/StaggerOnScroll'

const ImportanceOfDesign = () => {
    return (
        <div className='max-w-[1000px] mx-auto px-4'>
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
                            return <div key={i} className='flex gap-12 max-w-[70%] mx-auto md:mx-px'>
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
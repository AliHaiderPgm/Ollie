import React, { useState } from 'react'
import { NavList } from './_components'
import { motion, useAnimation } from 'framer-motion'
import { useMediaQuery } from 'react-responsive'

const Navbar = () => {
    const isDesktopNav = useMediaQuery({ query: '(min-width: 600px)' })
    return isDesktopNav ? <DesktopNav /> : <MobileNav />
}

export default Navbar

const DesktopNav = () => {
    const [activeTab, setActiveTab] = useState(NavList[0])
    const [hoverTab, setHoverTab] = useState(null)
    return <motion.div
        initial={{ y: '-110%' }}
        animate={{ y: '0%' }}
        transition={{ delay: 0.05, duration: 0.6, ease: 'easeInOut' }}
        className='flex justify-between items-center px-6 py-2 backdrop-blur-lg'
    >
        <a href="#" className='text-2xl font-bold'>Ollie</a>
        <div onMouseLeave={() => setHoverTab(null)} className='flex'>
            {
                NavList.map(item => {
                    return <a className='px-3 py-2 relative text-base' href={item.href} key={item.id} onClick={() => setActiveTab(item)} onMouseEnter={() => setHoverTab(item)}>
                        {item.text}
                        {activeTab.id === item.id ? <motion.div layoutId='underline' transition={{ ease: 'easeInOut' }} className='h-px w-full bg-black absolute bottom-0 left-0' /> : null}
                        {hoverTab === item ? <motion.div layoutId='hover-bg' className='absolute inset-0 -z-10 bg-gray-500/10' /> : null}
                    </a>
                })
            }
        </div>
        <a href="#" className='hover:bg-gray-500/10 underline underline-offset-8 px-3 py-2 duration-300 hidden md:block'>Let's work together</a>
    </motion.div>
}

const MobileNav = () => {
    const [isOpen, setIsOpen] = useState(false)
    const isMobile = useMediaQuery({ query: '(max-width: 400px)' })
    const controls = useAnimation()
    const DrawerVariant = {
        hidden: {
            height: isMobile ? '0%' : 'calc(100vh - 49.33px)',
            width: isMobile ? '100%' : '0%',
            transition: {
                when: 'afterChildren',
                staggerChildren: 0.05,
                staggerDirection: -1,
                duration: 0.3,
            }
        },
        visible: {
            height: 'calc(100vh - 49.33px)',
            width: isMobile ? '100%' : '50%',
            transition: {
                when: 'beforeChildren',
                staggerChildren: 0.1,
                duration: 0.3,
            }
        },
    }
    const DrawerChild = {
        hidden: {
            y: 50,
            opacity: 0,
        },
        visible: {
            y: 0,
            opacity: 1,
        },
    }

    const handleMenu = () => {
        controls.start(isOpen ? 'hidden' : 'visible')
        setIsOpen(!isOpen)
    }
    return <>
        <div className='flex justify-between px-4 py-2 border relative'>
            <a href="#" className='text-2xl font-bold'>Ollie</a>
            <button
                className='text-2xl'
                onClick={handleMenu}
            >
                {isOpen ? 'x' : '/'}
            </button>
            <motion.div
                initial={{ width: isMobile ? '100%' : '0%', height: isMobile ? '0%' : 'calc(100vh - 49.33px)' }}
                animate={controls}
                variants={DrawerVariant}
                className='absolute right-0 top-full flex flex-col items-center h-[calc(100vh_-_49.33px)] overflow-hidden border backdrop-blur-lg z-50'
            >
                {
                    NavList.map((item) => {
                        return <motion.a
                            initial={{
                                y: 50,
                                opacity: 0,
                            }}
                            variants={DrawerChild}
                            className='px-3 py-2 text-lg focus:underline'
                            href={item.href}
                            key={item.id}
                            onClick={handleMenu}
                        >
                            {item.text}
                        </motion.a>
                    })
                }
            </motion.div>
        </div>
    </>
}
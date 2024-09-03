import React, { useEffect, useState } from 'react'
import Navbar from '../../components/shared/navbar/Navbar'
import Hero from './_components/Hero'
import Loader from '../../components/shared/loader/Loader'
import { AnimatePresence, LayoutGroup } from 'framer-motion'

const Home = () => {
    const [loading, setLoading] = useState(true)
    return <>
        <LayoutGroup>
            {
                loading ? <Loader setLoading={setLoading} /> :
                    <>
                        <Navbar />
                        <Hero />
                    </>
            }
        </LayoutGroup>
    </>
}

export default Home
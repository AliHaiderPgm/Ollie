import React, { useEffect, useState } from 'react'
import Navbar from '../../components/shared/navbar/Navbar'
import Hero from './_components/Hero'
import Loader from '../../components/shared/loader/Loader'
import { AnimatePresence, LayoutGroup } from 'framer-motion'
import ImportanceOfDesign from './_components/ImportanceOfDesign'

const Home = () => {
    const [loading, setLoading] = useState(true)
    return <>
        {/* <LayoutGroup>
            {
                loading ? <Loader setLoading={setLoading} /> :
                    <> */}
        <Navbar />
        <div className='max-w-[1500px] mx-auto space-y-8'>
            <Hero />
            <ImportanceOfDesign />
        </div>
        {/* </>
            }
        </LayoutGroup> */}
    </>
}

export default Home
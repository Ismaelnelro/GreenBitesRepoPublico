import { Business } from "../components/containers"

import Layout from '../components/layout/Layout'
import TopSeller from "../components/ui/topSeller/TopSeller"


import Gallery from "../components/ui/gallery/Gallery"
import Hero from "../components/ui/hero/Hero"



const HomePage = () => {
    return (
        <Layout>
            <Hero />
            <TopSeller />
            <Gallery />
            <Business />
        </Layout>
    )
}

export default HomePage
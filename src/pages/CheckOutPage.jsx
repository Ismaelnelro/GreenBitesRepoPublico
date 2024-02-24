import Checkout from "../components/containers/checkout/Checkout"
import Layout from "../components/layout/Layout"
import TopSeller from "../components/ui/topSeller/TopSeller"

const CheckOutPage = () => {
    return (
        <Layout>
            <TopSeller />
            <Checkout />
            <TopSeller />
        </Layout>
    )
}

export default CheckOutPage
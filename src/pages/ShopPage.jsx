import Products from "../components/containers/products/Products";
import Layout from "../components/layout/Layout";
import TopSeller from "../components/ui/topSeller/TopSeller";

const ShopPage = () => {
    return (
        <Layout>
            <TopSeller />
            <Products />
            <TopSeller />
        </Layout>
    )
}

export default ShopPage;
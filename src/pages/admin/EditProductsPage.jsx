import Products from '../../components/containers/products/Products'
import Layout from '../../components/layout/Layout'
import TopSeller from '../../components/ui/topSeller/TopSeller';

const EditProductsPage = () => {

    const isAdmin = true;

    return (
        <Layout>
            <TopSeller />
            <Products isAdmin={isAdmin} />
        </Layout>
    )
}

export default EditProductsPage;
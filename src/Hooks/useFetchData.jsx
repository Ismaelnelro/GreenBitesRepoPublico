import { useState } from 'react';

const useFetchData = () => {

    // const [isAdminConnected, setIsAdminConnected] = useState(false);
    const [topSellers, setTopSellers] = useState([]);
    const [products, setProducts] = useState([]);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [page, setPage] = useState(1)
    const [hasPrevProducts, setHasPrev] = useState(true);
    const [hasNextProducts, setHasNext] = useState(true);



    const fetchProducts = async () => {
        const productsResponse = await fetch(`http://localhost:3001/products?_page=${page}&_per_page=5`);
        if (!productsResponse.ok) {
            throw new Error('Network response was not ok');
        }
        const productsData = await productsResponse.json();

        /**Buscamos que si se elimina un producto y es el ultimo de una ultima pagina, que la pagina regrese hacia atras */
        if (page > productsData.pages) {
            setPage(productsData.pages)
        }

        setProducts(productsData.data);
        setHasNext(productsData.next !== null)
        setHasPrev(productsData.prev !== null)
    }


    const fetchTopSeller = async () => {
        const topSellersResponse = await fetch('http://localhost:3001/topSellers');
        if (!topSellersResponse.ok) {
            throw new Error('Network response was not ok');
        }
        const topSellersData = await topSellersResponse.json();
        setTopSellers(topSellersData)
    }


    const setPageToFetchProducts = (action = "") => {
        if (hasNextProducts && action === "next") setPage(page + 1)
        if (hasPrevProducts && action === "prev") setPage(page - 1)
    }

    return {
        topSellers, products, loading, error, hasNextProducts, hasPrevProducts, page,
        setPage, setPageToFetchProducts, fetchProducts, fetchTopSeller,
    };
}

export default useFetchData;

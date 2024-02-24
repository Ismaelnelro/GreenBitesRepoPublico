import { useState } from "react"

const useProductsHooks = () => {

    const URLBASE = 'http://localhost:3001/products';

    const [isModalEditActive, setIsModalEditActive] = useState(false);
    const [isModalAddActive, setIsModalAddActive] = useState(false);

    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const [confirm, setConfrim] = useState(null);
    const [loading, setLoading] = useState(false);
    const [idProductToUpdate, setidProductToUpdate] = useState();



    const toggleModals = ({ type = "", id = 0 }) => {
        if (type === "edit") {
            setIsModalEditActive(!isModalEditActive)
            setidProductToUpdate(id)
        }

        if (type === "add") setIsModalAddActive(!isModalAddActive)
    }


    const closeModals = () => {
        setIsModalAddActive(false)
        setIsModalEditActive(false)
        setSuccess(false)
        setError(false)
        setConfrim(null)
    }


    const onDelete = async (productID) => {
        try {
            setLoading(true);
            const result = await fetch(`${URLBASE}/${productID}`, { method: "DELETE" })
            if (!result.ok) throw new Error(result.statusText);

            setTimeout(() => {
                setLoading(false);
                setSuccess("Product eliminado succesfully!");
                setConfrim(null)
            }, 2000);

        } catch (error) {
            console.log(error);
            setError(error)
            setLoading(false);
            setConfrim(null)
        } finally {
            setTimeout(() => {
                setSuccess(null);
                setError(null);
            }, 4000);
        }
    }


    const OnAddNewProduct = async (product) => {

        const newProduct = {
            name: product.name,
            price: Number.parseInt(product.price),
            gramos: Number.parseInt(product.gramos),
            description: product.description,
            topSeller: false
        }

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        };

        try {
            setLoading(true);
            const result = await fetch(URLBASE, requestOptions)
            if (!result.ok) throw new Error(result.statusText);

            setIsModalAddActive(false)
            setTimeout(() => {
                setLoading(false);
                setSuccess("Product created succesfully!");
            }, 4000);
        } catch (error) {
            console.log(error);
            setError(error)
            setLoading(false);
        } finally {
            setTimeout(() => {
                setSuccess(null);
                setError(null);
            }, 6000);
        }
    }


    const OnUpdateProduct = async (updateProduct, productID) => {

        const product = {
            name: updateProduct.name,
            price: Number.parseInt(updateProduct.price),
            gramos: Number.parseInt(updateProduct.gramos),
            description: updateProduct.description,
            topSeller: false
        }


        console.log(product);
        console.log(productID);

        const requestOptions = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        };

        try {
            setLoading(true);
            const URL = `${URLBASE}/${productID}`;
            let result;
            result = await fetch(URL, requestOptions)
            if (!result.ok) throw new Error(result.statusText);

            setIsModalEditActive(false)
            setTimeout(() => {
                setLoading(false);
                setSuccess("Product update succesfully!");
            }, 4000);
        } catch (error) {
            console.log(error);
            setError(error)
            setLoading(false);
        } finally {
            setTimeout(() => {
                setSuccess(null);
                setError(null);
            }, 6000);
        }
    }


    return {
        isModalAddActive,
        isModalEditActive,
        toggleModals,
        onDelete,
        closeModals,
        OnAddNewProduct,
        OnUpdateProduct,
        setConfrim,
        error,
        success,
        loading,
        confirm,
        idProductToUpdate
    }

}

export default useProductsHooks;

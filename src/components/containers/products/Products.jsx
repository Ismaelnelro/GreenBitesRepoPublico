import { BsPlus } from "react-icons/bs";

import useFetchData from "../../../Hooks/useFetchData";
import useCheckAdmin from "../../../Hooks/useCheckAdmin";
import useProductsHooks from "../../../Hooks/useProductsHooks";

import Card from "../../ui/card/Card";
import Confirm from "../../ui/modals/Confirm"
import Modal from "../../ui/modals/Modal";
import Loader from "../../ui/loaders/Loader";

import './products.css';
import { useEffect } from "react";


// const PRODUCTSDATA = [
//     {
//         "id": "1",
//         "name": "Nueces",
//         "image": "ruta/imagen1.jpg",
//         "price": 19.99,
//         "gramos": 100,
//         "description": "Nueces frescas y saludables, ideales para tus recetas favoritas. Disfruta de su sabor único y beneficios para la salud. Las nueces son una excelente fuente de ácidos grasos omega-3 y antioxidantes, contribuyendo a una dieta equilibrada y nutritiva.",
//         "topSeller": true
//       },
//       {
//         "id": "2",
//         "name": "Almendras",
//         "image": "ruta/imagen2.jpg",
//         "price": 29.99,
//         "gramos": 100,
//         "description": "Almendras crujientes y deliciosas, perfectas como snack o para agregar a tus platos. Fuente de energía y nutrientes esenciales. Las almendras son ricas en vitamina E y magnesio, ideales para una dieta equilibrada y saludable.",
//         "topSeller": true
//       },
//       {
//         "id": "3",
//         "name": "Avellanas",
//         "image": "ruta/imagen3.jpg",
//         "price": 39.99,
//         "gramos": 100,
//         "description": "Avellanas frescas y nutritivas, una opción saludable y llena de sabor para cualquier ocasión. Rico en antioxidantes y vitaminas esenciales para tu bienestar. Disfruta de las avellanas como un delicioso complemento en tu dieta diaria.",
//         "topSeller": true
//       },
//       {
//         "id": "4",
//         "name": "Cacahuetes",
//         "image": "ruta/imagen4.jpg",
//         "price": 49.99,
//         "gramos": 100,
//         "description": "Cacahuetes tostados y sabrosos, un clásico snack que nunca pasa de moda. Aporta proteínas y grasas saludables, siendo una excelente opción para satisfacer tus antojos. Los cacahuetes son un alimento versátil y delicioso.",
//         "topSeller": true
//       },
//       {
//         "id": "5",
//         "name": "Pistachos",
//         "image": "ruta/imagen5.jpg",
//         "price": 59.99,
//         "gramos": 100,
//         "description": "Pistachos crujientes y deliciosos, una excelente opción para disfrutar en cualquier momento del día. Beneficiosos para la salud cardiovascular, los pistachos son ricos en antioxidantes y grasas saludables. Disfruta de su sabor único y textura crujiente.",
//         "topSeller": true
//       }
// ]

const Products = () => {

    const { admin } = useCheckAdmin();

    const {
        products, hasNextProducts, hasPrevProducts, page,
        setPageToFetchProducts, fetchProducts,
    } = useFetchData();

    const {
        isModalAddActive, isModalEditActive,
        loading, success, error, confirm, idProductToUpdate,
        onDelete, toggleModals, closeModals, OnAddNewProduct, setConfrim, OnUpdateProduct
    } = useProductsHooks();


    useEffect(() => {
        fetchProducts()
    }, [page, error, success])


    return (
        <main className="products__container">
            {confirm && <Confirm closeModals={closeModals} onDelete={onDelete} confirm={confirm} />}
            {loading && <span className='login__loading'><Loader /></span>}
            {isModalAddActive && <Modal closeModals={closeModals} type="add" OnAddNewProduct={OnAddNewProduct} />}
            {isModalEditActive && <Modal closeModals={closeModals} type="edit" OnUpdateProduct={OnUpdateProduct} idProductToUpdate={idProductToUpdate} />}
            <div className={`popUp__messaje ${success ? "success__messaje-active" : ""}`} onClick={closeModals}>{success}</div>
            < div className={`popUp__messaje ${error ? "error__messaje-active" : ""}`} onClick={closeModals} >{error}</div>

            <div className="products__group">
                <p className="products__title">Mixed nuts:</p>
                {admin && admin?.isConnected && <button className="btn__secondary" onClick={() => toggleModals({ type: "add", id: "" })}><BsPlus />Add new Product</button>}
            </div>

            {
                products.map((data, i) => (
                    <Card key={i}
                        data={data}
                        isAdminConnected={admin?.isConnected}
                        toggleModals={toggleModals}
                        setConfrim={setConfrim}
                    />
                ))
            }

            <div className="products__group">
                <button onClick={() => setPageToFetchProducts("prev")} className={`btn__primary ${!hasPrevProducts ? "btn__disable" : ""} `}>Previus</button>
                <span className="products__title">Page {page}</span>
                <button onClick={() => setPageToFetchProducts("next")} className={`btn__primary  ${!hasNextProducts ? "btn__disable" : ""} `}>Next</button>
            </div>
        </main >
    )
}

export default Products

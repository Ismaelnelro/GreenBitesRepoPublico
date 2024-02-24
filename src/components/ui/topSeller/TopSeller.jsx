import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import { MdOutlineModeEditOutline } from "react-icons/md";
import productExample from '../../../assets/productExample.svg'

import { useEffect } from 'react';

import useFetchData from '../../../Hooks/useFetchData';
import useCheckAdmin from '../../../Hooks/useCheckAdmin';


import './topSeller.css'


// const topSellerData = [
//   { name: "Nueces", price: 23, gramos: 100 },
//   { name: "Nueces", price: 23, gramos: 100 },
//   { name: "Nueces", price: 23, gramos: 100 },
//   { name: "Nueces", price: 23, gramos: 100 },
//   { name: "Nueces", price: 23, gramos: 100 }
// ]


const TopSeller = () => {

  const { topSellers, fetchTopSeller } = useFetchData();
  const { admin } = useCheckAdmin();


  useEffect(() => {
    fetchTopSeller()
  }, [])


  return (<>
    <p className="topSeller__title">Top Sellers:</p>
    <div className="topSeller__container">
      <div className="topSeller__cards">
        {topSellers.map((data, i) => (
          <div key={i}>
            <CardTopSeller data={data} isAdminConnected={admin?.isConnected} />
          </div>
        ))

        }
      </div>
    </div >
  </>
  )
}

export default TopSeller




const CardTopSeller = ({ data, isAdminConnected }) => {

  const { name, price, gramos } = data;

  const OnDelete = () => {
    console.log("Se elimino el producto");
  }

  return (
    <>
      {
        !isAdminConnected ?
          (<div className="card">
            <img className="card__image" src={productExample} alt="product name" />
            <p className="card__text">{name}<span className="card__price">{gramos} gr. ${price}</span></p>
            <Link to="/shop">
              <button className="btn__primary">
                More
              </button>
            </Link>
          </div>)
          :
          (<div className="card">
            {isAdminConnected ? (<button className='card__edit'><MdOutlineModeEditOutline /></button>) : ""}
            <img className="card__image" src={productExample} alt="product name" />
            <p className="card__text">{name}<span className="card__price">100 gr. {price}</span></p>
            <button className="btn__primary" onClick={OnDelete}>Delete</button>
          </div>)
      }
    </>
  );
}



CardTopSeller.propTypes = {
  isAdminConnected: PropTypes.bool,
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    gramos: PropTypes.number.isRequired
  }).isRequired
}

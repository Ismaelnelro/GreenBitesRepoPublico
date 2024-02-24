import React from 'react'
import wallpaper from '../../../assets/wallpaperFull.png';
import imagenEjemplo1 from '../../../assets/img/imagenEjemplar1.svg';
import imagenEjemplo2 from '../../../assets/img/imagenEjemplar2.svg';
import imagenEjemplo3 from '../../../assets/img/imagenEjemplar3.svg';
import imagenEjemplo4 from '../../../assets/img/imagenEjemplar4.svg';
import imagenEjemplo5 from '../../../assets/img/imagenEjemplar5.svg';
import imagenEjemplo6 from '../../../assets/img/imagenEjemplar6.svg';
import imagenEjemplo7 from '../../../assets/img/imagenEjemplar7.svg';
import imagenEjemplo8 from '../../../assets/img/imagenEjemplar8.svg';
import imagenEjemplo9 from '../../../assets/img/imagenEjemplar9.svg';

import './gallery.css'

const Gallery = () => {
    return (
        <>
            <div className="gallery__wallpaper">
                <img className="gallery__imageWallpaper" src={wallpaper} alt="leaves wallpaper" width={1300} />
            </div>

            <div className="gallery__group">
                <img className="gallery__items" src={imagenEjemplo1} alt="leaves wallpaper" width={130} height={130} />
                <img className="gallery__items" src={imagenEjemplo2} alt="leaves wallpaper" width={130} height={130} />
                <img className="gallery__items" src={imagenEjemplo3} alt="leaves wallpaper" width={130} height={130} />
                <img className="gallery__items" src={imagenEjemplo4} alt="leaves wallpaper" width={130} height={130} />
                <img className="gallery__items" src={imagenEjemplo6} alt="leaves wallpaper" width={130} height={130} />
                <img className="gallery__items" src={imagenEjemplo7} alt="leaves wallpaper" width={130} height={130} />
                <img className="gallery__items" src={imagenEjemplo8} alt="leaves wallpaper" width={130} height={130} />
                <img className="gallery__items" src={imagenEjemplo9} alt="leaves wallpaper" width={130} height={130} />
                <img className="gallery__items" src={imagenEjemplo5} alt="leaves wallpaper" width={130} height={130} />
            </div>
        </>
    )
}

export default Gallery
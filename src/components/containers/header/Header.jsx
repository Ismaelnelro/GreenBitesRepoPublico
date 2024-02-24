import Navbar from "../../ui/navbar/Navbar"
import './header.css';


const Header = () => {

  // const { isHomePage, isAboutPage, checkLocation } = useIsLocation()

  // useEffect(() => {
  //   checkLocation()
  // }, [checkLocation])




  return (
    <header className="header__container">

      <Navbar />


      {/* {
        isHomePage && (
          <div className="header__hero">
            <img className="header__image" src={hero} alt="hero image" />
          </div>
        )
      } */}

      {/* {isAboutPage && <TopSeller />} */}
      {/* 
      {isHomePage &&
        (
          <>
            <div className="header__wallpaper">
              <img className="header__imageWallpaper" src={wallpaper} alt="leaves wallpaper" width={1300} />
            </div>

            <div className="header__gallery">
              <img className="header__galleryItems" src={imagenEjemplo1} alt="leaves wallpaper" width={130} height={130} />
              <img className="header__galleryItems" src={imagenEjemplo2} alt="leaves wallpaper" width={130} height={130} />
              <img className="header__galleryItems" src={imagenEjemplo3} alt="leaves wallpaper" width={130} height={130} />
              <img className="header__galleryItems" src={imagenEjemplo4} alt="leaves wallpaper" width={130} height={130} />
              <img className="header__galleryItems" src={imagenEjemplo6} alt="leaves wallpaper" width={130} height={130} />
              <img className="header__galleryItems" src={imagenEjemplo7} alt="leaves wallpaper" width={130} height={130} />
              <img className="header__galleryItems" src={imagenEjemplo8} alt="leaves wallpaper" width={130} height={130} />
              <img className="header__galleryItems" src={imagenEjemplo9} alt="leaves wallpaper" width={130} height={130} />
              <img className="header__galleryItems" src={imagenEjemplo5} alt="leaves wallpaper" width={130} height={130} />
            </div>
          </>
        )
      } */}

    </header>

  )
}

export default Header
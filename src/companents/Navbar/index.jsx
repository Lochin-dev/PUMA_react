import "./index.scss";
import Puma from "../../assets/images/puma.png";



const index = () => {
  return (
    <>
    <header>
        <div className="container">
          <nav className="nav">
            <span className="nav__span"><img src={Puma} alt="puma"/></span>
            <ul className="nav__ul">
              <li className="nav__ul_list">
                <a href="#" className="nav__ul_list--link">
                  Menu
                </a>
              </li>
              <li className="nav__ul_list">
                <a href="#" className="nav__ul_list--link">
                  About
                </a>
              </li>
              <li className="nav__ul_list">
                <a href="#" className="nav__ul_list--link">
                  Feature
                </a>
              </li>
              <li className="nav__ul_list">
                <a href="#" className="nav__ul_list--link">
                  Gallary
                </a>
              </li>
            </ul>
            <button className="nav__btn">Buy Now</button>
           
          </nav>
        </div>
      </header>
    </>
  );
};

export default index;

import "styles/components/Header.scss";
import {FaSearch, FaThList} from 'react-icons/fa';

const Header = ({isOpen, setOpen}) => {
   const open = ()=>{
    setOpen(!isOpen)
   }
    return (
        <nav className="header">
            <a className="header__logo" href="/">
                <h1>YFM</h1>
            </a>
            <ul className="header__menu open">
                <li className="header__item">
                    <input className="header__search" type="search" placeholder='Quick Search'/>
                    <FaSearch className="header__search-icon icon" onClick={open}/>
                </li>
                <li className="header__item">
                    <a className="header__link" href="/">Home</a>
                </li>

                <li className="header__item">
                    <a className="header__link" href="browser__movies">Browser Movies</a>
                    <FaThList className="header__browser-icon icon" />
                </li>
            </ul>
        </nav>
    )
}

export default Header

import { Link } from 'react-router-dom';

function Header() {
    return (
        <>
            <nav>
                <ul>
                    <li><Link to="/">Главная</Link></li>
                    <li><Link to="/about">О сайте</Link></li>
                    <li><Link to="/category">Категории</Link></li>
                </ul>
            </nav>
        </>
    );
}

export default Header;
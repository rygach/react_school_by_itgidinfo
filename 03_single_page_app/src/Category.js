import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Category() {
    let url = useLocation();
    return (
        <>
            <h1>Category</h1>
        <ul>
            <li><Link to={`${url.pathname}/notebook`}>Ноутбуки</Link></li>
            <li><Link to={`${url.pathname}/monitor`}>Мониторы</Link></li>
            <li><Link to={`${url.pathname}/cellphone`}>Телефоны</Link></li>
        </ul>
        </>
    );
}

export default Category;
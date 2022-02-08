import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function CategoryDescription() {
    let { Name } = useParams();
    return (
        <>
            <Link to="/Category">Назад</Link>
            <h1>Category: {Name}</h1>
        </>
    );
}

export default CategoryDescription;
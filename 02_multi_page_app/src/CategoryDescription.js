import { useParams } from 'react-router-dom';

function CategoryDescription() {
    let { Name } = useParams();
    return (
        <>
            <a href="/category">Назад</a>
            <h1>Category: {Name}</h1>
        </>
    );
}

export default CategoryDescription;
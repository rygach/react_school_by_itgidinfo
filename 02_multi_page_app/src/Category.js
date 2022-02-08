function Category(props) {
    let data = props.category;
    return (
        <>
            <h1>Category</h1>
            <a href="/category">Назад</a>
        <ul className='main-navigation'>
            {data.map(item => <li key={item.text}><a href={item.link}>{item.text}</a></li>)}
        </ul>
        {/* <ul>
            <li><a href="/category/notebook">Ноутбуки</a></li>
            <li><a href="/category/monitor">Мониторы</a></li>
            <li><a href="/category/cellphone">Мобильные телефоны</a></li>
        </ul> */}
        </>
    );
}

export default Category;
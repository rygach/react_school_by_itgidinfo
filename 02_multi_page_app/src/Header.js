function Header(props) {
    let data = props.nav;
    return (
        <nav>
            <ul className='main-navigation'>
                {data.map(item => <li key={item.text}><a href={item.link}>{item.text}</a></li>)}
            </ul>
            {/* <ul>
                <li><a href="/">Главная</a></li>
                <li><a href="/about">О сайте</a></li>
                <li><a href="/category">Категории</a></li>
            </ul> */}
        </nav>
    );
}

export default Header;
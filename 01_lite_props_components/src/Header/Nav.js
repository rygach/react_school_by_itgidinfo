function Nav(props) {
    let data = props.nav;
    return (
        <nav>
            NAV_COMP
            <ul className='main-navigation'>
            {data.map(item => <li><a href={item.link}>{item.text}</a></li>)}
            </ul>
        </nav>
    );
}

export default Nav;
import Nav from './Nav';

function Header(props) {
    return (
        <header>
            <h1>HEAD_COMP {props.sitename.site_name}</h1>
            <h2>HEAD_COMP {props.sitename.site_title}</h2>
            <Nav nav = {props.sitename.nav}/>
        </header>
    );
}

export default Header;
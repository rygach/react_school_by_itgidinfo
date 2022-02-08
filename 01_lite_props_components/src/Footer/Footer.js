import Nav from '../Header/Nav';

function Footer(props) {
    return (
        <footer>
            <h3>FOOT_COMP {props.sitename.site_name}</h3>
            <Nav nav = {props.sitename.nav}/>
        </footer>
    );
}

export default Footer;
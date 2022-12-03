import Link from 'next/link';
import navbarCss from './Navbar.module.css'

function NavBar() {
    return (
        <div className={navbarCss.navbar}>
            <div>
                <h2>App Title</h2>
            </div>
            <div>
                <ul className={navbarCss.list}>
                    <Link href='/meal'>
                        <li>Contact Us</li>
                    </Link>
                    <li>About Us</li>
                    <li>More About Us</li>
                    <li>Support Us</li>
                    <li>Report Us</li>
                </ul>
            </div>
        </div>
    );
}

export default NavBar;
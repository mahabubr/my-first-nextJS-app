import footerCss from './Footer.module.css'

function Footer() {
    return (
        <div className={footerCss.footer}>
            <div>
                <h2 className={footerCss.title}>This Is Footer</h2>
            </div>
            <div>
                <ul className={footerCss.list}>
                    <li>Contact Us</li>
                    <li>About Us</li>
                    <li>More About Us</li>
                    <li>Support Us</li>
                    <li>Report Us</li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;
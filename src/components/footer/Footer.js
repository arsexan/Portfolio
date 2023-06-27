import twitter from "./../../img/icons/twitter.svg"
import instagram from "./../../img/icons/instagram.svg"
import github from "./../../img/icons/gitHub.svg"
import vk from "./../../img/icons/vk.svg"

import "./style.css"

export const Footer = () => {
    return(
        <footer className="footer">
        <div className="container">
            <div className="footer__wrapper">
                <ul className="social">
                    <li className="social__item"><a href="#!"><img src={vk} alt="Link" /></a></li>
                    <li className="social__item"><a href="#!"><img src={instagram} alt="Link" /></a></li>
                    <li className="social__item"><a href="#!"><img src={twitter} alt="Link" /></a></li>
                    <li className="social__item"><a href="#!"><img src={github} alt="Link" /></a></li>
                </ul>
                <div className="copyright">
                    <p>© 2023</p>
                </div>
            </div>
        </div>
    </footer>
    )
}
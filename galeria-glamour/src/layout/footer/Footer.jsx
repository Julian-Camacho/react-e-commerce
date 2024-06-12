import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { faInstagram, faSquareFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <footer className="main-footer">
            <section className="footer-section footer-brand">
                <img src="" className="footer-logo" alt="Logo"/>
            </section>
            <section className="footer-section footer-social">
                <a className="footer-social-link" href="h" target="_blank"><FontAwesomeIcon icon={faInstagram} size='2xl' /></a>
                <a className="footer-social-link" href="" target="_blank"><FontAwesomeIcon icon={faSquareFacebook} size="2xl" /></a>
                <a className="footer-social-link" href="" target="_blank"><FontAwesomeIcon icon={faWhatsapp} size="2xl" /></a>
                <a className="footer-social-link" href="" target="_blank"><FontAwesomeIcon icon={faEnvelope} size="2xl" /></a>
            </section>
            <section className="footer-section footer-contact">
                <label className="newsletter">¡Sus!</label>
                <div className="suscribe">
                    <input className="email" type="email" />
                    <button className="btn-newsletter" type="submit"> <FontAwesomeIcon icon={faPaperPlane} /> </button>
                </div>
            </section>
        </footer>
    )
}
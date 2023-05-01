import './footer.css';
import {FaFacebookSquare , FaTwitterSquare , FaInstagram , FaLinkedin} from 'react-icons/fa'
export default function Footer(){
    return(
        <>
        <div className='footer'>
            <div className="footer-logo">Kitabk</div>
            <div className="footer-social">
               <FaTwitterSquare/>
               <FaFacebookSquare/>
               <FaInstagram/>
               <FaLinkedin/>
            </div>
            <div className="copy">
            &copy; {new Date().getFullYear()} - <a href="#">Mohammad Zayed</a> |   All right reserved
            </div>
        </div>
        </>
    )
}
import DHLogo from "/src/images/DH.png";
import facebookIcon from "/src/images/ico-facebook.png";
import instagramIcon from "/src/images/ico-instagram.png";
import whatsappIcon from "/src/images/ico-whatsapp.png";
import tiktokIcon from "/src/images/ico-tiktok.png";

const Footer = () => {
  return (
    <footer>
      <div>
        <p>Powered by</p>
        <img src={DHLogo} alt="DH-logo" />
      </div>
      <div>
        <img src={facebookIcon} alt="facebookIcon" />
        <img src={instagramIcon} alt="instagramIcon" />
        <img src={whatsappIcon} alt="whatsappIcon" />
        <img src={tiktokIcon} alt="tiktokIcon" />
      </div>
    </footer>
  );
};

export default Footer;

import Link from 'next/link';
import logo2 from "../../../public/assets/img/logo-2.png";
import Social from '@/components/data/social';

const SideBar = ({ isOpen, setIsOpen }) => {
	return (
		<>
			<div className={`header__area-menubar-right-sidebar-popup ${isOpen ? 'active' : ''}`}>
				<div className="sidebar-close-btn" onClick={() => setIsOpen(false)}><i className="fal fa-times"></i></div>
				<div className="header__area-menubar-right-sidebar-popup-logo">
					<Link href='/'>
						<img className='logo_one' src={logo2.src} alt="logo" />
					</Link>
				</div>
				<p>Leaders Digital est une agence digitale spécialisée dans le développement web, mobile, le design graphique et le SEO. Nous créons des solutions sur mesure pour améliorer votre visibilité et optimiser vos performances en ligne.</p>
				<div className="header__area-menubar-right-sidebar-popup-contact">
					<h4 className="mb-30">Contactez-nous</h4>
					<div className="header__area-menubar-right-sidebar-popup-contact-item">
						<div className="header__area-menubar-right-sidebar-popup-contact-item-icon">
							<i className="fal fa-phone-alt icon-animation"></i>
						</div>
						<div className="header__area-menubar-right-sidebar-popup-contact-item-content">
							<span>Appelez maintenant</span>
							<h6><Link href="tel:+21627246370">+216 27 246 370</Link></h6>
						</div>
					</div>
					<div className="header__area-menubar-right-sidebar-popup-contact-item">
						<div className="header__area-menubar-right-sidebar-popup-contact-item-icon">
							<i className="fal fa-envelope"></i>
						</div>
						<div className="header__area-menubar-right-sidebar-popup-contact-item-content">
							<span>Email rapide</span>
							<h6><Link href="mailto:contact@leaders-digital.com">contact@leaders-digital.com</Link></h6>
						</div>
					</div>
					<div className="header__area-menubar-right-sidebar-popup-contact-item">
						<div className="header__area-menubar-right-sidebar-popup-contact-item-icon">
							<i className="fal fa-map-marker-alt"></i>
						</div>
						<div className="header__area-menubar-right-sidebar-popup-contact-item-content">
							<span>Adresse du bureau</span>
							<h6><Link href="https://google.com/maps" target="_blank">Cité des Pins, Les berges du lac 2 1053 Tunis, Tunisie</Link></h6>
						</div>
					</div>
				</div>

				<div className="header__area-menubar-right-sidebar-popup-social social__icon">
					<Social />
				</div>
			</div>
			<div className={`sidebar-overlay ${isOpen ? 'show' : ''}`}></div>
		</>
	);
};

export default SideBar;
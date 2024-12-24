import Social from "@/components/data/social";
import Link from "next/link";
import logo from "../../../public/assets/img/logo-2.png";
import ctaBg from "../../../public/assets/img/subscribe/subscribe-one-shape-1.png";
import footerBg from "../../../public/assets/img/shape/footer-two-bg.png";
import servicesData from "@/components/data/services-data";

const FooterOne = () => {
	return (
		<>
			<div className="subscribe__one">
				<div className="container">
					<div
						className="row justify-content-center text-center subscribe__one-content"
						// style={{ backgroundImage: `url(${ctaBg.src})` }}
					>
						<div className="col-xl-7 col-lg-8">
							<div className="subscribe__one-title">
								<h3>Abonnez-vous à notre newsletter</h3>
							</div>
							<form action="#" className="subscribe__one-form">
								<input type="email" placeholder="Entrez votre e-mail" />
								<button className="btn-two" type="submit">
									S'abonner
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>

			<div className="footer__two">
				<img className="footer__two-shape" src={footerBg.src} alt="image" />
				<div className="container">
					<div className="row gy-4 justify-content-between">
						<div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
							<div className="footer__two-widget">
								<div className="footer__two-widget-about">
									<Link href="/"><img src={logo.src} alt="image" /></Link>
									{/* <p>Leaders Digital est une agence digitale spécialisée dans le développement web, mobile, le design graphique et le SEO.</p> */}
									<div className="footer__two-widget-about-location">
										<div className="footer__two-widget-about-location-item">
											<div className="footer__two-widget-about-location-item-icon">
												<i className="flaticon-telephone-call"></i>
											</div>
											<div className="footer__two-widget-about-location-item-info">
												<span>Numéro de téléphone</span>
												<Link href="tel:+21627246380">(+216) 27 246 380</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
							<div className="footer__two-widget ml-85">
						
								<div className="footer__two-widget-solution">
									<ul>
										<li><Link href="services"><i className="far fa-chevron-double-right"></i>Services</Link></li>
										<li><Link href="faq"><i className="far fa-chevron-double-right"></i>FAQ</Link></li>
										<li><Link href="mesprojet"><i className="far fa-chevron-double-right"></i>Portfolio</Link></li>
										<li><Link href="about"><i className="far fa-chevron-double-right"></i>À propos de nous</Link></li>
									</ul>
								</div>
							</div>
						</div>

						<div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
							<div className="footer__two-widget">
								
								{/* <div className="footer__two-widget-solution">
									<ul>
										{servicesData.slice(0, 4).map((data, id) => {
											const words = data.title.split(' ');
											const firstAndSecondWord = words.slice(0, 2).join(' ');
											return (
												<li key={id}>
													<Link href={`/services/${data.id}`}>
														<i className="far fa-chevron-double-right"></i>
														{firstAndSecondWord}
													</Link>
												</li>
											);
										})}
									</ul>
								</div> */}
								<div className="footer__two-widget-solution">
									<ul>
										<li><Link href="contact"><i className="far fa-chevron-double-right"></i>Contact</Link></li>
										<li><Link href="services"><i className="far fa-chevron-double-right"></i>Services</Link></li>
										<li><Link href="contact"><i className="far fa-chevron-double-right"></i>Obtenir un Devis</Link></li>
									
									</ul>
								</div>
							</div>
						</div>

						<div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
							<div className="footer__two-widget">
								
								<div className="footer__two-widget-subscribe">
									<p>Recevez les dernières actualités et articles directement dans votre boîte mail chaque semaine.</p>
									<div className="footer__two-widget-social">
										<Social />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="copyright__one">
					<div className="container">
						<div className="row justify-content-between copyright__one-container-area">
							<div className="col-xl-5 col-lg-6">
								<div className="copyright__one-left">
									<p>© Copyright  {new Date().getFullYear()} | By Leaders Digital</p>
								</div>
							</div>
							<div className="col-xl-5 col-lg-6">
								<div className="copyright__one-right">
									<Link href="/about">Politique de confidentialité</Link>
									<Link href="/contact">Contactez-nous</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

		</>
	);
};

export default FooterOne;
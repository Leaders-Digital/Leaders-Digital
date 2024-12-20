"use client"
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header/header-one";
import BreadCrumb from "../../common/breadcrumb";
import FooterOne from "@/components/layout/footers/footer-one";
import ScrollToTop from "../../common/scroll/scroll-to-top";
import Showcase from "./vitrine";

const SitesVitrine = () => {
    return (
        <>
            <SEO pageTitle='site vitrine' />
            <HeaderOne />
            <BreadCrumb title="Site Vitrine" innerTitle="Des sites vitrines sur mesure" />
           <Showcase />
            <FooterOne />    
            <ScrollToTop />      
        </>
    );
};

export default SitesVitrine;
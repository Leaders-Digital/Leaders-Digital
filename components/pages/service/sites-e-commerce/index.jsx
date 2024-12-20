"use client"
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header/header-one";
import BreadCrumb from "../../common/breadcrumb";
import FooterOne from "@/components/layout/footers/footer-one";
import ScrollToTop from "../../common/scroll/scroll-to-top";
import Commerce from "./ecommerce";

const SitesEcommerce = () => {
    return (
        <>
            <SEO pageTitle='e commerce' />
            <HeaderOne />
            <BreadCrumb title="E-commerce" innerTitle="Développement de sites e-commerce" />
            <Commerce />
            <FooterOne />    
            <ScrollToTop />      
        </>
    );
};

export default SitesEcommerce;
"use client"
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header/header-one";
import BreadCrumb from "../../common/breadcrumb";
import FooterOne from "@/components/layout/footers/footer-one";
import ScrollToTop from "../../common/scroll/scroll-to-top";
import WebMaintenance from "./maintenance-site";

const Editwebsite = () => {
    return (
        <>
            <SEO pageTitle='Maintenance' />
            <HeaderOne />
            <BreadCrumb title="Maintenance" innerTitle="Maintenance et support technique" />
            <WebMaintenance />
            <FooterOne />    
            <ScrollToTop />      
        </>
    );
};

export default Editwebsite;
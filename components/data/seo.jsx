"use client";
import { useEffect } from "react";

const SEO = ({ pageTitle }) => {
  useEffect(() => {
    document.title = pageTitle + " - Leaders Digital - We brand your business";
  }, []);
};

export default SEO;
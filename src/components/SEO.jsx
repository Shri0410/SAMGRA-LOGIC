import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords }) => {
    const defaultTitle = "SAMGRA LOGIC - Strategic Business Consulting & Sustainability Solutions | Samagra";
    const defaultDescription = "SAMGRA LOGIC (also known as Samgra or Samagra Logic) combines purpose with performance, offering expert sustainability, advisory services, market access, governance, reputation management, and advertising solutions to drive business growth.";
    const defaultKeywords = "samgra, SAMGRA, samagra, SAMAGRA, samgra logic, SAMGRA LOGIC, samagra logic, business consulting, sustainability, ESG, advisory services, market access, governance, reputation management, advertising, strategic consulting, India, Global";

    return (
        <Helmet>
            <title>{title || defaultTitle}</title>
            <meta name="description" content={description || defaultDescription} />
            <meta name="keywords" content={keywords || defaultKeywords} />
            <meta property="og:title" content={title || defaultTitle} />
            <meta property="og:description" content={description || defaultDescription} />
            <meta property="twitter:title" content={title || defaultTitle} />
            <meta property="twitter:description" content={description || defaultDescription} />
        </Helmet>
    );
};

export default SEO;

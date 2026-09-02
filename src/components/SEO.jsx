import React from "react";
import { Helmet } from "react-helmet-async";

const SEO = ({ title, description }) => {
    const defaultTitle =
        "SAMGRA LOGIC | Strategic Business Consulting & Sustainability Solutions";

    const defaultDescription =
        "SAMGRA LOGIC is a strategic business consulting company providing sustainability, advisory, market access, governance, reputation management, and advertising solutions.";

    const pageTitle = title || defaultTitle;
    const pageDescription = description || defaultDescription;

    return (
        <Helmet>
            {/* Primary SEO */}
            <title>{pageTitle}</title>

            <meta
                name="description"
                content={pageDescription}
            />

            <meta
                name="robots"
                content="index, follow"
            />

            <link
                rel="canonical"
                href="https://samgralogic.com/"
            />

            {/* Open Graph */}
            <meta
                property="og:type"
                content="website"
            />

            <meta
                property="og:url"
                content="https://samgralogic.com/"
            />

            <meta
                property="og:title"
                content={pageTitle}
            />

            <meta
                property="og:description"
                content={pageDescription}
            />

            <meta
                property="og:image"
                content="https://samgralogic.com/logo.jpg"
            />

            {/* Twitter */}
            <meta
                name="twitter:card"
                content="summary_large_image"
            />

            <meta
                name="twitter:title"
                content={pageTitle}
            />

            <meta
                name="twitter:description"
                content={pageDescription}
            />

            <meta
                name="twitter:image"
                content="https://samgralogic.com/logo.jpg"
            />
        </Helmet>
    );
};

export default SEO;
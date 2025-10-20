import { Head, Link, usePage } from "@inertiajs/react";

export default function AppHead({
    title,
    keywords,
    description,
    canonicalUrl,
    ogImage,
    ogType = "website, software, technology, services",
    twitterCard = "summary_large_image",
    structuredData,
}) {
    const { url } = usePage();
    const currentUrl = canonicalUrl || url;

    return (
        <Head title={title}>
            {/* Basic Meta Tags */}
            <meta name="keywords" content={keywords} />
            <meta name="description" content={description} />

            {/* Open Graph */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={currentUrl} />
            <meta property="og:type" content={ogType} />
            <meta property="og:site_name" content="R-softBD" />

            {ogImage && <meta property="og:image" content={ogImage} />}

            {/* Twitter Card */}
            <meta name="twitter:card" content={twitterCard} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            {ogImage && <meta name="twitter:image" content={ogImage} />}

            {/* Canonical */}
            <Link rel="canonical" href={currentUrl} />

            {/* Structured Data */}
            {structuredData && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(structuredData),
                    }}
                ></script>
            )}
        </Head>
    );
}

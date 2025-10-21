import { Head, usePage } from "@inertiajs/react";

export default function AppHead({
    title,
    keywords,
    description,
    canonicalUrl,
    ogImage,
    ogType = "website",
    twitterCard = "summary_large_image",
    structuredData,
    twitterSite = "@rsoftbd",
    twitterCreator = "@rsoftbd",
}) {
    const { url } = usePage();

    const currentUrl = canonicalUrl || url;

    return (
        <>
            {/* Canonical Link Head-এর বাইরে */}
            <link rel="canonical" href={currentUrl} />

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

                {ogImage && (
                    <>
                        <meta property="og:image" content={ogImage} />
                        <meta property="og:image:width" content="1200" />
                        <meta property="og:image:height" content="630" />
                        <meta property="og:image:alt" content={description} />
                    </>
                )}

                {/* Twitter Card */}
                <meta name="twitter:card" content={twitterCard} />
                <meta name="twitter:site" content={twitterSite} />
                <meta name="twitter:creator" content={twitterCreator} />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                {ogImage && <meta name="twitter:image" content={ogImage} />}

                {/* Structured Data */}
                {structuredData && (
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{
                            __html: JSON.stringify(structuredData),
                        }}
                    />
                )}
            </Head>
        </>
    );
}

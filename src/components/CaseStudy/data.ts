export type CaseStudy = {
    id: string;
    title: string;
    description: string;
    platforms: string[]; // e.g., "Web and Mobile application"
    industry: string; // e.g., "purchasing goods and services"
    themeColor: string; // Background color for the card
    textColor: string;
    buttonColor: string;
    link: string;
    logo: string; // Placeholder or path to logo
    image: string; // Placeholder or path to main image/mockup
};

export const caseStudies: CaseStudy[] = [
    {
        id: "urunner",
        title: "URunner",
        description: "Website and Mobile application for gaining coins through exercise for purchasing goods and services. US based Company",
        platforms: ["Get on Playstore", "Get on Appstore"],
        industry: "Health & Fitness",
        themeColor: "bg-blue-500", // Will need custom hex likely: #1E90FF
        textColor: "text-white",
        buttonColor: "bg-black",
        link: "/case-study/urunner",
        logo: "/images/urunner.svg",
        image: "/images/urunner.png",
    },
    {
        id: "vapzer",
        title: "Vapzer",
        description: "Web and Mobile application for online financial trading and tracking in Forex, Stocks, Shares, Futures, Bonds and so on.",
        platforms: [],
        industry: "Fintech",
        themeColor: "bg-green-700", // Custom hex likely: #008060
        textColor: "text-white",
        buttonColor: "bg-black",
        link: "/case-study/vapzer",
        logo: "/images/vapzer.svg",
        image: "/images/vapzer.png",
    },
    {
        id: "hunter",
        title: "Hunter",
        description: "Web and Mobile application for online financial trading and tracking in Forex, Stocks, Shares, Futures, Bonds and so on.",
        platforms: [],
        industry: "Fintech",
        themeColor: "bg-yellow-700", // Custom hex likely: #8B8000
        textColor: "text-white",
        buttonColor: "bg-black",
        link: "/case-study/hunter",
        logo: "/images/htradelogo.png",
        image: "/images/htrade.png",
    },
];

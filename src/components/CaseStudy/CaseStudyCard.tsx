import React from "react";
import Link from "next/link";
import { CaseStudy } from "./data";
import { FiArrowUpRight } from "react-icons/fi";
import Image from "next/image";

interface CaseStudyCardProps {
    data: CaseStudy;
    index: number;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ data, index }) => {
    // Mapping for custom colors based on the design image
    const cardStyle = {
        backgroundColor:
            data.id === "urunner"
                ? "#007AFF" // Blue
                : data.id === "vapzer"
                    ? "#006D44" // Green
                    : "#5D5122", // Gold/Brown
        color: "#fff",
    };

    return (
        <div
            className="w-full rounded-[30px] p-8 md:p-12 overflow-hidden relative min-h-[500px] md:min-h-[600px] flex flex-col pop-hover"
            style={cardStyle}
        >
            <div className="flex flex-col md:flex-row justify-between items-start gap-6 z-10 relative">
                <div className="max-w-[600px]">
                    {data.logo ? (
                        <div className="mb-6 relative w-full max-w-[150px] h-[50px]">
                            <Image
                                src={data.logo}
                                alt={`${data.title} logo`}
                                fill
                                className="object-contain object-left"
                            />
                        </div>
                    ) : (
                        <h3 className="text-3xl md:text-4xl font-bold mb-4 font-sora">{data.title}</h3>
                    )}

                    <p className="text-base md:text-lg opacity-90 max-w-[500px] font-public-sans leading-relaxed">
                        {data.description}
                    </p>

                    {data.id === "urunner" && (
                        <div className="flex flex-wrap gap-4 mt-8">
                            <button className="flex items-center gap-2 bg-[#005AC1] hover:bg-[#004799] transition-colors px-6 py-3 rounded-xl font-medium">
                                {/* Play Store Icon placeholder */}
                                <span>Get on Playstore</span>
                            </button>
                            <button className="flex items-center gap-2 bg-[#1A1A1A] hover:bg-black transition-colors px-6 py-3 rounded-xl font-medium">
                                {/* App Store Icon placeholder */}
                                <span>Get on Appstore</span>
                            </button>
                        </div>
                    )}
                </div>

                <Link href={data.link}>
                    <button className="group flex items-center gap-2 bg-[#1A1A1A] hover:bg-black text-white px-6 py-3 rounded-full text-sm font-semibold tracking-wide uppercase transition-all duration-300 pop-hover-btn">
                        VIEW DETAILS
                        <FiArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                </Link>
            </div>

            {/* Hero Content / Image Placeholder Area */}
            <div className="mt-12 md:mt-auto relative z-10 w-full flex justify-center items-end">
                <div className="relative w-full max-w-[800px] h-[300px] md:h-[400px]">
                    <Image
                        src={data.image}
                        alt={`${data.title} mockup`}
                        fill
                        className="object-contain object-bottom"
                    />
                </div>
            </div>

            {/* Decorative background elements could go here */}
        </div>
    );
};

export default CaseStudyCard;

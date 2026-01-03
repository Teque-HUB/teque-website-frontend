import CaseStudyCard from "@/components/CaseStudy/CaseStudyCard";
import { caseStudies } from "@/components/CaseStudy/data";
import React from "react";

const CaseStudy = () => {
    return (
        <div className="w-full max-w-[1300px] mx-auto px-6 xl:px-0 py-12 md:py-20">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
                <h1 className="text-4xl md:text-5xl font-bold font-sora text-[#1A1A1A]">
                    Case Studies
                </h1>
                <p className="max-w-[500px] text-base md:text-lg font-public-sans text-[#4A4A4A] leading-relaxed">
                    Our team has worked on a lot of diverse projects. These are some of
                    them. Click on each of them to view our process of creating them.
                </p>
            </div>

            <div className="flex flex-col gap-12 md:gap-16">
                {caseStudies.map((study, index) => (
                    <CaseStudyCard key={study.id} data={study} index={index} />
                ))}
            </div>
        </div>
    );
};

export default CaseStudy;

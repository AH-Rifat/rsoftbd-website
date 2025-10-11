import { useState } from "react";
import rifatTeamImg from "../../../../public/assets/team_members/rifat.jpg";
import sohidulTeamImg from "../../../../public/assets/team_members/shohidul.jpg";
import shovoTeamImg from "../../../../public/assets/team_members/shovo.jpeg";
import chayonTeamImg from "../../../../public/assets/team_members/chayon-mahfuz.jpg";
import humayonTeamImg from "../../../../public/assets/team_members/humayon.jpg";
import rabbyShaonTeamImg from "../../../../public/assets/team_members/rabby_shaon.jpg";
import sagorTeamImg from "../../../../public/assets/team_members/sagor.jpg";

export default function OurTeam() {
    const [showAll, setShowAll] = useState(false);

    const teamMembers = [
        {
            name: "Rifat",
            role: "Founder & Software Engineer",
            image: rifatTeamImg,
        },
        {
            name: "Chayon Mahfuz",
            role: "Wordpress Developer",
            image: chayonTeamImg,
        },
        {
            name: "Rabby Shaon",
            role: "Network Engineer",
            image: rabbyShaonTeamImg,
        },
        {
            name: "Humayon",
            role: "Sales & Facebook Marketing",
            image: humayonTeamImg,
        },
        {
            name: "Sagor",
            role: "Multimedia Artist",
            image: sagorTeamImg,
        },
        {
            name: "Shohidul Islam",
            role: "Lead Designer",
            image: sohidulTeamImg,
        },
        {
            name: "Shovo",
            role: "Sales & Marketing",
            image: shovoTeamImg,
        },
    ];

    // Show first 4 members initially, show all when toggled
    const displayedMembers = showAll ? teamMembers : teamMembers.slice(0, 4);

    return (
        <>
            {/* Section Header */}
            <div className="text-center mb-8 md:mb-12 px-4">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-emerald-800 mb-3">
                    Our Team
                </h1>
                <div className="w-16 sm:w-20 h-1 bg-emerald-500 mx-auto rounded-full"></div>
            </div>

            {/* Team Grid Container */}
            <div className="mx-5 md:flex justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 px-4 sm:px-6 lg:px-8">
                    {displayedMembers.map((member, index) => (
                        <div
                            key={index}
                            className="group w-full bg-gradient-to-br from-emerald-50 to-white rounded-2xl shadow-lg border border-emerald-100 overflow-hidden transition-all duration-300 hover:shadow-emerald-200 hover:shadow-xl mx-auto"
                        >
                            <div className="p-4 sm:p-5">
                                <div className="relative overflow-hidden rounded-xl">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-emerald-900/0 group-hover:bg-emerald-900/10 transition-all duration-300 rounded-xl"></div>
                                </div>
                            </div>
                            <div className="px-4 sm:px-6 pb-4 sm:pb-6 text-center">
                                <h3 className="text-lg sm:text-xl font-bold text-emerald-900 mb-2">
                                    {member.name}
                                </h3>
                                <div className="inline-block bg-emerald-100 px-3 sm:px-4 py-1 rounded-full">
                                    <p className="text-emerald-700 font-medium text-xs sm:text-sm">
                                        {member.role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* See More/Less Button - Only show if there are more than 4 members */}
            {teamMembers.length > 4 && (
                <div className="flex justify-center mt-8">
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="uppercase bg-emerald-100 hover:bg-emerald-200 py-2 px-4 rounded-xl text-emerald-800 font-serif text-sm md:py-4 md:px-6 transition-colors duration-300"
                    >
                        {showAll ? "See Less" : "See More"}
                    </button>
                </div>
            )}
        </>
    );
}

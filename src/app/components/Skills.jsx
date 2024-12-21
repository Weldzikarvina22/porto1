import React from "react";
import Image from "next/image";

const Skills = () => {
    return (
        <section className="text-white">
            <div className="flex flex-row justify-start mt-8 gap-8">
                {/* Skills */}
                <div className="flex flex-col">
                    <h1 className="text-lg font-semibold hover:text-white text-[#ADB7BE] border-b border-purple-500 mb-2">
                        Skills
                    </h1>
                        <ul className="list-disc pl-4 text-sm text-[#ADB7BE]">
                            <li>Node.js</li>
                            <li>JavaScript</li>
                            <li>React</li>
                        </ul>
                </div>
                {/* Education */}
                <div className="flex flex-col">
                    <h1 className="text-lg font-semibold hover:text-white text-[#ADB7BE] border-b border-purple-500 mb-2">
                        Education
                    </h1>
                        <ul className="list-disc pl-0 text-sm text-[#ADB7BE]">
                            <p>Engineering Physics</p>
                            <p>Telkom University</p>
                        </ul>
                </div>
                {/* Experience */}
                <div className="flex flex-col">
                    <h1 className="text-lg font-semibold hover:text-white text-[#ADB7BE] border-b border-purple-500 mb-2">
                        Experience
                    </h1>
                        <p className="list-disc pl-0 text-sm text-[#ADB7BE]">Fullstack Developer for 2 years</p>
                </div>
                <div className="relative h-[100px]">
                    <div className="absolute top-0 left-10 rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px]">
                        <Image src="/images/skills.jpeg" width={400} height={400} alt="Skill Image"/>
                    </div>
                </div>
            </div>
        </section>  
    );
};

export default Skills;
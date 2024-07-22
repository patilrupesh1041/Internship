import React from "react";

export default function Experience() {
    return (
        <>
            <section className="resume-section" id="experience">
                <div className="resume-section-content">
                    <h2 className="mb-5">Experience</h2>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Web Development Intern</h3>
                            <div className="subheading mb-3">OctaNet Service Pvt Ltd.</div>
                            <p>Virtual Internship Program at OctaNet Service Pvt Ltd in Web
                            Development as an active participant for one month.
                            </p>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">Dec 2023 - Jan 2024</span></div>
                    </div>

                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Web Development Intern</h3>
                            <div className="subheading mb-3">BharatIntern</div>
                            <p>Virtual Internship Program at BHARAT INTERN in Web Development as an
                            active participant for one month.
                            </p>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">Aug 2023 - Sept 2023</span></div>
                    </div>

                    <div className="d-flex flex-column flex-md-row justify-content-between">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Robotics</h3>
                            <div className="subheading mb-3">Kodacy</div>
                            <p>
                                Online internship program on "ROBOTICS" conducted by KODACY in association with Scientific Platforms And Cosmic Explorations (SPACE).
                            </p>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">Jan 2022</span></div>
                    </div>
                </div>

                
            </section>
            <hr className="m-0" />
        </>
    );
}
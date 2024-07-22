import React from "react";

export default function Education() {
    return (
        <>
            <section className="resume-section" id="education">
                <div className="resume-section-content">
                    <h2 className="mb-5">Education</h2>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">SSBT'S College of Engineering & Technology, Bambhori.</h3>
                            <div className="subheading mb-3">Bachelor of Engineering</div>
                            <div>Computer Engineering</div>
                            <p>CGPA: -.--</p>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">Nov 2022 - Jun 2026</span></div>
                    </div>
                    
                </div>
            </section>
            <hr className="m-0" />
        </>
    );
}
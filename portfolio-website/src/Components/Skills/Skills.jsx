import React from "react";

export default function Skills() {
    return (
        <>
            <section className="resume-section" id="skills">
                <div className="resume-section-content">
                    <h2 className="mb-5">Skills</h2>
                    <div className="subheading mb-3">Programming Languages & Tools</div>
                    <ul className="list-inline dev-icons">
                        <li className="list-inline-item"><i className="fab fa-html5"></i></li>
                        <li className="list-inline-item"><i className="fab fa-css3-alt"></i></li>
                        <li className="list-inline-item"><i className="fab fa-js-square"></i></li>
                        <li className="list-inline-item"><i className="fab fa-python"></i></li>
                        <li className="list-inline-item"><i className="fab fa-php"></i></li>
                        <li className="list-inline-item"><i className="fab fa-java"></i></li>
                        <li className="list-inline-item"><i className="fab fa-react"></i></li>
                        <li className="list-inline-item"><i className="fab fa-node-js"></i></li>
                        <li className="list-inline-item"><i className="fab fa-npm"></i></li>
                    </ul>
                </div>
            </section>
            <hr className="m-0" />
        </>
    );
}
import React from "react";
import CV from "./Accenture_Song_CV.pdf";
import CoverLetter from './Accenture_Song.pdf';
import TopDesigns from './Top_2_Designs.pdf';
import IdealCoverLetter from './Ideal_Cover_Letter.pdf';
import "./index.css";

const App = () => {
    return (
        <>
            <center>
                <div className="main-content">
                <h1>Yunseon's UI/UX Portfolio website </h1>
                <h3>Key documents</h3>
                <a href={TopDesigns} target="_blank"
                    rel="noreferrer">
                    Two Best Designs
                </a> 
                <br></br>
                <a href={CoverLetter} target="_blank"
                    rel="noreferrer">
                    Current Cover Letter 
                </a>
                <br></br>
                <a href={CV} target="_blank"
                    rel="noreferrer">
                    Current CV 
                </a> 
                </div>
                {/* P.S. line */}
                <div className="ps">
                <p>
                P.S. I aim to make my cover letter look like this someday — see details in my goal document:{" "}
                <a href={IdealCoverLetter} target="_blank" rel="noreferrer">
                    My Goal Cover Letter
                </a>
                </p>
                </div>
            </center>
        </>
    );
};

export default App;
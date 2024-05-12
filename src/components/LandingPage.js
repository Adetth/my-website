import { useState } from "react";
import ContributeForm from "./ContributeForm";

const LandingPage = () => {
    const[isVisible, setIsVisible] = useState(false);

    const handleOpenForm = () => {
        setIsVisible(true);
    };
    
    return(

        <body>
            {/* <div className="header">
                Hello world
            </div> */}

            <div  className="entireContent">
                <div className="letter-content">
                    BATCH OF 2024 AIML
                </div>
                <div className="sub-letter-content">
                    it's time for your farewell. You're cordially invited for this glamorous send off! 
                </div>
            </div>
            <div className="button-content"><br/>
                <a className="form-link" href="https://forms.gle/P5UA25T2sw1FvS7F9"> Contribute </a>
            </div>
        </body>

    );
};

export default LandingPage;
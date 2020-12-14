import React from "react";
import LoadingLogo from "./loading-logo";
import "./loadingAnim.scss"

const LoadingAnim = (props) => {
    return (
        <div id="intro">
            <LoadingLogo 
                doneAnim={props.doneAnim}
                showPage={props.showPage}
            />
        </div>
    );
}

export default LoadingAnim;
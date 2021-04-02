import React from "react";
import { Link } from "react-router-dom";
import NotfoundImage from "../../assests/images/notfound.jpg";
import "./style.css";

function Error() {
    return (
        <div className="container">
            <div className="notfoundimg">
                <img src={NotfoundImage} alt="Page not found" />
            </div>
            <div>
                <Link to="/">
                    <button>Back To Home</button>
                </Link>
            </div>
        </div>
    );
}

export default Error;

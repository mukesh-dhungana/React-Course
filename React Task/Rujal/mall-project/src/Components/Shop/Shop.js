import React, { useState } from 'react'
import ClearIcon from '@material-ui/icons/Clear';


function Shop() {

    const [hover, setHover] = useState(false)

    return (
        <div
            style={{ height: "222px", width: "100%", position: "relative" }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >

            <div
                className="mall"
                style={{
                    backgroundImage: "url(https://picsum.photos/id/237/200/300)",
                    filter: hover ? "blur(0.4px)" : "blur(2px)"
                }}>

            </div>
            {hover && <ClearIcon
                style={{ color: "red", position: "absolute", top: "5%", left: "90%", cursor: "pointer" }}
                onClick={() => console.log("Delete Shop")}
            />}

            <div className="mall-content">
                <div>
                    <h1>Coffee Shop</h1>
                </div>
                <div>
                    <h3>
                        Kathmandu
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default Shop

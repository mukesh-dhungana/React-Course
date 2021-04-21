import React, { useState } from 'react'
import ClearIcon from '@material-ui/icons/Clear';


function Shop(props) {

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
                    backgroundImage: `url(${props.images[0].url})`,
                    filter: hover ? "blur(0.4px)" : "blur(2px)"
                }}>

            </div>
            {hover && <ClearIcon
                className="delete-icon"
                onClick={() => console.log("Delete Shop")}
            />}

            <div className="mall-content">
                <div>
                    <h1>{props.shop_name}</h1>
                </div>
                
            </div>
        </div>
    )
}

export default Shop

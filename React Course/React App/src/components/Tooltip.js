import React, { useState } from 'react';

function Tooltip(props) {
    const [title,setTitle]=useState("fdf");
    return (
        <div className="tooltip">
            {props.title}
            <button onClick={setTitle("fdfdf")}></button>
        </div>
    );
}

export default Tooltip;
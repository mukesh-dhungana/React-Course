import React from 'react';

function NoData() {
    return (
        <div className = "noData">
            <h3
                className = "noData__text"
                style = {{
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center",
                    fontSize:"50px",
                    fontWeight: "bold",
                    margin: "50px 0"
                }}
            >
                No Data to Show. Load Data to Show.
            </h3>
        </div>
    );
}

export default NoData;

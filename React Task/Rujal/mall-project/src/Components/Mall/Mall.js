import React, { useState } from 'react'
import ClearIcon from '@material-ui/icons/Clear';
import { useDispatch } from 'react-redux';
import { deleteMallData } from '../../redux/actions/mall';


function Mall(props) {

    const [hover, setHover] = useState(false)
    const dispatch = useDispatch()

    return (
        <div
            style={{ height: "220px", width: "100%", position: "relative" }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >

            <div
                className="mall"
                style={{
                    backgroundImage: `url(${props.mall_image.url})`,
                    filter: hover ? "blur(0.4px)" : "blur(2px)"
                }}>

            </div>
            {hover && <ClearIcon
                className="delete-icon"
                onClick={() => dispatch(deleteMallData(props))}
            />}

            <div className="mall-content">
                <div>
                    <h1>{props.mall_name}</h1>
                </div>
                <div>
                    <h3>
                        {props.mall_address}
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default Mall

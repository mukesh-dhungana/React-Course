import React from 'react'
import './Block.css'
import Tooltip from './Tooltip'

const Block = (props) => {
    const [show, setShow] = React.useState(false)
    const { background, height, text } = props

    return (
        <div>
            <div
                style={{ background, height: 33, width: '40%', margin: 'auto' }}
                onMouseOut={() => setShow(false)}
                onMouseEnter={() => setShow(true)}>

            </div>
            <div>
                {show && <Tooltip background={background} height={height} text={text} />}
            </div>
        </div>
    )
}

export default Block
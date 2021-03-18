import React from 'react'

function About(props) {
    const { location: { state: { description } } } = props
    return (
        <div>
            {description}
        </div>
    )
}

export default About

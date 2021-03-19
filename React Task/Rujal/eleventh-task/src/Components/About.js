import React from 'react'
import HOC from './HOC'
function About(props) {
    const [state, setState] = React.useState({})

    React.useEffect(() => {
        setState(props.submittedData)
    }, [props.submittedData])

    console.log(state);

    return (
        <div>
            <form>
                <input type="text" name="title" onChange={props.handleChange} value={props.title || ''} /> <br />
                <input type="text" name="description" onChange={props.handleChange} value={props.description || ''} /> <br />
            </form>
            <button onClick={props.clearFields}>Clear</button>

        </div>
    )
}


export default HOC(About)

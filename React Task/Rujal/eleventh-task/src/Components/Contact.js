import React from 'react'
import HOC from './HOC'

function Contact(props) {

    const [state, setState] = React.useState({})

    React.useEffect(() => {
        setState(props.submittedData)
    }, [props.submittedData])

    console.log(state);

    return (
        <div>
            <h1>Contact</h1>
            <form>
                <input type="text" name="address" onChange={(e) => props.handleChange(e)} value={props.address || ''} /> <br />
                <input type="text" name="mobile" onChange={(e) => props.handleChange(e)} value={props.mobile || ''} /> <br />
            </form>
            <button onClick={props.clearFields}>Clear</button>
        </div>
    )
}


export default HOC(Contact)

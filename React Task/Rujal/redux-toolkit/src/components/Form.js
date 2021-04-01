import React from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { addData, updateData } from '../redux/dataSlice'

function Form() {
    const dispatch = useDispatch()
    const { detail, editMode } = useSelector(state => state.data, shallowEqual)
    const [name, setName] = React.useState('')

    React.useEffect(() => {
        setName(detail.name)
    }, [detail])

    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault()
                if (!editMode) {
                    dispatch(addData({ name }))
                } else {
                    dispatch(updateData({ ...detail, name }))
                }
                e.target.reset()
            }}>
                <input
                    type="name"
                    placeholder="Name"
                    name="name"
                    value={name || ''}
                    onChange={(e) => setName(e.target.value)}
                />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default Form

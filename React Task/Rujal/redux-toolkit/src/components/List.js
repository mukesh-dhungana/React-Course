import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getDetail, removeData } from '../redux/dataSlice'

function List() {

    const data = useSelector(state => state.data.data)
    const dispatch = useDispatch()

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>SN</th>
                        <th>Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(x => (
                        <tr key={x.id}>
                            <td>{x.id}</td>
                            <td>{x.name}</td>
                            <td>
                                <button onClick={() => dispatch(getDetail(x))}>Edit</button>
                                <button onClick={() => dispatch(removeData(x.id))}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default List

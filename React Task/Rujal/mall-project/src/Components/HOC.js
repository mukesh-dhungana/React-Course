import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getMallData, deleteMallData } from '../redux/actions/mall'

const HOC = (OriginalComponent) => {
    function ComponentUpdated() {
        const dispatch = useDispatch()
        const malls = useSelector(state => state.mallReducer.malls)

        React.useEffect(() => {
            dispatch(getMallData())
        }, [dispatch])


        return <OriginalComponent
            malls={malls}
            deleteMallData={(data) => dispatch(deleteMallData(data))}
        />
    }

    return ComponentUpdated
}

export default HOC

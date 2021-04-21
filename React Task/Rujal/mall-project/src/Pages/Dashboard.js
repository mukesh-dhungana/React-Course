import { Button, Grid } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router'
import Malls from '../Components/Mall/Malls'
import Shops from '../Components/Shop/Shops'
import { connect } from 'react-redux'
import { getMallData } from '../redux/actions/mall'

function Dashboard({ malls, getMallData, locationChange }) {
    const history = useHistory()

    React.useEffect(() => {
        getMallData()
        return () => locationChange()
    }, [getMallData, locationChange])

    const shops = malls.map((x, i) => ({ id: x.id, shop: x.shops[x.shops.length - 1] }))

    return (
        <Grid container spacing={2}
            style={{ width: "90%", margin: "auto" }}
        >
            <Grid item sm={12}>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => history.push('/addMall')}
                >
                    Add Mall
                </Button>
            </Grid>
            <Grid item sm={12}>
                <Malls malls={malls} />
            </Grid>
            <Grid item sm={12}>
                <Shops shops={shops} />
            </Grid>
        </Grid >
    )
}

const mapStateToProps = state => {
    return {
        malls: state.mallReducer.malls
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getMallData: () => dispatch(getMallData()),
        locationChange: () => dispatch({ type: "LOCATION_CHANGE" })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
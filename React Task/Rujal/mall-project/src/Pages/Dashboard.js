import { Button, Grid } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router'
import Malls from '../Components/Mall/Malls'
import Shops from '../Components/Shop/Shops'
import { shuffle } from '../Components/Shuffle'
import { connect } from 'react-redux'
import { getMallData } from '../redux/actions/mall'

function Dashboard({ malls, getMallData }) {
    const history = useHistory()

    React.useEffect(() => {
        getMallData()
    }, [getMallData])

    const shops = malls.map(x => ({ id: x.id, shop: shuffle(x.shops)[x.shops.length - 1] }))

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
                <Malls malls={shuffle(malls)} />
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
        getMallData: () => dispatch(getMallData())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
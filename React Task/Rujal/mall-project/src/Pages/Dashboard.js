import { Button, Grid } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router'
import Malls from '../Components/Mall/Malls'
import Shops from '../Components/Shop/Shops'
import { shuffle } from '../Components/Shuffle'
import HOC from '../Components/HOC'

function Dashboard({ malls, updateMallData }) {
    const history = useHistory()
    const shops = malls.map(x => ({ id: x.id, mall_name: x.mall_name, shop: shuffle(x.shops) }))


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
                <Shops shops={shops} malls={malls} updateMallData={updateMallData} />
            </Grid>
        </Grid >
    )
}



export default HOC(Dashboard)
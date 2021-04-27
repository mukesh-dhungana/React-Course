import { Button, Grid } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router'
import Malls from '../Components/Mall/Malls'
import Shops from '../Components/Shop/Shops'
import { shuffle } from '../Components/Shuffle'
import HOC from '../Components/HOC'

function Dashboard({ malls }) {
    const history = useHistory()
    const shops = malls.map(x => ({ id: x.id, mall_name: x.mall_name, shop: shuffle(x.shops)[x.shops.length - 1] }))


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
                <Shops shops={shops.slice(0, 3)} />
            </Grid>
        </Grid >
    )
}



export default HOC(Dashboard)
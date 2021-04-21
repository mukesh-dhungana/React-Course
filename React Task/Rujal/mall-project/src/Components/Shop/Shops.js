import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import Shop from './Shop'

function Shops() {
    return (
        <div>
            <Typography variant="h4" color="secondary">Shops</Typography>

            <Grid container spacing={2}>
                <Grid item sm={4}>
                    <Shop />
                </Grid>
                <Grid item sm={4}>
                    <Shop />
                </Grid>
                <Grid item sm={4}>
                    <Shop />
                </Grid>
            </Grid>
        </div>
    )
}

export default Shops

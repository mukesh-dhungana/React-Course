import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import Shop from './Shop'

function Shops({ shops }) {
    return (
        <div>
            <Typography variant="h4" color="secondary">Shops</Typography>

            <Grid container spacing={2}>
                {
                    shops.slice(0, 3).map((x) => (
                        <Grid item sm={4} key={x.id}>
                            <Shop {...x.shop} />
                        </Grid>
                    ))
                }

            </Grid>
        </div>
    )
}

export default Shops

import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import Shop from './Shop'
import { Link } from 'react-router-dom'

function Shops({ shops }) {


    return (
        <Grid>
            <Typography variant="h4" color="secondary">Shops</Typography>

            <Grid container spacing={2}>
                {
                    shops.map((x) => (
                        <Grid item sm={4} key={x.id}>
                            <Shop {...x.shop} />
                        </Grid>
                    ))
                }

            </Grid>
            <Link to="/shops" className="link">View All</Link>
        </Grid>
    )
}

export default Shops

import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import Shop from './Shop'
import { shuffle } from '../Shuffle'
import { Link } from 'react-router-dom'

function Shops({ shops }) {

    return (
        <Grid>
            <Typography variant="h4" color="secondary">Shops</Typography>

            <Grid container spacing={2}>
                {
                    shuffle(shops.slice(0, 3)).map((x) => (
                        <Grid item sm={4} key={x.id}>
                            <Shop {...x.shop} />
                        </Grid>
                    ))
                }

                <Link to="/shops" className="link">View All</Link>

            </Grid>
        </Grid>
    )
}

export default Shops

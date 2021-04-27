import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { Link, useHistory } from 'react-router-dom'
import Card from '../Card'

function Shops({ shops }) {
    const history = useHistory()

    return (
        <Grid>
            <Typography variant="h4" color="secondary">Shops</Typography>

            <Grid container spacing={2}>
                {
                    shops.map((x) => (
                        <Grid item sm={4} xs={12} key={x.shop.shop_name}>
                            <Card
                                name={x.shop.shop_name}
                                url={x.shop.images[0].url}
                                description={x.mall_name}
                                handleClick={() => history.push(`/${x.id}/shop/${x.shop.shop_name}`)}
                                crossClick={() => console.log("Delete Shop")}
                            />
                        </Grid>
                    ))
                }

            </Grid>
            {shops.length >= 3 && <Link to="/shops" className="link">View All</Link>}
        </Grid>
    )
}

export default Shops

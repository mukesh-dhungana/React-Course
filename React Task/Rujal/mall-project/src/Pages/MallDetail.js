import { Typography } from '@material-ui/core'
import React from 'react'

function MallDetail(props) {
    return (
        <Grid>
            <Grid container spacing={2}>
                <Grid item sm={12} xs={12}>
                    <Typography variant="h5" component="h5" color="secondary" style={{ textAlign: "center" }}>
                        Mall Name
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default MallDetail

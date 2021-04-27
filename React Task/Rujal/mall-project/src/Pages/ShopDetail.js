import React, { useState } from 'react'
import { Typography, Grid, Button } from '@material-ui/core'
import { useHistory, useParams } from 'react-router'
import { connect } from 'react-redux'
import { getMallData } from '../redux/actions/mall'
import Card from '../Components/Card'

function ShopDetail({ getMallData, malls }) {
    const { id, shop_name } = useParams()
    const history = useHistory()
    const [data, setData] = useState({})

    React.useEffect(() => {
        getMallData()
    }, [getMallData])

    React.useEffect(() => {
        if (id && shop_name) {
            const mall = malls.filter(x => x.id === id)[0]
            if (mall) {
                const {id, ...rest} = mall
                setData(rest)
            }
        }
    }, [shop_name, malls, id])

    const deleteImage = (imageId) => {
        console.log(data);
    }

    const detail = data?.shops?.find(x => x.shop_name === shop_name)

    return (
        <Grid>
            <Grid container spacing={2}>
                <Grid item sm={12} xs={12}>
                    <Typography variant="h4" component="h4" color="primary" style={{ textAlign: "center" }}>
                        {detail?.shop_name}
                    </Typography>
                </Grid>
                <Grid item sm={12} xs={12}>
                    <Typography variant="h5" component="h5" color="primary" style={{ textAlign: "center" }}>
                        {detail?.shop_description}
                    </Typography>
                </Grid>

                <Grid container spacing={2} style={{ margin: "auto", width: "90%" }}>
                    <Grid item sm={12}>
                        <Button
                            onClick={() => history.push('/' + id + '/' + shop_name + '/editShop')}
                            variant="contained"
                            color="secondary">Edit Shop</Button>
                    </Grid>
                    <Grid item sm={12}>
                        <Grid container spacing={2}>
                            <Grid item sm={12}>
                                <Typography variant="h4" color="primary">Shops</Typography>
                            </Grid>
                            {
                                detail?.images
                                    .map(image => (
                                        <Grid item sm={4} xs={12} key={image.id}>
                                            <Card
                                                name={image.image_name}
                                                url={image.url}
                                                crossClick={() => deleteImage(image.id)}

                                            />
                                        </Grid>
                                    ))
                            }
                        </Grid>

                    </Grid>
                </Grid>
            </Grid>
        </Grid>
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

export default connect(mapStateToProps, mapDispatchToProps)(ShopDetail)

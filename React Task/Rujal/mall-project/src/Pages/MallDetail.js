import React from 'react'
import { Typography, Grid, Button } from '@material-ui/core'
import { useHistory, useParams } from 'react-router'
import { connect } from 'react-redux'
import { getMallData } from '../redux/actions/mall'
import { paginate, Pagination } from '../Components/Paginate'
import Card from '../Components/Card'

function MallDetail({ getMallData, malls }) {
    const { id } = useParams()
    const history = useHistory()
    const [detail, setDetail] = React.useState({ id: '', mall_name: '', mall_address: '', shops: [] })
    const [currentPage, setPage] = React.useState(1)
    const [postPerPage, setPostPerPage] = React.useState(3)

    React.useEffect(() => {
        getMallData()
    }, [getMallData])

    React.useEffect(() => {
        if (id) {
            const mallDetail = malls.find(x => x.id === id)
            mallDetail && setDetail(mallDetail)
        }
    }, [id, malls])

    const runPaginate = (number) => setPage(number)

    return (
        <Grid>
            <Grid container spacing={2}>
                <Grid item sm={12} xs={12}>
                    <Typography variant="h4" component="h4" color="primary" style={{ textAlign: "center" }}>
                        {detail.mall_name}
                    </Typography>
                </Grid>
                <Grid item sm={12} xs={12}>
                    <Typography variant="h5" component="h5" color="primary" style={{ textAlign: "center" }}>
                        {detail.mall_address}
                    </Typography>
                </Grid>

                <Grid container spacing={2} style={{ margin: "auto", width: "90%" }}>
                    <Grid item sm={6}>
                        <Button
                            //onClick={() => history.push('/' + detail.id+'/editMall')}
                            variant="contained"
                            color="secondary">Add Shop</Button>
                    </Grid>
                    <Grid item sm={6}>
                        <Button
                            onClick={() => history.push('/' + detail.id + '/editMall')}
                            variant="contained"
                            color="secondary">Edit Mall</Button>
                    </Grid>
                    <Grid item sm={12}>
                        <Grid container spacing={2}>
                            <Grid item sm={12}>
                                <Typography variant="h4" color="primary">Shops</Typography>
                            </Grid>
                            {
                                paginate(detail.shops, postPerPage, currentPage)
                                    .map(shop => (
                                        <Grid item sm={4} xs={12} key={shop.shop_name}>
                                            <Card
                                                name={shop.shop_name}
                                                url={shop.images[0].url}
                                                handleClick={() => history.push(`/${id}/shop/${shop.shop_name}`)}
                                                crossClick={() => console.log("Delete Shop")}
                                            />
                                        </Grid>
                                    ))
                            }
                        </Grid>
                        <Grid container spacing={2} >
                            <Grid item sm={12}>
                                <Pagination
                                    postPerPage={postPerPage}
                                    totalPosts={detail.shops.length}
                                    paginate={runPaginate}
                                    setPostPerPage={setPostPerPage}
                                />
                            </Grid>
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
        getMallData: () => dispatch(getMallData()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MallDetail)

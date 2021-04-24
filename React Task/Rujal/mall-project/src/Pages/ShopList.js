import { Grid, TextField, Typography } from '@material-ui/core'
import React from 'react'
import { connect } from 'react-redux'
import { paginate, Pagination } from '../Components/Paginate'
import Shop from '../Components/Shop/Shop'
import { getMallData } from '../redux/actions/mall'
import { LOCATION_CHANGE } from '../redux/actionType'

function ShopList({ getMallData, shops, locationChange }) {
    
    const [search, setSearch] = React.useState('')
    const [currentPage, setPage] = React.useState(1)

    React.useEffect(() => {
        getMallData()
        return () => locationChange()
    }, [getMallData, locationChange])



    const handleChange = (e) => {
        const value = e.target.value
        setSearch(value)
    }

    const runPaginate = (number) => setPage(number)

    return (

        <Grid container spacing={2} style={{ width: "90%", margin: "auto" }}>
            <Grid item sm={12} md={12} style={{ textAlign: 'center' }}>
                <TextField
                    name="search"
                    label="Search"
                    variant="filled"
                    onChange={handleChange}
                    style={{ width: "35%" }}
                />
            </Grid>

            <Grid container spacing={2}>
                <Grid item sm={12}>
                    <Typography variant="h4" color="secondary">Shops</Typography>
                </Grid>
                {
                    paginate(shops, 3, currentPage).filter(x => search === "" ? x : x.shop_name.toLowerCase().includes(search.toLowerCase()))
                        .map(shop => (
                            <Grid item sm={4} xs={12} key={shop.shop_name}>
                                <Shop {...shop} />
                            </Grid>
                        ))
                }
            </Grid>
            <Grid container spacing={2}>
                <Grid item sm={12}>
                    <Pagination
                        postPerPage={3}
                        totalPosts={shops.length}
                        paginate={runPaginate}
                    />
                </Grid>
            </Grid>
        </Grid>


    )
}

const mapStateToProps = state => {
    return {
        shops: state.mallReducer.malls.map(mall => mall.shops).flat(),
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getMallData: () => dispatch(getMallData()),
        locationChange: () => dispatch({ type: LOCATION_CHANGE }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopList)

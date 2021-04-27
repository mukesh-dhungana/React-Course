import { Grid, TextField, Typography } from '@material-ui/core'
import React from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router'
import Card from '../Components/Card'
import { paginate, Pagination } from '../Components/Paginate'
import { getMallData } from '../redux/actions/mall'
import { LOCATION_CHANGE } from '../redux/actionType'

function ShopList({ getMallData, shops, locationChange }) {

    const [search, setSearch] = React.useState('')
    const [currentPage, setPage] = React.useState(1)
    const [postPerPage, setPostPerPage] = React.useState(6)
    const history = useHistory()

    React.useEffect(() => {
        getMallData()
        return () => locationChange()
    }, [getMallData, locationChange])



    const handleChange = (e) => {
        setPage(1)
        const value = e.target.value
        setSearch(value)
    }

    const runPaginate = (number) => setPage(number)

    const filteredShops = shops.filter(x => search === "" ? x
        :
        x.shop_name.toLowerCase().includes(search.toLowerCase()))

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
                    paginate(filteredShops, postPerPage, currentPage)
                        .map(shop => (
                            <Grid item sm={4} xs={12} key={shop.shop_name}>
                                <Card
                                    name={shop.shop_name}
                                    url={shop.images[0].url}
                                    handleClick={() => history.push('/' + shop.id + '/shop/' + shop.shop_name)}
                                    crossClick={() => console.log("Delete Shop")}
                                />
                            </Grid>
                        ))
                }
            </Grid>
            <Grid container spacing={2}>
                <Grid item sm={12}>
                    <Pagination
                        postPerPage={postPerPage}
                        totalPosts={shops.length}
                        paginate={runPaginate}
                        setPostPerPage={(e) => { setPostPerPage(+e.target.value); setPage(1) }}
                    />
                </Grid>
            </Grid>
        </Grid>


    )
}

const mapStateToProps = state => {
    return {
        shops: state.mallReducer.malls.map(mall => mall.shops.map(x => ({ ...x, id: mall.id }))).flat(),
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getMallData: () => dispatch(getMallData()),
        locationChange: () => dispatch({ type: LOCATION_CHANGE }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopList)

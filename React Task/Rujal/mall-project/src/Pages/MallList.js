import { Grid, TextField, Typography, Button } from '@material-ui/core'
import React from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router'
import Mall from '../Components/Mall/Mall'
import { getMallData } from '../redux/actions/mall'
import { LOCATION_CHANGE } from '../redux/actionType'

function MallList({ getMallData, malls, locationChange }) {
    const history = useHistory()
    const [search, setSearch] = React.useState('')

    React.useEffect(() => {
        getMallData()
        return () => locationChange()
    }, [getMallData, locationChange])



    const handleChange = (e) => {
        const value = e.target.value
        setSearch(value)
    }

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
                    <Grid item sm={12}>
                        <Button
                            variant="contained"
                            color="secondary"
                            onClick={() => history.push('/addMall')}
                        >
                            Add Mall
                        </Button>

                    </Grid>
                    <Typography variant="h4" color="secondary">Malls</Typography>
                </Grid>

                {
                    malls.filter(x => search === "" ? x : x.mall_name.toLowerCase().includes(search.toLowerCase()))
                        .map(mall => (
                            <Grid item sm={4} xs={12} key={mall.id}>
                                <Mall {...mall} />
                            </Grid>
                        ))
                }
            </Grid>
        </Grid>


    )
}

const mapStateToProps = state => {
    return {
        malls: state.mallReducer.malls,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getMallData: () => dispatch(getMallData()),
        locationChange: () => dispatch({ type: LOCATION_CHANGE }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MallList)

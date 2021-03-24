import React from 'react'
import { connect } from 'react-redux'
import { fetchDetail } from '../redux/action'
import { Route, Switch, useRouteMatch, Link, useHistory } from 'react-router-dom'
import Profile from './Profile'
function Home(props) {
    const { path, url } = useRouteMatch()
    const history = useHistory()
    const { getDetail, id, userDetail } = props

    React.useEffect(() => {
        getDetail(id)
    }, [getDetail, id])


    return (
        <div>
            <Link to={url}>Home</Link>
            <button onClick={() => history.push(`${url}/${id}`)}>Click</button>
            <button onClick={props.logOut}>Logout</button>
            <Switch>
                <Route exact path={`${path}/${id}`} render={(props) => <Profile {...userDetail} {...props} />} />
            </Switch>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        userDetail: state.userDetail
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getDetail: (id) => dispatch(fetchDetail(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

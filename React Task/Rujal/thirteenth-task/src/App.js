import React, { Component } from 'react'
import './App.css'
import { fetchData } from './redux/actions'
import { store } from './redux/store'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            reducer: {}
        }
        store.subscribe(() => {
            this.setState({ reducer: store.getState() })
        })
    }



    componentDidMount() {
        store.dispatch(fetchData())
    }



    render() {
        return (
            <div className="App">
                {this.state.reducer.isFetching && "Loading"}
                <table>
                    <thead>
                        <tr>
                            <th>SN</th>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.reducer.data?.map(x => (
                            <tr key={x.id}>
                                <td>{x.id}</td>
                                <td>{x.name}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default App

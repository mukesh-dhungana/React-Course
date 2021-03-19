import React from 'react'

const HOC = (WrappedComponent) => {
    return class extends React.Component {
        state = {
            datas: {

            },

            submittedData: {

            }
        }

        handleChange = (e) => this.setState({ datas: { ...this.state.datas, [e.target.name]: e.target.value } })

        submitData = () => this.setState({ submittedData: this.state.datas })

        render() {

            return (
                <div>
                    <h1>Header</h1>
                    <WrappedComponent
                        {...this.props}
                        {...this.state.datas}
                        handleChange={this.handleChange}
                        clearFields={() => this.setState({ datas: {}, submittedData: {} })}
                        submittedData={this.state.submittedData}

                    />
                    <input
                        type="submit"
                        value="Submit"
                        onClick={() => this.submitData()}
                    />
                </div>
            )
        }
    }

}

export default HOC

import React, { Component } from 'react';
import axios from '../apis/workerHouers'


class testPAge extends Component {
    state = {
        fullName: "",
        posted: false,
        userList: []
    }

    async postname() {
        await axios.post("/api/addName", { name: this.state.fullName })


        this.setState({ userList: [...this.state.userList, this.state.fullName] })

    }

    async getList() {
        const { data } = await axios.get("/api/names")
        this.setState({ userList: data })
    }
    async componentWillMount() {
        this.getList()

        setInterval(() => {
            this.getList()

        }, 5000)
    }
    render() {
        return (

            <div >


                <h1>this is exmaple page</h1>

                {this.state.posted ? <h2>posted sucssesfully</h2> : <h2>post the record</h2>}

                {this.state.userList.map((val) => <h3>{val}</h3>)}

                <form>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">full name</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={this.state.fullName} onChange={(event) => {
                            this.setState({ fullName: event.target.value });

                        }} />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your name with anyone else.</small>
                    </div>

                </form>

                <button onClick={() => this.postname()} className="btn btn-primary">Submit</button>


            </div>

        );
    }
}

export default testPAge;

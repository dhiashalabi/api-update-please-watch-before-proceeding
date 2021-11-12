import React, { Component } from "react";


// https://swapi.co/ (old)
// https://swapi.dev/


export default class App extends Component {
    constructor() {
        super();
        this.state = {
            loading: false,
            character: {}
        }
    }

    componentDidMount() {
        this.setState({ loading: true })
        fetch("https://swapi.dev/api/people/1/")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    loading: false,
                    character: data
                });
            });
    }

    render() {
        const text = this.state.loading ? "loading..." : this.state.character.name
        return (
            <div>
                <p>{text}</p>
            </div>
        );
    }
}

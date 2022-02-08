import React from 'react';

class Homework1 extends React.Component {
    constructor(props) {
        super();
        console.log(props.p1);
        this.state = {
            s1: props.p1
        }
        this.s2 = 201;
    }

    buttonHander = () => {
        let val = this.state.s1;
        val += 50;
        this.s2 += 50;
        this.setState({ s1: val });
    }

    componentDidMount() {
        this.state.s1 += 5;
        this.s2 += 5;

        console.log('counting successful ' + this.state.s1 + ' ' + this.s2 + ' !');
    }

    render() {
        return (
            <>
                <button onClick={this.buttonHander}>Push it</button>
                <div>{this.state.s1}</div>
                <div>{this.s2}</div>
            </>
        )
    }
}

export default Homework1;
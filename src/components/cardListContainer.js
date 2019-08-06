import React from "react"
import CardList from "./cardList"

class CardContainer extends React.Component{

    constructor(){
        super();
        this.state = {list:[]}
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(list => this.setState({list}));
    
    }

    render(){
        return <CardList users = {this.state.list}/>
    }


}

export default CardContainer;
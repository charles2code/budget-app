import React, { Component } from 'react'

class BudgetContainer extends Component {
constructor(){
    super()
    this.state={
        budget: [
        ]
    }
}
componentDidMount() {
    console.log("component mounting...");
    
    this.getBudget();
}

getBudget = async () => {
   const budget = await fetch("http://localhost9000/api/v1/budget");
   const parseResponse = await budget.json();
   console.log(parseResponse);
   
}
    render() {
        return (
            <div>
                <h1>Here is the new container</h1>
            </div>
        )
    }
}

export default BudgetContainer

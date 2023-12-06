import React, { Component } from 'react'
import Data from './Data';
import "../App.css"

class HigherOrderComponent extends Component {

    constructor(){
        super();
        this.state = {
            userData: [
                { id: '1', name: 'Joe', user_type: 'Developer', age:31, years:11 },
                { id: '2', name: 'Hill', user_type: 'Designer', age:26, years:4 },
                { id: '3', name: 'John', user_type: 'Teacher', age:24, years: 2},
                { id: '4', name: 'Sam', user_type: 'Entreprenuer', age:58,years:25},
                { id: '5', name: 'Jack', user_type: 'Designer', age:43, years: 18}
    
            ]
        }
    }

  render() {
    return (
      <div>
        <table>
            <tr><th>Display all items</th></tr>
            {
                this.state.userData.map(data =>(
                    <Data key={data.id} id={data.id} name={data.name} userType={data.user_type} />

                ))
            }
            <tr><th>Disply based on user type</th></tr>
            {
                this.state.userData
                .filter(data=>(data.user_type=="Designer"))
                .map(data =>(
                    <Data key={data.id} id={data.id} name={data.name} userType={data.user_type} />
                ))
            }
            <tr><th>Filter all data starting with j</th></tr>
            {
                this.state.userData
                .filter(data=>(data.name[0]=="J"))
                .map(data=>(
                    <Data key={data.id} id={data.id} name={data.name} userType={data.user_type} />
                ))
            }
            <tr><th>Filter all data based on age greater than 28 and age less than or equal to 50</th></tr>
            {
                this.state.userData
                .filter(data=>(28<data.age && data.age<=50))
                .map(data=>(
                    <Data key={data.id} id={data.id} name={data.name} userType={data.user_type} />
                ))
            }
            <tr><th>Find the total years of the designer</th></tr>
            {
                this.state.userData
                .filter(data=>data.user_type=="Designer")
                .map(data =>(data.years))
                .reduce((data,res) => res+data)
            }
        </table>
      </div>
    )
  }
}

export default HigherOrderComponent
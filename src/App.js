import React from 'react';
import Header from './components/Header.js';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { addTodo, toggleTodo, setVisibilityFilter, VisibilityFilters } from './actions'
import Gauge from 'react-svg-gauge';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
        valueArr:[{index:0,value:1}]
    };
    
  }

  componentDidMount(){
    var self = this;

    // setInterval(function(){

    //   var min = 0;

    //   var max = 1000

    //   var value = Math.floor(Math.random() * (max - min)) + min;

    //   var index = self.state.valueArr[self.state.valueArr.length-1].index +1

    //   var newArray = []

    //   var newObj = {index:index, value:value};

    //   newArray= [...self.state.valueArr,newObj]

    //   self.setState({
    //     valueArr:newArray
    //   })

    // },1500)

    console.log(this.props)

    console.log('CANT BELIEVE THIS IS WORKING!!!')

  }
 
  render() {
    const self = this;

    return (
    	<div id="wrapper">
        <Header/>
        
        <LineChart width={730} height={250} data={this.props.rng}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <XAxis dataKey="index"/>
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
        </LineChart> 

        <Gauge value={this.props.rng[this.props.rng.length-1].value} max={1000} width={400} height={320} label="Gauge" />

      </div>
      
    );
  }
}
export default App;
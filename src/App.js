import React from 'react';
import Header from './components/Header.js';
import ChartComponent from './components/LineChart.js';
import GaugeComponent from './components/Gauge.js'
import { addTodo, toggleTodo, setVisibilityFilter, VisibilityFilters } from './actions'
import {Responsive, WidthProvider} from 'react-grid-layout';
const ResponsiveReactGridLayout = WidthProvider(Responsive);

 var layout = [
      {key:"1",x:5,y:10,w:2,h:2},
      {key:"2",x:0,y:5,w:4,h:4}
    ];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
        valueArr:[{index:0,value:1}]
    };
    
  }

  componentDidMount(){

  }
 
  render() {
    const self = this;

    return (
      

    	<div id="wrapper">
        <Header/>

        <ResponsiveReactGridLayout className="layout" layouts={layout}
        breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
        cols={{lg: 12, md: 10, sm: 6, xs: 4, xxs: 2}}
        useCSSTransforms={true}>

           <div key={"1"} >
              <ChartComponent rng={this.props.rng}/>
           </div>
           <div key={"2"}>
              <GaugeComponent rng={this.props.rng}/>
           </div>

        </ResponsiveReactGridLayout>
      </div>
      
    );
  }
}
export default App;
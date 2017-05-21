import React from 'react';
import Gauge from 'react-svg-gauge';
import Panel from 'muicss/lib/react/panel';

class GaugeComponent extends React.Component {
	constructor() {
    super();
    this.state = {
    };
  }

	render(){
	
		return(
		
				<Gauge value={this.props.rng[this.props.rng.length-1].value} 
				max={1000} width={400} height={320} label="" />

		)
	}
}
export default GaugeComponent;
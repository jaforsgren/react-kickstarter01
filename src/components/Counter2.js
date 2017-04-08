import React from 'react'

class Counter2 extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }


  componentDidMount() {
    // `isMounted` is not available in ES6 Component class
    this._isMounted = true;
 
  
  }
  
  componentWillUnmount() {
    this._isMounted = false;
  }





  updateCount() {   
        
        if (this._isMounted)
        {  
          console.log('+1')
          this.setState((prevState, props) => {          
           return { count: prevState.count + 1 }
          });  
        }                                        
  }

  render() {
 
    return (  

            <button  className="btn btn-danger"
              onClick={() => this.updateCount()}
            >
              Clicked {this.state.count} times
            </button>          
            );
  }
}
export default Counter2

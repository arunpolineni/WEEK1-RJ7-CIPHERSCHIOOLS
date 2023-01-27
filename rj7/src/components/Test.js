import React,{ Component } from 'react';


// Now a days we donot use class based components because,
// 1. they are very heavy
// 2. they actually import the properties from react component 
// 3. they contain extra things which developer did not want as a result it consumes a lot of storage then function component

// Class component are very powerful but functional components are not at all powerful
// To make functional component powerful we use the concept of hooks.

class Test extends Component{
    render(){
        return(
            <div>
                
                <h1>hello</h1>
            </div>
        )
    }
}
export default Test;
// import React from "react";
// import * as React from "react";


// export default function Test() {
//     return (
//       <p>HEllo</p>
//     );
//   }

import * as React from 'react';

export interface TestProps {
    count: number;
}
 
export interface TestState {
    count: number;
}
 
class Test extends React.Component<TestProps, TestState> {
    state = { count:0  }
    render() { 
        return ( <h2>this is test</h2> );
    }
}
 
export default Test;

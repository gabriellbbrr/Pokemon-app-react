import React, {FunctionComponent} from 'react';
  
const App: FunctionComponent = () => {
 const name: String = 'React';
    
 return (
  <h1>Bonjour, {name} !</h1>
 )
}
  
export default App;


/*
import React from 'react';

export default class App extends React.Component {
    const name: String = 'React';

    render() {
        return <h1>Bonjour, {name} !</h1>;
    }
}
*/
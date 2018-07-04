import React, { Component } from 'react';

import MainContent from '../maincontent/MainContent.jsx'
import Header from '../header/Header.jsx'
import Footbar from '../footbar/Footbar.jsx'


class App extends Component {

    render() {
        return (   <div className = "app"> <Header/> 
        <MainContent/>
        <Footbar/>
      </div>
       );
    }
}

export default App;
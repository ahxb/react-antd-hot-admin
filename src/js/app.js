import React, { Component } from 'react';
import { Button } from 'antd';
import { Progress } from 'antd';
import '../css/app.css';

class App extends Component {
    render() {
        let logo = '';
        
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React111111111</h2>
                    <input type="text"/>
                    <Button type="primary">Primary</Button>

                </div>
                <div>
                        <Progress type="circle" percent={75} />
                        <Progress type="circle" percent={70} status="exception" />
                        <Progress type="circle" percent={100} />

                </div>

                <h1>asdfsdf</h1>
                <h2>adfasdfas</h2>
                aasdhfaksjdhfh
            </div>
        );
    }
}

export default App;

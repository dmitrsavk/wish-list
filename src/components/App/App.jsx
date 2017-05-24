import React from 'react';

import './App.scss';
import './bootstrap.min.css';
import LoginPage from '../LoginPage';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='App'>
                <LoginPage />
            </div>
        );
    }
}

export default App;

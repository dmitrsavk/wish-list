import React from 'react';
import PropTypes from 'prop-types';

import './App.scss';
import './bootstrap.min.css';


class App extends React.Component {
    static get propTypes() {
        return {
            children: PropTypes.node
        };
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='App'>
                {this.props.children}
            </div>
        );
    }
}

export default App;

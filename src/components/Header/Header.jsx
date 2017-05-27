import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import PropTypes from 'prop-types';

import './Header.scss';

class Header extends React.Component {
    static get propTypes() {
        return {
            buttonContent: PropTypes.string,
            buttonHref: PropTypes.string
        };
    }

    render() {
        return (
            <div className='header'>
                <div className='header-label'>
                    Wish list
                </div>
                <div className='header-signup'>
                    <Button bsStyle='success'
                        href={this.props.buttonHref}
                    >
                        {this.props.buttonContent}
                    </Button>
                </div>
            </div>
        );
    }
}

export default Header;

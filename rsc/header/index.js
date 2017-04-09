//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { defaultFontSize, defaultTextColor, muted as mutedTextColor } from '../variables';

// create a component
class Header extends Component {

    _setHeaderDetails = (type, muted) => {
        
        var ratio = 1;
        var color = defaultTextColor;

        switch (type) {
            case 'h1':
                ratio = 2.5;
                break;
            case 'h2':
                ratio = 2;
                break;
            case 'h3':
                ratio = 1.75;
                break;
            case 'h4':
                ratio = 1.5;
                break;
            case 'h5':
                ratio = 1.25;
                break;
            case 'h6':
                ratio = 1;
                break;
            default:
                ratio = 1;
                break;
        }

        if(muted){
            color = muted
        }

        return defaultFontSize * ratio;
    }

    render() {

        const {
            type, muted, style, children
        } = this.props;

        var fontSize = this._setHeaderDetails(type);
        var color = muted ? mutedTextColor : defaultTextColor;
        var fontWeight = '600';

        return (
            <Text style={[{fontSize, color, fontWeight}, style]}>{children}</Text>
        );
    }
}

Header.propTypes = {
    type: React.PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
    muted: React.PropTypes.bool,
}

Header.defaultProps = {
    type: 'h1',
    muted: false,
    style: {}
}

export default Header;

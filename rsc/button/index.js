import React, { Component } from 'react';
import ReactNative from 'react-native';

const {
    Text,
    View,
    TouchableOpacity,
    StyleSheet,
} = ReactNative;

import {
    colorsArray,
    primary,
    success,
    danger,
    info,
    warning,
    gutter,
    radius,
    defaultTextColor,
    defaultFontSize,
    defaultFontWeight,
} from '../variables';

// create a component
class Button extends Component {

    _setbackgroundColor = (outline, type) => {
        if (!outline) {
            switch (type) {
                case 'primary':
                    return primary;
                case 'success':
                    return success;
                case 'info':
                    return info;
                case 'warning':
                    return warning;
                case 'danger':
                    return danger;
                default:
                    return primary;
            }
        } else {
            return 'transparent';
        }
    }

    _setTextColor = (outline, type) => {
        if (outline) {
            switch (type) {
                case 'primary':
                    return primary;
                case 'success':
                    return success;
                case 'info':
                    return info;
                case 'warning':
                    return warning;
                case 'danger':
                    return danger;
                default:
                    return primary;
            }
        } else {
            return defaultTextColor;
        }
    }

    _setBorderColor = (outline, type) => {
        if (outline) {
            switch (type) {
                case 'primary':
                    return primary;
                case 'success':
                    return success;
                case 'info':
                    return info;
                case 'warning':
                    return warning;
                case 'danger':
                    return danger;
                default:
                    return primary;
            }
        } else {
            return 'transparent';
        }
    }

    render() {

        const {
            children, borderRadius, fontWeight,
            fontSize, color, gutter,
            onPress, style, padding,
            type, outline, textStyle,
            borderWidth
        } = this.props;

        var backgroundColor = this._setbackgroundColor(outline, type);
        var textColor = this._setTextColor(outline, type);
        var borderColor = this._setBorderColor(outline, type);

        return (
            <TouchableOpacity
                style={[{ borderRadius, borderColor, borderWidth, backgroundColor, padding }, style]}
                onPress={onPress}
            >
                <Text style={[textStyle, { color: textColor, fontSize, fontWeight }]}>
                    {children}
                </Text>
            </TouchableOpacity>
        );
    }
}

Button.defaultProps = {
    type: 'primary',
    borderRadius: radius,
    padding: gutter,
    color: defaultTextColor,
    fontWeight: defaultFontWeight,
    fontSize: defaultFontSize,
    outline: false,
    borderWidth: 1,
    style: {},
    textStyle: {},
};

Button.propTypes = {
    borderRadius: React.PropTypes.number,
    type: React.PropTypes.oneOf(colorsArray),
    outline: React.PropTypes.bool,
    backgroundColor: React.PropTypes.string,
    color: React.PropTypes.string,
    gutter: React.PropTypes.number,
    fontWeight: React.PropTypes.string,
    children: React.PropTypes.string.isRequired,
    fontSize: React.PropTypes.number,
    onPress: React.PropTypes.func,
};

export default Button;

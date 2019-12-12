import React from 'react';
import { View, TextInput, Animated } from 'react-native';

const { useEffect, useState } = React;
const FloatingLabelInput = (props) => {

    const [state, setState] = useState({
        isFocused: false,
        animatedIsFocused: new Animated.Value(0)
    });
    const { animatedIsFocused } = state;
    const animate = () => {
        Animated.timing(animatedIsFocused, {
            toValue: state.isFocused ? 1 : 0,
            duration: 200,
        }).start();
    }
    useEffect(() => {
        animate()
    }, [animate])

    const handleFocus = () => setState({ ...state, isFocused: true });
    const handleBlur = () => setState({ ...state, isFocused: false });


    const { label } = props;
    const labelStyle = {
        position: 'absolute',
        left: 0,
        top: animatedIsFocused.interpolate({
            inputRange: [0, 1],
            outputRange: [18, 0],
        }),
        fontSize: animatedIsFocused.interpolate({
            inputRange: [0, 1],
            outputRange: [20, 14],
        }),
        color: animatedIsFocused.interpolate({
            inputRange: [0, 1],
            outputRange: ['#aaa', '#000'],
        }),
    };
    return (
        <View style={{ paddingTop: 18, width: 200 }}>
            <Animated.Text style={labelStyle}>
                {label}
            </Animated.Text>
            <TextInput
                {...props}
                style={{ height: 26, fontSize: 20, color: '#000', borderBottomWidth: 1, borderBottomColor: '#555' }}
                onFocus={handleFocus}
                onBlur={handleBlur}
                blurOnSubmit
            />
        </View>
    );

}

export default FloatingLabelInput;
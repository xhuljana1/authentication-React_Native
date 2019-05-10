import React from "react"
import { Text, TouchableOpacity } from "react-native"

const Button = (props) => {
    const {onPress, children} = props
    const {buttonStyle, textStyle} = styles

    return (
        <TouchableOpacity 
        style = {buttonStyle}
        onPress= {onPress}>
            <Text style = {textStyle}>{children}</Text>
        </TouchableOpacity>
    )
}

const styles = {
    textStyle: {
        alignSelf: "center",
        color: "#007aff",
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonStyle: {
        // expand and fill as much content as we can
        flex: 1,
        // stretch to fill limits of a container
        alignSelf: "stretch",
        backgroundColor: "#fff",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#007aff",
        marginLeft: 5,
        marginRight: 5
    }
}

export {Button} 
import {StyleSheet} from "react-native";

const css = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#00A859",
        alignItems: "center",
        justifyContent: "center",
    },
    textPage:{
        backgroundColor: "white",
        padding: 20
    },
    greenbg:{
        backgroundColor: "#00A859"
    },
    login__img:{
        width: 110,
        height: 110,
        marginBottom: 130
    },
    login__msg: (text='none')=> ({
        fontSize: 22,
        fontWeight:"bold",
        color: "red",
        marginTop: 10,
        marginBottom: 15,
        display: text
    }),
    login__form:{
        width: "80%",
        marginBottom: 150
    },
    login__input:{
        backgroundColor: "white",
        fontSize: 19,
        padding: 7,
        marginBottom: 30
    },
    login__button:{
        padding: 15,
        textDecorationColor: "#00A859",
        backgroundColor: "white",
        alignSelf: "center",
        borderRadius: 5,
        marginTop: 10,
        width: 170,
        alignItems: "center"
    },
    login__buttonText:{
        fontWeight: "bold",
        fontSize: 22,
        color: "#333"
    }
});

export {css};
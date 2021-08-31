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
    img__icon:{
        width: 110,
        height: 110,
        marginBottom: 70
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
        marginBottom: 60
    },
    login__input:{
        backgroundColor: "white",
        fontSize: 19,
        padding: 7,
        marginBottom: 30
    },
    login__button:{
        padding: 15,
        backgroundColor: "white",
        alignSelf: "center",
        borderRadius: 5,
        marginTop: 10,
        width: 170,
        alignItems: "center"
    },
    login__buttonText:{
        fontWeight: "bold",
        fontSize: 25,
        color: "#00A859"
    },
    cadastro__input:{
        backgroundColor: "white",
        fontSize: 19,
        padding: 7,
        marginBottom: 30
    },
    cadastro__button:{
        padding: 15,
        backgroundColor: "#C0C0C0",
        alignSelf: "center",
        borderRadius: 5,
        marginTop: 10,
        width: 170,
        alignItems: "center"
    },
    cadastro__buttonText:{
        fontWeight: "bold",
        fontSize: 22,
        color: "white"
    },
    cadastro__img__icon:{
        width: 110,
        height: 110,
        marginBottom: 60

    },
    login__buttonTextCriarConta:{
        fontSize: 17,
        color: "#C0C0C0",
        marginLeft: 30,
        marginTop: 20
    },
    login__buttonEntrarComoConvidado:{
        padding: 15,
        backgroundColor: "#C0C0C0",
        alignSelf: "center",
        borderRadius: 5,
        width: 250,
        height: 50,
        alignItems: "center",
        marginTop: 80
    },
    login__buttonTextEntrarComoConvidado:{
        fontSize: 18,
        color: "white"
    },
});

export {css};
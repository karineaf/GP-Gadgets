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
        width: "100%",
        backgroundColor: "#00A859"
    },
    img__icon:{
        width: 110,
        height: 110,
        marginBottom: 70,
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
    cadastro__form:{
        width: "80%",
        marginBottom: 130
    },
    cadastro__input:{
        backgroundColor: "white",
        fontSize: 19,
        padding: 7,
        marginBottom: 20
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
        marginBottom: 100

    },
    login__buttonTextCriarConta:{
        fontSize: 17,
        color: "#C0C0C0",
        marginLeft: 30,
        marginTop: 30
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
    telaInicial__container: {
        backgroundColor: "#00A859",
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    telaInicial__search:{
        backgroundColor: "white",
        fontSize: 19,
        padding: 7,
        width: "100%",
        height: "10%",
        // marginBottom: "50%"
    },
    telaInicial__map:{
        height: "75%",
        backgroundColor: 'gray'
    },
    telaInicial__icon:{
      height: "5%",
    },
    telaInicial__img__icon:{
        width: 50,
        height: 50,
        alignSelf: "center",
    },

    telaDois__container: {
        backgroundColor: "#00A859",
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    telaDois__search:{
        backgroundColor: "white",
        fontSize: 19,
        padding: 7,
        width: "100%",
        height: "10%",
        opacity: 0.5
        // marginBottom: "50%"
    },
    telaDois__map:{
        height: "45%",
        backgroundColor: 'black'
    },
    telaDois__instrucao:{
        height: "30%",
        width: "100%",
        backgroundColor: 'white'
    },
    telaDois__icon:{
        height: "5%",
    },
    telaDois__img__icon:{
        width: 40,
        height: 40,
        alignSelf: "center",
    },




});

export {css};
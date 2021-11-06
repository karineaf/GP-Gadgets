import {StyleSheet} from "react-native";

const css = StyleSheet.create({
    
    //Layout principal
    containerAll: {
        flex: 1,
        alignItems: "center",
    },

    containerBack: {
        width: '100%',
        height: '100%',
        position: 'absolute',
    },

    TelaInicialPesquisa:{
        padding: 5,
        marginTop: "10%",
        width: "100%",
        height: "30%",
        zIndex: 1,
    },

    Mapa:{
        height: "100%",
        width: '100%',
    },

    telaInicial__map:{
        height: "100%",

    },



















    textPage:{
        backgroundColor: "white",
        padding: 20
    },
    greybg:{
        width: "100%",
        backgroundColor: "#484D50"
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
        fontSize: 16,
        padding: 7,
        marginBottom: 30
    },
    login__button:{
        padding: 12,
        backgroundColor: "#00A859",
        alignSelf: "center",
        borderRadius: 5,
        width: "100%",
        alignItems: "center"
    },
    login__buttonText:{
        fontWeight: "bold",
        fontSize: 25,
        color: "white"
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
        backgroundColor: "#00A859",
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
        alignSelf: "center",
        marginTop: "5%"
        /*Cores da tela inicial e botões alterados para melhor aparência. Cores a Definir */
    },
    login__buttonEntrarComoConvidado:{
        padding: 15,
        backgroundColor: "#f7a156",
        alignSelf: "center",
        borderRadius: 5,
        width: 220,
        height: 50,
        alignItems: "center",
        position: "absolute",
        marginTop: 260
    },
    login__buttonTextEntrarComoConvidado:{
        fontSize: 18,
        color: "white"
    },
    telaInicial__container: {
        backgroundColor: "#00A859",
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        width: "100%"
    },


    telaInicial__view__icon:{
      height: "4%",
    },
    telaInicial__img__icon:{
        width: 50,
        height: 50,
        alignSelf: "center",
        alignContent: "center",
        marginTop: "3%"
    },
    telaDois__container: {
        backgroundColor: "#00A859",
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    telaDois__view__search:{
        marginTop: "10%",
        backgroundColor: "white",
        fontSize: 19,
        padding: 7,
        width: "100%",
        height: "12%"
    },
    telaDois__view__map:{
        height: "38%",
        backgroundColor: "white",
        width: "100%"
    },
    telaDois__map:{
        height: "100%",
        width: "100%"
    },
    telaDois__view__instruction:{
        height: "38%",
        backgroundColor: "white",
        width: "100%",
        alignSelf: "center",
        alignContent: "center"
    },
    telaDois__view__icon:{
        height: "4%",
    },
    telaDois__img__icon:{
        width: 50,
        height: 50,
        alignSelf: "center",
        alignContent: "center",
        marginTop: "3%"
    },
    imageicon:{
        width: 100,
        height: 100,
        left: 160,
    }
});

export {css};
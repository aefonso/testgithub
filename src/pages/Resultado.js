import { View, Text } from "react-native";

export default props =>{
    return (
        <View>
            <Text>Tela de Resultado</Text>
            <Text>Nome:{props.route.params.nomeDigitado}</Text>
            <Text>CPF:{props.route.params.cpfDigitado}</Text>
            <Text>Senha:{props.route.params.senhaDigitada}</Text>
        </View>
    )
}
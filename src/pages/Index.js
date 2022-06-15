import { View, Text, TextInput, Button} from "react-native";
import { useState } from "react";

export default props =>{
    
    const [nome, setNome] = useState('')
    const [cpf, setCpf] = useState('')
    const [senha, setSenha] = useState ('')
   
    return (
        <View>
            <Text>Tela Inicial</Text>
            <Text>Nome:</Text>
            <TextInput 
            placeholder="Digite o nome completo" 
            onChangeText={setNome}
            />
            <Text>CPF:</Text>
            <TextInput
            placeholder="Digite o cpf"
            onChangeText={setCpf}
            />
            <Text>Senha:</Text>
            <TextInput
            placeholder="Livre"
            onChangeText={setSenha}
            secureTextEntry={true}
            />
            <Button 
            title="Enviar"
            onPress={() =>{
                props.navigation.navigate("Resultado",
                 {  nomeDigitado:nome, 
                    cpfDigitado:cpf,
                    senhaDigitada:senha
                })
            }}
            />
         
        </View>
    )
}
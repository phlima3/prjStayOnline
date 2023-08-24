import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
  ScrollView,
} from "react-native";
import estilos from "./estilos";
import api from "../../services/api";
import { buscaUsuario } from "../../services/requests/user";

export default function Principal({ navigation }) {
  const [nomeUsuario, setNomeUsuario] = useState("");
  const [usuario, setUsuario] = useState({});

  async function busca() {
    const resultado = buscaUsuario(nomeUsuario);

    if (resultado) {
      setUsuario(resultado);
    } else {
      Alert.alert("Usuário não encontrado");
    }
  }

  return (
    <ScrollView>
      <View style={estilos.container}>
        <>
          <View style={estilos.fundo} />
          <View style={estilos.imagemArea}>
            <Image
              source={{
                uri: "https://avatars.githubusercontent.com/u/88408945?v=4",
              }}
              style={estilos.imagem}
            />
          </View>
          <Text style={estilos.textoNome}>phlima3</Text>
          <Text style={estilos.textoEmail}>pedrolima3dev@gmail.com</Text>
          <View style={estilos.seguidoresArea}>
            <View style={estilos.seguidores}>
              <Text style={estilos.seguidoresNumero}>30</Text>
              <Text style={estilos.seguidoresTexto}>Seguidores</Text>
            </View>
            <View style={estilos.seguidores}>
              <Text style={estilos.seguidoresNumero}>65</Text>
              <Text style={estilos.seguidoresTexto}>Seguindo</Text>
            </View>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("Repositorios")}>
            <Text style={estilos.repositorios}>Ver os repositórios</Text>
          </TouchableOpacity>
        </>

        <TextInput
          placeholder="Busque por um usuário"
          autoCapitalize="none"
          style={estilos.entrada}
        />

        <TouchableOpacity style={estilos.botao} onPress={() => busca()}>
          <Text style={estilos.textoBotao}>Buscar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

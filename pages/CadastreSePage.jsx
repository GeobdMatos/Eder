import { ScrollView, StatusBar, StyleSheet, View } from 'react-native'
import { Logo } from '../components/Logo'
import { CadastreSeForm } from '../components/CadastreSeForm'
import { Sugestao } from '../components/Sugestao'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { BotaoAzul } from '../components/BotaoAzul'
import { CadastrarVagaForm } from '../components/CadastrarVagaForm'

export const CadastreSePage = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <ScrollView>
          <StatusBar barStyle="default" />
          <Logo />
          <View style={styles.form}>
            <CadastrarVagaForm />
          </View>
          <View style={styles.sugestao}>
            <Sugestao
              message="Já está cadastrado?"
              goto="Login"
              onNavigate={() => {}}
            />
          </View>
          <BotaoAzul texto="Cadastrar-se" />
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  form: {
    marginTop: 38,
    marginBottom: 12,
  },
  sugestao: {
    alignItems: 'flex-end',
    width: '92%',
  },
})

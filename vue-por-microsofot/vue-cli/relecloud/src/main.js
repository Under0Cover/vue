import { createApp } from 'vue'
import OliverHost from './components/Host.vue'

createApp(OliverHost).mount('#app')
/*
    UTILIZANDO O EXEMPLO DA MICROSOFT, O VUE RETORNA UM ERRO.
    EU ENCONTREI UMA SOLUÇÃO NA INTERNET.
    LINK: https://stackoverflow.com/questions/71205264/component-name-temp-should-always-be-multi-word-vue-multi-word-component-names
    O ERRO É SIMPLES, PORÉM PODE SER COMPLICADO PARA QUEM ESTÁ COMEÇANDO.
    BASICAMENTE O RETORNO DO ERRO DIZ QUE O NOME DO SEU COMPONENTE DE SER UMA PALAVRA MÚLTIPLA AO INVÉS DE UMA GENÉRICA.
    SUBSTITUA A PALAVRA 'HOST' POR OUTRA PALAVRA, NO MEU CASO, 'OLIVERHOST' E FUNCIONARÁ PERFEITAMENTE
*/
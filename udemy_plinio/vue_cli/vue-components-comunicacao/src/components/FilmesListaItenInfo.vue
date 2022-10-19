<template>
    <div>
        <div v-if="filme">
            <h2>Filme selecionado</h2>
    
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">{{ filme.titulo }} | {{ filme.ano }}</h5>
                    <button class="btn btn-danger float-right">Editar</button>
                </div>
            </div>
        </div>
        <p v-else></p>
        <!-- 
            OPTEI POR NÃO EXIBIR NADA QUANDO O FILME NÃO ESTIVER SELECIONADO
            VISUALMENTE FICOU COM INFORMAÇÃO DESNECESSÁRIA
         -->
    </div>
</template>

<script>
export default {
    props: {
        filme: Object
    }
}
</script>
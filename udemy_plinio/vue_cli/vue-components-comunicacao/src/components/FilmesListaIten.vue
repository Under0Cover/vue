<template>
    <li class="list-group-item">
        <span>{{ filme.titulo }} | {{ filme.ano }} </span>
        <button @click="selecionar" class="btn btn-success float-right">Selecionar</button>
    </li>
</template>

<script>
    export default {
        props: {
            filme: {
                typeof: Object,
                require: true
            }
        },
        methods: {
            selecionar(event){
                this.$emit('selecionarFilme', this.filme)
                console.log(event)
            }
        }
    }
</script>
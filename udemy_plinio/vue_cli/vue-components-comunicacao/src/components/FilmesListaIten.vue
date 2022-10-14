<template>
    <li class="list-group-item">
        <span>{{ filmeTituloConcatenado }} | {{ ano }} </span>
        <button class="btn btn-success float-right">Selecionar</button>
    </li>
    <hr>
    <input type="text" :value="titulo" :placeholder="$attrs.placeholder">
</template>

<script>
    export default {
        inheritAttrs: false,
        props: {
            titulo: {
                type: String,
                required: true
            },
            ano: {
                type: Number,
                required: true
            }
        },
        computed: {
            filmeTituloConcatenado(){
                return `Título: ${this.titulo}`
            }
        },
        created(){
            console.log('Filme título: ', this.titulo)
        }
    }
</script>
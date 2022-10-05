<template>
    <li class="list-group-item">
        <span>{{ filmeTituloConcatenado }}</span>
        <button class="btn btn-success float-right">Selecionar</button>
    </li>
</template>

<script>
    export default {
        props: {
            filmeTitulo: {
                type: String,
                // required: true,
                default() {
                    return 'Os Vingadores'
                },
                validator(filmeTitulo) {
                    return filmeTitulo.includes('Marvel');
                }  
            }
        },
        computed: {
            filmeTituloConcatenado(){
                return `Título: ${this.filmeTitulo}`
            }
        },
        created(){
            console.log('Filme título: ', this.filmeTitulo)
        }
    }
</script>
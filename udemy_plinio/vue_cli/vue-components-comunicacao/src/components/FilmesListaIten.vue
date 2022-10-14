<template>
    <li class="list-group-item">
        <span>{{ filme.titulo }} | {{ filme.ano }} </span>
        <button class="btn btn-success float-right">Selecionar</button>
    </li>
</template>

<script>
    export default {
        props: {
            filme: {
                typeof: Object,
                require: true
            }
        }
    }
</script>
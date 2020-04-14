<template>
        <div>
            <h1> {{ message }} </h1>
            <vuetable/>
        </div>
</template>

<script>
      import { vuetable } from "vuetable";

    export default {
        name: "QueryForm",
        components: {
          vuetable
        },
        props: [],
        data() {
            return {}
        },

        methods: {},
        computed: {},
        watch: {},

        /* Vue lifecycle hooks (Ref: https://vuejs.org/v2/guide/instance.html#Instance-Lifecycle-Hooks) */
        created() {},
        mounted() {},
        updated() {},
        destroyed() {}
    }
</script>

<style scoped></style>
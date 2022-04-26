var app = new Vue({
    el: "#app",
    data: {
        mensajebienvenida: "Primer proyecto Vue 2",
        numeroA: 50,
        numeroB: 25,
    },
    methods: {
        SumarAyB() {
        return this.numeroA - this.numeroB;
        },
    },
    computed: {
        MultiplicarAyB() {
            return this.numeroA * this.numeroB;
        }
    }
});
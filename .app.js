var app = new Vue({
    el: "#app",
    data: {
        mensajebienvenida: "Hola Mundo, bienvenidos",
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
var app = new Vue({
    el: "#app",
    data: {
    
        mensajeBienvenida: "Hola Mundo, bienvenidos",
        numeroA: 50,
        numeroB: 25,
    
    },
    methods: {
        SumarAyB() {
            console.log("SumarAyB")
        return this.numeroA + this.numeroB;
        },
    },
    computed: {
        MultiplicarAyB() {
            console.log("MultiplicarAyB")
            return this.numeroA * this.numeroB;
        }
    }
});
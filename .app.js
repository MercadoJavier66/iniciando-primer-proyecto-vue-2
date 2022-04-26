var app = new Vue({
    el: "#miPrimerApp",
    data: {
        mensajeBienvenida: "Hola Coders, Hola Mundo",
        numeroA: 12,
        numeroB: 24, 
    },

methods: {
    SumarAyB(){
        return this,nuemroA + this.numeroB ;
    }

},
computed:{
    NuevosumarAyB(){
    return this,nuemroA + this.numeroB ;
}

}
});
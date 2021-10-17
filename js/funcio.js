new Vue({
    el:'#seccion',
    data:{
        progra:'',
        tiemp:'',
        motiva:'',
        expe:'',
        lengua:'',
        lenguas:[],
        bandera: true
    },
    methods:{
        agregar(){
            this.lenguas.push(this.lengua);
            this.lengua='';
        },
        condicion1(){
            if(this.progra=="Si"){
                    this.bandera=true;
            }else{
                this.bandera=false;
            }
        }
        
    }
   
});
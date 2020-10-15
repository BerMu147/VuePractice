new Vue({
    el:'#vueapp',
    data:{
        name:'Bera',
        job:'Pinbal Player',
        age: 22,
        website:'https://www.olx.ba/',
        webTag:'<a href="https://www.olx.ba/">Online Pijaca</a>',
        x: 0,
        y: 0,
        ime: '',
        godine: ''
    },
    methods:{
        greet:function(){
            return "Caooo" + ' ' + this.name;
        },
        addYr:function(inc){
            this.age+=inc;
        },
        subYr:function(dec){
            this.age-=dec;
        },
        updateK:function(event){
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        Rams:function(){
            alert("Kako ces skinut RAM bokte? Fizicki ga ugradi ljudino.");
        },
        logName:function(){
            console.log('Unijeto je ime.')
        },
        logAge:function(){
            console.log("Unijete su godine.")
        }
    }
}); 
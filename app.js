const app = Vue.createApp({//vue başlangıc fonksiyonu
    data(){//veriler için data fonksiyonu
        return{
          
            showBooks:true,//true yaparsam görünür.
            /*  title:'The Final Empire', //title isimli veri
            author: 'Brandon Sanderson',
            age: 45,
            x:0,
            y:0
            */
           books:[
           {title:"Albert Einstein", author:"Ercan Gökyurt"},
           {title:"Steve Jobs", author:"Ahmet Seyrek"},
           {title:"Amok Koşucusu", author:"Stefan Zveıg"}
        ]
        }
    },
    methods:{
      /*  changeTitle(){ //kitap adı değiştirme fonksiyonu
            this.title="Lord Of the Rings"
        },
        changeTitleTwo(title){// ikinci değiştiren fonksiyon
            this.title=title
        }*/
        toggleShowBooks(){
            this.showBooks=!this.showBooks;
        },
        memos(e){
            const mem = document.querySelector(".box");
            mem.style.backgroundColor="red";
            console.log(e, e.type);//e.type eventin tipini gösterir.
        },

        handleMouseMove(e){//mouse üzerine gidince kordinatları alıyor.
            this.x=e.offsetX;//x kordinatı 
            this.y=e.offsetY;//y kordinatı
        }


    }
})

app.mount('#app')
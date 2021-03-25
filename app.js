const app = Vue.createApp({//vue başlangıc fonksiyonu
    data(){//veriler için data fonksiyonu
        return{
            
            showBooks:true,//true yaparsam görünür.
            title:'The Final Empire', //title isimli veri
            author: 'Brandon Sanderson',
            age: 45
        
        
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
            console.log(e)
        }


    }
})

app.mount('#app')
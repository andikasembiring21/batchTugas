<template>
        <div> 
           <h1>Selamat datang</h1>
           <ul> 
               <nav v-for="(item,i) in baru" :key="item.id">{{i+1}} - {{item.ket}}</nav>
           </ul>
           <br>
           <input v-model="my" placeholder="masukkan teks"/><br>
           <button @click="tbh">add</button>
           <button @click="del">del</button>
        </div>
</template>

<script>
    export default {
        data:function(){
            return {
              baru:[
                  {id:1,ket : "makan oiy"},
                  {id:2,ket : "udah bukak belum"},
                  {id:3,ket : "tunggu adzan"},
                  {id:4,ket : "santuy"},
                  ],
                  my:''
            }
        },
        methods: {
            tbh : function(){
                this.baru.push({ket : this.my})
            },
            del : function(){
                if(this.baru.length <=0){
                    this.my="kosong";
                }
                this.baru.pop({ket : this.my})
            },
        },
    }
</script>
<template>
  <div class="test">
      <form class="form" action="todouser" method="POST">
          <label for="name">Usernama : 
              <input type="text" name="name" id="name" placeholder="Your name"/>
          </label><br><br>
          <label for="pssd">Password : 
              <input type="password" name="pssd" id="pssd" placeholder="Sensitif carachter"/>
          </label>
          
          <br><br>
          <button type="submit" id="krm" @click="tambah">Kirim</button>
      </form>
  </div>
</template>

<script>
import axios from "axios";
const url = "http://localhost:3000/todouser"
export default {
    data: function(){
        return {
            tp:[],
            name : '',
            password:'',
        }
    },
    async created(){
    try{
         const res = await axios.get(url);
         this.tp = res.data;
        }catch(e){console.log(e)}
    },
    async tambah(){
        await axios.post(url,{name : this.name , password:this.password})
    }
}
</script>

<style>
.test{
    text-align:center;
    margin-top:200px;
}
#name,#pssd{
    margin-left: 10px;
    border-radius: 10px;
    padding:5px;
}
#krm{
    margin-left: 90px;
    border-radius: 10px;
    padding:2px 15px;
}
</style>
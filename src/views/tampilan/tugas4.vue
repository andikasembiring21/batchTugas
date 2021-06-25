<template>
  <div class="test">
      <form class="form" @submit.prevent="login" action="dftruser" method="POST">
          <label for="name">Usernama : 
              <input type="text" name="name" id="name" placeholder="Your name" v-model="username"/>
          </label><br><br>
          <label for="pssd">Password : 
              <input type="password" name="pssd" id="pssd" placeholder="Sensitif carachter" v-model="password"/>
          </label>
          
          <br><br>
          <button type="submit" id="krm">Kirim</button> 
      </form>
  </div>
</template>

<script>
import axios from "axios";
import { render } from 'vue';
const url = "http://localhost:3000/todouser"
export default {
    data: function(){
        return {
            tp:[],
            username : '',
            password:'',
        }
    },
    // async created() {
    //     this.tp=JSON.parse(localStorage.getItem('tp')) || []
    // },
    methods:{
       async login(){
            const res = await axios.post(url,{name : this.username, password : this.password})
            this.tp.push(res.data)
            localStorage.setItem('username',JSON.stringify(this.username))
            this.username=''
            this.password=''  
        },
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
<template>
  <h1> Daftar USers Login</h1>
  <br> 
  <ul> 
    <table class="table table-striped" style="width:100%">
        <thead>
          <tr> 
              <th>No.</th>
              <th>Username</th>
              <th>Action</th>
          </tr>
        </thead>
    </table>
      <nav v-for="(item,i) in tp" :key="item.id">
        <table class="table table-striped" style="width:100%">
        <tbody>
          <tr>
            <td>{{i+1}}</td>
            <td>{{item.name}}</td>
            <td> <button type="button" class="btn btn-light" @click="hapus(item._id)">Delete</button></td>
          </tr>
        </tbody>
      </table>
      </nav>
  </ul>
</template>

<script>
import axios from "axios";
import { reactive, render } from 'vue';
const url = "http://localhost:3000/dftruser"
export default {
    data: function(){
        return {
            tp:[],
            username : '',
            password:'',
            polling:null,
        }
    },
      methods : {
        polldata(){
          this.polling = setInterval(()=>{this.$store.dispatch(url);},1000)
        },
      async hapus(_id){
        if(this.tp.length == 1){
          document.getElementsByTagName(button).value =false;
        }
      await axios.delete(`http://localhost:3000/delete/${_id}`).then(() => {
      for(var i=0;i<this.tp.length;i++){
        if(this.tp[i]._id==_id)
          this.tp.splice(i,1)
          localStorage.removeItem('username',JSON.stringify(this.username))
          }
        })
      }
    },
    beforeDestroy() {
      clearInterval(this.polling)
    },
    async created(){
      this.polldata();
        try{
          const res = await axios.get(url);
          this.tp = res.data;
        }catch(e){console.log(e)}
      },
}
</script>

<style>
body {
    color: #404E67;
    background: #F5F7FA;
    font-family: 'Open Sans', sans-serif;
}
table.table {
    table-layout: fixed;
}
ul,h1{
  margin-left:10px;
}
button{
  text-align:Center;
  margin-left: 50px;
}
.hsl{
  display:flex;
  overflow-x: auto;
}
</style>
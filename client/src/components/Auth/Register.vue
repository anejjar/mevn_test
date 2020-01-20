<template>
  <div class="form">
    <h1>Register</h1>
    <div class="form-group">
       <label for="InputName">Name:</label>
      <input v-model="name" type="text" name="name" id="InputName" class="form-control">
      <small id="emailHelp" class="form-text text-muted"></small>
    </div>
    <div class="form-group">
       <label for="InputEmail">Email address:</label>
      <input v-model="email" type="email" name="email" id="InputEmail" class="form-control">
      <small id="emailHelp" class="form-text text-muted"></small>
    </div>
    <div class="form-group">
      <label for="InputPassword">Password:</label>
      <input v-model="password" type="password" name="password" id="InputPassword" class="form-control">
      <small id="PasswordHelp" class="form-text text-muted"></small>
    </div>
    <button type="submit" @click.prevent="register" class="btn btn-primary">Submit</button>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService';
export default {
  data(){
    return{
      name:'',
      email:'',
      password:''
    }
  },
  methods: {
     register(){
     AuthenticationService.register({
         name:this.name,
         email:this.email,
         password:this.password
      })
      //  console.log(res.data);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.form{
  padding: 10px;
  border: 1px solid #cccccc;
  
}
</style>

<template>
  <div class="container">
    <div class=" row justify-content-center">
      <div class="col-md-6 form">
        <h1>Register</h1>
        <div class="form-group">
          <label for="InputName">Name:</label>
          <input v-model="name" type="text" name="name" id="InputName" class="form-control" placeholder="Your full name">
          <small id="emailHelp" class="form-text text-muted"></small>
        </div>
        <div class="form-group">
          <label for="InputEmail">Email address:</label>
          <input v-model="email" type="email" name="email" id="InputEmail" class="form-control" placeholder="Email address">
          <small id="emailHelp" class="form-text text-muted"></small>
        </div>
        <div class="form-group">
          <label for="InputPassword">Password:</label>
          <input v-model="password" type="password" name="password" id="InputPassword" class="form-control" placeholder="********">
          <small id="PasswordHelp" class="form-text text-muted"></small>
        </div>
        <button type="submit" @click.prevent="register" class="btn btn-primary">Submit</button>
      </div>
    </div>
    <pre>{{err}}</pre>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService';
export default {
  data(){
    return{
      name:'',
      email:'',
      password:'',
      err:{},
      loading:false,
    }
  },
  methods: {
    register(){
      AuthenticationService.register({
         name:this.name,
         email:this.email,
         password:this.password
      }).then((res)=>{
        this.err = res;
      }).catch((err)=>{
        this.err = err;
      });
    
      //  console.log(User);
    },
    hundleErrors(err){
      if(err  instanceof Array && err.length>0){
        err.forEach(error=>{
          if(error.name){
            this.loading = false;
          }
        })
      }
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

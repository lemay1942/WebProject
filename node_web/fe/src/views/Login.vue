<template>
  <v-container fill-height>
    <v-layout row wrap align-center>
      <v-flex xs12>
        <v-toolbar flat>
         <v-toolbar-title>LOGIN</v-toolbar-title>
       </v-toolbar>
        <v-card>
          <div class="pa-3">
            <v-text-field
                v-model="email"
                label="input your email"

            >
            </v-text-field>
            <v-text-field
                v-model="password"
                label="input your password"
                type="password"
            >
            </v-text-field>
            <v-btn
             large
             block
             color="primary"
             @click="login()"
            >LOGIN</v-btn>
          </div>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      email: null,
      password: null,
      allUsers: [
        {id:1, name: 'lemay', email:'lemay1942@gmail.com', password:'12345'},
        {id:2, name: 'music', email:'musickim1942@gmail.com', password:'12345'}
      ]
    }
  },
  methods: {
    login() {
      let selectUser = null
      this.allUsers.forEach(user =>{
        if(user.email === this.email) selectUser = user
      })
      if (selectUser === null) alert('Not found email')
        else{
        if(selectUser.password !== this.password)
          alert('Login failed')
          else{
          alert('Login success')
        }
      }
      console.log(this.email, this.password)
    }
  }
}
</script>

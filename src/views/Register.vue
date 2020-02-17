<template>
  <div>
    <div class="max-w-xs m-auto tracking-tight pt-10">
      <form @submit.prevent="register" class="bg-teal-500 shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            v-model="account.username"
            type="text"
            placeholder="Username"
          />
        </div>
        <div class="mb-6">
          <input
            class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            v-model="account.password"
            type="password"
            placeholder="******************"
          />
            <p class="text-xs text-gray-100" v-if="errors.length">
              <b>Please correct the following error(s):</b>
              <ul>
                  <li v-for="error in errors" :key="error.index"> - {{ error }}</li>
              </ul>
            </p>
        </div>
        <div class="flex items-center justify-between">
          <button
            class="bg-transparent hover:bg-gray-100 text-gray-100 font-semibold hover:text-teal-500 py-2 px-4 border border-grey-100 rounded"
          >Register</button>
          <router-link to="/login">
            <a
              class="inline-block align-baseline font-bold text-sm text-gray-300 hover:text-gray-100"
              href="#"
            >Have an account?</a>
          </router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
const client = require("../activity-finder-client");
export default {
  data() {
    return {
      errors: [],
      account: {
        username: "",
        password: "",
        id: "",
      }
    };
  },
  methods: {
    register() {
      client.createAccount(this.account, (errors, id) => {
        if (errors.length == 0) {
          // id = the id the newly created account got if everything went OK.
          this.account.id = id;
          // sign in the user
           this.$emit("setSignIn", this.account)
          // redirect user to users page
          this.$router.push({path: "/account/"+id});
        } else {
          this.errors = errors;
          console.log(errors);
        }
      });
    }
  }
};
</script>

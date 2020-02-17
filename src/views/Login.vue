<template>
  <div>
    <div class="max-w-xs m-auto tracking-tight pt-10">
      <form
        @submit.prevent="login"
        class="bg-teal-500 shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div class="mb-4">
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            v-model="user.username"
            placeholder="Username"
          />
        </div>
        <div class="mb-6">
          <input
            class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            v-model="user.password"
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
          >
            Login
          </button>
          <a
            class="inline-block align-baseline font-bold text-sm text-gray-300 hover:text-gray-100"
            href="#"
            >Forgot Password?</a
          >
        </div>
      </form>

      <router-link to="/register">
        <p class="text-center text-teal-700 text-xs">
          No account? Register now!
        </p>
      </router-link>
    </div>
  </div>
</template>

<script>
const client = require("../activity-finder-client");
export default {
  data() {
    return {
      errors: [],
      user: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    login() {
      client.signIn(
        this.user.username,
        this.user.password,
        (errors, account) => {
          // errors = array with error codes (empty if everything went OK).
          // account = object with info about the account you signed into if everything went OK.
          if (errors.length == 0) {
            // account = {id: 85, username: "Greta"}
            // PASS DATA TO APP.VUE (SET user.isSignedIn = true)
             this.$emit("setSignIn", account)
             // redirect user
             this.$router.push({path: "/account/"+account.id});
          } else {
            this.errors = errors;
            console.log(errors);
            

            // errors = ["errorCode1", "errorCode2", ...]
            // Possible errors codes:
            //  - "networkError": Couldn't connect to the backend.
            //  - "backendError": The backend couldn't execute the request for some reason.
            //  - "wrongCredentials": The username of password is incorrect.
          }
        }
      );
    }
  }
};
</script>

<style></style>

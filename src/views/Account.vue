<template>
  <div class="mt-2">
    <p class="text-3xl font-bold text-teal-600">Account</p>
    <p class="text-smfont-bold text-teal-600">{{ account.username }}</p>
  </div>
</template>

<script>
const client = require("../activity-finder-client");

export default {
  components: {},
  data() {
    return {
      account: []
    };
  },
  created: function() {
    console.log("route param :", this.$route.params.id);
    client.getAccountById(this.$route.params.id, (errors, account) => {
      // errors = array with error codes (empty if everything went OK).
      // account = object with info about the account if everything went OK.
      this.account = account;
      if (errors.length == 0) {
        // account = {id: 37, username: "Olle"}
      } else {
        // errors = ["errorCode1", "errorCode2", ...]
        // Possible errors codes:
        //  - "networkError": Couldn't connect to the backend.
        //  - "backendError": The backend couldn't execute the request for some reason.
        //  - "notFound": No account with the given id exists.
      }
    });
  }
};
</script>

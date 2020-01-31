<template>
  <div>
    <div class="mt-2">
      <div class="">
        <p class="text-3xl font-bold text-teal-600">Accounts Component</p>
        <p class="text-sm text-teal-600">{{ msg }}</p>
      </div>
    </div>
    <div class="pb-10">
      <table class="table-fixed text-teal-600 bg-white">
        <thead>
          <tr>
            <th class="w-full border px-4 py-2 text-left">@username</th>
            <th class="w-2/4 border px-4 py-2">#</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" class="hover:bg-teal-500 hover:text-white">
            <td class="border px-4 py-2">
              {{ user.username }}
            </td>
            <td class="border px-4 py-2">{{ user.id }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
const client = require("../activity-finder-client");

export default {
  props: {
    msg: String
  },
  data() {
    return {
      users: []
    };
  },
  created() {
    client.getAllAccounts((errors, accounts) => {
      if (errors.length === 0) {
        this.users = accounts;
        console.log(this.users);
      } else {
        console.log("errors: ", errors);
      }
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>

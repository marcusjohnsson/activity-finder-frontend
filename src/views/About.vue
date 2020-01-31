<template>
  <div class="About">
    <p class="text-4xl font-bold">About</p>
    <hr />
    <Accounts msg="List All Accounts" />
  </div>
</template>

<script>
// @ is an alias to /src
import Accounts from "@/components/Accounts.vue";

export default {
  components: {
    Accounts
  }
};
</script>

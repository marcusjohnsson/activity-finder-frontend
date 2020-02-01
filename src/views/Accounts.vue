<template>
  <div class="Accounts">
    <p class="text-4xl font-bold">Accounts</p>
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

<template>
  <div class="home">
    <p class="text-4xl font-bold">Home</p>
    <hr />
    <Dashboard msg="This is the dashboard component" />
  </div>
</template>

<script>
// @ is an alias to /src
import Dashboard from "@/components/Dashboard.vue";

export default {
  name: "home",
  components: {
    Dashboard
  }
};
</script>

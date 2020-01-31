<template>
  <div>
    <p class="text-3xl font-bold">Dashboard</p>
    <p class="text-lg">{{ msg }}</p>
  </div>
</template>

<script>
export default {
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>

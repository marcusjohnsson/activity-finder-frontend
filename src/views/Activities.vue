<template>
  <div class="home">
    <p class="text-4xl font-bold">Activites</p>
    <div v-if="this.user.isSignedIn">
      <button
        @click="toggle()"
        type="text"
        class="text-xs font-semibold text-teal-500 hover:text-teal-900"
      >+ Add Activity</button>
      <div v-if="showNewActivity">
        <hr />
        <NewActivity :account="user" />
      </div>
    </div>
    <ActivityList />
  </div>
</template>

<script>
// @ is an alias to /src
import NewActivity from "@/components/NewActivity.vue";
import ActivityList from "@/components/ActivityList.vue";

export default {
  name: "Activites",
  components: {
    ActivityList,
    NewActivity
  },
  props: ["user"],
  data() {
    return {
      showNewActivity: false
    };
  },
  methods: {
    toggle() {
      this.showNewActivity = !this.showNewActivity;
    }
  }
};
</script>

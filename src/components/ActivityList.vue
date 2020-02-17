<template>
  <div>
    <table class="table-fixed text-teal-600 bg-white">
      <thead>
        <tr>
          <th class="w-full border px-4 py-2 text-left">Activity</th>
          <th class="w-2/4 border px-4 py-2">#</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="activity in allActivities"
          :key="activity.index"
          class="hover:bg-teal-500 hover:text-white"
        >
          <td class="border px-4 py-2">
            <router-link :to="'/activity/' + activity.id">{{ activity.title }}</router-link>
          </td>
          <td class="border px-4 py-2">{{ activity.id }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
const client = require("../activity-finder-client");
export default {
  props: {},
  data() {
    return {
      allActivities: {}
    };
  },
  created() {
    client.getAllActivities((errors, activities) => {
      // errors = array with error codes (empty if everything went OK).
      // activities = array with all activities if everything went OK.
      if (errors.length == 0) {
        // activities = [{id: 1, accountId: 32, title: "Play football", ...}, {...}, ...]
        this.allActivities = activities;
        console.log("activities:", activities);
      } else {
        // errors = ["errorCode1", "errorCode2", ...]
        // Possible errors codes:
        //  - "networkError": Couldn't connect to the backend.
        //  - "backendError": The backend couldn't execute the request for some reason.
        console.log(errors);
      }
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>

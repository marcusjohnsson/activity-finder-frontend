<template>
  <div class="EditActivity">
    <form @submit.prevent="editActivity" class="w-full p-3">
      <div class="flex flex-wrap -mx-3 mb-2">
        <div class="w-full px-3 mb-2 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="ActivityName"
          >Activity Name</label>
          <input
            v-model="activity.title"
            class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="ActivityName"
            type="text"
          />
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-2">
        <div class="w-full px-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="Description"
          >Description</label>
          <textarea
            v-model="activity.description"
            class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="Description"
            type="textfield"
            placeholder="Describe the activity"
          />
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-2">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="startTime"
          >Start time</label>
          <input
            v-model="activity.startTime"
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="startTime"
            type="text"
            placeholder="When does the activity start?"
          />
        </div>
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="endTime"
          >End time</label>
          <input
            v-model="activity.endTime"
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="endTime"
            type="text"
            placeholder="When does the activity end?"
          />
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="lat"
          >Latitude</label>
          <input
            v-model="activity.latitude"
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="lat"
            type="text"
            placeholder="Latitude"
          />
        </div>
        <div class="w-full md:w-1/2 px-3 mb-6">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="long"
          >Longitude</label>
          <input
            v-model="activity.longitude"
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="long"
            type="text"
            placeholder="Longitude"
          />
        </div>
        <button
          class="bg-blue-500 hover:bg-blue-700 w-full text-white font-bold py-2 px-4 rounded"
        >submit</button>
      </div>
    </form>
  </div>
</template>

<script>
// @ is an alias to /src
const client = require("../activity-finder-client");
export default {
  props: ["account"],
  data() {
    return {
      errors: [],
      activity: {
        title: "",
        description: "",
        startTime: "",
        endTime: "",
        latitude: "",
        longitude: ""
      }
    };
  },
  created: function() {
    console.log("route param :", this.$route.params.id);
    const client = require("../activity-finder-client");

    client.getActivityById(this.$route.params.id, (errors, activity) => {
      // errors = array with error codes (empty if everything went OK).
      if (errors.length == 0) {
        // activity = {id: 5, accountId: 48, title: "Read Harry Potter", ...}
        this.activity = activity;
        // https://www.google.com/maps/search/?api=1&query=47.5951518,-122.3316393
        this.activity.location =
          "https://www.google.com/maps/search/?api=1&query=" +
          activity.longitude +
          "," +
          activity.latitude;

        var fromUnixTime = unixTime => {
          let date = new Date(unixTime * 1000);
          let months = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
          ];
          let year = date.getFullYear();
          let month = months[date.getMonth()];
          let day = date.getDate();
          let hour = date.getHours();
          let min = date.getMinutes();
          let sec = date.getSeconds();
          let formattedTime =
            day + " " + month + " " + year + " " + hour + ":" + min + ":" + sec;
          return formattedTime;
        };
        //this.activity.startTime = fromUnixTime(this.activity.startTime);
        //this.activity.endTime = fromUnixTime(this.activity.endTime);
      } else {
        console.log(errors);
      }
    });
  },
  methods: {
    editActivity() {
      const activity = {
        id: parseInt(this.activity.id),
        accountId: parseInt(this.activity.accountId),
        title: this.activity.title,
        description: this.activity.description,
        startTime: parseInt(this.activity.startTime),
        endTime: parseInt(this.activity.endTime),
        latitude: parseInt(this.activity.latitude),
        longitude: parseInt(this.activity.longitude)
      };
      console.log(activity.startTime);

      client.updateActivityById(
        this.$route.params.id,
        activity,
        (errors, id) => {
          if (errors.length == 0) {
            // activities = [{id: 1, accountId: 32, title: "Play football", ...}, {...}, ...]
            console.log(activities);
          } else {
            console.log(errors);
            console.log("startTime:", activity.startTime);
            console.log("endTime:", activity.endTime);
            // errors = ["errorCode1", "errorCode2", ...]
            // Possible errors codes:
            //  - "networkError": Couldn't connect to the backend.
            //  - "backendError": The backend couldn't execute the request for some reason.
          }
        }
      );
    }
  }
};
</script>
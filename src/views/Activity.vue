<template>
  <div class="mt-2">
    <p class="text-3xl font-bold text-teal-600">{{activity.title}}</p>
    <hr class="pb-2" />
    <p class="text-smfont-bold text-teal-600">
      Starts {{activity.startTime}} and ends {{activity.endTime}} |
      <a
        :href="this.activity.location"
      >@location</a>
    </p>
    <hr class="pb-1" />
    <button
      @click="removeActivity()"
      type="text"
      class="text-xs font-semibold text-teal-500 hover:text-teal-900"
    >Delete Activity</button> |
    <button
      @click="()=>$router.push('../editactivity/'+this.$route.params.id,)"
      type="text"
      class="text-xs font-semibold text-teal-500 hover:text-teal-900"
    >Edit Activity</button>
    <hr class="pb-3" />
    <p>{{activity.description}}</p>
  </div>
</template>

<script>
const client = require("../activity-finder-client");
export default {
  components: {},
  data() {
    return {
      activity: {},
      deleteEdit: false
    };
  },
  methods: {
    removeActivity() {
      client.deleteActivityById(this.$route.params.id, errors => {
        // errors = array with error codes (empty if everything went OK).
        if (errors.length == 0) {
          this.$router.push({ path: "/" });
        } else {
        }
      });
    }
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
        this.activity.startTime = fromUnixTime(this.activity.startTime);
        this.activity.endTime = fromUnixTime(this.activity.endTime);
      } else {
        console.log(errors);
      }
    });
  }
};
</script>

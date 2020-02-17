import Vue from "vue";
import VueRouter from "vue-router";
import Activities from "../views/Activities.vue";
import Activity from "../views/Activity.vue";
import Accounts from "../views/Accounts.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Account from "../views/Account.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Activities",
    component: Activities
  },
  {
    path: "/activity/:id",
    name: "Activity",
    component: Activity
  },
  {
    path: "/accounts",
    name: "accounts",
    component: Accounts
  },
  {
    path: "/account/:id",
    name: "Account",
    component: Account
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/register",
    name: "register",
    component: Register
  }
];

const router = new VueRouter({
  routes
});

export default router;

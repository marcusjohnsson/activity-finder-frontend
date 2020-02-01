import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Accounts from "../views/Accounts.vue";
import Login from "../views/Login.vue";
import Account from "../views/Account.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
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
  }
];

const router = new VueRouter({
  routes
});

export default router;

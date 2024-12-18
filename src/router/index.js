import Vue from "vue";
import Router from "vue-router";
import Login from "@/views/Login.vue";
import TodoList from "@/views/TodoList.vue";

Vue.use(Router);

export default new Router({
  mode: "history", // This enables HTML5 history mode
  routes: [
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
    {
      path: "/todo-list",
      name: "TodoList",
      component: TodoList,
    },
  ],
});

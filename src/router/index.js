import Vue from "vue";
import Router from "vue-router";
import Login from "@/views/Login.vue";
import TodoList from "@/views/TodoList.vue";
import TodoList2 from "@/views/TodoList2.vue";
import MainLayout from "@/layouts/MainLayout.vue";
import SimpleLayout from "@/layouts/SimpleLayout.vue";

Vue.use(Router);

export default new Router({
  mode: "history", // This enables HTML5 history mode
  routes: [
    {
      path: "/login",
      component: SimpleLayout,
      children: [
        {
          path: "demo",
          name: "Login",
          component: Login,
        },
      ],
    },
    {
      path: "/",
      component: MainLayout,
      children: [
        {
          path: "todo-list",
          name: "TodoList",
          component: TodoList,
        },
        {
          path: "todo-list2",
          name: "TodoList2",
          component: TodoList2,
        },
      ],
    },
  ],
});
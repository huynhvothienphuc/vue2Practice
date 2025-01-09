import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import store from "./store";
console.log("Imported Store:", store);

Vue.use(Antd);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
  created() {
    console.log("Store: ", this.$store); // Logs the store during the created lifecycle phase
  },
  mounted() {
    console.log("Store : ", this.$store); // Logs the entire Vuex store
  },
}).$mount("#app");

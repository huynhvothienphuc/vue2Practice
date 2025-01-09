<template>
  <a-layout style="min-height: 100vh">
    <a-layout-header
      style="background: #001529; color: #fff; text-align: center; padding: 0"
    >
      Demo
      <a-button style="background-color: transparent; border: none">
        <!-- <a-icon v-bind="ToggleTheme" /> -->
      </a-button>
    </a-layout-header>
    <a-layout>
      <a-layout-sider width="200" style="background: #fff">
        <a-menu style="height: 100%" mode="inline">
          <a-menu-item key="1">
            <a-icon type="mail" />
            Navigation One
          </a-menu-item>
          <a-menu-item key="2">
            <a-icon type="calendar" />
            Navigation Two
          </a-menu-item>
          <a-sub-menu key="sub1">
            <span slot="title"
              ><a-icon type="appstore" /><span>Navigation Three</span></span
            >
            <a-menu-item key="3"> Option 3 </a-menu-item>
            <a-menu-item key="4"> Option 4 </a-menu-item>
            <a-sub-menu key="sub1-2" title="Submenu">
              <a-menu-item key="5"> Option 5 </a-menu-item>
              <a-menu-item key="6"> Option 6 </a-menu-item>
            </a-sub-menu>
          </a-sub-menu>
          <a-sub-menu key="sub2">
            <span slot="title"
              ><a-icon type="setting" /><span>Navigation Four</span></span
            >
            <a-menu-item key="7"> Option 7 </a-menu-item>
            <a-menu-item key="8"> Option 8 </a-menu-item>
            <a-menu-item key="9"> Option 9 </a-menu-item>
            <a-menu-item key="10"> Option 10 </a-menu-item>
          </a-sub-menu>
        </a-menu>
      </a-layout-sider>
      <a-layout-content style="padding: 24px; min-height: 280px">
        <router-view />
      </a-layout-content>
    </a-layout>
    <a-layout-footer style="text-align: center">
      Footer ©2024 Created by Me
    </a-layout-footer>
  </a-layout>
</template>

<script>
import { Layout, Menu, Button } from "ant-design-vue";

export default {
  components: {
    "a-layout": Layout,
    "a-layout-header": Layout.Header,
    "a-layout-sider": Layout.Sider,
    "a-layout-content": Layout.Content,
    "a-layout-footer": Layout.Footer,
    "a-menu": Menu,
    "a-menu-item": Menu.Item,
    "a-button": Button,
    // "a-icon": Icon,
  },
  created() {
    // Log the store to the console to verify it's accessible
    console.log("MAINLAYOUT.VUE STORE", this.$store);
  },
  methods: {
    changeTheme() {
      this.$store.commit("toggleDarkMode");
    },
    ToggleTheme() {},
  },
  computed: {},
};
</script>

<style scoped>
.theme-button {
  border: none;
  transition: background-color 0.3s ease; /* Smooth transition for background color */
}

.dark-theme {
  background-color: #333; /* Dark background for dark theme */
  color: white; /* Light text color for dark theme */
}

.light-theme {
  background-color: white; /* Light background for light theme */
  color: black; /* Dark text color for light theme */
}
a-layout-header {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

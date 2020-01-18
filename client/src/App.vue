<template>
  <div id="app">
    <header>
      <div id="menu">
        <div class="site-logo">QA NEWS</div>
        <div class="flex-1"></div>
        <button
          class="button"
          v-for="btn in btns"
          :key="btn.id"
          v-on:click="selectedComponent = btn.component"
        >{{btn.name}}</button>
        <button class="button">
          <a
            href="https://floog.me/"
            target="_blank"
            rel="noopener noreferrer"
          >Blog</a>
        </button>
        <button class="button">
          <a
            href="https://ppaczoski.pl/"
            target="_blank"
            rel="noopener noreferrer"
          >Portfolio</a>
        </button>
      </div>
      <div class="line"></div>
    </header>
    <component v-bind:is="selectedComponent"></component>
  </div>
</template>

<script>
import PostComponent from "./components/post/PostComponent.vue";
import ContactComponent from "./components/contact/ContactComponent.vue";

export default {
  name: "app",
  components: {
    PostComponent,
    ContactComponent
  },
  data() {
    return {
      selectedComponent: "PostComponent",
      btns: [
        { id: 1, name: "Home", component: "PostComponent" },
        { id: 2, name: "Contact", component: "ContactComponent" }
      ]
    };
  }
};
</script>

<style src="./components/app/app.css"></style>

<template>
  <div class="container">
    <p class="error" v-if="error">{{ error }}</p>
    <div class="posts-container">
      <div
        class="post"
        @mouseover="hover = true"
        @mouseleave="hover = false"
        v-for="(post, index) in sortedArray"
        v-bind:item="post"
        v-bind:index="index"
        v-bind:key="post._id"
      >
        <p class="post-title">
          <a v-bind:href="post.url" target="_blank" rel="noopener noreferrer">{{ post.title }}</a>
        </p>

        <a
          class="post-hostname"
          v-bind:href="post.hostnameURL"
          target="_blank"
          rel="noopener noreferrer"
        >{{ post.hostname }}</a>

        <p v-if="post.description" class="post-description">{{ post.description }}</p>

        <div class="post-date">Posted {{ moment(post.timestamp).format("MMMM, Do") }}</div>
      </div>
    </div>
  </div>
</template>

<script src="./PostComponent.js"></script>
<style src="./PostComponent.css"></style>

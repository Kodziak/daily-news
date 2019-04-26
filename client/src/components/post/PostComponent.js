import PostService from "../../PostService";

export default {
  name: "PostComponent",
  data() {
    return {
      posts: [],
      title: "",
      url: "",
      hostname: "",
      date: "",
      timestamp: "",
      hover: false
    };
  },
  async created() {
    try {
      this.posts = await PostService.getPosts();
    } catch (err) {
      this.error = err.message;
    }
  },
  computed: {
    sortedArray: function() {
      function compare(a, b) {
        if (a.timestamp < b.timestamp) return 1;
        if (a.timestamp > b.timestamp) return -1;
        return 0;
      }

      return this.posts.sort(compare);
    }
  }
};

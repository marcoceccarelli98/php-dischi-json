const { createApp } = Vue;

createApp({
  data() {
    return {
      title: "Disc",
      urlDiscs: "http://localhost/php-dischi-json/server/server.php",
      discs: [],
      loading: false,
    };
  },
  methods: {
    async getDiscs() {
      this.loading = true;
      try {
        response = await axios.get(this.urlDiscs);
        this.discs = response.data;
      } catch (error) {
        console.log("Search Discs ERROR:", error);
      } finally {
        this.loading = false;
      }
    },
  },
  created() {
    this.getDiscs();
  },
}).mount("#app");

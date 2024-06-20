const { createApp } = Vue;

createApp({
  data() {
    return {
      title: "Techno Music",
      urlDiscs: "http://localhost/php-dischi-json/server/server.php",
      discs: [],
      searchResult: [],
      loading: false,
    };
  },
  methods: {
    async getDiscs() {
      console.log("Chiamata per dischi");
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

    async searchById(id) {
      console.log("Ricerca per ID");
      this.loading = true;
      try {
        const url = `${this.urlDiscs}?id=${id}`;
        console.log(url);
        const response = await axios.get(url);
        this.searchResult = response.data;
        console.log(response);
      } catch (error) {
        console.error("Search Disc By ID ERROR:", error);
      } finally {
        this.loading = false;
      }
    },
  },
  created() {
    this.getDiscs();
  },
}).mount("#app");

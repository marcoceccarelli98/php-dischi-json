const { createApp } = Vue;

createApp({
  data() {
    return {
      title: "Techno Music",
      urlDiscs: "http://localhost/php-dischi-json/server/server.php",
      discs: [],
      searchResult: [],
      showInfo: false,
      loading: false,
    };
  },
  methods: {
    async getDiscs() {
      console.log("Start Disc Call");
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
      console.log(`Search Disc ID: ${id}`);
      this.showInfo = true;
      this.loading = true;
      try {
        const url = `${this.urlDiscs}?id=${id}`;
        // console.log(url);
        const response = await axios.get(url);
        this.searchResult = response.data;
        console.log(this.searchResult);
      } catch (error) {
        console.error("Search Disc By ID ERROR:", error);
      } finally {
        this.loading = false;
      }
    },

    closeInfo() {
      this.showInfo = false;
    },

    getPlaysNum(plays) {
      if (plays <= 999999) {
        return `${plays}`;
      } else if (plays > 999999 && plays <= 9999999) {
        return `${(plays / 1000000).toFixed(1)} mln`;
      } else {
        return `${Math.floor(plays / 1000000)} mln`;
      }
    },

    getDuration(seconds) {
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = seconds % 60;

      // Pad the seconds with a zero if they are less than 10
      const paddedSeconds =
        remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds;

      return `${minutes}:${paddedSeconds}`;
    },
  },
  computed: {},
  created() {
    this.getDiscs();
  },
}).mount("#app");

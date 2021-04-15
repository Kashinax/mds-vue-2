const { createApp } = Vue;

const apiURL =
    "https://back.ruben-lecomte.fr/wp-json/wp/v2/pages?slug=mon-cv";

const AppCv = {
    data() {
        return {
            apiWordpress: [],
        }
    },
    created: function () {
        this.fetchData();
    },
    methods: {
        fetchData: async function () {
            try {
                const response = await axios.get(apiURL)
                console.log(response.data[0])
                this.apiWordpress = response.data[0];

            } catch (error) {
                console.log(error);
            }
        }
    }
}

createApp(AppCv).mount("#bloc-cv");
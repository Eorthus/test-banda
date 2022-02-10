
const API_URL = 'https://raw.githubusercontent.com/Eorthus/test-banda/main';

const app = new Vue({
    el: '#app',
    data: {
        //   searchLine: '',
    },
    props: ['filteredProducts'],
    methods: {
        getJson(url) {
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    console.log(error);
                })
        },
    },
    mounted() {
        console.log(this);
    }
});

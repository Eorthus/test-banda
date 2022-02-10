Vue.component('beer', {
    data() {
        return {
            Url: '/beer.json',

            Beers: [],
            img: 'images/beer.png',
        }
    },
    methods: {
        Reload(product) {
            this.$parent.getJson(`${API_URL + Url}`)
                .then(data => {
                    if (data.result === 1) {
                        //new product.id
                    } else {
                        alert('Error');
                    }
                })
        }
    },
    mounted() {
        this.$parent.getJson(`${API_URL + this.Url}`)
            .then(data => {
                for (let el of data) {

                    this.Beers.push(el);
                }
            });
    },
    template: `
        <div class="beer">
            <item v-for="item of Beers"
             :key="item.id"
              :img="img"
               :prod="item" 
               :cat="Beers"></item>
        </div>
    `
});
Vue.component('item', {
    props: ['prod', 'img'],

    template: `
    <div class="beer-item">
    
    <div class="desc-img">
    <img :src="img" alt="beer">
    <h3 class="desc-name"> {{ prod.name }} </h3>
              </div>
                <div class="desc">
                <div class="desc-left">
                <p > <span>Brand:</span> {{ prod.brand }} </p>
                <p > <span>Style:</span> {{ prod.style }} </p>
                <p > <span>Hop:</span> {{ prod.hop }} </p>
                <p > <span>Yeast:</span> {{ prod.yeast }} </p>
                </div>
                <div class="desc-right">
                <p > <span>Malts:</span> {{ prod.malts }} </p>
                <p > <span>Ibu:</span> {{ prod.ibu }} </p>
                <p > <span>Alcohol:</span> {{ prod.alcohol }} </p>
                <p > <span>Blg:</span> {{ prod.blg }} </p>
                   </div>
                   </div>
                <button class="Reload" @click="$emit('Reload', prod)">Reload</button>
             
            </div>
    `
});

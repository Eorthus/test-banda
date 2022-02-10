Vue.component('user', {
    data() {
        return {
            img: 'https://robohash.org/culpasedducimus.png?size=300x300\u0026set=set1',
            Url: '/user.json',
            Users: [],
        }
    },
    methods: {

    },
    mounted() {
        this.$parent.getJson(`${API_URL + this.Url}`)
            .then(data => {
                for (let el of data) {
                    this.Users.push(el);
                }
            });
    },
    template: `
        <div>
                <user-item class="user-item" 
                v-for="unit of Users" 
                :key="unit.id"
                :User="unit" 
                :img="img">
                </user-item>
        </div>`
});

Vue.component('user-item', {
    props: ['User', 'img'],
    template: `
                <div class="user-item">
                    <img :src="User.avatar" alt="user">
                    <div class="user-item-info">
                    <p class="user-item-info-name">Hello, {{User.first_name}} {{User.last_name}}</p>
                   
                    <details>
                    <summary>Profile</summary>
                    <p >{{User.username}}</p>
                    <p >{{User.email}}</p>
                    <p >{{User.gender}}</p>
                    <p >{{User.phone_number}}</p>
                    <p >{{User.social_insurance_number}}</p>
                    <p >{{User.date_of_birth}}</p>
                    </details>
                    <details>
                    <summary>Employment</summary>
                    <p >{{User.employment.title}}</p>
                    <p >{{User.employment.key_skill}}</p>
                    </details>
                    <details>
                    <summary>Address</summary>
                    <p >{{User.address.city}}</p>
                    <p >{{User.address.street_name}}</p>
                    <p >{{User.address.street_address}}</p>
                    <p >{{User.address.zip_code}}</p>
                    <p >{{User.address.country}}</p>
                    <p >{{User.address.state}}</p>
                    <p >{{User.address.coordinates.lat}}>br>{{User.address.coordinates.lng}}</p>
                    </details>
                    <details>
                    <summary>Credit Card</summary>
                    <p >{{User.credit_card.cc_number}}</p>
                    </details>
                    <details>
                    <summary>Subscription</summary>
                    <p >{{User.subscription.plan}}</p>
                    <p >{{User.subscription.status}}</p>
                    <p >{{User.subscription.payment_method}}</p>
                    <p >{{User.subscription.term}}</p>
                    </details>
                      </div>
                  </div>`
});
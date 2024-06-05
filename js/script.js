const { createApp } = Vue;

createApp({
    data() {
        return {
            randomMailList: []
        }
    },
    methods: {
        getRandomMails() {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((mail) => {
                console.log(mail.data.response)
            })
        }
    },

    created(){
        this.getRandomMails()
    }
}).mount('#app');
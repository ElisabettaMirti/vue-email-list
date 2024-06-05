const { createApp } = Vue;

createApp({
    data() {
        return {
            randomMailList: []
        }
    },
    methods: {
        getRandomMails() {
                for (let i = 0; i < 10; i++) {
                    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then((mail) => {
                    console.log(mail.data.response);
                    let randomMail = mail.data.response;
                    this.randomMailList.push(randomMail);
                });
            }
        }
    },

    created(){
        this.getRandomMails()
    }
}).mount('#app');
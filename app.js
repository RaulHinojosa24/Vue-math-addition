Vue.createApp({
    data() {
        return {
            range: 20,
            primaryNumber: 0,
            secondaryNumber: 0,
            solution: 0,
            userGuess: "",
            submitMessage: "",
            showSubmitMessage: false,
            submitMessageColor: ""
        }
    },
    created() {
        this.setNumberValues();
    },
    methods: {
        setNumberValues() {
            this.primaryNumber = this.generateRandomNumber();
            this.secondaryNumber = this.generateRandomNumber();
            this.solution = this.primaryNumber + this.secondaryNumber;
        },
        generateRandomNumber() {
            return Math.floor(Math.random() * this.range);
        },
        onUserSubmit() {
            if (this.solution == this.userGuess) {
                this.submitMessage = "You got it right!"
                this.showSubmitMessage = true;
                this.submitMessageColor = "green";
            } else {
                this.submitMessage = "Answer incorrect!"
                this.showSubmitMessage = true;
                this.submitMessageColor = "red";
            }

            setTimeout(() => this.showSubmitMessage = false, 1000);

            this.setNumberValues();
        }
    }
}).mount("#app");
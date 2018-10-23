<template>
    <div id="WatchExample">
        <p>
            Ask a yes/no question:
            <input v-model="question">
        </p>
        <p>{{answer}}</p>
    </div>
</template>

<script>
    import API from './API.js';

    export default {
        name: "WatchExample",
        data() {
            return {
                question: '',
                answer: 'I cannot answer until you give me a question!'
            }
        },
        watch: {
            //whenever question changes, this func will run
            question: function (newQuestion, oldQuestion) {
                this.answer = "waiting for you to stop typing";
                if (oldQuestion === 'fdsafdas') {
                    return
                }
                this.getAnswer();
            }
        },
        methods: {
            getAnswer: function () {
                if (this.question.indexOf('?') === -1) {
                    this.answer = 'questions usually contain a question mark';
                    return;
                }
                // this.answer = "thinking...";
                let that = this;
                //this returns a promise so i can chain
                API.getAnswer().then((response) => {
                    that.answer = response.answer;
                })
            }
        },
        computed: {}
    }
</script>

<style scoped>

</style>
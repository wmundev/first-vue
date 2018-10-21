<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
        <a v-bind:href="urlBind">nice</a>
        <h1>{{hovered}}</h1>
        <h1 v-bind:id="modifyId">i am a modified id bro</h1>
        <HelloWorld msg="Welcome to Your Vue.js App"/>
        <ButtonCounter></ButtonCounter>
        <WatchExample/>
        <Heroes></Heroes>
    </div>
</template>

<script>
    import HelloWorld from './components/HelloWorld.vue';
    import WatchExample from "./components/WatchExample.vue";
    import ButtonCounter from './components/ButtonCounter.vue';
    import Heroes from './components/Heroes.vue';

    export default {
        name: 'app',
        components: {
            WatchExample,
            HelloWorld,
            ButtonCounter,
            Heroes
        },
        data() {
            return {
                urlBind: "https://www.google.com",
                hovered: "rekt"

            }
        },
        computed: {
            modifyId: {
                get: function () {
                    let a = 1;
                    return a;
                }
            }
        },
        watch: {}
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    buttoncounter {
        width: 100%;
        height: 100px;
    }
</style>

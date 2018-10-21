<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
        <a v-bind:href="urlBind">nice</a>
        <h1>{{hovered}}</h1>
        <h1 v-bind:id="modifyId">i am a modified id bro</h1>
        <HelloWorld msg="Welcome to Your Vue.js App"/>
        <ButtonCounter v-bind:class="classObject"></ButtonCounter>
        <WatchExample/>
        <Heroes></Heroes>
        <template v-if="ifRender">
            <h1>if true, render this</h1>
            <p>nice i can put random stuff here too!</p>
        </template>
        <template v-else>
            <h1>Else, render this</h1>
            <p>nice i can put random stuff here too!</p>
        </template>
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
                hovered: "rekt",
                // classObject: {
                //     active: true,
                //     'text-danger': false
                // }
                isActive: false,
                ifRender: false
            }
        },
        computed: {
            modifyId: {
                get: function () {
                    let a = 1;
                    return a;
                }
            },
            classObject: function () {
                return {
                    active: this.isActive && !this.error,
                    'text-danger': this.error && this.error.type === 'fatal'
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

<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
        <a v-bind:href="urlBind">nice</a>
        <h1>{{hovered}}</h1>
        <h1 v-bind:id="modifyId">i am a modified id bro</h1>
        <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
        <ButtonCounter v-bind:class="classObject"></ButtonCounter>
        <!--two way binding example-->
        <WatchExample
            :title.sync="twoWayTitle"
        />
        <Heroes></Heroes>
        <template v-if="ifRender">
            <label>Username:</label>
            <input type="text"/>
        </template>
        <template v-else>
            <label>Email:</label>
            <input type="email"/>
        </template>
        <button v-on:click="ifRender = !ifRender">change input type</button>
        <!--passing props, anything that is not a string we would need to use a bind function-->
        <!--https://vuejs.org/v2/guide/components-props.html-->
        <!--: is shorthand for v-bind:-->
        <!--passing properties of an object we can use v-bind without an argument-->
        <ListRendering
                :numberProp="42"
                :booleanProp="true"
                :arrayProp="[234,324,3245]"
                :objectProp="{bob: 1, ken: 2}"
                v-bind="testObject"
        />
        <!--v for with a component-->
        <Heroes
                v-bind:namesArray="names"
                v-bind:randomObject="{name: 'Bob', lastName: 'Lamar'}"
                v-model="customModel"
        />
        <!--https://vuejs.org/v2/guide/components.html#DOM-Template-Parsing-Caveats-->
        <!--<table>-->
        <!--<tr is="aComponent"></tr>-->
        <!--</table>-->
    </div>
</template>

<script>
    import HelloWorld from "./components/HelloWorld.vue";
    import WatchExample from "./components/WatchExample.vue";
    import ButtonCounter from "./components/ButtonCounter.vue";
    import Heroes from "./components/Heroes.vue";
    import ListRendering from "./components/ListRendering.vue";

    export default {
        name: "app",
        components: {
            WatchExample,
            HelloWorld,
            ButtonCounter,
            Heroes,
            ListRendering
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
                ifRender: false,
                names: [
                    "Evan You",
                    "John Lindquist",
                    "Jen Looper",
                    "Miriam Suzanne",
                    "Chris Coyier",
                    "Geoff Graham",
                    "Divya Sasidharan",
                    "Lea Verou",
                    "Rachel Andrew",
                    "Vitaly Friedman",
                    "Ryan Florence",
                    "Dan Abramov",
                    "Jen Simmons",
                    "Robin Rendle",
                    "Nicole Sullivan"
                ],
                testObject: {
                    bob: 1,
                    ken: 2,
                    lamar: 3
                },
                customModel: {
                    bob: 1,
                    ken: 2,
                    lamar: 3
                },
                twoWayTitle: "test two way binding title modify"
            };
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
                    "text-danger": this.error && this.error.type === "fatal"
                };
            }
        },
        watch: {}
    };
</script>

<style>
    #app {
        font-family: "Avenir", Helvetica, Arial, sans-serif;
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

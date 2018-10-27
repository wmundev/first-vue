<template>
    <div>
        <ul id="exampleList">
            <li v-for="(item, index) in items" :key="item.id">
                {{item.message}} and {{index}}
            </li>
        </ul>
        <button v-on:click="addToArray">add to array</button>
    </div>
</template>

<script>
    export default {
        name: "ListRendering",
        data() {
            return {
                items: [
                    {id: 1, message: "bob"},
                    {id: 2, message: "ken"},
                    {id: 3, message: "lamar"},
                    {id: 4, message: "rachel"}
                ]
            }
        },
        computed: {
            addToArray: {
                get: function () {
                    // let item = {id: this.data.items.length++, message: "nice"};
                    // //start from first element, delete no elements, add item to array
                    // this.items.splice(0, 0, item);
                  return this.items;
                },
                set: function () {

                }
            },
            even: function(items){
                return items.filter(function(number) {
                    return number % 2 === 0;
                })
            }
        }
    }
</script>

<style scoped>

</style>
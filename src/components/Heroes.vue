<template>
    <div>
        <label>
            Find your hero
            <input v-model="findName" id="filtername" type="text"/>
        </label>
        <h1>Heroes</h1>
        <ul>
            <li v-for="name in filteredNames">
                {{name}}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Heroes",
        data() {
            return {
                findName: '',
                names: [
                    'Evan You',
                    'John Lindquist',
                    'Jen Looper',
                    'Miriam Suzanne',
                    'Chris Coyier',
                    'Geoff Graham',
                    'Divya Sasidharan',
                    'Lea Verou',
                    'Rachel Andrew',
                    'Vitaly Friedman',
                    'Ryan Florence',
                    'Dan Abramov',
                    'Jen Simmons',
                    'Robin Rendle',
                    'Nicole Sullivan'
                ]
            }
        },
        computed: {
            filteredNames() {
                let filter = new RegExp(this.findName, 'i');
                return this.names.filter(el => el.match(filter));
            }
        }
    }
</script>

<style scoped>

</style>
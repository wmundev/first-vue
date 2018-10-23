<template>
    <div>
        <label>
            Find your hero
            <input v-model="findName" id="filtername" type="text"/>
        </label>
        <h1>Heroes</h1>
        <ul>
            <li
                    v-for="name in filteredNames"
                    :key="name"
            >
                {{name}}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: "Heroes",
  props: {
    name: String,
    namesArray: {
      type: Array,
      required: true,
      default: function() {
        return ["Bob", "Ken", "Lamar"];
      },
      validator: function(value) {
        return ["Bob"].indexOf(value) !== -1;
      }
    },
    index: Number
  },
  data() {
    return {
      names: this.namesArray,
      findName: ""
      // names: [
      //     'Evan You',
      //     'John Lindquist',
      //     'Jen Looper',
      //     'Miriam Suzanne',
      //     'Chris Coyier',
      //     'Geoff Graham',
      //     'Divya Sasidharan',
      //     'Lea Verou',
      //     'Rachel Andrew',
      //     'Vitaly Friedman',
      //     'Ryan Florence',
      //     'Dan Abramov',
      //     'Jen Simmons',
      //     'Robin Rendle',
      //     'Nicole Sullivan'
      // ]
    };
  },
  computed: {
    filteredNames: function() {
      let filter = new RegExp(this.findName, "i");
      return this.names.filter(el => el.match(filter));
    }
  }
};
</script>

<style scoped>
</style>

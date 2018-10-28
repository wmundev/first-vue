<template>
    <div>
        <!--content will be inserted in the slot tags, passed down from parent-->
        <!--to pass down slot content, we just write text in between where we specified our component-->
        <header>
            <slot name="header"></slot>
        </header>
        <main>
            <slot name="main"></slot>
        </main>
        <footer>
            <slot name="footer"></slot>
        </footer>
        <!--scoped slots-->
        <!-- We have a slot for each todo, passing it the -->
        <!-- `todo` object as a slot prop.                -->
        <slot v-bind:todo="todos">
            <!-- Fallback content -->
            {{ todos.text }}
        </slot>
    </div>
</template>

<script>
export default {
  name: "SlotComponent",
    data(){
      return{

      }
    }
};
</script>

<style scoped>
</style>

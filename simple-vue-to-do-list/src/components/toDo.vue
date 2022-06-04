<template>
  <p>
    <input type="text" v-model="input" />
    <button v-on:click="addHandler">add</button>
  </p>
  <ul>
    <li
      v-for="item in listArray"
      v-bind:key="item.date"
      v-bind:style="{
        textDecoration: item.done ? 'line-through' : 'none'
      }"
    >


      <input type="checkbox" v-on:change="changeHandler(item)" />{{
        item.content
      }}<button v-on:click="deleteHandler(item)" style="margin: 10px">
        delete
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  name: "toDo",
  data() {
    return {
      listArray: [],
      input: "",
    };
  },
  methods: {
    addHandler() {
      let object = {};
      object.content = this.input;
      object.date = Date.now();
      object.done = false;
      this.listArray.push(object);
    },
    deleteHandler(item) {
      this.listArray = this.listArray.filter(function (el) {
        return el.date != item.date;
      });
    },
    changeHandler(item) {
      this.listArray.forEach(function (el) {
        if (el.date == item.date) {
          el.done = !el.done;
        }
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>

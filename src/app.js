import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      todos: ["Homework", "Laundry", "Eat Pizza"], newToDo: ""},
    methods: {
      saveToDo: function(){
        this.todos.push(this.newToDo)
        this.newToDo = ""}}
  })
});

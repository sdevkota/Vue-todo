var app = new Vue({
    el: "#app",
    data: {
        todo: "",
        isLoading:false,
        items: []
    },
    methods: {
        addToDoItems() {
            if (this.todo) {
                this.items.push(this.todo);
                this.todo = "";
            }
        },
        deleteTodo(index) {
            if (index > -1 && this.items) {
                this.items.splice(index, 1);
            }
        }
    }
});
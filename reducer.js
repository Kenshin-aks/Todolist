import storage from "./util/storage.js";

const init = {
    todos: storage.get(),
    filter: 'all',
    filters: {
        all: () => true,
        completed: todo => todo.completed,
        active: todo => !todo.completed
    },
    editIndex: null
}

const actions = {
    add({ todos }, title) {
        if (title) {
            todos.push({title, completed:false});
            storage.set(todos);
        }   
    },
    check({todos}, index) {
        todos[index].completed = !todos[index].completed;
        storage.set(todos);
    },
    delete({todos}, index) {
        todos.splice(index,1);
        storage.set(todos);
    },
    toggleAll({todos}, checked) {
        todos.forEach(todo => todo.completed = !checked)
    },
    clearCompleted(state){
        state.todos = state.todos.filter(state.filters.active)
        storage.set(state.todos);
    },
    filter(state, fill) {
        state.filter = fill;
    },
    startEdit(state, index) {
        state.editIndex = index;
    },
    endEdit(state, value, index) {
        state.editIndex = null;
        state.todos[index].title = value;
        storage.set(state.todos)
    }
}

export default function reducer(state = init, action, args) {
    actions[action] && actions[action](state, ...args)
    return state;
}
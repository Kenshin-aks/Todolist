import TodoItem from './TodoItem.js';
import { connect } from '../store.js' 
import html from '../core.js';

function TodoList({todos}) {
    return  html`
    <section class="main">
        <input 
        id="toggle-all" 
        class="toggle-all" 
        type="checkbox"
        ${todos.every(todo => todo.completed === false) && 'checked'}
        onchange="dispatch('toggleAll', this.checked)"
        >
        <label for="toggle-all">Mark all as complete</label>
        <ul class="todo-list">
            ${TodoItem(todos)}
        </ul>
    </section>
    `
}
    
export default connect()(TodoList);
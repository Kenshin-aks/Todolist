import { connect } from '../store.js';
import html from '../core.js';

function Footer({todos,filter, filters}) {
    return  html`
    <footer class="footer">
        <span class="todo-count"><strong>${todos.filter(todo => !todo.completed).length}</strong> item left</span>
        <ul class="filters">
            <li>
                ${Object.keys(filters).map(key => `
                <a class="${key === filter && 'selected'}"
                onclick="dispatch('filter', '${key}')"
                href="#">${key[0].toUpperCase() + key.slice(1)}</a>`)}
            </li>
        </ul>
        <button 
        class="clear-completed"
        ${todos.every(todo => todo.completed === false) && 'style = "display: none;"'}
        onclick="dispatch('clearCompleted')"
        >Clear completed</button>
    </footer>
    `
}
    
export default connect()(Footer)
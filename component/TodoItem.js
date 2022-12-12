import { connect } from '../store.js';
import html from '../core.js';

function TodoItem({todos, filters, filter, editIndex}) {
            return todos.filter(filters[filter]).map((todo, index) => html` 
                <li class="${todo.completed && 'completed'} ${index == editIndex && 'editing'}">
                    <div class="view">
                        <input class="toggle" 
                        type="checkbox" 
                        ${todo.completed && 'checked'}
                        onchange="dispatch('check',${index})"
                        >
                        <label
                        ondblclick="dispatch('startEdit',${index}) "
                        >${todo.title}</label>
                        <button class="destroy"
                        onclick="dispatch('delete',${index})"
                        ></button>
                    </div>
                    <input 
                    class="edit" 
                    value="${todo.title}"
                    onkeyup="event.keyCode === 13 && dispatch('endEdit', this.value, ${index})"
                    >
                </li>
            `).join('')
        }
    
export default connect()(TodoItem);
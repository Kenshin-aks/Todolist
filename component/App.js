import { connect } from '../store.js';
import html from '../core.js';
import Header from './Header.js';
import Footer from './Footer.js';
import TodoList from './TodoList.js';

function App({todos}) {
    return  html`
    <section class="todoapp">
        ${Header()}
        ${TodoList()}
        ${todos.length > 0 && Footer()}
    </section>
    `
};
    
export default connect()(App)
import { createApp } from 'vue'
import App from './App.vue'
import "./assets/style.css";
import AddTodo from '@/components/AddTodo.vue'
import TodoList from '@/components/TodoList.vue'
import ResultBar from '@/components/ResultBar.vue'
import ListSection from '@/components/ListSection.vue'

const app = createApp(App)

app.component('add-todo', AddTodo)
app.component('todo-list', TodoList)
app.component('result-bar', ResultBar)
app.component('list-section', ListSection)

app.mount('#app')

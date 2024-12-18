<template>
  <div>
    <a-row type="flex" justify="center">
      <a-col :span="12">
        <h2>Todo List</h2>
        <h2 v-if="isEdit !== ''">Todo List</h2>
        <a-form @submit.prevent="addTodo">
          <a-input v-model="todo" placeholder="Enter a new task">
            <template #suffix>
              <a-icon type="plus" @click="addTodo" />
            </template>
          </a-input>
        </a-form>
        <a-list item-layout="horizontal" bordered :dataSource="todos" class="todo-list">
          <a-list-item
            v-for="item in todos"
            :key="item.id"
            class="custom-list-item"
          >
            <template v-if="isEdit === item.id">
              <a-input
                v-model="todoUpdate"
                placeholder="Update task"
                class="flex-grow"
                @keyup.enter="handleSave(item.id)"
              />
              <span>
                <a-icon
                  type="save"
                  @click="handleSave(item.id)"
                  class="custom-icon-action" />
                <a-icon
                  type="close"
                  @click="handleClose"
                  class="custom-icon-action"
              /></span>
            </template>
            <template v-else>
              <a-list-item-meta :title="item.text" />
              <span>
                <a-icon
                  type="edit"
                  @click="handEditTodo(item.id, item.text)"
                  class="custom-icon-action" />
                <a-icon
                  type="delete"
                  @click="removeTodo(item.id)"
                  class="custom-icon-action"
              /></span>
            </template>
          </a-list-item>
        </a-list>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import { Row, Col, Form, Input, Icon, List } from "ant-design-vue";

export default {
  components: {
    "a-row": Row,
    "a-col": Col,
    "a-form": Form,
    "a-input": Input,
    "a-icon": Icon,
    "a-list": List,
  },
  data() {
    return {
      todo: "",
      todoUpdate: "",
      isEdit: "",
      todos: [],
    };
  },
  methods: {
    addTodo() {
      if (this.todo.trim()) {
        this.todos.push({
          id: Date.now(),
          text: this.todo.trim(),
        });
        this.todo = "";
      }
    },
    removeTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
    handEditTodo(id, text) {
      this.isEdit = id;
      this.todoUpdate = text;
    },
    handleSave(id) {
      const index = this.todos.findIndex((todo) => todo.id === id);
      if (index !== -1) {
        this.todos[index].text = this.todoUpdate;
      }
      this.todoUpdate = "";
      this.isEdit = "";
    },
    handleClose() {
      this.isEdit = "";
      this.todoUpdate = "";
    },
  },
};
</script>

<style scoped>
.todo-list{
    margin-top: 25px;
}
.custom-list-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.custom-list-item .ant-list-item-meta {
  flex: unset; /* Allows the text to take up any available space */
}

.custom-icon-edit {
  margin-left: 24px;
  cursor: pointer;
  color: greenyellow;
}
.custom-icon-delete {
  margin-left: 24px;
  cursor: pointer;
  color: red;
}
</style>

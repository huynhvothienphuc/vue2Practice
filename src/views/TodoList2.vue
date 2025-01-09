<template>
  <div>
    <iRow type="flex" justify="center">
      <a-col :span="12" type="flex" justify="center">
        <a-input
          v-model="todo"
          placeholder="Enter a new task"
          @click="addTodo"
        />
      </a-col>
    </iRow>
    <iRow type="flex" justify="center">
      <a-col :span="12">
        <a-list item-layout="horizontal">
          <a-list-item
            v-for="item in todos"
            :key="item.id"
            class="custom-list-item"
          >
            <a-list-item-meta :title="item.text">{{
              item.id
            }}</a-list-item-meta>
          </a-list-item>
        </a-list>
      </a-col>
    </iRow>

    <iRow>
      <a-col
        :class="{ isEnable: isEnable }"
        :span="12"
        style="height: 100px; width: 100%"
      >
        <a-button type="primary" @click="toggleBinding"
          >Toggle Binding</a-button
        >
        {{ isEnable ? "TRUE" : "FALSE" }}
      </a-col>
    </iRow>

    <iRow>
      <a-col>
        <h2>Cart Total: {{ cartTotal }}</h2>
        <h2>Cart Total: {{ cartTotalMethods() }}</h2>
        <a-button type="primary" @click="handleAddCartItems">Add</a-button>
        <a-list item-layout="horizontal">
          <a-list-item v-for="item in cartItems" :key="item.product">
            <template>
              {{ item.product }} - {{ item.price }} | x {{ item.quantity }}
            </template>
          </a-list-item>
        </a-list>
      </a-col>
    </iRow>
  </div>
</template>

<script>
import { Row, Col, List } from "ant-design-vue";

export default {
  components: {
    "iRow": Row,
    "a-col": Col,
    "a-list": List,
  },
  methods: {
    addTodo() {
      if (this.todo.trim()) {
        this.todos.push({
          id: Date.now(),
          text: this.todo.trim(),
        });
        console.log("--->added");
        this.todo = "";
      }
    },
    removeTodo() {},
    handEditTodo() {},
    handleSave() {},
    handleClose() {},
    toggleBinding() {
      this.isEnable = !this.isEnable;
    },
    handleAddCartItems() {
      this.cartItems.push({
        product: "Shoes" + this.cartItems.length,
        price: 99.99,
        quantity: 1,
      });
    },
    cartTotalMethods() {
      const subtotal = this.cartItems.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0);
      console.log("--->cartTotalMethods cartTotal ");
      return subtotal + subtotal * this.taxRate;
    },
  },
  data() {
    return {
      todo: "",
      todoUpdate: "",
      isEdit: "",
      todos: [],
      isEnable: false,
      taxRate: 0.7,
      cartItems: [
        { product: "Book", price: 9.99, quantity: 2 },
        { product: "Game", price: 59.99, quantity: 1 },
      ],
    };
  },
  computed: {
    cartTotal() {
      const subtotal = this.cartItems.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0);
      console.log("--->computed cartTotal ");
      return subtotal + subtotal * this.taxRate;
    },
  },
};
</script>
<style scoped>
.isEnable {
  background-color: greenyellow;
  border: 1px solid black;
}
</style>

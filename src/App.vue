<template>
  <h1>Vue3 works on this device.</h1>
  <div>
    <div>
      <span>refData.count: {{ refData.count }}</span>
      <button type="button" @click="add1">测试ref功能</button>
    </div>
    <div>
      <span>reactiveData.count: {{ reactiveData.count }}</span>
      <button type="button" @click="add2">测试reactive功能</button>
    </div>
  </div>
  <div>
      <a href="https://github.com/kaokei/vue3-compatibility">GitHub的项目地址</a>
  </div>
  <img alt="Vue logo" src="./assets/logo.png" />
</template>

<script>
import { ref, reactive } from "vue";

export default {
  name: "App",
  setup() {
    const refData = ref({ count: 1 });
    const reactiveData = reactive({ count: 1 });

    const add1 = () => {
      refData.value.count++;
    };
    const add2 = () => {
      reactiveData.count++;
    };

    return {
      refData,
      reactiveData,
      add1,
      add2,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

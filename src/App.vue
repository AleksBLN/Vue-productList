<template>
  <div id="app">
    <div class="container-fluid">
      <h1>Список товаров</h1>

      <FilterForm />

      <ProductList />
      
    </div>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import FilterForm from '@/components/FilterForm'
import ProductList from '@/components/ProductList'

export default {
  name: 'App',
  components: {
    FilterForm,
    ProductList,
  },
}
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

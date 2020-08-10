<template>
  <div>
    <div
      class="alert alert-light"
      role="alert"
    >
      Найдено {{ filteredProducts.length }} товара
    </div>
    <div class="row no-gutters">
      <ProductItem
        v-for="product of filteredProducts"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ProductItem from '@/components/ProductItem';

export default {
  name: 'ProductList',
  components: {
    ProductItem,
  },
  computed: {
    ...mapGetters(['products', 'filterData']),
    filteredProducts() {
      return this.products.filter(p => (this.isTypeSelect(this.filterData.selectedColor, p.color)))
      .filter(p => (this.isTypeSelect(this.filterData.selectedBrand, p.brand)))
      .filter(p => (this.isTypeSelect(this.filterData.selectedSize, p.size.toString())))
    },
  },
  methods: {
    isTypeSelect(type, item) {
      return type ? item === type : true;
    },
  },
};
</script>

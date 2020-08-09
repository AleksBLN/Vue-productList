<template>
    <div>
        <div class="alert alert-light" role="alert">
            Найдено {{filteredProducts.length}} товара
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
import { mapGetters } from 'vuex'
import ProductItem from '@/components/ProductItem'

export default {
    name: 'productList',
    components: {
        ProductItem
    },
    computed: {
        ...mapGetters(['products', 'filterData']),
        filteredProducts() {
           return this.products.filter(p => this.filterData.selectedColor ? p.color === this.filterData.selectedColor : true)
            .filter(p => this.filterData.selectedBrand ? p.brand === this.filterData.selectedBrand : true)
            .filter(p => this.filterData.selectedSize ? p.size.toString() === this.filterData.selectedSize : true)
        }
    },
}
</script>

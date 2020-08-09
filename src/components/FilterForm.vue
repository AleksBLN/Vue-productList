<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Фильтры</h5>
                    <div class="card-text">
                        <form>
                            <div class="form-group">
                                <select class="form-control"
                                    :value="filterData.selectedBrand"
                                    @input="$store.commit('updateBrand', $event.target.value)"
                                >
                                    <option
                                        v-for="(brand, index) of filterData.brands"
                                        :value="brand.value"
                                        :key="index"
                                    >
                                        {{brand.label}}
                                    </option>
                  
                                </select>
                            </div>
                            <div class="form-group">
                                <select class="form-control"
                                    :value="filterData.selectedSize"
                                    @input="$store.commit('updateSize', $event.target.value)"

                                >
                                    <option
                                        v-for="(size, index) of filterData.sizes"
                                        :value="size.value"
                                        :key="index"
                                    >
                                        {{size.label}}
                                    </option>
                  
                                </select>
                            </div>
                            <div class="form-group">
                                <select class="form-control"
                                    :value="filterData.selectedColor"
                                    @input="$store.commit('updateColor', $event.target.value)"

                                >
                                    <option
                                        v-for="(color, index) of filterData.colors"
                                        :value="color.value"
                                        :key="index"
                                    >
                                        {{color.label}}
                                    </option>
                  
                                </select>
                            </div>
                            <div class="text-right">
                                <a
                                    href="#"
                                    class="btn btn-sm btn-secondary"
                                    :class="{disabled: !isActive}"
                                    @click="$store.commit('resetFilter')"
                                >
                                    Сбросить
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters(['filterData']),
        isActive() {
            return this.filterData.selectedColor || this.filterData.selectedSize || this.filterData.selectedBrand
        }
    }
}
</script>

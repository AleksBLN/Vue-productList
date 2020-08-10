<template>
    <div class="col-6 pr-2">
        <div
            class="card text-center border-0 shadow-sm mb-3 bg-white rounded-lg"
            @click.stop.prevent="toggleExpandedInfo"
        >
            <img class="card-img-top"
                :src="product.img">
            <div class="card-body p-1 m-1">
                <h5 class="card-title mb-0">{{product.name}}</h5>
                <div class="card-text">
                    <div>
                        <small class="card-text text-muted">
                            {{product.category}}
                        </small>
                    </div>
                    <div>
                        <del>{{product.oldPrice}}</del>
                        <strong>{{product.price}}</strong>
                    </div>
                    <div
                        v-if="isExpandedInfo"
                        class="alert alert-dark p-0 m-0"   
                        role="alert"
                    >
                        <div>
                            <small>
                                <strong>Брэнд</strong> {{product.brand}}
                            </small>
                        </div>
                        <div>
                            <small>
                                <strong>Размер</strong> {{product.size}}
                            </small>
                        </div>
                        <div>
                            <small>
                                <strong>Цвет</strong> {{product.color}}
                            </small>
                        </div>
                    </div>
                </div>

                <b-button id="show-btn" variant="primary" @click.stop="$bvModal.show(product.id)">Купить</b-button>

                <b-modal :id="product.id" hide-footer>
                    <div class="d-block text-center">
                    <h3>Куплен товар '{{product.name}}'</h3>
                    </div>
                    <b-button class="mt-3" variant="primary" block @click="$bvModal.hide(product.id)">ОК</b-button>
                </b-modal>

            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'productItem',

    data() {
        return {
            isExpandedInfo: false,
        }
    },
    props: {
        product: {
            type: Object
        }
    },
    methods: {
        toggleExpandedInfo() {
            this.isExpandedInfo = !this.isExpandedInfo
        },
    }
}
</script>

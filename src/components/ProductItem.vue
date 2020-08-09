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
                <Popup
                    @togglePopup="togglePopup"
                    v-if="showPopup"
                >
                    Куплен товар '{{product.name}}'
                </Popup>
                <a
                    @click.stop.prevent="togglePopup"
                    class="btn btn-primary m-1"
                >  
                    Купить
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Popup from '@/components/Popup'

export default {
    name: 'productItem',
    components: {
        Popup
    },
    data() {
        return {
            isExpandedInfo: false,
            showPopup: false
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
        togglePopup() {
            this.showPopup = !this.showPopup
        }
    }
}
</script>

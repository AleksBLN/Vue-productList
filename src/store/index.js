import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
  actions: {},
  mutations: {
    updateBrand(state, brand) {
      state.filterData.selectedBrand = brand;
    },
    updateColor(state, color) {
      state.filterData.selectedColor = color;
    },
    updateSize(state, size) {
      state.filterData.selectedSize = size;
    },
    resetFilter(state) {
      state.filterData.selectedBrand = '';
      state.filterData.selectedSize = '';
      state.filterData.selectedColor = '';
    },
  },
  state: {
    productList: [
      {
        id: 1,
        name: 'куртка красная',
        img: 'https://media.istockphoto.com/photos/male-coat-isolated-on-the-white-picture-id163208487',
        category: 'куртки',
        oldPrice: 5880,
        price: 4790,
        brand: 'super',
        size: 31,
        color: 'красный',
      },
      {
        id: 2,
        name: 'куртка большая',
        img: 'https://media.istockphoto.com/photos/red-womans-sports-jacket-picture-id520887025',
        category: 'куртки',
        oldPrice: 5900,
        price: 3790,
        brand: 'super',
        size: 42,
        color: 'зеленый',
      },
      {
        id: 3,
        name: 'куртка модная',
        img: 'https://media.istockphoto.com/photos/male-coat-isolated-on-the-white-picture-id163208487',
        category: 'куртки',
        price: 5550,
        brand: 'puper',
        size: 29,
        color: 'красный',
      },
      {
        id: 4,
        name: 'куртка выгодная',
        img: 'https://media.istockphoto.com/photos/red-womans-sports-jacket-picture-id520887025',
        category: 'куртки',
        oldPrice: 7900,
        price: 1990,
        brand: 'super',
        size: 29,
        color: 'зеленый',
      },
    ],
    filterData: {
      selectedBrand: "",
      selectedSize: "",
      selectedColor: "",
      brands: [
        {
          label: "Бренд",
          value: "",
        },
        {
          label: "Super",
          value: "super",
        },
        {
          label: "Puper",
          value: "puper",
        },
        {
          label: "Cool",
          value: "cool",
        },
        {
          label: "Like",
          value: "like",
        },
      ],
      sizes: [
        {
          label: "Размер",
          value: "",
        },
        {
          label: "29",
          value: "29",
        },
        {
          label: "31",
          value: "31",
        },
        {
          label: "35",
          value: "35",
        },
        {
          label: "37",
          value: "37",
        },
        {
          label: "42",
          value: "42",
        },
      ],
      colors: [
        {
          label: "Цвет",
          value: "",
        },
        {
          label: "Синий",
          value: "синий",
        },
        {
          label: "Красный",
          value: "красный",
        },
        {
          label: "Зеленый",
          value: "зеленый",
        },
        {
          label: "Белый",
          value: "белый",
        },
        {
          label: "Серый",
          value: "серый",
        },
      ],
    },
  },
  getters: {
    products(state) {
      return state.productList;
    },
    filterData(state) {
      return state.filterData;
    },
  },
});
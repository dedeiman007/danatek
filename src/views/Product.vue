<template>
    <div>
        <section class="mt-hero">
            <div class="container">
                <div class="product-banner" :style="{ backgroundImage: `url(${require('../assets/product-banner.jpg')})` }">
                    <div class="content">
                        <h2 class="text-white fw-ekstra-bold">
                            Kategori Produk
                        </h2>
                        <div class="text-white size-14 fw-medium">
                            <div class="row">
                                <div class="col-md-8">
                                    Sudah lebih dari 20 tahun kami menjalani tugas dan amanat kami dibidang kesehatan. Hingga saat ini kami tetap setia menjalani kewajiban kami
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="mt-section">
            <div class="container">
                <template v-if="filteredProducts.length > 0">
                    <div class="row">
                        <div class="col-md-12 mt-4 mb-3">
                            <div id="radio-filter-content">
                                <ul class="pl-0 filter-tab">
                                    <li>
                                        <div class="radio">
                                            <input type="radio" v-model="selectedCategory" id="all" value="all" name="filter">
                                            <label for="all">All</label>
                                        </div>
                                    </li>
                                    <template v-for="category in categories">
                                        <li :key="category.id">
                                            <div class="radio">
                                                <input type="radio" v-model="selectedCategory" :id="category.name" :value="category.name" name="filter"/>
                                                <label :for="category.name">
                                                    {{ category.name }}
                                                </label>
                                            </div>
                                        </li>
                                    </template>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-3 mt-4" v-for="(product, index) in filteredProducts" :key="index">
                            <div class="box">
                                <div class="text-center">
                                    <img :src="product.images[0].image" width="50%" alt="">
                                </div>
                                <div class="mt-4 size-16 fw-ekstra-bold text-dark">
                                    {{ product.name }}
                                </div>
                                <div class="text-gray size-14">
                                    {{ product.category }}
                                </div>
                                <div class="mt-3">
                                    <router-link :to="{path:'/product/' + product.id}" class="btn btn-primary btn-sm w-100">
                                        View Detail
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </template>
                <template v-else>
                    <div class="row justify-content-center">
                        <div class="col-md-4">
                            <div class="box text-center p-4">
                                <div class="mt-4">
                                    <img src="../assets/empty.png" width="100" alt="">
                                </div>
                                <div class="size-18 fw-medium text-gray mt-3 mb-4">
                                    Product is empty
                                </div>
                            </div>
                        </div>
                    </div>
                </template>
            </div>
        </section>
        <section class="mt-section">
            <div class="container">
                <div class="box">
                    <div class="row">
                        <div class="col-md-9">
                            <div class="size-16 fw-normal">
                                Ada yang ingin ditanyakan?
                            </div>
                            <div class="fw-ekstra-bold size-20 m-mt-1">
                                Mari bersama memajukan pelayanan kesehatan di Indonesia
                            </div>
                        </div>
                        <div class="col-md-3 mt-2 m-mt-3">
                            <a :href="'https://wa.me/' + mobile_number" target="_blank" class="btn btn-wa btn-lg w-100">
                                <i class="fa fa-whatsapp me-2"></i>
                                Chat Sekarang
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import Api from '../api/Api';

    export default {
        components: {
        },
        name: 'ProductList',
        data() {
            return{
                products: [],
                categories: [],
                selectedCategory: 'all',
                mobile_number: ''
            }
        },
        created() {
            this.getProducts()
            this.getCategories()
            this.getPhone()
        },
        computed: {
            filteredProducts: function() {
                var vm = this;
                var category = vm.selectedCategory;
                
                if(category === "all") {
                    return vm.products;
                } else {
                    return vm.products.filter(function(person) {
                        return person.category === category;
                    });
                }
            }
        },
        methods: {
            getProducts(){
                Api.get(`/product`)
                .then((res)=>{
                    var data = res.data.data
                    this.products = data
                })
                .catch(err => {
                    console.log(err)
                });
            },
            getCategories() {
                Api.get(`/categoryproduct`)
                .then((res) => {
                    var data = res.data.data
                    this.categories = data
                })
                .catch((err) => {
                    console.log(err)
                })                
            },
            getPhone(){
                Api.get(`/company`)
                .then((res)=>{
                    var data = res.data.data.mobile_number
                    console.log(data)
                    this.mobile_number = data
                })
                .catch(err => {
                    console.log(err)
                });
            },
        }
    }
</script>

<style>
    #radio-filter-content input {
        display: none;
    }
    #radio-filter-content input + label {
        display: inline-block;
        margin: -2px;
        padding: 4px 18px;
        border: 1px solid #dee2e6;
        cursor: pointer;
        border-radius: 8px;
    }
    #radio-filter-content input:checked + label {
        background: #f6a51f;
        color: #fff;
        border: 1px solid #f6a51f;
    }
    ul li {
        display: inline-block;
        margin-right: 10px;
    }
    ul.filter-tab{
        padding-left: 0px !important;
    }
</style>
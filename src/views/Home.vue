<template>
    <div>
        <section class="hero mt-hero">
            <div class="container">
                <div class="row m-center">
                    <div class="col-12 col-md-6 col-lg-6 mt-5 m-mt-0">
                        <h1 class="hero__title">
                            {{ home.title }}
                        </h1>
                        <div class="size-16 text-dark m-size-14">
                            <div v-html="home.description"></div>
                        </div>
                        <div class="mt-5">
                            <router-link :to="{name:'Product'}" class="btn btn-header">
                                Lihat Produk Sekarang Juga
                                <i class="fa fa-angle-right ms-3"></i>
                            </router-link>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-6 p-lg-0 text-right">
                        <img src="https://good.co/wp-content/themes/goodco-rd/build/img/home-hero-image.png" class="img-fluid" alt="">
                    </div>
                </div>
            </div>
        </section>
        <section class="mt-section">
            <div class="container">
                <h3 class="text-dark text-center fw-ekstra-bold">
                    Company Overview
                </h3>
                <div class="row justify-content-center mt-4">
                    <div class="col-md-6">
                        <div class="box no-shadow border-gray text-center">
                            <div v-html="home.company_overview"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="mt-section">
            <div class="container">
                <h3 class="text-dark fw-ekstra-bold">
                    My Product
                </h3>
                <template v-if="products.length > 0">
                    <div class="row mt-4">
                        <div class="col-md-3 mt-4" v-for="(product, index) in products" :key="index">
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
                        <div class="col-md-4 mt-5">
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

        <!-- <section class="mt-section bc-light-primary">
            <div class="container p-overview">
                <div class="row justify-content-center">
                    <div class="col-md-6">
                        <div class="box no-shadow">
                            <div class="text-center size-18 fw-ekstra-bold">
                                Company Overview
                            </div>
                            <div class="mt-4 size-14 fw-medium text-center">
                                Melihat semakin banyak alat medis di dunia yang dibutuhkan oleh dunia kesehatan, langkah utama yang kami lakukan adalah bergabung dengan salah satu persuahaan media asal Denmark yaitu Dantec. Seiring berkembangnya perusahaan, banyak spesialisasi produk yang dikembangkan seperti urologi, gastroenterologi, dan Neurologi. Kami juga memperluas kemitraan dengan Huikang (China), Laborie Medical (Canada)/ MMS (Netherland), Compumedics (Autralia) dan lainnya.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> -->
        
        <section class="mt-section">
            <div class="container">
                <h3 class="text-dark fw-ekstra-bold">
                    Article
                </h3>
                <div class="row" v-if="articles.length > 0">
                    <template v-for="(article, index) in articles.slice(0,6)">
                        <div class="col-md-6 mt-4" v-if="article.status == 'Aktif'" :key="index">
                            <router-link :to="{path:'/article/' + article.id}">
                                <div class="box no-shadow border-gray">
                                    <div class="row">
                                        <div class="col-md-4">
                                            <div class="image-article" :style="{'background-image': 'url(' + (article.image) + ')'}"></div>
                                        </div>
                                        <div class="col-md-8">
                                            <div class="fw-ekstra-bold size-16 text-dark m-mt-2">
                                                {{ article.title }}
                                            </div>
                                            <div class="mt-2 text-gray fw-medium">
                                                {{ moment(article.created_at).format('DD MMMM YYYY') }}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </router-link>
                        </div>
                    </template>
                </div>
                <div class="box no-shadow border-gray text-center p-4 mt-5" v-else>
                    <div class="mt-4">
                        <img src="../assets/empty.png" width="100" alt="">
                    </div>
                    <div class="size-18 fw-medium text-gray mt-4 mb-2">
                        Article is empty
                    </div>
                </div>
                <div class="mt-4" v-if="articles.length > 6">
                    <router-link :to="{name:'Article'}" class="btn btn-outline-primary px-5">
                        See All Articles
                    </router-link>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import Api from '../api/Api';
    import moment from 'moment';

    export default {
        components: {
        },
        name: 'Home',
        data() {
            return{
                moment: moment,
                home: {},
                products: [],
                articles: []
            }
        },
        created() {
            this.getHomeData()
            this.getProducts()
            this.getArticles()
        },
        methods: {
            getHomeData(){
                Api.get(`/home`)
                .then((res)=>{
                    var data = res.data.data
                    this.home = data
                })
                .catch(err => {
                    console.log(err)
                });
            },
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
            getArticles(){
                Api.get(`/article`)
                .then((res)=>{
                    var data = res.data.data
                    this.articles = data
                })
                .catch(err => {
                    console.log(err)
                });
            },
        }
    }
</script>

<style>
    .image-article{
        width: 100%;
        height: 90px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        border-radius: 10px;
    }
</style>
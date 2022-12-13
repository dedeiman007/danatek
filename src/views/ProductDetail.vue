<template>
    <section class="mt-hero">
        <div class="container">
            <div class="row mt-detail-prod">
                <div class="col-md-5">
                    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner box no-shadow border-gray">
                            <template v-for="(image, index) in details.images">
                                <div class="carousel-item" :class="{'': true, 'active': index == 0}" :key="index">
                                    <img :src="image.image" class="d-block w-100" :alt="image.name">
                                </div>
                            </template>
                        </div>
                        <template v-if="details.images.length > 1">
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <i class="fa fa-angle-left"></i>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <i class="fa fa-angle-right"></i>
                            </button>
                        </template>
                    </div>
                </div>
                <div class="col-md-7 m-mt-3">
                    <small class="tag yellow">
                        {{ details.category }}
                    </small>
                    <div class="size-16 fw-bold mt-3">
                        {{ details.name }}
                    </div>
                    <div class="mt-3">
                        <div v-html="details.description"></div>
                    </div>
                </div>
            </div>
            <h4 class="text-dark fw-ekstra-bold mt-hero">
                Other Product
            </h4>
            <div class="row" v-if="products.length > 0">
                <template v-for="(product, index) in products.slice(0, 5)">
                    <div class="col-md-3 mt-4" :class="{'': true, 'none': product.id == details.id}" :key="index">
                        <a :href="'/product/' + product.id">
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
                            </div>
                        </a>
                    </div>
                </template>
            </div>
        </div>
    </section>
</template>

<script>
    import Api from '../api/Api';

    export default {
        components: {
        },
        name: 'ProductDetail',
        data() {
            return{
                details: {},
                products: []
            }
        },
        created() {
            this.getProductDetail()
            this.getProducts()
        },
        methods: {
            getProductDetail(){
                Api.get(`/product/${this.$route.params.id}`)
                .then((res)=>{
                    var data = res.data.data
                    this.details = data
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
        }
    }
</script>
<style>
    .carousel-control-prev{
        width: 40px !important;
        height: 40px !important;
        background: #f6a51f !important;
        color: #fff !important;
        font-size: 20px;
        border-radius: 50px;
        top: 40% !important;
        left: 20px !important;
    }
    .carousel-control-next{
        width: 40px !important;
        height: 40px !important;
        background: #f6a51f !important;
        color: #fff !important;
        font-size: 20px;
        border-radius: 50px;
        top: 40% !important;
        right: 20px !important;
    }
    .carousel-indicators [data-bs-target]{
        background-color: #f6a51f !important;
    }
    .mt-detail-prod{
        margin-top: 200px !important;
    }
</style>
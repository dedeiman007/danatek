<template>
    <div>
        <section class="mt-hero">
            <div class="container">
                <div class="product-banner" :style="{'background-image': 'url(' + (details.image) + ')'}">
                    <router-link :to="{name: 'Article'}"  data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top">
                        <div class="circle-back">
                            <i class="fa fa-angle-left"></i>
                        </div>
                    </router-link>
                    <div class="content">
                        <div class="text-white size-14 fw-medium">
                            <div class="row">
                                <div class="col-md-8">
                                    <h2 class="text-white fw-ekstra-bold">
                                        {{ details.title }}
                                    </h2>
                                </div>
                                <div class="col-md-12">
                                    {{ moment(details.created_at).format('DD MMMM YYYY') }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div class="container">
                <div class="size-14 mt-3">
                    <div v-html="details.description"></div>
                </div>
                <h4 class="text-dark fw-ekstra-bold mt-hero">
                    Other Article
                </h4>
                <div class="row" v-if="articles.length > 0">
                    <template v-for="(article, index) in articles">
                        <div class="col-md-6 mt-3" :class="{'': true, 'none': article.id == details.id}" :key="index" v-if="article.status == 'Aktif'">
                            <a :href="'/article/' + article.id">
                                <div class="box no-shadow border-gray">
                                    <div class="row">
                                        <div class="col-md-4">
                                            <div class="image-article" :style="{'background-image': 'url(' + (article.image) + ')'}"></div>
                                        </div>
                                        <div class="col-md-8 m-mt-2">
                                            <div class="fw-ekstra-bold size-16 text-dark">
                                                {{ article.title }}
                                            </div>
                                            <div class="mt-2 text-gray fw-medium">
                                                {{ moment(article.created_at).format('DD MMMM YYYY') }}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </template>
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
        name: 'ArticleDetail',
        data() {
            return{
                moment: moment,
                details: {},
                articles: []
            }
        },
        created() {
            this.getArticleDetail()
            this.getArticles()
        },
        mounted(){},
        methods: {
            getArticleDetail(){
                Api.get(`/article/${this.$route.params.id}`)
                .then((res)=>{
                    var data = res.data.data
                    this.details = data
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
    .none{
        display: none !important;
    }
</style>
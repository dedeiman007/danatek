<template>
    <div class="mt-second-hero">
        <section>
            <div class="container">
                <h2 class="text-dark fw-ekstra-bold">
                    List Article 
                </h2>
                <div class="row" v-if="articles.length > 0">
                    <template v-for="(article, index) in articles">
                        <div class="col-md-6 mt-4" :key="index" v-if="article.status == 'Aktif'">
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
                <div class="box no-shadow border-gray text-center p-4 mt-5" v-else>
                    <div class="mt-4">
                        <img src="../assets/empty.png" width="100" alt="">
                    </div>
                    <div class="size-18 fw-medium text-gray mt-4 mb-2">
                        Article is empty
                    </div>
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
                articles: []
            }
        },
        created() {
            this.getArticles()
        },
        methods: {
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

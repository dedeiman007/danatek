<template>
    <div class="container-form">
        <notifications group="foo" position="top right" />
        <div>
            <div class="px-3 line d-block d-lg-none"></div>
            <div class="d-flex align-items-center">
                <div>
                    <h4 class="fw-ekstra-bold mb-0">
                        List Article
                    </h4>
                    <p class="mt-2 text-gray500">
                        Lorem ipsum dolor sit amet consectetur,
                    </p>
                </div>
                <div class="ms-auto">
                    <router-link :to="{name: 'admin-article-create'}" :class="{'': true, 'active': this.$route.name == 'admin-article-create'}">
                        <a class="btn btn-primary px-4">
                            Create Article
                        </a>
                    </router-link>
                </div>
            </div>

            <template v-if="lists.length > 0">
                <div class="modern-table-boxed mt-4">
                    <div class="d-table-row header">
                        <div class="d-table-cell" style="width: 60px">
                            No
                        </div>
                        <div class="d-table-cell" style="width: 150px;">
                            Image
                        </div>
                        <div class="d-table-cell">
                            Title
                        </div>
                        <div class="d-table-cell">
                            Created At
                        </div>
                        <div class="d-table-cell">
                            Status
                        </div>
                        <div class="d-table-cell">
                            Action
                        </div>
                    </div>
                    <div class="d-table-row" v-for="(list, index) in lists" :key="list.id">
                        <div class="d-table-cell">
                            {{ index+1 }}.
                        </div>
                        <div class="d-table-cell">
                            <div class="article-image">
                                <img :src="list.image" class="w-100" alt="">
                            </div>
                        </div>
                        <div class="d-table-cell">
                            {{ list.title }}
                        </div>
                        <div class="d-table-cell">
                            {{ moment(list.updated_at).format('DD MMMM YYYY') }}
                        </div>
                        <div class="d-table-cell">
                            <span class="tag" :class="{'': true, 'green': list.status == 'Aktif', 'red': list.status == 'Tidak Aktif'}">{{ list.status }}</span>
                        </div>
                        <div class="d-table-cell shrink">
                            <router-link :to="{path: `/admin/article/${list.id}`}">
                                <a class="me-4">
                                    <i class="fa fa-pencil size-18"></i>
                                </a>
                            </router-link>
                            <a href="javascript:void(0)" @click="deleteArticle(list.id)">
                                <i class="fa fa-trash size-18 text-danger"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </template>
            <template v-else>
                <div class="text-center mt-5">
                    <img src="../../../assets/no-data.png" width="170" alt="">
                    <h5 class="mt-2 text-gray500 size-22">
                        No data
                    </h5>
                </div>
            </template>
        </div>
    </div>
</template>
<script>
    import Api from '../../../api/Api';
    import { Tooltip } from 'bootstrap'
    import moment from 'moment';

    export default {
        name: 'admin-article',
        data() {
            return{
                moment: moment,
                lists: []
            }
        },
        created(){
            this.getArticles()
        },
        mounted(){
            new Tooltip(document.body, {
              selector: "[data-bs-toggle='tooltip']",
            })
        },
        methods: {
            getArticles(){
                Api.get(`/article`)
                .then((res)=>{
                    var data = res.data.data
                    this.lists = data
                })
                .catch(err => {
                    console.log(err)
                });
            },
            deleteArticle(id) {
                Api.delete(`article/${id}`, {
                    headers: {
                        'token': `${localStorage.getItem('token')}`,
                    }
                })
                .then((res) => {
                    var response = res.data

                    this.$notify({
                        group: 'foo',
                        type: 'success',
                        title: 'Success',
                        text: 'Data deleted'
                    });

                    if(response.success == true) {
                        this.getArticles()
                    }
                })
                .catch((err) => {
                    console.log(err)
                })
            }
        }
    }
</script>

<style scoped>
    .article-image{
        width: 60px;
    }
</style>
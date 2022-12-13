<template>
    <div class="container-form">
        <notifications group="foo" position="top right" />
        <div>
            <div class="px-3 line d-block d-lg-none"></div>
            <div class="d-flex align-items-center">
                <div>
                    <h4 class="fw-ekstra-bold mb-0">
                        List Product
                    </h4>
                    <p class="mt-2 text-gray500">
                        Lorem ipsum dolor sit amet consectetur,
                    </p>

                </div>
                <div class="ms-auto">
                    <router-link :to="{name: 'admin-product-create'}" :class="{'': true, 'active': this.$route.name == 'admin-product-create'}">
                        <a class="btn btn-primary px-4">
                            Create Product
                        </a>
                    </router-link>
                </div>
            </div>

            <template v-if="lists.length > 0">
                <div class="modern-table-boxed mt-4">
                    <div class="d-table-row header">
                        <div class="d-table-cell">
                            No
                        </div>
                        <div class="d-table-cell">
                            Images
                        </div>
                        <div class="d-table-cell">
                            Name
                        </div>
                        <div class="d-table-cell">
                            Category
                        </div>
                        <div class="d-table-cell">
                            Action
                        </div>
                    </div>
                    <div class="d-table-row" v-for="(list, index) in lists" :key="list.id">
                        <div class="d-table-cell" style="width: 10px;">
                            {{ index+1 }}.
                        </div>
                        <div class="d-table-cell" style="width: 300px;">
                            <div class="d-flex">
                                <div class="image me-2" v-for="image in list.images" :key="image.id">
                                    <img :src="image.image" class="w-100" alt="">
                                </div>
                            </div>
                        </div>
                        <div class="d-table-cell">
                            {{ list.name }}
                        </div>
                        <div class="d-table-cell">
                            {{ list.category }}
                        </div>
                        <div class="d-table-cell shrink">
                            <router-link :to="{path: `/admin/product/${list.id}`}">
                                <a class="me-4">
                                    <i class="fa fa-pencil size-18"></i>
                                </a>
                            </router-link>
                            <a href="javascript:void(0)" @click="deleteProduct(list.id)">
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

    export default {
        name: 'admin-article',
        data() {
            return{
                lists: []
            }
        },
        created(){
            this.getProduct()
        },
        mounted(){
            new Tooltip(document.body, {
              selector: "[data-bs-toggle='tooltip']",
            })
        },
        methods: {
            getProduct(){
                Api.get(`/product`)
                .then((res)=>{
                    var data = res.data.data
                    this.lists = data
                })
                .catch(err => {
                    console.log(err)
                });
            },
            deleteProduct(id) {
                Api.delete(`product/${id}`, {
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
                        this.getProduct()
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
    .image{
        width: 60px;
        border: 2px solid #e9ecef;
        border-radius: 5px;
    }
</style>
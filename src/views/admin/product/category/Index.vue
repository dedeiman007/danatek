<template>
    <div class="container-form">
        <notifications group="foo" position="top right" />
        <div>
            <div class="px-3 line d-block d-lg-none"></div>
            <div class="d-flex align-items-center">
                <div>
                    <h4 class="fw-ekstra-bold mb-0">
                        List Category Product
                    </h4>
                    <p class="mt-2 text-gray500">
                        Lorem ipsum dolor sit amet consectetur,
                    </p>
                </div>
                <div class="ms-auto">
                    <router-link :to="{name: 'admin-product-category-create'}">
                        <a class="btn btn-primary px-4">
                            Create Category
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
                        <div class="d-table-cell">
                            Name
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
                            {{ list.name }}
                        </div>
                        <div class="d-table-cell shrink">
                            <router-link :to="{path: `/admin/product/category/${list.id}`}">
                                <a class="me-4">
                                    <i class="fa fa-pencil size-18"></i>
                                </a>
                            </router-link>
                            <a href="javascript:void(0)" @click="deleteProductCategory(list.id)">
                                <i class="fa fa-trash size-18 text-danger"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </template>
            <template v-else>
                <div class="text-center mt-5">
                    <img src="../../../../assets/no-data.png" width="170" alt="">
                    <h5 class="mt-2 text-gray500 size-22">
                        No data
                    </h5>
                </div>
            </template>
        </div>
    </div>
</template>
<script>
    import Api from '../../../../api/Api';
    import { Tooltip } from 'bootstrap'

    export default {
        name: 'admin-article',
        data() {
            return{
                lists: []
            }
        },
        created(){
            this.getCategory()
        },
        mounted(){
            new Tooltip(document.body, {
              selector: "[data-bs-toggle='tooltip']",
            })
        },
        methods: {
            getCategory(){
                Api.get(`/categoryproduct`)
                .then((res)=>{
                    var data = res.data.data
                    this.lists = data
                })
                .catch(err => {
                    console.log(err)
                });
            },
            deleteProductCategory(id) {
                Api.delete(`categoryproduct/${id}`, {
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
                        this.getCategory()
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
</style>
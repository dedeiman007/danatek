<template>
    <div class="container-form">
        <notifications group="foo" position="top right" />
        <div>
            <h4 class="fw-ekstra-bold mb-0">
                Create Article
            </h4>
            <p class="mt-2 text-gray500">
                Lorem ipsum dolor sit amet consectetur,
            </p>
        </div>
        <div class="box mt-4">
            <div class="row">
                <div class="col-md-12">
                    <label class="mb-2 fw-medium">Name</label>
                    <input type="text" class="form-control" placeholder="Enter name" v-model="req.name">
                    <div>
                        <small class="text-danger size-12" v-if="validation_errors['name']">
                            {{ validation_errors.name[0] }}
                        </small>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-4">
            <button class="btn btn-primary px-5 me-3" @click="createCategory()">Create</button>
            <router-link :to="{name: 'admin-product-category'}">
                <a class="btn btn-outline-primary px-5">
                    Cancel
                </a>
            </router-link>
        </div>
    </div>
</template>
<script>
    import Api from '../../../../api/Api';

    export default {
        name: 'admin-product-category-create',
        data() {
            return{
                req: {
                    name: '',
                },
                validation_errors: [],
            }
        },
        created(){
        },
        mounted(){
        },
        methods: {
            createCategory() {
                var data = {
                    name: this.req.name
                }
                Api.post('categoryproduct', data, {
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
                        text: 'Data created'
                    });

                    if(response.success == true) {
                        setTimeout(() => (window.location.href = "/admin/product/category"), 1500);
                    }
                })
                .catch((err) => {
                    this.validation_errors = err.response.data.data
                })
            },
        }
    }
</script>

<style scoped>
</style>
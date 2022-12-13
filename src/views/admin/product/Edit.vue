<template>
    <div class="container-form">
        <notifications group="foo" position="top right" />
        <div>
            <h4 class="fw-ekstra-bold mb-0">
                Edit Product
            </h4>
            <p class="mt-2 text-gray500">
                Lorem ipsum dolor sit amet consectetur,
            </p>
        </div>
        <div class="box mt-4">
            <div class="row">
                <div class="col-md-6">
                    <label class="mb-2 fw-medium">Name</label>
                    <input type="text" class="form-control" placeholder="Enter name" v-model="req.name">
                    <div>
                        <small class="text-danger size-12" v-if="validation_errors['name']">
                            {{ validation_errors.name[0] }}
                        </small>
                    </div>
                </div>
                <div class="col-md-6">
                    <label class="mb-2 fw-medium">Category</label>
                    <select class="form-control form-select" v-model="req.category_id">
                        <option value="">Select category</option>
                        <template v-for="category in categories">
                            <option :key="category.id" :value="category.id">{{ category.name }}</option>
                        </template>
                    </select>
                    <div>
                        <small class="text-danger size-12" v-if="validation_errors['category_id']">
                            {{ validation_errors.category_id[0] }}
                        </small>
                    </div>
                </div>
                <div class="col-md-12 mt-3">
                    <label class="mb-2 fw-medium">Image</label>
                        <div class="row" :if="images.length">
                            <div class="col-md-3 mb-3" v-for="(f, index) in images" :key="index">
                                <div class="d-flex align-items-center">
                                    <div class="me-3">
                                        <input type="file" class="images[] form-control file" @change="previewImage(index, $event)">
                                    </div>
                                    <div>
                                        <a href="javascript:void(0)" class="text-danger size-18" @click.prevent="removeImage(index, $event)">
                                            <i class="fa fa-close"></i>
                                        </a>
                                    </div>
                                </div>
                                <div :class="'images[' + index + ']-preview'"></div>
                            </div>
                        </div>
                        <button class="btn btn-outline-primary btn-sm px-5" @click.prevent="addNewImage">
                            <i class="fa fa-plus me-2"></i>
                            Tambah Gambar Produk
                        </button>
                    <div>
                        <small class="text-danger size-12" v-if="validation_errors['images']">
                            {{ validation_errors.images[0] }}
                        </small>
                    </div>
                </div>
                <div class="col-md-12 mt-3">
                    <label class="mb-2 fw-medium">Description</label>
                    <textarea id="description"></textarea>
                    <div>
                        <small class="text-danger size-12" v-if="validation_errors['description']">
                            {{ validation_errors.description[0] }}
                        </small>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-3">
            <button class="btn btn-primary px-5 me-3" @click="updateProduct()">Update</button>
            <router-link :to="{name: 'admin-product'}" :class="{'': true, 'active': this.$route.name == 'admin-article'}">
                <a class="btn btn-outline-primary px-5">
                    Cancel
                </a>
            </router-link>
        </div>
    </div>
</template>
<script>
    import Api from '../../../api/Api';
    import $ from 'jquery'

    export default {
        name: 'admin-article-edit',
        data() {
            return{
                req: {
                    name: '',
                    images: '',
                    description: '',
                    category_id: ''
                },
                validation_errors: [],
                is_changing_image: false,
                categories: [],
                images: [],
                maxImages: 3,
                addImage: 'button.add-image',
            }
        },
        created(){
            this.getCategory()
            this.getProducts()
        },
        mounted(){
            $('#description').summernote({
                placeholder: 'Enter description',
                tabsize: 2,
                height: 230
            });
        },
        methods: {
            getProducts(){
                Api.get(`/product/${this.$route.params.id}`, {
                    headers: {
                        'token': `${localStorage.getItem('token')}`,
                    }
                })
                .then((res)=>{
                    var data = res.data.data
                    this.req = data

                    $('#description').summernote('code', data.description)
                })
                .catch(err => {
                    console.log(err)
                });
            },
            getCategory(){
                Api.get(`/categoryproduct`)
                .then((res)=>{
                    var data = res.data.data
                    this.categories = data
                })
                .catch(err => {
                    console.log(err)
                });
            },
            updateProduct() {
                var description = $('#description').summernote('code')
                var data = new FormData()

                data.append('name', this.req.name)
                data.append('category_id', this.req.category_id)
                data.append('description', description)

                $('[class~="images[]"]', this.el).each(function(i) {
                    if (i > this.maxImages - 1) {
                    return;
                    }
                    data.append('images[' + i + ']', this.files[0]);
                });

                Api.post(`product/update/${this.$route.params.id}`, data, {
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
                        setTimeout(() => (window.location.href = "/admin/product"), 1500);
                    }
                })
                .catch((err) => {
                    this.validation_errors = err.response.data.data
                })
            },
            addNewImage: function() {
                var n = this.maxImages || -1;
                if (n && this.images.length < n) {
                    this.images.push('');
                }
                this.checkImages();
            },

            removeImage: function(index) {
                this.images.splice(index, 1);
                this.checkImages();
            },

            checkImages: function() {
                var n = this.maxImages || -1;
                if (n && this.images.length >= n) {
                    $(this.addImage, this.el).prop('disabled', true);
                } else {
                    $(this.addImage, this.el).prop('disabled', false);
                }
            },

            previewImage: function(index, e) {
                var r = new FileReader(),
                f = e.target.files[0];

                r.addEventListener('load', function() {
                    $('[class~="images[' + index + ']-preview"]', this.el).html(
                    '<div class="image-preview" style="background-image: url('+ r.result +')"></div>'
                    );
                }, false);

                if (f) {
                    r.readAsDataURL(f);
                }
            },
        }
    }
</script>

<style scoped>
</style>
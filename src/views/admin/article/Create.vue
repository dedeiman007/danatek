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
                <div class="col-md-6">
                    <label class="mb-2 fw-medium">Title</label>
                    <input type="text" class="form-control" placeholder="Enter title" v-model="req.title">
                    <div>
                        <small class="text-danger size-12" v-if="validation_errors['title']">
                            {{ validation_errors.title[0] }}
                        </small>
                    </div>
                </div>
                <div class="col-md-6">
                    <label class="mb-2 fw-medium">Status</label>
                    <select class="form-control form-select" v-model="req.status">
                        <option value="">Pilih status</option>
                        <option value="Aktif">Aktif</option>
                        <option value="Tidak Aktif">Tidak Aktif</option>
                    </select>
                    <div>
                        <small class="text-danger size-12" v-if="validation_errors['title']">
                            {{ validation_errors.title[0] }}
                        </small>
                    </div>
                </div>
                <div class="col-md-12 mt-3">
                    <label class="mb-2 fw-medium">Image</label>
                    <div class="image-text" :style="{'background-image': 'url(' + (req.image) + ')'}">
                        <div class="mt-4 ml-4">
                            <label for="image" class="upload-button single-image"> 
                                <i class="fa fa-cloud-upload mr-1"></i>
                                Upload Gambar
                                <input type="file" id="image" @change="changeImage()">
                            </label>
                        </div>
                    </div>
                    <div>
                        <small class="text-danger size-12" v-if="validation_errors['image']">
                            {{ validation_errors.image[0] }}
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
            <button class="btn btn-primary px-5 me-3" @click="saveArticle()">Create</button>
            <router-link :to="{name: 'admin-article'}" :class="{'': true, 'active': this.$route.name == 'admin-article'}">
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
        name: 'admin-article-create',
        data() {
            return{
                req: {
                    title: '',
                    image: '',
                    description: '',
                    status: ''
                },
                validation_errors: [],
                is_changing_image: false,
            }
        },
        created(){
        },
        mounted(){
            $('#description').summernote({
                placeholder: 'Enter description',
                tabsize: 2,
                height: 230
            });
        },
        methods: {
            saveArticle() {
                var file = $('#image')[0].files[0]
                var description = $('#description').summernote('code')
                var data = new FormData()

                data.append('title', this.req.title)
                data.append('status', this.req.status)
                data.append('description', description)

                if(this.is_changing_image) {
                    data.append('image',file)
                }

                Api.post('article', data, {
                    headers: {
                        'token': `${localStorage.getItem('token')}`,
                    }
                })
                .then((res) => {
                    var response = res.data
                    this.is_changing_image = false

                    this.$notify({
                        group: 'foo',
                        type: 'success',
                        title: 'Success',
                        text: 'Data created'
                    });

                    if(response.success == true) {
                        setTimeout(() => (window.location.href = "/admin/article"), 1500);
                    }
                })
                .catch((err) => {
                    this.validation_errors = err.response.data.data
                })
            },
            changeImage() {
                var reader = new FileReader();

                reader.onload = function (e) {
                    $('.image-text').css('background-image', 'url('+ e.target.result + ')')
                };

                reader.readAsDataURL($('#image')[0].files[0]);

                this.is_changing_image = true
            },
        }
    }
</script>

<style scoped>
</style>
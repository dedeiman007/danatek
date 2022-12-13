<template>
    <div class="container-form">
        <notifications group="foo" position="top right" />
        <div>
            <div class="px-3 line d-block d-lg-none"></div>
            <h4 class="fw-ekstra-bold mb-0">
                Home Edit Content
            </h4>
            <p class="mt-2 text-gray500">
                Tambah atau edit deskripsi website anda
            </p>
            <div class="box mt-5">
                <div class="row">
                    <div class="col-md-12">
                        <label class="mb-2 fw-medium">Title</label>
                        <input type="text" name="title" class="form-control" placeholder="Enter title" v-model="req.title">
                        <div>
                            <small class="text-danger size-12" v-if="validation_errors['title']">
                                {{ validation_errors.title[0] }}
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
                    <div class="col-md-12 mt-3">
                        <label class="mb-2 fw-medium">Company Cverview</label>
                        <textarea id="company_overview"></textarea>
                        <div>
                            <small class="text-danger size-12" v-if="validation_errors['company_overview']">
                                {{ validation_errors.company_overview[0] }}
                            </small>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mt-4">
                <div class="col-md-3 m-mt-1">
                    <button class="btn btn-primary w-100" @click="saveHome()">
                        Update
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Api from '../../../api/Api';
    import { useRouter } from 'vue-router'
    import $ from 'jquery'

    export default {
        name: 'admin-home',
        setup() {
            const router = useRouter()

            function homeList() {
                router.push({
                    name: 'admin-home',
                })
            }
            
            return {
                homeList,
            }
        },
        data() {
            return{
                req: {
                    title: "",
                    description: "",
                    company_overview: "",
                },
                validation_errors: []
            }
        },
        created(){
            this.getHome()
        },
        mounted() {
            $('#description').summernote({
                placeholder: 'Enter description',
                tabsize: 2,
                height: 230
            });
            $('#company_overview').summernote({
                placeholder: 'Enter company overview',
                tabsize: 2,
                height: 230
            });
        },
        methods: {
            getHome(){
                Api.get(`/home`)
                .then((res)=>{
                    var data = res.data.data
                    this.req = data

                    $('#description').summernote('code', data.description)
                    $('#company_overview').summernote('code', data.company_overview)
                })
                .catch(err => {
                    console.log(err)
                });
            },
            saveHome() {
                var description = $('#description').summernote('code')
                var company_overview = $('#company_overview').summernote('code')
                var data = new FormData()

                data.append('title', this.req.title)
                data.append('description', description)
                data.append('company_overview', company_overview)

                Api.post('home', data, {
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
                        text: 'Data saved'
                    });

                    setTimeout(() => (window.location.href = "/admin/home"), 1500);

                    if(response.success == true) {
                        return this.homeList()
                    }
                })
                .catch((err) => {
                    this.validation_errors = err.response.data.data
                })
            },
        }
    }
</script>
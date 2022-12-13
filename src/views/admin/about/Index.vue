<template>
    <div class="container-form">
        <notifications group="foo" position="top right" />
        <div>
            <div class="px-3 line d-block d-lg-none"></div>
            <h4 class="fw-ekstra-bold mb-0">
                About Us
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
                        <label class="mb-2 fw-medium">Who We Are</label>
                        <textarea id="who_we_are"></textarea>
                        <div>
                            <small class="text-danger size-12" v-if="validation_errors['who_we_are']">
                                {{ validation_errors.who_we_are[0] }}
                            </small>
                        </div>
                    </div>
                    <div class="col-md-12 mt-3">
                        <label class="mb-2 fw-medium">Vision</label>
                        <textarea id="vision"></textarea>
                        <div>
                            <small class="text-danger size-12" v-if="validation_errors['vision']">
                                {{ validation_errors.vision[0] }}
                            </small>
                        </div>
                    </div>
                    <div class="col-md-12 mt-3">
                        <label class="mb-2 fw-medium">Mission</label>
                        <textarea id="mission"></textarea>
                        <div>
                            <small class="text-danger size-12" v-if="validation_errors['mission']">
                                {{ validation_errors.mission[0] }}
                            </small>
                        </div>
                    </div>
                    <div class="col-md-12 mt-3">
                        <label class="mb-2 fw-medium">Business Field</label>
                        <textarea id="business_field"></textarea>
                        <div>
                            <small class="text-danger size-12" v-if="validation_errors['business_field']">
                                {{ validation_errors.business_field[0] }}
                            </small>
                        </div>
                    </div>
                    <div class="col-md-12 mt-3">
                        <label class="mb-2 fw-medium">Owner Profile</label>
                        <textarea id="owner_profile"></textarea>
                        <div>
                            <small class="text-danger size-12" v-if="validation_errors['owner_profile']">
                                {{ validation_errors.owner_profile[0] }}
                            </small>
                        </div>
                    </div>
                    <div class="col-md-12 mt-3">
                        <label class="mb-2 fw-medium">Coorporate Values</label>
                        <textarea id="coorporate_values"></textarea>
                        <div>
                            <small class="text-danger size-12" v-if="validation_errors['coorporate_values']">
                                {{ validation_errors.coorporate_values[0] }}
                            </small>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mt-4">
                <div class="col-md-3 m-mt-1">
                    <button class="btn btn-primary w-100" @click="saveAbout()">
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
        name: 'admin-about',
        setup() {
            const router = useRouter()

            function aboutList() {
                router.push({
                    name: 'admin-about',
                })
            }
            
            return {
                aboutList,
            }
        },
        data() {
            return{
                req: {
                    title: "",
                    description: "",
                    who_we_are: "",
                    vision: "",
                    mission: "",
                    business_field: "",
                    owner_profile: "",
                    coorporate_values: ""
                },
                validation_errors: []
            }
        },
        created(){
            this.getAbout()
        },
        mounted(){
            $('#description').summernote({
                placeholder: 'Enter description',
                tabsize: 2,
                height: 230
            });
            $('#who_we_are').summernote({
                placeholder: 'Enter Who We Are',
                tabsize: 2,
                height: 230
            });
            $('#vision').summernote({
                placeholder: 'Enter vision',
                tabsize: 2,
                height: 230
            });
            $('#mission').summernote({
                placeholder: 'Enter mission',
                tabsize: 2,
                height: 230
            });
            $('#business_field').summernote({
                placeholder: 'Enter business field',
                tabsize: 2,
                height: 230
            });
            $('#owner_profile').summernote({
                placeholder: 'Enter owner profile',
                tabsize: 2,
                height: 230
            });
            $('#coorporate_values').summernote({
                placeholder: 'Enter coorporate values',
                tabsize: 2,
                height: 230
            });
        },
        methods: {
            getAbout(){
                Api.get(`/aboutus`)
                .then((res)=>{
                    var data = res.data.data
                    this.req = data

                    $('#description').summernote('code', data.description)
                    $('#who_we_are').summernote('code', data.who_we_are)
                    $('#vision').summernote('code', data.vision)
                    $('#mission').summernote('code', data.mission)
                    $('#business_field').summernote('code', data.business_field)
                    $('#owner_profile').summernote('code', data.owner_profile)
                    $('#coorporate_values').summernote('code', data.coorporate_values)
                })
                .catch(err => {
                    console.log(err)
                });
            },
            saveAbout() {
                var description = $('#description').summernote('code')
                var who_we_are = $('#who_we_are').summernote('code')
                var vision = $('#vision').summernote('code')
                var mission = $('#mission').summernote('code')
                var business_field = $('#business_field').summernote('code')
                var owner_profile = $('#owner_profile').summernote('code')
                var coorporate_values = $('#coorporate_values').summernote('code')
                var data = new FormData()

                data.append('title', this.req.title)
                data.append('description', description)
                data.append('who_we_are', who_we_are)
                data.append('vision', vision)
                data.append('mission', mission)
                data.append('business_field', business_field)
                data.append('owner_profile', owner_profile)
                data.append('coorporate_values', coorporate_values)

                Api.post('aboutus', data, {
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

                    setTimeout(() => (window.location.href = "/admin/about"), 1500);

                    if(response.success == true) {
                        return this.aboutList()
                    }
                })
                .catch((err) => {
                    this.validation_errors = err.response.data.data
                })
            },
        }
    }
</script>
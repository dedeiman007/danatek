<template>
    <div class="container-form">
        <notifications group="foo" position="top right" />
        <div>
            <div class="px-3 line d-block d-lg-none"></div>
            <h4 class="fw-ekstra-bold mb-0">
                Footer and Contact Edit Content
            </h4>
            <p class="mt-2 text-gray500">
                Tambah atau edit deskripsi website anda
            </p>
            <div class="box mt-5">
                <div class="row">
                    <div class="col-md-6">
                        <label class="mb-2 fw-medium">Phone Number</label>
                        <input type="number" class="form-control" placeholder="Enter phone number" v-model="req.phone_number">
                        <div>
                            <small class="text-danger size-12" v-if="validation_errors['phone_number']">
                                {{ validation_errors.phone_number[0] }}
                            </small>
                        </div>
                    </div>
                    <div class="col-md-6 m-mt-2">
                        <label class="mb-2 fw-medium">Mobile Number</label>
                        <input type="number" class="form-control" placeholder="Enter mobile number" v-model="req.mobile_number">
                        <div>
                            <small class="text-danger size-12" v-if="validation_errors['mobile_number']">
                                {{ validation_errors.mobile_number[0] }}
                            </small>
                        </div>
                    </div>
                    <div class="col-md-6 mt-3">
                        <label class="mb-2 fw-medium">Email</label>
                        <input type="email" class="form-control" placeholder="Enter email" v-model="req.email">
                        <div>
                            <small class="text-danger size-12" v-if="validation_errors['email']">
                                {{ validation_errors.email[0] }}
                            </small>
                        </div>
                    </div>
                    <div class="col-md-6 mt-3">
                        <label class="mb-2 fw-medium">Instagram</label>
                        <input type="text" class="form-control" placeholder="Enter instagram url" v-model="req.instagram">
                        <div>
                            <small class="text-danger size-12" v-if="validation_errors['instagram']">
                                {{ validation_errors.instagram[0] }}
                            </small>
                        </div>
                    </div>
                    <div class="col-md-6 mt-3">
                        <label class="mb-2 fw-medium">Facebook</label>
                        <input type="text" class="form-control" placeholder="Enter facebook url" v-model="req.facebook">
                        <div>
                            <small class="text-danger size-12" v-if="validation_errors['facebook']">
                                {{ validation_errors.facebook[0] }}
                            </small>
                        </div>
                    </div>
                    <div class="col-md-6 mt-3">
                        <label class="mb-2 fw-medium">Twitter</label>
                        <input type="text" class="form-control" placeholder="Enter twitter url" v-model="req.twitter">
                        <div>
                            <small class="text-danger size-12" v-if="validation_errors['twitter']">
                                {{ validation_errors.twitter[0] }}
                            </small>
                        </div>
                    </div>
                    <div class="col-md-12 mt-3">
                        <label class="mb-2 fw-medium">Address</label>
                        <textarea class="form-control" placeholder="Enter address" rows="5" cols="30" v-model="req.address"></textarea>
                        <div>
                            <small class="text-danger size-12" v-if="validation_errors['address']">
                                {{ validation_errors.address[0] }}
                            </small>
                        </div>
                    </div>
                    <div class="col-md-12 mt-3">
                        <label class="mb-2 fw-medium">Map Link For Footer</label>
                        <input type="text" class="form-control" placeholder="Enter map link" v-model="req.map_link">
                        <div>
                            <small class="text-danger size-12" v-if="validation_errors['map_link']">
                                {{ validation_errors.map_link[0] }}
                            </small>
                        </div>
                    </div>
                    <div class="col-md-12 mt-3">
                        <label class="mb-2 fw-medium">Map Embed For Contact</label>
                        <input type="text" class="form-control" placeholder="Enter map link" v-model="req.map_embed">
                        <div>
                            <small class="text-danger size-12" v-if="validation_errors['map_embed']">
                                {{ validation_errors.map_embed[0] }}
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

    export default {
        name: 'admin-home',
        setup() {
            const router = useRouter()

            function footerList() {
                router.push({
                    name: 'admin-footer',
                })
            }
            
            return {
                footerList,
            }
        },
        data() {
            return{
                req: {
                    description: '',
                    address: '',
                    map_link: '',
                    phone_number: '',
                    mobile_number: '',
                    email: '',
                    instagram: '',
                    facebook: '',
                    twitter: '',
                    map_embed: '',
                },
                validation_errors: [],
            }
        },
        created(){
            this.getFooter()
        },
        mounted() {
        },
        methods: {
            getFooter(){
                Api.get(`/company`)
                .then((res)=>{
                    var data = res.data.data
                    this.req = data
                })
                .catch(err => {
                    console.log(err)
                });
            },
            saveHome() {
                var data = {
                    address: this.req.address,
                    map_link: this.req.map_link,
                    map_embed: this.req.map_embed,
                    phone_number: this.req.phone_number,
                    mobile_number: this.req.mobile_number,
                    email: this.req.email,
                    instagram: this.req.instagram,
                    facebook: this.req.facebook,
                    twitter: this.req.twitter,
                }
                
                Api.post('company', data, {
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

                    setTimeout(() => (window.location.href = "/admin/footer"), 1500);

                    if(response.success == true) {
                        return this.footerList()
                    }
                })
                .catch((err) => {
                    this.validation_errors = err.response.data.data
                })
            },
        }
    }
</script>
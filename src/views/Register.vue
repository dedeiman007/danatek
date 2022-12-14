<template>
    <div class="container mt-hero login-height">
        <notifications group="foo" position="top right" />
        <div class="row justify-content-center mt-login">
            <div class="col-md-5">
                <h3 class="fw-bold text-center">
                    Form Register
                </h3>
                <div class="mt-2 text-center">
                    Silahkan Register terlebih dahulu sebelum login.
                </div>
                <div class="box mt-4">
                    <div class="">
                        <label class="mb-2 fw-bold">Name</label>
                        <input
                            type="text"
                            class="form-control"
                            placeholder="Enter name"
                            v-model="name"
                        >
                        <div>
                            <small class="text-danger size-12" v-if="validation_errors['name']">
                                {{ validation_errors.name[0] }}
                            </small>
                        </div>
                    </div>
                    <div class="mt-3">
                        <label class="mb-2 fw-bold">Email</label>
                        <input
                            type="email"
                            class="form-control"
                            placeholder="Enter email"
                            v-model="email"
                        >
                        <div>
                            <small class="text-danger size-12" v-if="validation_errors['email']">
                                {{ validation_errors.email[0] }}
                            </small>
                        </div>
                    </div>
                    <div class="mt-3">
                        <label class="mb-2 fw-bold">Password</label>
                        <input 
                            type="password"
                            class="form-control"
                            placeholder="Enter password"
                            v-model="password"
                        >
                        <div>
                            <small class="text-danger size-12" v-if="validation_errors['password']">
                                {{ validation_errors.password[0] }}
                            </small>
                        </div>
                    </div>
                    <div class="mt-3">
                        <label class="mb-2 fw-bold">Confirm Password</label>
                        <input 
                            type="password"
                            class="form-control"
                            placeholder="Enter confirm password"
                            v-model="confirm_password"
                        >
                        <div>
                            <small class="text-danger size-12" v-if="validation_errors['confirm_password']">
                                {{ validation_errors.confirm_password[0] }}
                            </small>
                        </div>
                    </div>
                    <div class="mt-4">
                        <button 
                            class="btn btn-primary w-100"
                            @click="Register()"
                        >
                            Register
                        </button>
                        <div class="mt-3">
                            <a
                                href="/login"
                                class="btn btn-outline-primary w-100"
                            >
                                Login
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Api from '../api/Api';

    export default {
        props: '',
        name: 'Register',
        data() {
            return{
                name: '',
                email: '',
                password: '',
                confirm_password: '',
                role_id: 1,
                validation_errors: [],
            }
        },
        created() {
        },
        methods: {
            Register(){
                var data = {
                    name: this.name,
                    email: this.email,
                    password: this.password,
                    confirm_password: this.confirm_password,
                    role_id: this.role_id
                }
                Api.post(`/register`, data)
                .then((res)=>{
                    console.log(res)
                    this.$notify({
                        group: 'foo',
                        type: 'success',
                        title: 'Success',
                        text: 'Register success'
                    });
                    setTimeout(() => (window.location.href = "/login"), 1500);
                })
                .catch(err => {
                    this.validation_errors = err.response.data.data
                });
            },
        }
    }
</script>

<style scoped>
    .form-control {
        display: block;
        width: 100%;
        height: calc(1.5em + 0.75rem + 2px);
        padding: 0.375rem 0.75rem;
        border: 1px solid #f4f6f8 !important;
        background: #f4f6f8 !important;
        border-radius: 5px;
        font-size: 14px;
        font-weight: 400;
        line-height: 1.5;
        transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    }
    input{
        font-family: inherit;
        margin: 0;
    }
</style>
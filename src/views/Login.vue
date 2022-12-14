<template>
    <div class="container mt-hero login-height">
        <notifications group="foo" position="top right" />
        <div class="row justify-content-center mt-login">
            <div class="col-md-5">
                <h3 class="fw-bold text-center">
                    Form Login
                </h3>
                <div class="mt-2 text-center">
                    Silahkan Login untuk edit content.
                </div>
                <div class="box mt-4">
                    <div class="">
                        <label class="mb-2 fw-bold">Email</label>
                        <input
                            type="email"
                            class="form-control"
                            placeholder="Masukkan email"
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
                            placeholder="Masukkan password"
                            v-model="password"
                        >
                        <div>
                            <small class="text-danger size-12" v-if="validation_errors['password']">
                                {{ validation_errors.password[0] }}
                            </small>
                        </div>
                    </div>
                    <div class="mt-4">
                        <button 
                            class="btn btn-primary w-100"
                            @click="login()"
                        >
                            Login
                        </button>
                        <div class="mt-3">
                            <a
                                href="/register"
                                class="btn btn-outline-primary w-100"
                            >
                                Register
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
        name: 'Login',
        data() {
            return{
                email: '',
                password: '',
                validation_errors: [],
            }
        },
        created() {
        },
        methods: {
            login(){
                var data = {
                    email: this.email,
                    password: this.password,
                }
                Api.post(`/login`, data)
                .then((res)=>{
                    console.log(res)
                    this.$notify({
                        group: 'foo',
                        type: 'success',
                        title: 'Success',
                        text: 'Login success'
                    });
                    setTimeout(() => (window.location.href = "/admin"), 1500);
                    localStorage.setItem('token', res.data.data.remember_token)
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
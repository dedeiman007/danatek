<template>
    <div class="container mt-hero login-height">
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
                        <label class="mb-2 fw-bold">Username</label>
                        <input type="text" class="form-control" placeholder="Masukkan username">
                    </div>
                    <div class="mt-3">
                        <label class="mb-2 fw-bold">Password</label>
                        <input type="password" class="form-control" placeholder="Masukkan password">
                    </div>
                    <div class="mt-4">
                        <a href="" class="btn btn-primary w-100">
                            Login
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
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
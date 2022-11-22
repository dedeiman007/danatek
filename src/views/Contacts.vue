<template>
    <div>
        <div class="mt-hero bc-primary pt-contact pb-contact position-relative">
            <img src="../assets/logo-contact.png" class="logo-contact" alt="">
            <section>
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-md-7">
                            <div class="size-24 fw-ekstra-bold">
                                Punya Kritik & Saran?
                            </div>
                            <div class="mt-2 size-16 fw-medium">
                                Kritik & Saran Anda saat berarti bagi kami untuk menjadi lebih baik.
                            </div>
                            <div class="mt-1 size-16 fw-medium">
                                Isi data anda dibawah untuk menulis kritik dan saran
                            </div>
                            <div class="row mt-5">
                                <div class="col-md-6">
                                    <label class="fw-bold mb-1">Nama</label>
                                    <input type="text" class="form-control" placeholder="Masukkan nama">
                                </div>
                                <div class="col-md-6">
                                    <label class="fw-bold mb-1">No. Telefon</label>
                                    <input type="number" class="form-control" placeholder="Masukkan No. Telefon">
                                </div>
                                <div class="col-md-6 mt-3">
                                    <label class="fw-bold mb-1">Email</label>
                                    <input type="email" class="form-control" placeholder="Masukkan email">
                                </div>
                                <div class="col-md-12 mt-3">
                                    <label class="fw-bold mb-1">Pesan</label>
                                    <textarea name="" id="" cols="30" rows="8" class="form-control" placeholder="Masukkan pesan anda"></textarea>
                                </div>
                                <div class="col-md-3 mt-3">
                                    <a href="" class="btn btn-white w-100 fw-bold">
                                        Kirim
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <section class="mt-section">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <div class="box">
                            <h2 class="mb-0 size-16 fw-ekstra-bold text-center">
                                Pt Danatek Indera Indonesia
                            </h2>
                            <div class="mt-2 size-14 text-center mb-4">
                                Anda bisa menemukan kami melalui google maps
                            </div>
                            <div class="google-map-code">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d63460.41105203113!2d106.80338378584239!3d-6.227336573816511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x2e69f47c669a9375%3A0x6dc00a0edf4daff2!2sPt%20Danatek%20Indera%20Indonesia%2C%20Jl.%20Kh.%20Ahmad%20Dahlan%20No.4%2C%20RW.9%2C%20Palmeriam%2C%20Matraman%2C%20East%20Jakarta%20City%2C%20Jakarta%2013140!3m2!1d-6.20886!2d106.86034029999999!5e0!3m2!1sen!2sid!4v1668769316928!5m2!1sen!2sid"
                                    width="100%"
                                    height="400"
                                    style="border:0;"
                                    allowfullscreen=""
                                    loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade"
                                >
                            </iframe>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="box border-gray no-shadow">
                            <div class="d-flex align-items-center">
                                <div class="box-contact phone me-3">
                                    <i class="fa fa-phone"></i>
                                </div>
                                <div class="fw-bold size-16 mt-2">
                                    Customer Service
                                </div>
                            </div>
                            <div class="mt-3">
                                Punya keluhan? silahkan hubungi
                            </div>
                            <div class="fw-bold mt-2">
                                (021) 12345 - 6789 - 0000
                            </div>
                        </div>
                        <div class="box border-gray no-shadow mt-3">
                            <div class="d-flex align-items-center">
                                <div class="box-contact phone me-3">
                                    <i class="fa fa-envelope"></i>
                                </div>
                                <div class="fw-bold size-16 mt-2">
                                    Email
                                </div>
                            </div>
                            <div class="mt-3">
                                Punya Kritik  dan saran? silahkan email
                            </div>
                            <div class="fw-bold mt-2">
                                danatek.inderaindonesia@gmail.com
                            </div>
                        </div>
                        <div class="box border-gray no-shadow mt-3">
                            <div class="d-flex align-items-center">
                                <div class="box-contact phone me-3">
                                    <i class="fa fa-instagram"></i>
                                </div>
                                <div class="box-contact phone me-3">
                                    <i class="fa fa-facebook"></i>
                                </div>
                                <div class="box-contact phone me-3">
                                    <i class="fa fa-twitter"></i>
                                </div>
                            </div>
                            <div class="mt-3">
                                Social Media
                            </div>
                            <div class="fw-bold mt-2">
                                Kunjungi sosial media kami untuk mendapatkan Informasi terbaru.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        components: {
        },
        name: 'Home',
        data() {
            return{
            }
        },
        created() {
        },
        methods: {
        }
    }
</script>
<style>
    iframe.maps{
        height: 300px !important;
    }
    iframe{
        border-radius: 20px;
    }
</style>
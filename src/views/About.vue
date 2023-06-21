<template>
    <div>
        <section class="about mt-hero">
            <div class="container">
                <div class="row m-center">
                    <div class="col-12 col-md-7 col-lg-7 mt-5">
                        <h1 class="about__title m-center">
                            {{ datas.title }}
                        </h1>
                        <div class="mt-3">
                            <div v-html="datas.description"></div>
                        </div>
                        <div class="mt-4 fw-bold size-16">
                            Siapa Kami ?
                        </div>
                        <div class="mt-2">
                            <div v-html="datas.who_we_are"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="mt-section">
            <div class="container">
                <h2 class="fw-ekstra-bold">
                    Visi & Misi Kami
                </h2>
                <div class="mt-2">
                    Maka dari itu kesehatan anda adalah Prioritas Kami
                </div>
                <div class="row">
                    <div class="col-md-5 mt-visimisi">
                        <div class="box-visi-misi h-100">
                            <div class="box-visi-misi-icon">
                                <i class="fa fa-briefcase"></i>
                            </div>
                            <div class="box-visi-misi-icon-shadow"></div>
                            <h3 class="box-visi-misi-title">
                                Visi
                            </h3>
                            <div class="mt-2 text-dark">
                                <div v-html="datas.vision"></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-5 mt-visimisi">
                        <div class="box-visi-misi h-100">
                            <div class="box-visi-misi-icon">
                                <i class="fa fa-folder"></i>
                            </div>
                            <div class="box-visi-misi-icon-shadow"></div>
                            <h3 class="box-visi-misi-title">
                                Misi
                            </h3>
                            <div class="mt-2 text-dark">
                                <div v-html="datas.mission"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="mt-section">
            <div class="container">
                <div class="row">
                    <div class="col-md-7">
                        <h2 class="fw-ekstra-bold">
                            Bidang Usaha
                        </h2>
                        <div class="size-14 mt-3">
                            <div v-html="datas.coorporate_values"></div>
                        </div>
                    </div>
                    <div class="col-md-5 m-mt-2">
                        <div class="text-center">
                            <img src="../assets/bidang-usaha.png" width="80%" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="mt-section">
            <div class="container">
                <div class="row">
                    <div class="col-md-5">
                        <div>
                            <img src="../assets/pimpinan.png" width="80%" alt="">
                        </div>
                    </div>
                    <div class="col-md-7 m-mt-3">
                        <h2 class="fw-ekstra-bold">
                            Pimpinan (Profil Owner)
                        </h2>
                        <div class="size-14 mt-3">
                            <div v-html="datas.owner_profile"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="bc-gray position-relative m-mt-4">
            <img src="../assets/values.png" class="values-image" alt="">
            <div class="container pt-5 pb-5">
                <div class="row">
                    <div class="col-md-7">
                        <div class="fw-ekstra-bold size-20">
                            Coorporate Values
                        </div>
                        <div class="size-14 mt-3">
                            <div v-html="datas.coorporate_values"></div>
                        </div>
                    </div>
                    <div class="col-md-5">
                        <div class="text-center">
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="mt-section">
            <div class="container">
                <div class="box">
                    <div class="row">
                        <div class="col-md-9">
                            <div class="size-16 fw-normal">
                                Ada yang ingin ditanyakan?
                            </div>
                            <div class="fw-ekstra-bold size-20 m-mt-1">
                                Mari bersama memajukan pelayanan kesehatan di Indonesia
                            </div>
                        </div>
                        <div class="col-md-3 mt-2 m-mt-3">
                            <a :href="'https://wa.me/' + mobile_number" target="_blank" class="btn btn-wa btn-lg w-100">
                                <i class="fa fa-whatsapp me-2"></i>
                                Chat Sekarang
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import Api from '../api/Api';

    export default {
        components: {
        },
        name: 'AboutUs',
        data() {
            return{
                datas: {},
                mobile_number: ''
            }
        },
        created() {
            this.getPhone()
            this.getAbout()
        },
        methods: {
            getAbout(){
                Api.get(`/aboutus`)
                .then((res)=>{
                    var data = res.data.data
                    this.datas = data
                })
                .catch(err => {
                    console.log(err)
                });
            },
            getPhone(){
                Api.get(`/company`)
                .then((res)=>{
                    var data = res.data.data.mobile_number
                    console.log(data)
                    this.mobile_number = data
                })
                .catch(err => {
                    console.log(err)
                });
            },
        }
    }
</script>

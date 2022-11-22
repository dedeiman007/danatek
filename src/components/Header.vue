<template>
    <div class="nav-fix">
        <div class="small-nav">
            <div class="container">
                <div class="d-flex bd-highlight">
                    <div class="size-13 flex-grow-1 bd-highlight">
                        <span class="me-3">
                            <i class="fa fa-phone me-2"></i>
                            0897 878 8787
                        </span>
                        <span>
                            <i class="fa fa-envelope me-2"></i>
                            danatek.inderaindonesia@dii-groups.com
                        </span>
                    </div>
                    <div class="bd-highlight size-13">
                        <a href="" class="me-3 text-dark">
                            <i class="fa fa-facebook"></i>
                        </a>
                        <a href="" class="me-3 text-dark">
                            <i class="fa fa-instagram"></i>
                        </a>
                        <a href="" class="me-3 text-dark">
                            <i class="fa fa-twitter"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-xxl d-flex align-items-md-center">
                <a class="navbar-brand" href="/">
                    <img src="../assets/logo.png" width="160" alt="">
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <div class="me-auto mb-2 mb-lg-0">
                    </div>
                    <div class="d-flex">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item mx-2">
                                <router-link :to="{name: 'Home'}" :class="{'nav-link': true, 'active': this.$route.name == 'Home'}">
                                    Home
                                </router-link>
                            </li>
                            <li class="nav-item mx-2">
                                <router-link :to="{name: 'About'}" :class="{'nav-link': true, 'active': this.$route.name == 'About'}">
                                    About Us
                                </router-link>
                            </li>
                            <li class="nav-item mx-2">
                                <router-link :to="{name: 'Product'}" :class="{'nav-link': true, 'active': this.$route.name == 'Product'}">
                                    Product
                                </router-link>
                            </li>
                            <li class="nav-item mx-2">
                                <router-link :to="{name: 'News'}" :class="{'nav-link': true, 'active': this.$route.name == 'News'}">
                                    News
                                </router-link>
                            </li>
                            <li class="nav-item mx-2">
                                <router-link :to="{name: 'Contacts'}" :class="{'nav-link': true, 'active': this.$route.name == 'Contacts'}">
                                    Contact
                                </router-link>
                            </li>
                            <li class="nav-item mx-2">
                                <router-link :to="{name: 'Article'}" :class="{'nav-link': true, 'active': this.$route.name == 'Article'}">
                                    Article
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>

<style scoped>
</style>
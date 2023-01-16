<template>
    <div>
        <notifications group="foo" position="top right" />
        <div class="page-wrapper chiller-theme toggled">
            <a id="show-sidebar" class="btn btn-sm btn-primary" href="#">
                <i class="fa fa-angle-right"></i>
            </a>

            <nav id="sidebar" class="sidebar-wrapper">
                <div class="sidebar-content">
                    <div class="sidebar-brand">
                        <div id="close-sidebar">
                            <i class="fa fa-angle-left"></i>
                        </div>
                    </div>
                    <div class="sidebar-header">
                        <div class="mt-2">
                            <center>
                                <img class="radius" src="../assets/user.jpg" width="50">
                                <div class="mt-3 fw-bold">
                                    Users
                                </div>
                                <div class="size-14">
                                    Admin Danatek
                                </div>
                            </center>
                        </div>
                    </div>
                    <div class="sidebar-menu">
                        <ul>
                            <li class="header-menu mb-3 mt-3">
                                <span>Danatek Page</span>
                            </li>
                            <li class="sidebar-dropdown">
                                <router-link :to="{name: 'Admin'}" :class="{'': true, 'active': this.$route.name == 'Admin'}">
                                    <i class="fa fa-home"></i>
                                    <span>Dashboard</span>
                                </router-link>
                            </li>
                            <li class="sidebar-dropdown">
                                <router-link :to="{name: 'admin-home'}" :class="{'': true, 'active': this.$route.name == 'admin-home'}">
                                    <i class="fa fa-wechat"></i>
                                    <span>Home</span>
                                </router-link>
                            </li>
                            <li class="sidebar-dropdown">
                                <router-link :to="{name: 'admin-footer'}" :class="{'': true, 'active': this.$route.name == 'admin-footer'}">
                                    <i class="fa fa-wechat"></i>
                                    <span>Footer & Contact Us</span>
                                </router-link>
                            </li>
                            <li class="sidebar-dropdown">
                                <router-link :to="{name: 'admin-contact'}" :class="{'': true, 'active': this.$route.name == 'admin-contact'}">
                                    <i class="fa fa-wechat"></i>
                                    <span>Contact Us</span>
                                </router-link>
                            </li>
                            <li class="sidebar-dropdown">
                                <router-link :to="{name: 'admin-about'}" :class="{'': true, 'active': this.$route.name == 'admin-about'}">
                                    <i class="fa fa-wechat"></i>
                                    <span>About</span>
                                </router-link>
                            </li>
                            <li class="sidebar-dropdown">
                                <router-link :to="{name: 'admin-article'}" :class="{'': true, 'active': this.$route.name == 'admin-article'}">
                                    <i class="fa fa-money"></i>
                                    <span>Article List</span>
                                </router-link>
                            </li>
                            <li class="sidebar-dropdown">
                                <router-link :to="{name: 'admin-product-category'}" :class="{'': true, 'active': this.$route.name == 'admin-product-category'}">
                                    <i class="fa fa-money"></i>
                                    <span>Product Category</span>
                                </router-link>
                            </li>
                            <li class="sidebar-dropdown">
                                <router-link :to="{name: 'admin-product'}" :class="{'': true, 'active': this.$route.name == 'admin-product'}">
                                    <i class="fa fa-money"></i>
                                    <span>Product List</span>
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="sidebar-footer">
                    <a href="javascript:void()" @click="logout()">
                        <i class="fa fa-power-off me-1"></i>
                        Logout
                    </a>
                </div>
            </nav>
            
            <main class="page-content">
                <div class="container-fluid">
                    <router-view/>
                </div>
            </main>
        </div>
    </div>
</template>

<script>
    import $ from 'jquery'
    import Api from '../api/Api';

    export default {
        name: 'admin-layout',
        data() {
            return{
            }
        },
        mounted() {
            $(".sidebar-dropdown > a").click(function() {
                $(".sidebar-submenu").slideUp(200);
                if (
                    $(this)
                    .parent()
                    .hasClass("active")
                ) {
                    $(".sidebar-dropdown").removeClass("active");
                    $(this)
                    .parent()
                    .removeClass("active");
                } else {
                    $(".sidebar-dropdown").removeClass("active");
                    $(this)
                    .next(".sidebar-submenu")
                    .slideDown(200);
                    $(this)
                    .parent()
                    .addClass("active");
                }
            });
            $("#close-sidebar").click(function() {
                $(".page-wrapper").removeClass("toggled");
            });
            $("#show-sidebar").click(function() {
                $(".page-wrapper").addClass("toggled");
            });
        },
        methods: {
            logout(){
                Api.post(`/logout`, {
                    Headers:{
                        'token': `${localStorage.getItem('token')}`,
                    }
                })
                .then((res)=>{
                    console.log(res)
                    this.$notify({
                        group: 'foo',
                        type: 'success',
                        title: 'Success',
                        text: 'Logout success'
                    });
                    setTimeout(() => (window.location.href = "/login"), 1500);
                })
                .catch(err => {
                    if(err.response.data.message == 'Session Expired! ') {
                        this.$notify({
                            group: 'foo',
                            type: 'success',
                            title: 'Success',
                            text: 'Logout success'
                        });
                        setTimeout(() => (window.location.href = "/login"), 1500);
                    }else{
                        this.$notify({
                            group: 'foo',
                            type: 'error',
                            title: 'Error',
                            text: 'Logout gagal'
                        });
                    }
                });
            }
        }
    }
</script>

<style scoped>
    @keyframes swing {
        0% {
            transform: rotate(0deg);
        }
        10% {
            transform: rotate(10deg);
        }
        30% {
            transform: rotate(0deg);
        }
        40% {
            transform: rotate(-10deg);
        }
        50% {
            transform: rotate(0deg);
        }
        60% {
            transform: rotate(5deg);
        }
        70% {
            transform: rotate(0deg);
        }
        80% {
            transform: rotate(-5deg);
        }
        100% {
            transform: rotate(0deg);
        }
    }

    @keyframes sonar {
    0% {
        transform: scale(0.9);
        opacity: 1;
    }
    100% {
        transform: scale(2);
        opacity: 0;
    }
    }
    .page-wrapper .sidebar-wrapper,
    .sidebar-wrapper .sidebar-brand > a,
    .sidebar-wrapper .sidebar-dropdown > a:after,
    .sidebar-wrapper .sidebar-menu .sidebar-dropdown .sidebar-submenu li a:before,
    .sidebar-wrapper ul li a i,
    .page-wrapper .page-content,
    .sidebar-wrapper .sidebar-search input.search-menu,
    .sidebar-wrapper .sidebar-search .input-group-text,
    .sidebar-wrapper .sidebar-menu ul li a,
    #show-sidebar,
    #close-sidebar {
        -webkit-transition: all 0.3s ease;
        -moz-transition: all 0.3s ease;
        -ms-transition: all 0.3s ease;
        -o-transition: all 0.3s ease;
        transition: all 0.3s ease;
    }

    .page-wrapper {
        height: 100vh;
    }

    .page-wrapper .theme {
        width: 40px;
        height: 40px;
        display: inline-block;
        border-radius: 4px;
        margin: 2px;
    }

    .page-wrapper .theme.chiller-theme {
        background: #1e2229;
    }

    /*----------------toggeled sidebar----------------*/

    .page-wrapper.toggled .sidebar-wrapper {
        left: 0px;
    }

    @media screen and (min-width: 768px) {
        .page-wrapper.toggled .page-content {
                padding-left: 244px;
        }
    }
    #show-sidebar {
        position: fixed;
        left: 0;
        top: 10px;
        border-radius: 0 4px 4px 0px;
        width: 35px;
        padding: 6px;
        font-size: 18px;
        transition-delay: 0.3s;
    }
    .page-wrapper.toggled #show-sidebar {
        left: -40px;
    }

    .sidebar-wrapper {
        width: 260px;
        height: 100%;
        max-height: 100%;
        position: fixed;
        top: 0;
        left: -300px;
        z-index: 999;
    }

    .sidebar-wrapper ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
    }

    .sidebar-wrapper a {
        text-decoration: none;
    }

    .sidebar-content {
        max-height: calc(100% - 30px);
        height: calc(100% - 30px);
        overflow-y: auto;
        position: relative;
    }

    .sidebar-content.desktop {
        overflow-y: hidden;
    }

    .sidebar-wrapper .sidebar-brand {
        padding: 10px 20px;
        display: flex;
        align-items: center;
    }

    .sidebar-wrapper .sidebar-brand > a {
        text-transform: uppercase;
        font-weight: bold;
        flex-grow: 1;
    }

    .sidebar-wrapper .sidebar-brand #close-sidebar {
        cursor: pointer;
        font-size: 20px;
    }
    /*--------------------sidebar-header----------------------*/

    .sidebar-wrapper .sidebar-header {
        padding: 20px;
        overflow: hidden;
    }

    .sidebar-wrapper .sidebar-header .user-info > span {
        display: block;
    }

    .sidebar-wrapper .sidebar-header .user-info .user-role {
        font-size: 12px;
    }

    .sidebar-wrapper .sidebar-header .user-info .user-status {
        font-size: 11px;
        margin-top: 4px;
    }

    .sidebar-wrapper .sidebar-header .user-info .user-status i {
        font-size: 8px;
        margin-right: 4px;
        color: #5cb85c;
    }

    /*-----------------------sidebar-search------------------------*/

    .sidebar-wrapper .sidebar-search > div {
        padding: 10px 20px;
    }

    /*----------------------sidebar-menu-------------------------*/

    .sidebar-wrapper .sidebar-menu {
        padding-bottom: 10px;
    }

    .sidebar-wrapper .sidebar-menu .header-menu span {
        font-weight: bold;
        font-size: 14px;
        padding: 15px 20px 5px 20px;
        display: inline-block;
    }

    .sidebar-wrapper .sidebar-menu ul li a {
        display: inline-block;
        width: 100%;
        text-decoration: none;
        position: relative;
        padding: 8px 30px 8px 20px;
    }

    .sidebar-wrapper .sidebar-menu ul li a i {
        margin-right: 10px;
        font-size: 12px;
        width: 30px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        border-radius: 4px;
    }

    .sidebar-wrapper .sidebar-menu ul li a:hover > i::before {
        display: inline-block;
        animation: swing ease-in-out 0.5s 1 alternate;
    }

    .sidebar-wrapper .sidebar-menu .sidebar-dropdown .sidebar-submenu ul {
        padding: 5px 0;
    }

    .sidebar-wrapper .sidebar-menu .sidebar-dropdown .sidebar-submenu li {
        padding-left: 25px;
        font-size: 13px;
    }

    .sidebar-wrapper .sidebar-menu .sidebar-dropdown .sidebar-submenu li a:before {
        content: "\f111";
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
        font-style: normal;
        display: inline-block;
        text-align: center;
        text-decoration: none;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        margin-right: 10px;
        font-size: 8px;
    }

    .sidebar-wrapper .sidebar-menu ul li a span.label,
    .sidebar-wrapper .sidebar-menu ul li a span.badge {
        float: right;
        margin-top: 8px;
        margin-left: 5px;
    }

    .sidebar-wrapper .sidebar-menu .sidebar-dropdown .sidebar-submenu li a .badge,
    .sidebar-wrapper .sidebar-menu .sidebar-dropdown .sidebar-submenu li a .label {
        float: right;
        margin-top: 0px;
    }

    .sidebar-wrapper .sidebar-menu .sidebar-submenu {
    display: none;
    }

    .sidebar-wrapper .sidebar-menu .sidebar-dropdown.active > a:after {
        transform: rotate(90deg);
        right: 17px;
    }

    .sidebar-footer {
        position: absolute;
        width: 100%;
        bottom: 0;
        display: flex;
    }

    .sidebar-footer > a {
        flex-grow: 1;
        text-align: center;
        height: 30px;
        line-height: 30px;
        position: relative;
        color: #fff;
        font-weight: 500;
    }

    .sidebar-footer > a .notification {
        position: absolute;
        top: 0;
    }

    .badge-sonar {
        display: inline-block;
        background: #980303;
        border-radius: 50%;
        height: 8px;
        width: 8px;
        position: absolute;
        top: 0;
    }

    .badge-sonar:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        border: 2px solid #980303;
        opacity: 0;
        border-radius: 50%;
        width: 100%;
        height: 100%;
        animation: sonar 1.5s infinite;
    }

    /*--------------------------page-content-----------------------------*/

    .page-wrapper .page-content {
        display: inline-block;
        width: 100%;
        padding-left: 0px;
        /* padding-top: 20px; */
    }

    .page-wrapper .page-content > div {
        padding: 20px 40px;
    }

    .page-wrapper .page-content {
        overflow-x: hidden;
    }



    .chiller-theme .sidebar-wrapper {
        background: #fff;
        box-shadow: 0 0px 30px 0 rgb(144 30 44 / 5%);
    }

    .chiller-theme .sidebar-wrapper .sidebar-search input.search-menu,
    .chiller-theme .sidebar-wrapper .sidebar-search .input-group-text {
        border-color: transparent;
        box-shadow: none;
    }
    .chiller-theme .sidebar-wrapper .sidebar-menu ul li a{
        color: #000;
        font-weight: 500;
    }
    .chiller-theme .sidebar-wrapper .sidebar-menu ul li a.active{
        color: #F6A51F;
        background: #f8f9fa;
        border-left: 3px solid #F6A51F;
        font-weight: 600;
    }


    .page-wrapper.chiller-theme.toggled #close-sidebar {
        color: #bdbdbd;
    }

    .page-wrapper.chiller-theme.toggled #close-sidebar:hover {
        color: #ffffff;
    }

    .chiller-theme .sidebar-wrapper .sidebar-menu .header-menu span {
        color: #6c7b88;
    }

    .chiller-theme .sidebar-footer {
        background: #F6A51F;
        box-shadow: 0 0px 30px 0 rgb(144 30 44 / 5%);
        padding: 5px;
    }

    .chiller-theme .sidebar-footer>a:first-child {
        border-left: none;
    }

    .chiller-theme .sidebar-footer>a:last-child {
        border-right: none;
    }
    #close-sidebar{
        background: #F6A51F;
        color: #fff !important;
        box-shadow: 0 0.125rem 0.25rem rgb(219 83 99 / 10%);
        width: 30px;
        height: 30px;
        border-radius: 50px;
        text-align: center;
        position: absolute;
        right: 20px;
        top: 10px;
    }
</style>
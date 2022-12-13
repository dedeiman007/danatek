<template>
    <div class="container-form">
        <notifications group="foo" position="top right" />
        <div>
            <div class="px-3 line d-block d-lg-none"></div>
            <h4 class="fw-ekstra-bold mb-0">
                List Review User
            </h4>
            <p class="mt-2 text-gray500">
                Lorem ipsum dolor sit amet consectetur,
            </p>

            <template v-if="lists.length > 0">
                <div class="modern-table-boxed mt-4">
                    <div class="d-table-row header">
                        <div class="d-table-cell" style="width: 60px">
                            No
                        </div>
                        <div class="d-table-cell">
                            Name
                        </div>
                        <div class="d-table-cell">
                            Mobile Phone
                        </div>
                        <div class="d-table-cell">
                            Email
                        </div>
                        <div class="d-table-cell">
                            Type
                        </div>
                        <div class="d-table-cell">
                            Message
                        </div>
                    </div>
                    <div class="d-table-row" v-for="(list, index) in lists" :key="list.id">
                        <div class="d-table-cell">
                            {{ index+1 }}.
                        </div>
                        <div class="d-table-cell">
                            {{ list.name }}
                        </div>
                        <div class="d-table-cell">
                            {{ list.mobile_phone }}
                        </div>
                        <div class="d-table-cell">
                            {{ list.email }}
                        </div>
                        <div class="d-table-cell">
                            {{ list.type }}
                        </div>
                        <div class="d-table-cell">
                            <a href="javascript:void(0)" class="text-dark" data-bs-toggle="tooltip" data-bs-placement="top" :title="list.message">
                                <u>
                                    Check Message
                                </u>
                            </a>
                        </div>
                    </div>
                </div>
            </template>
            <template v-else>
                <div class="text-center mt-5">
                    <img src="../../../assets/no-data.png" width="170" alt="">
                    <h5 class="mt-2 text-gray500 size-22">
                        No data
                    </h5>
                </div>
            </template>
        </div>
    </div>
</template>
<script>
    import Api from '../../../api/Api';
    import { Tooltip } from 'bootstrap'

    export default {
        name: 'admin-contact',
        data() {
            return{
                lists: []
            }
        },
        created(){
            this.getContactus()
        },
        mounted(){
            new Tooltip(document.body, {
              selector: "[data-bs-toggle='tooltip']",
            })
        },
        methods: {
            getContactus(){
                Api.get(`/contactus`)
                .then((res)=>{
                    var data = res.data.data
                    this.lists = data
                })
                .catch(err => {
                    console.log(err)
                });
            },
        }
    }
</script>
<template>
    <div>
        <section class="mt-hero">
            <div class="container">
                <div class="product-banner" :style="{ backgroundImage: `url(${require('../assets/blog-detail.jpg')})` }">
                    <router-link :to="{name: 'Article'}"  data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top">
                        <div class="circle-back">
                            <i class="fa fa-angle-left"></i>
                        </div>
                    </router-link>
                    <div class="content">
                        <div class="text-white size-14 fw-medium">
                            <div class="row">
                                <div class="col-md-8">
                                    <h2 class="text-white fw-ekstra-bold">
                                        Keputusan IDI mengenai  pencegahan kajian virus Covid -19 varian terbaru
                                    </h2>
                                </div>
                                <div class="col-md-12">
                                    30 Januari 2023
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div class="container">
                <div class="size-14 mt-3">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio cum, dicta esse provident velit voluptate minima consectetur iste odit veritatis quos quibusdam id placeat rem fugit incidunt impedit sed a.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet tempora, debitis repudiandae modi repellendus blanditiis nihil quasi quam facere, ipsum molestiae omnis sit velit porro deserunt perspiciatis assumenda. Accusamus, quas.
                </div>
                <div class="size-14 mt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nobis veritatis in enim aliquid voluptatibus illum rerum nesciunt temporibus quia sequi ab, aliquam exercitationem atque ut maiores blanditiis id eius!
                </div>
                <div class="size-14 mt-3">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio cum, dicta esse provident velit voluptate minima consectetur iste odit veritatis quos quibusdam id placeat rem fugit incidunt impedit sed a.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet tempora, debitis repudiandae modi repellendus blanditiis nihil quasi quam facere, ipsum molestiae omnis sit velit porro deserunt perspiciatis assumenda. Accusamus, quas.
                </div>
                <div class="size-14 mt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nobis veritatis in enim aliquid voluptatibus illum rerum nesciunt temporibus quia sequi ab, aliquam exercitationem atque ut maiores blanditiis id eius!
                </div>
            </div>
        </section>
    </div>
</template>

<script>
  export default {
      components: {
      },
      name: 'ProductDetail',
      data() {
          return{
          }
      },
      created() {
      },
      mounted(){},
      methods: {
      }
  }
</script>

<style scoped>
</style>
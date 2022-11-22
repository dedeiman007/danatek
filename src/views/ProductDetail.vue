<template>
    <section class="mt-hero">
        <div class="container">
            <div class="product-banner" :style="{ backgroundImage: `url(${require('../assets/product-banner.jpg')})` }">
                <div class="content">
                    <h2 class="text-white fw-ekstra-bold">
                        Kategori Produk
                    </h2>
                    <div class="text-white size-14 fw-medium">
                        <div class="row">
                            <div class="col-md-8">
                                Sudah lebih dari 20 tahun kami menjalani tugas dan amanat kami dibidang kesehatan. Hingga saat ini kami tetap setia menjalani kewajiban kami
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
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
      methods: {
      }
  }
</script>

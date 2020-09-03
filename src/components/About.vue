<template>
  <div class="hello">
    
    <section class="hero is-info is-medium is-bold">
      <div class="hero-head">
          <nav class="navbar">
              <div class="container">
                  <div class="navbar-brand">
                      <a class="navbar-item" href="../">
                          <img src="http://bulma.io/images/bulma-type-white.png" alt="Logo">
                      </a>
                      <span class="navbar-burger burger" data-target="navbarMenu">
                          <span></span>
                          <span></span>
                          <span></span>
                      </span>
                  </div>
                  <Navbar />
              </div>
          </nav>
      </div>
    </section>

    <div class="box cta">
        <p class="has-text-centered">
            <span class="tag is-primary">New</span> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
    </div>

    <section class="container">
      <div class="columns features">
          <div class="column">
              <div class="card is-shady">
                  <div class="card-image has-text-centered">
                      <i class="fa fa-paw"></i>
                  </div>
                  <div class="card-content">
                      <div class="content">
                          <h1 class="title is-2">
                              Tentang Kami
                          </h1>
                          <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, atque in provident laborum dignissimos placeat quisquam consequatur, asperiores maxime rem labore itaque cupiditate distinctio eius laboriosam facilis, illum culpa consequuntur! Iusto harum, molestias, architecto placeat mollitia molestiae voluptatum aliquid fuga facilis deleniti, nesciunt laborum officia. Officiis illum voluptas obcaecati dolorum totam dolor fuga quae nam, culpa facilis eos dolores. Impedit ad vel autem vitae, minima nostrum voluptas, aperiam in eligendi unde animi perferendis veniam aspernatur et ipsa quod, beatae ipsum voluptates fugit. Nihil autem corporis maxime voluptate molestias labore in aliquid, recusandae nobis qui ipsum ut illum eos. Dolores, tenetur.
                          </p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </section>
  
  <Footer />

  </div>
</template>

<script>
import Footer from './partial/Footer.vue'
import Navbar from './partial/Navbar.vue'

export default {
  components: {
    Footer,
    Navbar
  }
}
</script>
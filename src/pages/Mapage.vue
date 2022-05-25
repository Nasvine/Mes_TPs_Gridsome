<template>
<section class="hero is-warning is-medium">
  <!-- Hero head: will stick at the top -->
  <div class="hero-head">
    <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item">
            <p>VINE</p>
          </a>
          <span class="navbar-burger" data-target="navbarMenuHeroA">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenuHeroA" class="navbar-menu">
          <div class="navbar-end">
            <a class="navbar-item is-active">
              Home
            </a>
            <a class="navbar-item">
              About
            </a>
            <a class="navbar-item">
              Contact
            </a>
            <span class="navbar-item">
              <a class="button is-pri is-inverted">
                <span class="icon">
                  <i class="fab fa-github"></i>
                </span>
                <span>Download</span>
              </a>
            </span>
          </div>
        </div>
      </div>
    </nav>
  </div>

  <!-- Hero content: will be in the middle -->
  <section class="hero is-primary is-small">
  <div class="hero-body">
                       <!-- 01 -->
        <div class="tile is-ancestor">
            <div class="tile is-parent">
                <article class="tile is-child box is-pri">
                    <p class="title">Hello World</p>
                    <p class="subtitle">What is up?</p>
                </article>
            </div>
        <div class="tile is-parent">
                <article class="tile is-child box">
                    <p class="title">Foo</p>
                    <p class="subtitle">Bar</p>
                </article>
        </div>

            <div class="tile is-parent">
                <article class="tile is-child box">
                    <p class="title">Third column</p>
                    <p class="subtitle">With some content</p>
                        <div class="content">
                            <p> dio quis feugiat facilisis.</p>
                        </div>
                </article>
                        </div>
        </div>
                  <!-- 02 
                        <div class="tile is-ancestor">
                        <div class="tile is-parent">
                            <article class="tile is-child box">
                            <p class="title">Hello World</p>
                            <p class="subtitle">What is up?</p>
                            </article>
                        </div>
                        <div class="tile is-parent">
                            <article class="tile is-child box">
                            <p class="title">Foo</p>
                            <p class="subtitle">Bar</p>
                            </article>
                        </div>
                        <div class="tile is-parent">
                            <article class="tile is-child box">
                            <p class="title">Third column</p>
                            <p class="subtitle">With some content</p>
                            <div class="content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
                            </div>
                            </article>
                        </div>
                        </div> -->
  </div>
</section>

  <!-- Hero footer: will stick at the bottom -->
  <div class="hero-foot">
    <nav class="tabs">
      <div class="container">
        <ul>
          <li class="is-active"><a>Overview</a></li>
          <li><a>Modifiers</a></li>
          <li><a>Grid</a></li>
          <li><a>Elements</a></li>
          <li><a>Components</a></li>
          <li><a>Layout</a></li>
        </ul>
      </div>
    </nav>
   </div>

</section>

 





</template>

<script>
export default {
    metaInfo:{
        title:"Mapage"
    },
    data(){
        return{

        }
    }
}
</script>


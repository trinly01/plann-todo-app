<template>
  <div>
    <nav
      class="navbar header has-shadow m-0 p-0"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand m-0 p-0">
        <a
          class="navbar-item is-primary has-background-primary m-0 p-1"
          href="/"
        >
          <img
            class="logo"
            src="~assets/plann.svg"
            alt="Buefy"
          >
        </a>

        <div class="navbar-burger">
          <span />
          <span />
          <span />
        </div>
      </div>
    </nav>

    <section class="main-content columns is-desktop ml-0 pl-0 ">
      <aside class="column is-2 section ml-0 pl-5 pt-6">
        <!-- <p class="menu-label is-hidden-touch">
          General
        </p> -->
        <ul class="menu-list">
          <li
            v-for="(item, key) of items"
            :key="key"
          >
            <NuxtLink
              :to="item.to"
              class="is-primary is-uppercase button side-buttons"
            >
              <!-- <b-icon :icon="item.icon" /> -->
              {{ item.title }}
            </NuxtLink>
          </li>
        </ul>
      </aside>

      <div class="column">
        <Nuxt />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {
      items: [
        {
          title: 'Home Base',
          // icon: 'home',
          to: { name: 'index' }
        }
        // {
        //   title: 'Inspire',
        //   icon: 'lightbulb',
        //   to: { name: 'inspire' }
        // }
      ]
    }
  }
}
</script>

<style>
.navbar {
  min-height: unset;
  height: 60px;
}

/* .logo {
  width: 60px;
  height: 60px;
} */

.logo {
  width: 48px;
  min-height: 48px;
}

.side-buttons {
  font-size: 14px;
  font-weight: 600;
  min-width: 207px;
  min-height: 62px;
  line-height: 46px;
  border-radius: 10px !important;
}
</style>

<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br />
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener"
        >vue-cli documentation</a
      >.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices
      tincidunt enim. Nunc sed porttitor nibh, eu semper sapien. Vestibulum
      suscipit ipsum in nunc tincidunt, a facilisis eros dapibus. Proin sit amet
      tincidunt justo, id efficitur nisi. Praesent efficitur finibus lorem, ac
      venenatis dolor egestas ut. Aliquam mollis sem vel iaculis venenatis. Cras
      scelerisque eros dictum purus fermentum, cursus accumsan ipsum
      sollicitudin. Nulla tempor luctus ligula, elementum laoreet tortor sodales
      iaculis. Integer et nisi consequat, mollis arcu at, dapibus tellus.
      Vestibulum libero nibh, porttitor id dui sit amet, efficitur aliquet
      metus. Donec convallis purus quam, vitae venenatis odio tristique a.
      Aliquam sit amet ultricies nibh. Phasellus hendrerit, velit quis malesuada
      consectetur, massa ex commodo est, dignissim consectetur felis arcu ac
      felis. Suspendisse porttitor laoreet dui. Aenean eu mauris eget purus
      imperdiet convallis. Donec sem nisi, eleifend ac congue id, tristique
      euismod diam. Donec imperdiet feugiat purus sit amet tincidunt. Integer
      quis odio efficitur, malesuada urna faucibus, vestibulum elit. Duis
      dignissim mattis dapibus. In finibus mollis nulla vel mollis. Nam vitae mi
      accumsan, ultrices nulla id, porta elit. Suspendisse potenti. Nunc nulla
      nibh, elementum ac mi et, rutrum tincidunt orci. Fusce fringilla, lorem
      vitae tempus hendrerit, purus tellus eleifend elit, sed lacinia urna urna
      eget purus. Donec tincidunt nec eros vitae pulvinar. Sed eleifend eleifend
      scelerisque. Quisque pretium et eros sit amet aliquet. Ut rhoncus
      condimentum quam eu consequat. Suspendisse mollis sollicitudin laoreet.
      Morbi a elit condimentum, condimentum dui quis, molestie urna. Nullam elit
      lacus, elementum quis dui sit amet, suscipit eleifend nibh. Morbi
      fringilla lacus eu facilisis lacinia. Suspendisse ut turpis sit amet lorem
      dictum laoreet. Praesent id erat a odio bibendum pharetra. Proin vel sem
      magna. Quisque finibus sagittis turpis a pulvinar. Ut facilisis enim
      risus. Integer mollis aliquet lacus, sed mattis nulla porta a. Nam varius
      tortor eget felis tempus aliquet. Integer metus elit, interdum sed dolor
      vulputate, mollis vulputate nisi. Quisque viverra, enim sed ornare
      efficitur, felis purus egestas nulla, nec ultrices libero arcu ac libero.
      Suspendisse pellentesque ligula vitae placerat suscipit. Quisque varius
      arcu at sem ornare, nec suscipit augue iaculis. Nunc et tellus
      sollicitudin, finibus urna at, dignissim odio. Quisque rutrum blandit
      posuere. Pellentesque dignissim scelerisque eros in placerat. Sed non
      ipsum enim.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul data-aos="fade-up">
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel"
          target="_blank"
          rel="noopener"
          >babel</a
        >
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa"
          target="_blank"
          rel="noopener"
          >pwa</a
        >
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router"
          target="_blank"
          rel="noopener"
          >router</a
        >
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex"
          target="_blank"
          rel="noopener"
          >vuex</a
        >
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint"
          target="_blank"
          rel="noopener"
          >eslint</a
        >
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript"
          target="_blank"
          rel="noopener"
          >typescript</a
        >
      </li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li>
        <a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a>
      </li>
      <li>
        <a href="https://forum.vuejs.org" target="_blank" rel="noopener"
          >Forum</a
        >
      </li>
      <li>
        <a href="https://chat.vuejs.org" target="_blank" rel="noopener"
          >Community Chat</a
        >
      </li>
      <li>
        <a href="https://twitter.com/vuejs" target="_blank" rel="noopener"
          >Twitter</a
        >
      </li>
      <li>
        <a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a>
      </li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li>
        <a href="https://router.vuejs.org" target="_blank" rel="noopener"
          >vue-router</a
        >
      </li>
      <li>
        <a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-devtools#vue-devtools"
          target="_blank"
          rel="noopener"
          >vue-devtools</a
        >
      </li>
      <li>
        <a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener"
          >vue-loader</a
        >
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
          rel="noopener"
          >awesome-vue</a
        >
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: String,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
p {
  margin: 50px 250px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

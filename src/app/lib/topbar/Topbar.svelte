<script>
  import { link } from "svelte-spa-router";
</script>

<div class="h-screen pt-6 px-14">
  <div class="mb-12 flex items-center">
    <a href="/" use:link class="inline-block">
      <img
        src="https://store.cloudflare.steamstatic.com/public/shared/images/header/logo_steam.svg?t=962016"
        alt="steam logo"
        srcset=""
        class="h-16 w-52"
      />
    </a>

    <p class="pl-20 font-bold">
      Hi, Welcome back!
    </p>
  </div>
  <slot />
</div>

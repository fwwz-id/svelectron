<script lang="ts">
  import Icon from "@iconify/svelte";
  import { link } from "svelte-spa-router";
  import active, { type ActiveOptions } from "svelte-spa-router/active";

  let to: string,
    text: string,
    icon: string,
    className = "",
    activeOptions: ActiveOptions = {
      inactiveClassName: "inactive"
    };

  export { to, text, icon, className as class };
</script>

<a
  class="flex items-center gap-2 {className}"
  href={to}
  use:link
  use:active={activeOptions}
>
  <Icon {icon} />
  <span>{text}</span>
</a>

<style>
  a.inactive {
    @apply text-gray-500;
  }
</style>

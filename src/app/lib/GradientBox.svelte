<script lang="ts">
  import Icon from "@iconify/svelte";
</script>

<div
  class="relative w-52 h-60 mt-12 rounded-lg bg-gradient-to-br from-picton-blue-light to-royal-blue overflow-hidden cursor-pointer"
>
  <span
    class="circle w-20 h-20 bg-gradient-to-tr from-picton-blue-darken to-glossy-white z-[2] -top-1 -left-4"
  />
  <span class="circle w-20 h-20 bg-fuchsia-600 blur-xl z-[1] -top-6 left-6" />
  <span
    class="circle w-20 h-20 bg-gradient-to-tr from-[#7dd3fc42] to-cyan-400 z-[2] top-16 -left-4"
  />
  <span class="circle w-52 h-32 -top-8 -right-12 bg-blue-700 bg-opacity-60 blur-md rotate-45" />
  <span class="circle w-32 h-32 top-12 left-16 bg-white bg-opacity-30" />
  <span
    class="absolute block w-full h-28 left-0 bottom-0 z-[2] bg-gradient-to-b from-transparent to-cyan-400 backdrop-blur-md"
  />

  <div class="absolute right-4 top-4 text-3xl text-white">
    <Icon icon="iconamoon:link-external" />
  </div>

  <div class="absolute z-10 px-6 py-6 bottom-0">
    <slot />
  </div>
</div>

<style lang="postcss">
  .circle {
    @apply absolute inline-block rounded-full;
  }

</style>

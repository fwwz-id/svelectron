<script lang="ts">
  export let active = false;
  export let color: string = undefined;
</script>

<div
  class="relative max-w-fit duration-300 rounded-full cursor-pointer hover:bg-gray-300 hover:bg-opacity-30 p-2"
>
  <div
    class="absolute -top-0.5 right-1.5 rounded-full w-2 h-2 {active
      ? ''
      : 'hidden'} {color ? color : 'bg-cranberry'}"
  />
  <slot />
</div>

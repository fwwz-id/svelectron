<script lang="ts">
  import Sidebar from "../lib/sidebar/Sidebar.svelte";
  import Topbar from "../lib/topbar/Topbar.svelte";

  export let useSidebar = true;
</script>

<Topbar>
  {#if useSidebar}
    <div class="grid grid-cols-12">
      <Sidebar />
      <div class="md:col-span-9 xl:col-span-10">
        <slot />
      </div>
    </div>
  {:else}
    <slot />
  {/if}
</Topbar>

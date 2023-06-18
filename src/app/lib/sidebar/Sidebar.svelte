<script lang="ts">
  import type { ActiveOptions } from "svelte-spa-router/active";

  import LinkIcon from "../LinkIcon.svelte";
  import GradientBox from "../GradientBox.svelte";

  interface ISidebarItem {
    id: number;
    to: string;
    icon: string;
    text: string;
    activeOptions?: ActiveOptions;
  }

  const sidebarItems: ISidebarItem[] = [
    {
      id: 0,
      to: "/",
      icon: "teenyicons:home-alt-outline",
      text: "Home"
    },
    {
      id: 1,
      to: "/genres",
      icon: "iconamoon:category",
      text: "Genres",
      activeOptions: {
        path: '/genres/*'
      }
    },
    {
      id: 2,
      to: "/platforms",
      icon: "dashicons:games",
      text: "Platforms",
      activeOptions: {
        path: '/platforms/*'
      }
    },
    {
      id: 3,
      to: "/store",
      icon: "iconamoon:store",
      text: "Store",
      activeOptions: {
        path: "/store/*"
      }
    },
    {
      id: 4,
      to: "/developer",
      icon: "teenyicons:code-solid",
      text: "Developer",
      activeOptions: {
        path: "/developer/*"
      }
    },
    {
      id: 5,
      to: "/publisher",
      icon: "iconamoon:box",
      text: "Publisher",
      activeOptions: {
        path: "/publisher/*"
      }
    },
    {
      id: 6,
      to: "/tags",
      icon: "ion:pricetag",
      text: "Tags",
      activeOptions: {
        path: "/tags/*"
      }
    },
  ]
</script>

<div class="md:col-span-3 xl:col-span-2">
  <ul class="space-y-1">
    {#each sidebarItems as sidebarItem (sidebarItem.id)}
      <li>
        <LinkIcon to={sidebarItem.to} icon={sidebarItem.icon} text={sidebarItem.text} class="py-2.5 font-semibold text-xl" />
      </li>
    {/each}
  </ul>

  <GradientBox>
    <p class="font-bold text-xl">Do you need help?</p>
  </GradientBox>
</div>

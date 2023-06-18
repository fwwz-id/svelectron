<script lang="ts">
  import { link } from "svelte-spa-router";
  import Icon from "@iconify/svelte";
  import Badge from "../Badge.svelte";

  const pickOneFrom = (arr: Array<any>) => {
    const treshold = arr.length - 1;

    const position = Math.round(Math.random() * treshold);

    const result = arr[position];

    return result;
  };

  $: inputFocus = false;

  const searchkeywords = [
    "EFootball Pro Evolution Soccer",
    "Resident Evil 2",
    "Red Dead Redemption 2",
  ];
</script>

<div class="min-h-screen pt-6 px-14">
  <div class="mb-12 grid grid-cols-12 items-center">
    <a href="/" use:link class="md:col-span-3 xl:col-span-2">
      <img
        src="https://store.cloudflare.steamstatic.com/public/shared/images/header/logo_steam.svg?t=962016"
        alt="steam logo"
        srcset=""
        class="h-16 w-52 brightness-200"
      />
    </a>

    <div class="md:col-span-7 xl:col-span-8 pl-4">
      <label
        class="flex items-center max-w-fit bg-white rounded-md p-2 space-x-2 {inputFocus ? "border-2 border-picton-blue-darken" : ""}"
      >
        <Icon icon="iconamoon:search" />
        <input
          type="text"
          class="outline-none w-96 bg-transparent"
          placeholder={pickOneFrom(searchkeywords)}
          on:focus={() => inputFocus = true}
          on:blur={() => inputFocus = false}
        />
      </label>
    </div>

    <div class="flex text-white text-xl">
      <Badge active>
        <Icon icon="iconamoon:notification" class="text-xl" />
      </Badge>
      <Badge active color="bg-picton-blue-light">
        <Icon icon="iconamoon:news" />
      </Badge>
    </div>
  </div>
  <slot />
</div>

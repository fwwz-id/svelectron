<script lang="ts">
  import Container from "../lib/Container.svelte";
  import Layout from "./Layout.svelte";

  import games from "../utils/examples/games";

  const highlightedGame = games.results[0];
  const allGames = games.results.slice(1);
  
</script>

<Layout>
  <Container>
    {#each allGames as game (game.id)}
      <p>{game.name}</p>
      <!-- <img src={game.background_image} alt="{game.name} Thumbnail"/> -->
    {/each}
  </Container>
</Layout>

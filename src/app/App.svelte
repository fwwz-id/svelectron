<script lang="ts">
  import "./main.css";

  import Router from "svelte-spa-router";
  import routes from "./routes";
</script>

<main class="bg-mirage">
  <Router {routes} />
</main>

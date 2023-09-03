<script>
  export let open = false;
</script>

<button class="inline sm:hidden py-4 px-2 focus:outline-none focus:bg-white" aria-label="Main menu" class:open on:click={() => open = !open}>
  <svg class="h-8 w-8 stroke-gray-600" class:hidden={ open } fill="none" viewBox="0 0 24 24" stroke="currentcolor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
  <svg class="hidden h-8 w-8 stroke-gray-600" class:hidden={ !open } fill="none" viewBox="0 0 24 24" stroke="currentcolor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 18 6M6 6l12 12"></path></svg>
</button>
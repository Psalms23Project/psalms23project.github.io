<script>
  import json from '../../psalms.json';

  import { goto } from "$app/navigation";
</script>

<svelte:head>
  <title>Readings of the Psalms in Nature | The Psalms 23 Project</title>
  <meta name="description" content="The Psalms 23 Project aims to create high-quality videos of Psalm readings on location, in nature with the peaceful atmosphere and sounds of creation." />
</svelte:head>

<div class="max-w-7xl flex flex-col mx-auto px-4 mt-2 mb-10">
  <p class="text-base mx-2 font-semibold tracking-tighter text-navyblue/90 uppercase">Psalm Readings</p>
  <div class="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6 gap-x-4">
    {#each Object.values(json.psalms_media) as file}
    <button on:click={() => goto('/readings/' + file.psalm)} class="flex flex-col items-start text-left mb-4">
      <div class="relative">
        <p class="absolute top-0 text-xs text-white bg-black/60 px-2 py-1 mt-2 mx-2 rounded-md">{file.length}</p>
        <img class="w-auto h-auto rounded-md" src={file.image} alt={file.title}/>
      </div>
      <div class="flex flex-col mt-2">
        <p class="text-xl text-navyblue font-bold">{file.title}</p>
        <small class="text-xs text-navyblue/70">{file.date}</small>
      </div>
    </button>
    {/each}
  </div>
</div>
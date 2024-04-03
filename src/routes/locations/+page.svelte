<script>
  import json from '../../psalms.json';

  let searchTerms = '';
  let allPsalms = json.psalms_locations;
  let filteredPsalms = allPsalms;

  const searchPsalms = () => {	
    filteredPsalms = allPsalms.filter(psalm => {
      return psalm.tags.includes(searchTerms.toLowerCase());
    });
  }

  /**
   * @param {string} icon
   */
  function getIconStr(icon) {
    let basePath = "/icons/";
    let iconExt = ".svg";
    return basePath + icon + iconExt;
  }
</script>

<svelte:head>
  <title>Planned Locations | The Psalms 23 Project</title>
  <meta name="description" content="The Psalms 23 Project aims to create high-quality videos of Psalm readings on location, in nature with the peaceful atmosphere and sounds of creation." />
</svelte:head>

<div id="locations" class="max-w-6xl flex mx-auto px-4 my-20">
  <div class="text-navyblue">
    <div class="max-w-4xl">
      <h3 class="text-4xl sm:text-5xl text-navyblue font-serif mt-4">Planned Locations</h3>
      <p class="text-lg mt-5">This page shows how we are planning to align the location, weather, and time of day of each reading with the overal theme and mood of each Psalm. This is subject to change as Yahweh leads. We plan to divide the sections of Psalm 119 into different locations.</p>
    </div>

    <!-- <div class="flex flex-row mt-5">
      <div class="relative">
        <input class="relative inline-flex flex-auto w-full py-2 pl-12 pr-6 rounded-full border border-violet-200 focus:ring-0 focus:outline-none placeholder:text-navyblue/50 placeholder:dark:text-dark-40 placeholder:font-medium" placeholder="Type to search" bind:value={searchTerms} on:input={searchPsalms}>
        <svg xmlns="http://www.w3.org/2000/svg" class="absolute -top-0.5 left-0 h-12 w-12 fill-navyblue px-3.5 ml-2" viewBox="0 0 24 24">
          <g data-name="Layer 2"><g data-name="search"><rect width="24" height="24" opacity="0"/><path d="M20.71 19.29l-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 11a6 6 0 1 1 6 6 6 6 0 0 1-6-6z"/></g></g>
        </svg>
      </div>
    </div> -->

    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mt-5">
      {#each Object.values(json.psalms_locations) as psalm}
        <div class="relative px-5 py-6 rounded-lg border border-violet-200" class:opacity-60={psalm.completed == true}>
          {#if psalm.completed == true}
          <span class="absolute top-6 right-5 font-semibold uppercase">Completed</span>
          {/if}
          <p class="uppercase text-sm text-navyblue">{psalm.location}</p>
          <h4 class="text-4xl font-serif mb-3">Psalm {psalm.psalm}</h4>
          <div class="flex flex-row items-center justify-between py-1 px-2">
            <p class="text-navyblue/80 text-sm">
              TIME OF DAY
            </p>
            <p class="inline-flex items-center">
              {psalm.time_of_day}
            </p>
          </div>
          <hr class="border border-violet-200"/>
          <div class="flex flex-row items-center justify-between py-1 px-2">
            <p class="text-navyblue/80 text-sm">
              WEATHER
            </p>
            <p class="inline-flex items-center capitalize">
              <img class="w-4 h-4 mr-1" src="{getIconStr(psalm.weather)}" alt="weather" title="{psalm.weather}"/>
              {psalm.weather}
            </p>
          </div>
          <hr class="border border-violet-200"/>
          <div class="flex flex-row items-center justify-between py-1 px-2">
            <p class="text-navyblue/80 text-sm">
              CATEGORIES
            </p>
            <p class="inline-flex items-center">
              {#each Object.values(psalm.categories) as category}
                <span class="mx-1">{category}</span>
              {/each}
            </p>
          </div>
          <p class="flex flex-row flex-wrap mt-3">
            {#each Object.values(psalm.tags) as tag}
              <span class="bg-violet-100 rounded-full py-1 px-3 m-1">{tag}</span>
            {/each}
          </p>
        </div>
      {/each}
    </div>

    <p class="text-lg text-navyblue my-28">The rest of this list is still being worked on. In the meantime, refer to the following table:</p>

    <div class="flex flex-col border border-violet-200 px-6 py-4 rounded-md">
      <div class="flex flex-row flex-wrap">
        {#each Object.values(json.psalms_location_table) as location}
          <div class="w-full md:w-1/3 flex flex-col mt-3">
            <p class="font-semibold text-xl">{location.label}</p>
            <hr class="border-violet-200 border mt-1 mb-4 mr-4" />
            {#each Object.values(location.items) as item}
              <div class="flex flex-row items-center mt-2 bg-violet-100 rounded-md px-2 py-1 mr-4">
                <img class="w-5 h-5 mr-2" src="{getIconStr(item.label)}" alt="time of day" title="{item.label}"/> <p class="text-lg capitalize font-medium mr-4">{item.label}</p>
              </div>
              <hr class="bg-violet-200 mt-1 mb-2 mr-4" />
              <ul class="mt-1 mb-2 list-none list-inside text-lg space-y-0">
                {#each Object.values(item.psalms) as psalm}
                  <li class="flex flex-row items-center"><img class="w-4 h-4 mr-2" src="{getIconStr(psalm.weather)}" alt="weather" title="{psalm.weather}"/>{psalm.chapter}</li>
                {/each}
              </ul>
            {/each}
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>
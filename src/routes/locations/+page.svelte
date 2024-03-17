<script>
  import json from '../../psalms.json';

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
    <div class="flex flex-col border border-violet-200 px-6 py-4 mt-6 rounded-md">
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
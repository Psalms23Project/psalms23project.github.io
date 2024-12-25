<script>
  import json from '../../psalms.json';

  let filteredPsalms = $state(json.psalms_locations);

  /**
     * @param {string} location
     * @param {string} time_of_day
     */
  function filterPsalms(location, time_of_day) {	
    filteredPsalms = json.psalms_locations.filter(psalm => {
      return psalm.location == location && psalm.time_of_day == time_of_day;
    });

    const anchor = document.getElementById('psalms');
		window.scrollTo({
			// @ts-ignore
			top: anchor.offsetTop,
			behavior: 'smooth'
		})
  }

  /**
   * @param {string} icon
   */
  function getIconStr(icon) {
    let basePath = "/icons/";
    let iconExt = ".svg";
    return basePath + icon + iconExt;
  }

  
  /**
     * @param {any} location
     */
  function getLocationBgImage(location) {
    switch(location.toLowerCase()) {
      case "river":
        return "river.jpg";
      case "mountain/mountain top":
        return "mountain_top.jpg";
      case "meadow/hill/mountain":
        return "mountain_top_grassy.jpg";
      case "lake":
        return "lake.jpg";
      case "woods/forest":
        return "forest.jpg";
      case "hill":
        return "hill.jpg";
      case "meadow":
        return "meadow.jpg";
      case "desert":
        return "desert.jpg";
      case "waterfall":
        return "waterfall.jpg";
      case "hilltop":
        return "hilltop.jpg";
      case "still water with sheep nearby":
        return "sheep.jpg";
      case "lake with trees":
        return "lake_trees.jpg"
      case "stream":
        return "stream_with_trees.jpg";
      case "stream with woods nearby":
        return "stream_with_trees.jpg";
      case 'mountain top':
        return "mountain_top.jpg";
      case "ocean":
        return "ocean.jpg";
      case "stream in a meadow":
        return "stream_in_meadow.jpg";
      case "mountain":
        return "mountain.jpg";
    }
  }

  function getUniqueLocations() {
    /**
       * @type {string[]}
       */
    let uniqueLocations = [];
    for (let key in json.psalms_locations) {
      let location = json.psalms_locations[key].location;
      if (uniqueLocations.includes(location) == false && location !== 'Various') {
        uniqueLocations.push(location);
      }
    }
    return uniqueLocations;
  }

  /**
     * @param {string} location
     */
  function getUniqueWeather(location) {
    let psalmsAtLocation = json.psalms_locations.filter(psalm => {
      return psalm.location == location;
    });

    /**
       * @type {string | string[]}
       */
    let uniqueWeather = [];

    for (let psalm in psalmsAtLocation) {
      let weather = psalmsAtLocation[psalm].weather;
      if (uniqueWeather.includes(weather) == false) {
        uniqueWeather.push(weather);
      }
    }
    return uniqueWeather;
  }

  /**
     * @param {string} location
     */
     function getUniqueTimeOfDay(location) {
    let psalmsAtLocation = json.psalms_locations.filter(psalm => {
      return psalm.location == location;
    });

    /**
       * @type {string | string[]}
       */
    let uniqueTimeOfDay = [];

    for (let psalm in psalmsAtLocation) {
      let weather = psalmsAtLocation[psalm].time_of_day;
      if (uniqueTimeOfDay.includes(weather) == false) {
        uniqueTimeOfDay.push(weather);
      }
    }
    return uniqueTimeOfDay;
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

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2 my-10">
      {#each getUniqueLocations() as location}
      <div class="bg-cover bg-center rounded-2xl" style="background-image: url('/images/stock/{getLocationBgImage(location)}')">
        <div class="rounded-2xl bg-gradient-to-r from-black/40 to-transparent pt-40 px-6 pb-5 h-full">
          <ul class="inline-flex text-white">
            {#each getUniqueWeather(location) as weather}
            <li>
              <img class="w-4 h-4 mx-1" style="filter: invert(100%)" src="{getIconStr(weather)}" alt="{weather}" title="{weather}"/>
            </li>
            {/each}
          </ul>
          <p class=" text-white font-semibold uppercase">{location}</p>
          <ul class="mt-2 text-white">
            {#each getUniqueTimeOfDay(location) as time_of_day}
            <!-- svelte-ignore a11y_click_events_have_key_events -->
            <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
            <li class="cursor-pointer" onclick={() => filterPsalms(location, time_of_day)}>
              {time_of_day}
            </li>
            {/each}
          </ul>
        </div>
      </div>
      {/each}
    </div>

    <div id="psalms" class="grid grid-cols-1 md:grid-cols-2 gap-3 mt-5">
      {#each filteredPsalms as psalm}
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
              <img class="w-4 h-4 mr-1" src="{getIconStr(psalm.weather)}" alt="{psalm.weather}" title="{psalm.weather}"/>
              {psalm.weather}
            </p>
          </div>
          <hr class="border border-violet-200"/>
          <div class="flex flex-row items-center justify-between py-1 px-2">
            <p class="text-navyblue/80 text-sm">
              CATEGORIES
            </p>
            <p class="items-center text-end">
              {#each Object.values(psalm.categories) as category}
                <span class="mx-1 text-end">{category}</span>
              {/each}
            </p>
          </div>
          <hr class="border border-violet-200"/>
          <div class="flex flex-row items-center justify-between py-1 px-2">
            <p class="text-navyblue/80 text-sm">
              VERSES
            </p>
            <p class="inline-flex items-center">
              {psalm.verses}
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

    <div class="flex flex-col border border-violet-200 px-6 py-4 rounded-md mt-28">
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
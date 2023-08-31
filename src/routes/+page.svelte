<script>
  import json from '../psalms.json';

/**
 * @param {string} icon
 */
function getIconStr(icon) {
  let basePath = "icons/";
  let iconExt = ".svg";
  return basePath + icon + iconExt;
}

</script>

<svelte:head>
  <title>The Psalms 23 Project</title>
  <meta name="description" content="The Psalms 23 Project aims to create high-quality videos of Psalm readings on location, in nature with the peaceful atmosphere and sounds of creation." />
</svelte:head>

<div class="flex flex-col md:flex-row items-center">
  <div class="w-full md:w-2/5 xl:w-1/2 order-1 md:order-0 mt-10 md:mt-0">
    <img class="w-auto" src="images/hero.jpg" alt="Grassy field on a cloudy day"/>
  </div>
  <div class="w-full md:w-3/5 xl:w-1/2 flex px-4 md:px-10 items-center order-0 md:order-1">
    <div class="mt-10 md:mt-0">
      <h1 class="text-5xl sm:text-6xl md:text-5xl lg:text-5xl font-hightower text-navyblue max-w-xl mt-4">
        We're creating high-quality videos of the Psalms read on location, in nature.
      </h1>
      <div class="flex flex-col mt-8 xl:mt-12 max-w-md">
        <!-- <a class="text-base font-charter font-semibold text-white bg-navyblue rounded-full px-10 py-4 duration-300 hover:bg-navybluedark" href="/#theproject">
          About the project
        </a> -->
        <form action="https://send.pageclip.co/Gq76Ux4sMztghTxLvSSLBNZKKtkXEJbz/Subscribe" class="pageclip-form flex" method="post">
          <div class="flex grow items-center bg-violet-100 rounded-full duration-200 border-2 border-violet-200 focus-within:border-navyblue">
            <div class="flex grow justify-between md:flex-row">
              <input type="email" name="email" placeholder="Email address" class="flex grow h-10 sm:h-12 w-100 pl-4 sm:pl-7 pr-5 m-1 appearance-none text-lg font-charter bg-transparent placeholder:text-violet-300 focus:ring-0 focus:outline-none border-none"> 
              <button type="submit" class="pageclip-form__submit inline-flex items-center text-sm sm:text-base font-charter font-semibold text-white bg-navyblue rounded-full px-5 sm:px-8 py-3 sm:py-4 duration-300 hover:bg-navybluedark space-x-1">
                <span>Submit</span>
                <svg class="w-4 h-4 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="arrow-forward"><rect width="24" height="24" transform="rotate(-90 12 12)" opacity="0"/><path d="M5 13h11.86l-3.63 4.36a1 1 0 0 0 1.54 1.28l5-6a1.19 1.19 0 0 0 .09-.15c0-.05.05-.08.07-.13A1 1 0 0 0 20 12a1 1 0 0 0-.07-.36c0-.05-.05-.08-.07-.13a1.19 1.19 0 0 0-.09-.15l-5-6A1 1 0 0 0 14 5a1 1 0 0 0-.64.23 1 1 0 0 0-.13 1.41L16.86 11H5a1 1 0 0 0 0 2z"/></g></g></svg>
              </button>
            </div>
          </div>
        </form>
        <div class="flex justify-end">
          <p class="font-charter text-navyblue text-xs mt-2 opacity-75 mr-0 sm:mr-5">Get project updates and notifications whenever we publish a video.</p>
        </div>
      </div>
    </div>
  </div>
</div>
<div id="theproject" class="max-w-6xl mx-auto px-4 my-20">
  <div class="max-w-3xl font-charter text-navyblue">
    <span class="text-base bg-violet-100 px-3 py-1 rounded-full">The Project Vision</span>
    <h2 class="text-4xl sm:text-5xl font-hightower mt-4">High-quality recordings of the Psalms read in peaceful, natural locations.</h2>
    <p class="text-lg mt-5">The Psalms are a collection of prayers and songs of praise written over a period of centuries by authors including David, Moses, and the sons of Korah. Appropriately called Israel's prayer book, the book of Psalms is filled with words to express to our Heavenly Father. It contains words of praise, of thanksgiving, of awe, of cries for deliverance from enemies, and of comfort.</p>
    <p class="text-lg mt-4">The Psalms 23 project aims to record high-quality readings of the Psalms in nature with the peaceful atmosphere and sounds of creation. Part of what makes this project unique is that we are aligning the <a class="underline" href="/#locations">location of each reading</a> with the overall theme and feeling of the Psalm.</p>
    <p class="text-lg mt-4">This collection of readings will restore the name of our Heavenly Father, Yahweh, to where it appears in the original Hebrew Scriptures. We want to declare his name: "Give praise to Yahweh, proclaim his name; make known among the nations what he has done." (Psalm 105:1)</p>
  </div>
</div>
<div class="flex flex-col md:flex-row max-w-6xl mx-auto px-4 my-28">
  <div class="w-full md:w-1/3 mb-10 md:mb-0 mr-0 md:mr-14">
    <img class="w-auto h-auto" src="images/tree.jpg" alt="" />
  </div>
  <div id="roadmap" class="w-full md:w-2/3 max-w-2xl font-charter text-navyblue">
    <span class="text-base bg-violet-100 px-3 py-1 rounded-full">Roadmap</span>
    <h3 class="text-4xl sm:text-5xl font-hightower mt-4">The Plan.</h3>
    <p class="text-lg mt-5">We believe Yahweh is leading us to capture the peaceful atmosphere of His awesome creation as a backdrop for the readings. Therefore, the audio will only be recorded on location, with no voice-over, to preserve the full range of natural and atmospheric sounds. We will be filming the videos from different angles to present a full picture of each location.</p>
    <ol class="mt-5 border-l-2 border-navyblue">
      <li>
        <div class="flex-start flex items-center pt-3">
          <div class="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-navyblue"></div>
          <p class="text-sm">
            7/2023
          </p>
        </div>
        <div class="mb-6 ml-4 mt-2">
          <h4 class="mb-1.5 text-xl font-semibold line-through">Trial video</h4>
          <p class="mb-3">
            We recorded a trial video to ensure we have what we need for camera and audio equipment, and fine-tune our planning.
          </p>
        </div>
      </li>
      <li>
        <div class="flex-start flex items-center pt-3">
          <div class="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-navyblue"></div>
          <p class="text-sm">
            7/2023
          </p>
        </div>
        <div class="mb-6 ml-4 mt-2">
          <h4 class="mb-1.5 text-xl font-semibold line-through">Camera, audio equipment & gear</h4>
          <p class="mb-3">
            Praise Yahweh! We now have a professional-quality audio setup and a camera.
          </p>
        </div>
      </li>
      <li>
        <div class="flex-start flex items-center pt-3">
          <div class="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-navyblue"></div>
          <p class="text-sm">
            8/2023
          </p>
        </div>
        <div class="mb-6 ml-4 mt-2">
          <h4 class="mb-1.5 text-xl font-semibold line-through">Test videos</h4>
          <p class="mb-3 line-through">
            We've recorded a number of videos to get a feel for the equipment and to allow practice reading the Psalms.
          </p>
        </div>
      </li>
      <li>
        <div class="flex-start flex items-center pt-3">
          <div class="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-navyblue"></div>
          <p class="text-sm">
            9/2023
          </p>
        </div>
        <div class="mb-6 ml-4 mt-2">
          <h4 class="mb-1.5 text-xl font-semibold">The first Psalm reading video</h4>
          <p class="mb-3">
            The exact Psalm and location is yet to be announced.
          </p>
        </div>
      </li>
    </ol>
  </div>
</div>

<div id="video" class="max-w-6xl flex mx-auto">
  <iframe class="mx-auto" width="930" height="523" src="https://www.youtube.com/embed/u8tb-G6BiQc" title="Update on our progress | Test videos | Psalms 23 | Vlog 2" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

<div id="locations" class="max-w-6xl flex mx-auto px-4 my-20">
  <div class="font-charter text-navyblue">
    <div class="max-w-3xl">
      <span class="text-base bg-violet-100 px-3 py-1 rounded-full">Locations</span>
      <h3 class="text-4xl sm:text-5xl font-hightower mt-4">Planned Psalm Readings &amp; Locations.</h3>
      <p class="text-lg mt-5">The table below shows how we are planning to align the location, weather, and time of day of each reading with the theme and feeling of the Psalm. This is subject to change as Yahweh leads. We plan to divide the sections of Psalm 119 into different locations.</p>
    </div>
    <div class="flex flex-col border border-violet-200 px-6 py-4 mt-6 rounded-md">
      <div class="flex flex-row flex-wrap">
        {#each Object.values(json.psalms_location_table) as location}
          <div class="w-full md:w-1/3 flex flex-col mt-3">
            <p class="font-charter font-bold text-xl">{location.label}</p>
            <hr class="border-violet-200 border mt-1 mb-4 mr-4" />
            {#each Object.values(location.items) as item}
              <div class="flex flex-row items-center mt-2 bg-violet-100 rounded-md px-2 py-1 mr-4">
                <img class="w-5 h-5 mr-2" src="{getIconStr(item.label)}" alt="time of day" title="{item.label}"/> <p class="text-lg capitalize font-bold mr-4">{item.label}</p>
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

<div id="signup" class="flex flex-col text-center bg-birch-tree rounded-none sm:rounded-lg mx-0 sm:mx-8">
  <div class="flex flex-col bg-cover px-1 md:px-4 pt-32 pb-32 rounded-none sm:rounded-lg bg-navybluedark/70">
    <h5 class="text-4xl md:text-5xl font-hightower text-white mt-4 px-4 mx-auto">
      Stay updated on our progress.
    </h5>
    <p class="text-white font-charter text-lg mt-4 max-w-xl mx-auto">Signup for our newsletter to get project updates and notifications emails whenever we publish a video or have an announcement.</p>
    <div class="flex flex-col mt-5 md:mt-10 mx-auto">
      <form action="https://send.pageclip.co/Gq76Ux4sMztghTxLvSSLBNZKKtkXEJbz/Subscribe" class="pageclip-form flex" method="post">
        <div class="flex grow items-center bg-violet-100 rounded-full duration-200 border-2 border-violet-200">
          <div class="flex grow justify-between md:flex-row">
            <input type="email" name="email" placeholder="Email address" class="flex grow h-10 sm:h-12 w-100 pl-4 sm:pl-7 pr-5 m-1 appearance-none text-lg font-charter bg-transparent placeholder:text-navyblue focus:ring-0 focus:outline-none border-none"> 
            <button type="submit" class="pageclip-form__submit inline-flex items-center text-sm sm:text-base font-charter font-semibold text-white bg-navyblue rounded-full px-5 sm:px-8 py-3 sm:py-4 duration-300 hover:bg-navybluedark space-x-1">
              <span>Submit</span>
              <svg class="w-4 h-4 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="arrow-forward"><rect width="24" height="24" transform="rotate(-90 12 12)" opacity="0"/><path d="M5 13h11.86l-3.63 4.36a1 1 0 0 0 1.54 1.28l5-6a1.19 1.19 0 0 0 .09-.15c0-.05.05-.08.07-.13A1 1 0 0 0 20 12a1 1 0 0 0-.07-.36c0-.05-.05-.08-.07-.13a1.19 1.19 0 0 0-.09-.15l-5-6A1 1 0 0 0 14 5a1 1 0 0 0-.64.23 1 1 0 0 0-.13 1.41L16.86 11H5a1 1 0 0 0 0 2z"/></g></g></svg>
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>
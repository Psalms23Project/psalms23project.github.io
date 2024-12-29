<script>
  import json from '../psalms.json';
</script>

<svelte:head>
  <title>The Psalms 23 Project</title>
  <meta name="description" content="The Psalms 23 Project aims to create high-quality videos of Psalm readings on location, in nature with the peaceful atmosphere and sounds of creation." />
</svelte:head>

<div class="mx-3">
  <!-- Latest video -->
  <div class="flex flex-col bg-featured-psalm bg-cover bg-center rounded-2xl max-w-7xl mx-auto">
    <div class="flex flex-col px-8 md:px-24 py-36 rounded-2xl bg-gradient-to-r from-black/40 to-transparent">
      <p class="text-white text-sm uppercase">Latest Video</p>
      <div class="mt-20">
        <h1 class="text-5xl lg:text-6xl font-serif font-medium text-white mt-5">
          Psalm 97
        </h1>
        <p class="font-secondary italic text-white/90 text-xl mt-2 max-w-md leading-6">
          "Yahweh is King"
        </p>
        <div class="flex mt-10">
          <a href="/readings/97/" class=" text-navybluedark font-semibold rounded-lg px-5 py-3 bg-white hover:bg-white/80 duration-300">
            Watch Video
          </a>
        </div>
      </div>
    </div>
  </div>
  <!-- The project -->
  <div id="theproject" class="max-w-6xl mx-auto text-navyblue px-4 my-20">
    <div class="flex flex-col">
      <h2 class="font-serif text-4xl md:text-5xl mt-4 max-w-3xl mx-auto text-navyblue text-center">
        A project to create high-quality readings of the Psalms in nature.
      </h2>
      <h3 class="text-2xl md:text-2xl mt-3 mx-auto text-center text-navyblue/80 font-secondary italic">
        Psalms of the Bible, read on location in nature across the United States.
      </h3>
      <div class="text-navyblue/90 text-xl mt-4 text-center">
        <p class="mt-3">The Book of Psalms is a collection of prayers and songs of praise written over centuries by authors including David, Moses, and the sons of Korah. Appropriately called Israel's prayer book, the book of Psalms is filled with words to express to our Heavenly Father. It contains words of praise, of thanksgiving, of awe, of cries for deliverance from enemies, and of comfort.</p>
        <p class="mt-3 mb-8">Our goal is to create readings of the Psalms in natural settings that fit each Psalm's overall theme.</p>
        <a class="group text-base inline-flex items-center font-semibold hover:opacity-90 duration-300 ease-in-out" href="/about/">
          LEARN MORE
          <svg class="w-4 h-4 fill-navyblue ml-2 group-hover:ml-3 duration-300" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path></svg>
        </a>
      </div>
    </div>
  </div>

  <!-- Progress log -->
  <div id="progress" class="flex flex-col md:flex-row max-w-6xl mx-auto px-4 my-28">
    <div class="w-full md:w-1/3 lg:w-3/5 mb-10 md:mb-0 mr-0 md:mr-14">
      <img class="w-auto h-auto rounded-2xl" src="images/covers/psalm-116.jpg" alt="Reading the Psalms in nature" />
    </div>
    <div class="w-full md:w-2/3 lg:w-2/5 max-w-2xl text-navyblue">
      <h3 class="text-4xl md:text-5xl font-serif text-navyblue">Progress Log</h3>
      <ol class="flex flex-col-reverse mt-8 border-l-2 border-navyblue h-72 overflow-y-auto">
        {#each Object.values(json.progress_log) as log}
        <li>
          <div class="flex-start flex items-center pt-3">
            <div class="-ml-[6px] mr-3 h-[10px] w-[10px] rounded-full bg-navyblue"></div>
            <p class="text-sm tracking-tight">
              {log.date}
            </p>
          </div>
          <div class="mb-6 ml-4 mt-2">
            <h4 class="mb-1.5 text-xl tracking-tight font-medium">{log.title}</h4>
            <p class="mb-3 tracking-tight">
              {@html log.notes}
            </p>
          </div>
        </li>
        {/each}
      </ol>
    </div>
  </div>

  <!-- Newsletter signup -->
  <div class="min-w-0 max-w-7xl mx-auto">
    <div id="signup" class="flex flex-col text-center bg-birch-tree rounded-2xl">
      <div class="flex flex-col bg-cover px-1 pt-32 pb-32 rounded-2xl bg-navybluedark/50">
        <h5 class="text-4xl md:text-5xl font-serif text-white mt-4 px-4 mx-auto">
          The Psalms 23 Project Newsletter
        </h5>
        <p class="text-white text-base mt-4 max-w-xl mx-auto px-3">Signup for our newsletter to get project updates and notifications emails whenever we publish a video or have an announcement.</p>
        <div class="flex flex-col mt-5 md:mt-10 mx-auto">
          <form action="https://send.pageclip.co/Gq76Ux4sMztghTxLvSSLBNZKKtkXEJbz/Subscribe" class="pageclip-form min-w-0 w-full" method="post">
            <div class="bg-violet-100 rounded-full duration-200 border-2 border-violet-200 min-w-0 w-full">
              <div class="flex justify-between md:flex-row w-full">
                <input type="email" name="email" placeholder="Email address" class="relative min-w-0 w-full h-10 sm:h-12 pl-4 sm:pl-7 pr-5 m-1 appearance-none text-lg tracking-tight bg-transparent placeholder:text-navyblue focus:ring-0 focus:outline-none border-none"> 
                <button type="submit" class="pageclip-form__submit inline-flex items-center text-sm sm:text-base font-semibold text-white bg-navyblue rounded-full px-5 sm:px-8 py-3 sm:py-4 duration-300 hover:bg-navybluedark space-x-1">
                  <span>Submit</span>
                  <svg class="w-4 h-4 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="arrow-forward"><rect width="24" height="24" transform="rotate(-90 12 12)" opacity="0"/><path d="M5 13h11.86l-3.63 4.36a1 1 0 0 0 1.54 1.28l5-6a1.19 1.19 0 0 0 .09-.15c0-.05.05-.08.07-.13A1 1 0 0 0 20 12a1 1 0 0 0-.07-.36c0-.05-.05-.08-.07-.13a1.19 1.19 0 0 0-.09-.15l-5-6A1 1 0 0 0 14 5a1 1 0 0 0-.64.23 1 1 0 0 0-.13 1.41L16.86 11H5a1 1 0 0 0 0 2z"/></g></g></svg>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
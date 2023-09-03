<script>
  import json from '../../psalms.json';
  import Player from "../../components/Player.svelte";

  /**
     * @param {number} selected
     */
  let selected = 0;

  /**
     * @type {{ index: number; psalm: string; title: string; date: string; location: string; image: string; url: string; length: string; description: string; } | undefined}
     */
  let videoData = {
    index: 0,
    psalm: "",
    title: "",
    date: "",
    location: "",
    image: "",
    url: "",
    length: "",
    description: ""
  };

  /**
     * @param {number} index
     */
  function setCurrentVideo(index) {
    selected = index;
    let data = Object.values(json.psalm_videos).find((item) => item.index == index);
    if (videoData !== undefined) {
      videoData = data;
    } else {
      console.log("undefined videoData");
    }
  }

  // Init
  setCurrentVideo(selected);
</script>

<svelte:head>
  <title>Psalm Readings | The Psalms 23 Project</title>
  <meta name="description" content="The Psalms 23 Project aims to create high-quality videos of Psalm readings on location, in nature with the peaceful atmosphere and sounds of creation." />
</svelte:head>
  
<div class="max-w-6xl flex flex-col mx-auto px-4 mt-5 mb-10">
  <div class="flex flex-row">
    <!-- Player -->
    <figure class="w-3/4 flex flex-grow" id="videoContainer">
      <Player 
      videoTitle={videoData.title}
      videoUrl={videoData.url}
      />
    </figure>
    <!-- Playlist -->
    <div class="w-1/4 ml-2">
      <div class="relative text-navyblue bg-violet-100 rounded-lg py-3 px-2 h-full">
        <p class="font-charter text-lg mx-2">Psalms</p>
        <div class="flex flex-col mt-3">
          {#each Object.values(json.psalm_videos) as video}
          <button on:click={() => setCurrentVideo(video.index)} class="flex flex-row items-center justify-between px-3 py-2 rounded-lg" class:bg-violet-200={video.index == selected}>
            <div class="flex flex-row items-center">
              <img class="w-20 h-auto" src={video.image} alt={video.psalm}/>
              <p class="font-charter text-md ml-2">{video.psalm}</p>
            </div>
            <p class="font-karla text-sm">{video.length}</p>
          </button>
          {/each}
        </div>
      </div>
    </div>
  </div>
  <!-- Video info -->
  <div class="relative text-navyblue bg-violet-100 rounded-lg py-5 px-8 mt-3">
    <div class="flex flex-row justify-between">
      <h1 class="text-5xl font-hightower">{ videoData.psalm } (This is a test. The actual Psalm readings are coming soon)</h1>
      <div class="my-auto space-x-2">
        <!-- <button class="inline-flex items-center font-karla text-base bg-violet-200 fill-navyblue px-3 sm:px-4 py-3 sm:py-2 rounded-full duration-300 hover:bg-navyblue hover:fill-white hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="bi bi-download w-4 h-4 mr-0 sm:mr-2" viewBox="0 0 16 16">
            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
            <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
          </svg>
          <span class="hidden sm:block">Download</span>
        </button>
        <button class="inline-flex items-center font-karla text-base bg-violet-200 fill-navyblue px-3 sm:px-4 py-3 sm:py-2 rounded-full duration-300 hover:bg-navyblue hover:fill-white hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="bi bi-share w-4 h-4 mr-0 sm:mr-2" viewBox="0 0 16 16">
            <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/>
          </svg>
          <span class="hidden sm:block">Share</span>
        </button> -->
      </div>
    </div>
    <div class="flex flex-row space-x-3 font-charter">
      <p>{ videoData.location }</p><p>{ videoData.date }</p>
    </div>
    <p class="text-lg mt-5 font-charter">
      {@html videoData.description }
    </p>
  </div>
</div>
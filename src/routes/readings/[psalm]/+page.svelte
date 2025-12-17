<script>
// @ts-nocheck
  import json from '../../../psalms.json';
  import EmbedPlayer from "../../../components/EmbedPlayer.svelte";
  import AudioPlayer from "../../../components/AudioPlayer.svelte";

  import { goto } from "$app/navigation";
  import { page } from '$app/state';

  let defaultPsalm = 30;

  /**
   * @param {string} selectedTab
   */
   let selectedTab = $state('videos');

  /**
     * @param {number} selectedPsalm
     */
  let selectedPsalm = $state(defaultPsalm);

  /**
     * @type {{ psalm: number; title: string; date: string; location: string; time_of_day: string; image: string; videoUrl: string; audioUrl: string; length: string; description: string; } | undefined}
     */
  let data = $state({
    psalm: defaultPsalm,
    title: "",
    date: "",
    location: "",
    time_of_day: "",
    image: "",
    videoUrl: "",
    audioUrl: "",
    length: "",
    description: ""
  });

  /**
     * @type {AudioPlayer}
     */
  let audioPlayer = $state();

  /**
     * @param {string} tab
     */
  function setTab(tab) {
    selectedTab = tab;
    if (tab == 'videos') {
      audioPlayer.pause();
    }
  }

  /**
     * @param {number} index
     */
  function setCurrentMedia(index, init=false) {
    selectedPsalm = index;
    goto('/readings/' + selectedPsalm, {invalidateAll: true});

    updatePage();
  }

  function updatePage() {
    if (selectedPsalm == undefined) {
      selectedPsalm = defaultPsalm;
    } else {
      selectedPsalm = Number(selectedPsalm);
    }

    let jsonData = Object.values(json.psalms_media).find((item) => item.psalm == selectedPsalm);
    if (jsonData !== undefined) {
      data = jsonData;
    } else {
      data = undefined;
      console.log('Error: undefined data');
    }
  }

  function init() {
    selectedPsalm = Number(page.params.psalm);
    updatePage();
  }

  // Init
  init();
</script>

<svelte:head>
  <title>Psalm {data?.psalm} | The Psalms 23 Project</title>
  <meta name="description" content="The Psalms 23 Project aims to create high-quality videos of Psalm readings on location, in nature with the peaceful atmosphere and sounds of creation." />
</svelte:head>

{#if data == undefined}
  <div class="flex mx-auto my-20">
    <p class="text-2xl mx-auto">Ooops..Invalid url. Click <button class="underline" onclick={() => location.replace('/readings')}>here</button> to find the readings</p>
  </div>
{:else}
  <div class="max-w-7xl flex flex-col mx-auto px-4 mt-2 mb-10">
    <div class="flex flex-col md:flex-row">
      <!-- Video player -->
      <figure class="w-full flex flex-grow" class:hidden={selectedTab == 'audio'}>
        <EmbedPlayer 
          src={data.videoUrl}
          title={data.title}
        />
      </figure>
      <!-- Audio player -->
      <figure class="w-full flex flex-grow" class:hidden={selectedTab == 'videos'}>
        <AudioPlayer
          bind:this={audioPlayer}
          src={data.audioUrl}
          title={data.title}
          thumbnail={data.image}
        />
      </figure>
      <!-- Playlist -->
      <div class="w-full min-w-72 sm:min-w-80 max-w-full md:max-w-80 ml-0 md:ml-2 mt-4 md:mt-0 bg-violet-100 rounded-lg" style="height: 33rem">
        <div class="relative text-navybluedark py-3 px-2 h-full">
          <p class="text-base mx-2 font-semibold tracking-tighter text-navyblue/90 uppercase">Psalm Readings</p>
          <div class="flex flex-row justify-between text-sm mt-4">
            <div class="flex flex-row">
              <button class="px-3 py-1 rounded-lg" onclick={() => setTab('videos')} class:bg-violet-200={selectedTab =='videos'}>
                Videos
              </button>
              <button class="px-3 py-1 rounded-lg" onclick={() => setTab('audio')} class:bg-violet-200={selectedTab =='audio'}>
                Audio
              </button>
            </div>
            <a class="px-3 py-1 rounded-lg bg-violet-200 flex items-center" class:hidden={selectedTab == 'videos'} href="https://drive.google.com/file/d/1NzsAty7RyebmXSKh_tQ2d9Rhy886GB8-/view?usp=drive_link" target="_blank" title="Download zip of audio files (Last updated 10/2024)" aria-label="Download audio files">
              <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path d="M240,136v64a16,16,0,0,1-16,16H32a16,16,0,0,1-16-16V136a16,16,0,0,1,16-16H72a8,8,0,0,1,0,16H32v64H224V136H184a8,8,0,0,1,0-16h40A16,16,0,0,1,240,136Zm-117.66-2.34a8,8,0,0,0,11.32,0l48-48a8,8,0,0,0-11.32-11.32L136,108.69V24a8,8,0,0,0-16,0v84.69L85.66,74.34A8,8,0,0,0,74.34,85.66ZM200,168a12,12,0,1,0-12,12A12,12,0,0,0,200,168Z"></path></svg>
            </a>
          </div>
          <div class="flex flex-col mt-3 pr-2 overflow-y-auto" style="height: 26rem">
            {#each Object.values(json.psalms_media) as file}
            <button onclick={() => setCurrentMedia(file.psalm)} class="flex flex-row items-center justify-between px-3 py-2 rounded-lg" class:bg-violet-200={file.psalm == selectedPsalm}>
              <div class="flex flex-row items-center">
                <img class="w-24 h-auto rounded-md" src={file.image} alt={file.title}/>
                <div class="flex flex-col text-left ml-2">
                  <p class="text-md font-medium" class:font-semibold={file.psalm == selectedPsalm}>{file.title.split("|")[0]}</p>
                  <small class="text-xs text-navyblue/70">{file.date}</small>
                </div>
              </div>
              <p class="text-sm text-navyblue">{file.length}</p>
            </button>
            {/each}
          </div>
        </div>
      </div>
    </div>
    <!-- Info -->
    <div class="relative text-navyblue bg-violet-100 rounded-lg py-6 px-4 md:px-8 mt-3">
      <div class="flex flex-row justify-between">
        <h1 class="text-4xl md:text-5xl font-serif">{ data.title }</h1>
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
      <div class="flex flex-row tracking-tight space-x-3 mt-3">
        <p>{ data.date }</p><p>{ data.location }</p><p>{ data.time_of_day }</p>
      </div>
      <p class="text-base mt-5 max-w-prose">
        {@html data.description}
      </p>
    </div>
  </div>
{/if}


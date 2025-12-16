<script>
// @ts-nocheck

  /**
     * @type {string|null}
     */
    export let src = null;

  /**
     * @type {string}
     */
    export let title = '';

  /**
     * @type {string}
     */
    export let thumbnail;

  /**
     * @type {HTMLAudioElement | null}
     */
    export let audio = null;

  export let paused = true;
  export let duration = 0.0;
  export let muted = false;
  export let volume = 1;

  let currentTime = 0;
  let seeking = false;
  let volumeSeeking = false;
  
  /**
     * @type {HTMLProgressElement}
     */
  let progressBar;

  /**
     * @type {HTMLProgressElement}
     */
  let volumeBar;

  export const pause = () => {
	  audio?.pause();
  }

  /**
     * @param {{ pageX: number; }} event
     * @param {DOMRect} bounds
     */
  function seek(event, bounds) {
    let x = event.pageX - bounds.left;
    return Math.min(Math.max(x / bounds.width, 0), 1);
  }

  /**
     * @param {any} event
     */
  function seekAudio(event) {
    if (!progressBar) return;
    audio.currentTime = seek(event, progressBar.getBoundingClientRect()) * duration;
  }

  /**
     * @param {any} event
     */
  function seekVolume(event) {
    if (!volumeBar) return;
    volume = seek(event, volumeBar.getBoundingClientRect());
    audio.volume = volume;
    muted = false;
  }

  /**
     * @param {string | number} seconds
     */
  function formatSeconds(seconds) {
    if (isNaN(seconds)) return "No Data";
      var sec_num = parseInt(seconds, 10)
    var hours   = Math.floor(sec_num / 3600)
    var minutes = Math.floor(sec_num / 60) % 60
    seconds = sec_num % 60

    return [hours,minutes,seconds]
      .map(v => v < 10 ? "0" + v : v)
      .filter((v,i) => v !== "00" || i > 0)
      .join(":")
  }

  /**
     * @param {any} event
     */
  function trackMouse(event) {
    if (seeking) seekAudio(event);
    if (volumeSeeking) seekVolume(event);
  }
</script>

<svelte:window
  on:mouseup={() => seeking = volumeSeeking = false}
  on:mousemove={trackMouse}
/>

<div class="audio-player-container flex flex-col justify-between rounded-lg">
  <div></div>
  <div class="max-w-2xl shadow-none md:shadow-2xl mx-auto">
    <img class="h-auto w-100 min-w-0 mt-0 mb-4 md:mb-0 rounded-lg mx-auto" src={thumbnail} alt={title} />
  </div>
  <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
  <div class="flex flex-row items-center justify-between bg-violet-100 p-3 rounded-lg">
    <button class="rounded-full border-2 border-violet-200 p-2 mr-2" on:click={() => audio.paused ? audio.play() : audio.pause()}>
      {#if paused}
        <svg class="fill-navyblue w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path d="M232.4,114.49,88.32,26.35a16,16,0,0,0-16.2-.3A15.86,15.86,0,0,0,64,39.87V216.13A15.94,15.94,0,0,0,80,232a16.07,16.07,0,0,0,8.36-2.35L232.4,141.51a15.81,15.81,0,0,0,0-27ZM80,215.94V40l143.83,88Z"></path></svg>
      {:else}
        <svg class="fill-navyblue w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path d="M200,32H160a16,16,0,0,0-16,16V208a16,16,0,0,0,16,16h40a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm0,176H160V48h40ZM96,32H56A16,16,0,0,0,40,48V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V48A16,16,0,0,0,96,32Zm0,176H56V48H96Z"></path></svg>
      {/if}
    </button>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
    <progress
      bind:this={progressBar}
      value={currentTime ? currentTime : 0}
      max={duration}
      on:mousedown={() => seeking = true}
      on:click={seekAudio}
      class="flex grow mx-2">
    </progress>
    <div class="tracking-tighter text-sm text-navyblue mx-2 hidden sm:block">
      {formatSeconds(currentTime)}/{formatSeconds(duration)}
    </div>
    <button class="py-0.5 px-2 ml-2" on:click={() => muted = !muted}>
      {#if muted}
        <svg class="fill-navyblue w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path d="M53.92,34.62A8,8,0,1,0,42.08,45.38L73.55,80H32A16,16,0,0,0,16,96v64a16,16,0,0,0,16,16H77.25l69.84,54.31A8,8,0,0,0,160,224V175.09l42.08,46.29a8,8,0,1,0,11.84-10.76ZM32,96H72v64H32ZM144,207.64,88,164.09V95.89l56,61.6Zm42-63.77a24,24,0,0,0,0-31.72,8,8,0,1,1,12-10.57,40,40,0,0,1,0,52.88,8,8,0,0,1-12-10.59Zm-80.16-76a8,8,0,0,1,1.4-11.23l39.85-31A8,8,0,0,1,160,32v74.83a8,8,0,0,1-16,0V48.36l-26.94,21A8,8,0,0,1,105.84,67.91ZM248,128a79.9,79.9,0,0,1-20.37,53.34,8,8,0,0,1-11.92-10.67,64,64,0,0,0,0-85.33,8,8,0,1,1,11.92-10.67A79.83,79.83,0,0,1,248,128Z"></path></svg>
      {:else if volume < .01}
        <svg class="fill-navyblue w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path d="M155.51,24.81a8,8,0,0,0-8.42.88L77.25,80H32A16,16,0,0,0,16,96v64a16,16,0,0,0,16,16H77.25l69.84,54.31A8,8,0,0,0,160,224V32A8,8,0,0,0,155.51,24.81ZM32,96H72v64H32ZM144,207.64,88,164.09V91.91l56-43.55Z"></path></svg>
      {:else if volume < .5}
        <svg class="fill-navyblue w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path d="M155.51,24.81a8,8,0,0,0-8.42.88L77.25,80H32A16,16,0,0,0,16,96v64a16,16,0,0,0,16,16H77.25l69.84,54.31A8,8,0,0,0,160,224V32A8,8,0,0,0,155.51,24.81ZM32,96H72v64H32ZM144,207.64,88,164.09V91.91l56-43.55ZM208,128a39.93,39.93,0,0,1-10,26.46,8,8,0,0,1-12-10.58,24,24,0,0,0,0-31.72,8,8,0,1,1,12-10.58A40,40,0,0,1,208,128Z"></path></svg>
      {:else}
        <svg class="fill-navyblue w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path d="M155.51,24.81a8,8,0,0,0-8.42.88L77.25,80H32A16,16,0,0,0,16,96v64a16,16,0,0,0,16,16H77.25l69.84,54.31A8,8,0,0,0,160,224V32A8,8,0,0,0,155.51,24.81ZM32,96H72v64H32ZM144,207.64,88,164.09V91.91l56-43.55Zm54-106.08a40,40,0,0,1,0,52.88,8,8,0,0,1-12-10.58,24,24,0,0,0,0-31.72,8,8,0,0,1,12-10.58ZM248,128a79.9,79.9,0,0,1-20.37,53.34,8,8,0,0,1-11.92-10.67,64,64,0,0,0,0-85.33,8,8,0,1,1,11.92-10.67A79.83,79.83,0,0,1,248,128Z"></path></svg>
      {/if}
    </button>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <progress
      bind:this={volumeBar}
      value={volume}
      on:mousedown={() => volumeSeeking = true}
      on:click={seekVolume}
      class="min-w-0">
    </progress>
  </div>
</div>

<audio
  bind:this={audio}
  bind:paused
  bind:duration
  bind:currentTime
  on:play
  on:ended
  src={src}
  preload="metadata">
</audio>

<style>
  .audio-player-container {
    position: relative;
    overflow: hidden;
    width: 100%;
  }

  progress {
    color: #273348;
    background: #E3E3F2;
    border: none;
    height: 8px;
    margin: auto;
    margin-left: 5px;
    margin-right: 5px;
    border-radius: 2px;
  }
    
  progress::-webkit-progress-bar {background-color: #E3E3F2; width: 100%}

  progress::-moz-progress-bar { background: #273348; }

  progress::-webkit-progress-value { background: #273348; }
</style>
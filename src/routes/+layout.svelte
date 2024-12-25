<script>
  import "../app.postcss";
  import { navigating } from '$app/stores';
  import Hamburger from "../components/Hamburger.svelte";

  export let menuOpen = false;
  //$: $page.url && (menuOpen = false)
  $: if($navigating) (menuOpen = false);
</script>
<div class="bg-navyblue text-white text-center py-2 px-3">
  <p>Help us find locations to film future Psalm reading videos: <a class="underline" href="/quest/">Share Your Location</a></p>
</div>
<nav class="relative max-w-7xl mx-auto py-3">
  <div class="flex flex-col md:flex-row justify-between items-center px-4">
    <div class="flex flex-row justify-between w-full md:w-auto">
      <a class="mx-0 md:mx-auto" href="/"><img class="w-auto h-14" src="/logo.svg" alt="The Psalms 23 Project logo"/></a>
      <Hamburger bind:open={menuOpen} />
    </div>
    <div class="hidden md:flex text-lg md:text-base font-medium py-3.5 mx-auto md:mx-0" class:hidden={!menuOpen}>
      <div class="flex flex-col md:flex-row items-center space-y-5 sm:space-y-0 rounded-full">
        <a class="text-navyblue/90 hover:bg-violet-200 px-4 md:px-5 py-2 rounded-full duration-300" href="/readings/">Readings</a>
        <a class="text-navyblue/90 hover:bg-violet-200 px-4 md:px-5 py-2 rounded-full duration-300" href="/about/">About</a>
        <a class="text-navyblue/90 hover:bg-violet-200 px-4 md:px-5 py-2 rounded-full duration-300" href="/#progress">Progress</a>
        <a class="text-navyblue/90 hover:bg-violet-200 px-4 md:px-5 py-2 rounded-full duration-300" href="/locations/">Locations</a>
      </div>
    </div>
    <div class="hidden md:flex flex-row items-center">
      <a class="py-2 duration-300 mr-3" href="mailto:contact@psalms23project.com" aria-label="Email">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="h-7 w-7 fill-navyblue" viewBox="0 0 256 256"><path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-96,85.15L52.57,64H203.43ZM98.71,128,40,181.81V74.19Zm11.84,10.85,12,11.05a8,8,0,0,0,10.82,0l12-11.05,58,53.15H52.57ZM157.29,128,216,74.18V181.82Z"></path></svg>
      </a>
      <a class="py-2 duration-300" href="https://youtube.com/@ThePsalms23Project" aria-label="YouTube channel">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="h-6 w-6 fill-navyblue" viewBox="0 0 16 16">
          <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
        </svg>
      </a>
    </div>
  </div>
</nav>
<slot />
<footer class="flex flex-col text-center pt-16 pb-8 px-8 bg-slate-100 mt-5">
  <div class="w-full max-w-6xl mx-auto">
    <div class="w-full flex flex-col md:flex-row items-center justify-between">
      <a class="" href="/"><img class="w-auto h-14" src="/logo.svg" alt="The Psalms 23 Project logo"/></a>
      <ul class="flex flex-col md:flex-row space-y-3 md:space-y-0 my-8 md:my-0 text-lg">
        <a class="text-navyblue hover:bg-violet-200 px-4 md:px-5 py-2 rounded-full duration-300" href="/readings/">Readings</a>
        <a class="text-navyblue hover:bg-violet-200 px-4 md:px-5 py-2 rounded-full duration-300" href="/about/">About</a>
        <a class="text-navyblue hover:bg-violet-200 px-4 md:px-5 py-2 rounded-full duration-300" href="/#progress">Progress</a>
        <a class="text-navyblue hover:bg-violet-200 px-4 md:px-5 py-2 rounded-full duration-300" href="/locations/">Locations</a>
      </ul>
      <div class="flex flex-row">
        <a class="duration-300 mr-4" href="mailto:contact@psalms23project.com" aria-label="Email">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="h-7 w-7 fill-navyblue" viewBox="0 0 256 256"><path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-96,85.15L52.57,64H203.43ZM98.71,128,40,181.81V74.19Zm11.84,10.85,12,11.05a8,8,0,0,0,10.82,0l12-11.05,58,53.15H52.57ZM157.29,128,216,74.18V181.82Z"></path></svg>
        </a>
        <a class="duration-300" href="https://youtube.com/@ThePsalms23Project" aria-label="YouTube channel">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="h-7 w-7 fill-navyblue" viewBox="0 0 16 16">
            <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
          </svg>
        </a>
      </div>
    </div>
  </div>
  <small class="text-navyblue/80 mx-auto mt-14">&copy; 2023-2024, The Psalms 23 Project.</small>
</footer>
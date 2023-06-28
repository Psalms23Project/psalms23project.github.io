<script>
  import "../app.postcss";
</script>
<nav class="relative max-w-6xl mx-auto pt-4 pb-0 md:pb-4">
  <div class="flex flex-col md:flex-row justify-between items-center px-4">
    <a href="/"><img class="w-auto h-16" src="logo.svg" alt="The Psalms 23 Project logo"/></a>
    <div class="flex flex-row font-charter text-lg sm:text-base py-3.5 mx-auto md:mx-0">
      <div class="flex items-center md:bg-violet-100 rounded-full">
        <a class="text-navyblue hover:bg-violet-200 px-4 sm:px-5 py-2 rounded-full duration-300" href="/#theproject">The Project</a>
        <a class="text-navyblue hover:bg-violet-200 px-4 sm:px-5 py-2 rounded-full duration-300" href="/#roadmap">Roadmap</a>
        <a class="text-navyblue hover:bg-violet-200 px-4 sm:px-5 py-2 rounded-full duration-300" href="mailto:hi@noahrahm.com">Contact</a>
      </div>
    </div>
  </div>
</nav>
<slot />
<footer class="flex flex-col max-w-6xl text-center mx-auto py-4 px-8">
  <a class="mx-auto" href="/"><img class="w-auto h-16" src="logo.svg" alt="The Psalms 23 Project logo"/></a>
  <small class="text-navyblue text-sm font-charter mx-auto mt-8">&copy; 2023 <a class="text-navyblue hover:bg-violet-100 rounded-md px-0.5 duration-300" href="https://noahrahm.com">Noah Rahm.</a> Made with love. This site is <a class="text-navyblue hover:bg-violet-100 rounded-md px-0.5 duration-300" href="https://github.com/Psalms23Project/psalms23project.github.io">open source.</a></small>
</footer>

<script>
  /**
   * @typedef {Object} Props
   * @property {string} src
   * @property {string} title
   */

  /** @type {Props} */
  let { src, title } = $props();
</script>

<div class="youtube-video-container">
  <iframe class="rounded-lg" width="930" height="523" src={src} title={title} frameborder="0" allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

<style>
.youtube-video-container {
  position: relative;
  overflow: hidden;
  width: 100%;
}

.youtube-video-container::after {
  display: block;
  content: "";
  padding-top: 56.25%;
}

.youtube-video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
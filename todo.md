- compress images, use nextimage for all
- fix image loading for 404 page
- add card-like-bg for home-page items
- blockquqote color?
- set slideSize to 100 in small screens
- include webm or .ogg for firefox and opera (video tag)
  <code>

According to https://developer.mozilla.org/en-US/docs/Web/HTML/Supported_media_format you should use .webm or .ogg for firefox and opera. You can include both formats to make it work on all modern browsers

`<video width="320" height="240" controls>

  <source src="movie.mp4" type="video/mp4">
  <source src="movie.webm" type="video/webm">
  <source src="movie.ogg" type="video/ogg">
  Your browser does not support the video tag.
</video>
`
</code>

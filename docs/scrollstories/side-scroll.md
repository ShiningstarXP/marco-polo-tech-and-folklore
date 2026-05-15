---
title: Getting Started
layout: default
date: 2024-10-24
---

{% include nav/scrollspy-toc.html %}

## Side Scroll
Sometimes it's useful to keep an image on the screen while text scrolls up past it.

It can even be useful to switch one image to another at some point in the text. 

Donec id sapien nec dui rhoncus lacinia vel et nulla. Praesent mauris est, viverra in metus id, ultrices fringilla tortor. Nulla orci ipsum, aliquam et dui id, lacinia lobortis ipsum. Aliquam laoreet est vel scelerisque semper. Nunc blandit nisi ex, tincidunt hendrerit dui convallis sit amet. Mauris feugiat tempus dictum. Nam ligula dolor, molestie eget elit eu, aliquet convallis odio. Nullam eu dictum sapien. Phasellus vel felis aliquet ex facilisis varius. Maecenas hendrerit, erat vitae condimentum ultrices, orci urna semper leo, in consectetur ante ex porttitor diam. Pellentesque fringilla diam risus.


### OK now to the real show...

When the image on the right gets to the top of the page, it will stop scrolling, while the text on the left keeps scrolling.


<!-- this is an unclosed div that needs to be closed with ss-close-->
{% include scrollybox/bg-ss.html
  ss-id="ss1"
  pre-box-space="0"
%}


{% include scrollybox/bg-ss-image.html
  image-path="/assets/images/backgrounds/flowers-1.jpg"
  switch-id="switch1"
  ss-id="ss1"
%}

#### As you keep scrolling this text, eventually a new image to come up to replace the one currently on the right.


##### Just some dummy text
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec ante ligula. Nulla fringilla ligula sit amet nisl consectetur ultricies. Mauris ac tellus eu ante lobortis rhoncus non eu nisl. Curabitur consectetur placerat commodo. Maecenas sagittis facilisis turpis vel porta. Nulla facilisi. Nam viverra eget metus eget efficitur.


Duis ut dui dolor. Integer eu lectus at tellus accumsan euismod eget a ligula. Morbi venenatis, elit eu varius fermentum, ligula est dictum massa, sit amet ullamcorper augue nisl ut nunc. Integer placerat vitae metus vitae faucibus. 

Pellentesque consectetur augue ac volutpat dignissim. Sed laoreet congue ligula sit amet vestibulum. Duis vehicula erat et diam pharetra iaculis. Etiam rutrum scelerisque nunc, ut interdum justo pellentesque sit amet. Vivamus cursus massa mauris, a finibus felis laoreet quis. Integer vel molestie neque. Quisque in ipsum eget dui mattis efficitur sed in diam. In odio sem, tincidunt non venenatis a, consequat sed ligula.

Integer eu lectus at tellus accumsan euismod eget a ligula. Morbi venenatis, elit eu varius fermentum, ligula est dictum massa, sit amet ullamcorper augue nisl ut nunc.


### ANOTHER IMAGE

{% include scrollybox/bg-ss-image.html
  image-path="/assets/images/backgrounds/flowers-2.jpg"
  switch-id="switch2"
  ss-id="ss1"
%}

At this point in the text, we've anchored a new image that will scroll up and replace the previous image. 

##### More dummy text
Phasellus rhoncus elit rutrum magna cursus viverra. Cras lobortis pulvinar mattis. Nullam mattis varius enim vel vestibulum. Ut non blandit elit. Mauris sagittis commodo sapien, a elementum ipsum dapibus at. Nullam sapien nisl, ultrices eu felis id, blandit sagittis turpis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla facilisi. Ut at ullamcorper diam. Aenean nec metus orci. Fusce nunc est, interdum ut elit eget, placerat imperdiet sem. Maecenas facilisis dui risus, quis cursus leo auctor non. Praesent dolor nunc, tristique nec orci nec, mattis rhoncus est. Praesent viverra pharetra nulla quis commodo. Nullam dapibus elementum vehicula. Phasellus fermentum urna ut nisl porttitor, et aliquam odio consequat.

Duis ut dui dolor. Integer eu lectus at tellus accumsan euismod eget a ligula. Morbi venenatis, elit eu varius fermentum, ligula est dictum massa, sit amet ullamcorper augue nisl ut nunc. Integer placerat vitae metus vitae faucibus. Pellentesque consectetur augue ac volutpat dignissim. Sed laoreet congue ligula sit amet vestibulum. Duis vehicula erat et diam pharetra iaculis. Etiam rutrum scelerisque nunc, ut interdum justo pellentesque sit amet. Vivamus cursus massa mauris, a finibus felis laoreet quis. Integer vel molestie neque. Quisque in ipsum eget dui mattis efficitur sed in diam. In odio sem, tincidunt non venenatis a, consequat sed ligula.


This is the end of the section, and you should see the text and images scrolling away as the next section scrolls up.


{% include scrollybox/bg-ss-close.html %}

### And here we go on our way.
That was fun!

Now we're back to our normal page flow.

Duis ut dui dolor. Integer eu lectus at tellus accumsan euismod eget a ligula. Morbi venenatis, elit eu varius fermentum, ligula est dictum massa, sit amet ullamcorper augue nisl ut nunc. Integer placerat vitae metus vitae faucibus. Pellentesque consectetur augue ac volutpat dignissim. Sed laoreet congue ligula sit amet vestibulum. Duis vehicula erat et diam pharetra iaculis. Etiam rutrum scelerisque nunc, ut interdum justo pellentesque sit amet. Vivamus cursus massa mauris, a finibus felis laoreet quis. Integer vel molestie neque. Quisque in ipsum eget dui mattis efficitur sed in diam. In odio sem, tincidunt non venenatis a, consequat sed ligula.

Phasellus rhoncus elit rutrum magna cursus viverra. Cras lobortis pulvinar mattis. Nullam mattis varius enim vel vestibulum. Ut non blandit elit. Mauris sagittis commodo sapien, a elementum ipsum dapibus at. Nullam sapien nisl, ultrices eu felis id, blandit sagittis turpis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla facilisi. Ut at ullamcorper diam. Aenean nec metus orci. Fusce nunc est, interdum ut elit eget, placerat imperdiet sem. Maecenas facilisis dui risus, quis cursus leo auctor non. Praesent dolor nunc, tristique nec orci nec, mattis rhoncus est. Praesent viverra pharetra nulla quis commodo. Nullam dapibus elementum vehicula. Phasellus fermentum urna ut nisl porttitor, et aliquam odio consequat.

## The End
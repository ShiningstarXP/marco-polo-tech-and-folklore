---
title: Getting Started
layout: default
date: 2024-10-24
---

{% include nav/scrollspy-toc.html %}

### Changing Backgrounds while Scrolling
Sometimes it's fun to have the background change as a user is scrolling up some text boxes and moving through a story. It's an effective way of highlighting a difference that you're describing in text. 

Here's some dummy text just to simulate a story page.

blah

blah

blah

This is just usual text in our story. As you scroll down, a background image will come into view. 

blah

blah

blah

blah

blah



## OK now to the real show...

When the image gets to the top of the page, it will stop scrolling and a large text box will begin scroll over top of it. This is described in more detail on the [backgrounds-with-scrollyboxes page](bg-scrollbox). As the text is scrolled, the background image will change at certain points. We'll demo the effect first and explain the code snippet used to make it.


<!-- this is an unclosed div that needs to be closed with bg-multi-long-close-->
{% include scrollybox/bg-multi-long.html
  bg-id="bg1"
  image-path="/assets/images/backgrounds/fish-1.jpg"
  above-box-space="0"
%}

Now we have a text box scrolling up over the image. At various points (clearly labled in the following text) **the background image will switch.**

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec ante ligula. Nulla fringilla ligula sit amet nisl consectetur ultricies. Mauris ac tellus eu ante lobortis rhoncus non eu nisl. Curabitur consectetur placerat commodo. Maecenas sagittis facilisis turpis vel porta. Nulla facilisi. Nam viverra eget metus eget efficitur.

Phasellus rhoncus elit rutrum magna cursus viverra. Cras lobortis pulvinar mattis. Nullam mattis varius enim vel vestibulum. Ut non blandit elit. Mauris sagittis commodo sapien, a elementum ipsum dapibus at. Nullam sapien nisl, ultrices eu felis id, blandit sagittis turpis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla facilisi. Ut at ullamcorper diam. Aenean nec metus orci. Fusce nunc est, interdum ut elit eget, placerat imperdiet sem. Maecenas facilisis dui risus, quis cursus leo auctor non. Praesent dolor nunc, tristique nec orci nec, mattis rhoncus est. Praesent viverra pharetra nulla quis commodo. Nullam dapibus elementum vehicula. Phasellus fermentum urna ut nisl porttitor, et aliquam odio consequat.


### IMAGE SWITCH HERE 
When this text is roughly in the middle of the screen, the background image should change.

{% include scrollybox/bg-switch.html
  image-path="/assets/images/backgrounds/fish-2.jpg"
  switch-id="switch1"
  bg-id="bg1"
%}

Duis ut dui dolor. Integer eu lectus at tellus accumsan euismod eget a ligula. Morbi venenatis, elit eu varius fermentum, ligula est dictum massa, sit amet ullamcorper augue nisl ut nunc. Integer placerat vitae metus vitae faucibus. Pellentesque consectetur augue ac volutpat dignissim. Sed laoreet congue ligula sit amet vestibulum. Duis vehicula erat et diam pharetra iaculis. Etiam rutrum scelerisque nunc, ut interdum justo pellentesque sit amet. Vivamus cursus massa mauris, a finibus felis laoreet quis. Integer vel molestie neque. Quisque in ipsum eget dui mattis efficitur sed in diam. In odio sem, tincidunt non venenatis a, consequat sed ligula.

Phasellus rhoncus elit rutrum magna cursus viverra. Cras lobortis pulvinar mattis. Nullam mattis varius enim vel vestibulum. Ut non blandit elit. Mauris sagittis commodo sapien, a elementum ipsum dapibus at. Nullam sapien nisl, ultrices eu felis id, blandit sagittis turpis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla facilisi. Ut at ullamcorper diam. Aenean nec metus orci. Fusce nunc est, interdum ut elit eget, placerat imperdiet sem. Maecenas facilisis dui risus, quis cursus leo auctor non. Praesent dolor nunc, tristique nec orci nec, mattis rhoncus est. Praesent viverra pharetra nulla quis commodo. Nullam dapibus elementum vehicula. Phasellus fermentum urna ut nisl porttitor, et aliquam odio consequat.


### IMAGE SWITCH HERE
Here's another image switch as we're scrolling along...

{% include scrollybox/bg-switch.html
  image-path="/assets/images/backgrounds/fish-4.jpg"
  switch-id="switch2"
  bg-id="bg1"
%}

Duis ut dui dolor. Integer eu lectus at tellus accumsan euismod eget a ligula. Morbi venenatis, elit eu varius fermentum, ligula est dictum massa, sit amet ullamcorper augue nisl ut nunc. Integer placerat vitae metus vitae faucibus. Pellentesque consectetur augue ac volutpat dignissim. Sed laoreet congue ligula sit amet vestibulum. Duis vehicula erat et diam pharetra iaculis. Etiam rutrum scelerisque nunc, ut interdum justo pellentesque sit amet. Vivamus cursus massa mauris, a finibus felis laoreet quis. Integer vel molestie neque. Quisque in ipsum eget dui mattis efficitur sed in diam. In odio sem, tincidunt non venenatis a, consequat sed ligula.
 
Phasellus rhoncus elit rutrum magna cursus viverra. Cras lobortis pulvinar mattis. Nullam mattis varius enim vel vestibulum. Ut non blandit elit. Mauris sagittis commodo sapien, a elementum ipsum dapibus at. Nullam sapien nisl, ultrices eu felis id, blandit sagittis turpis. 


#### Almost done
This is the end of the story, and you should see the text box scroll out of view followed by the background image.


{% include scrollybox/bg-multi-long-close.html %}

### And here we go on our way.
Now we're back in our regular text flow. 

Duis ut dui dolor. Integer eu lectus at tellus accumsan euismod eget a ligula. Morbi venenatis, elit eu varius fermentum, ligula est dictum massa, sit amet ullamcorper augue nisl ut nunc. Integer placerat vitae metus vitae faucibus. Pellentesque consectetur augue ac volutpat dignissim. 

Phasellus rhoncus elit rutrum magna cursus viverra. Cras lobortis pulvinar mattis. Nullam mattis varius enim vel vestibulum. Ut non blandit elit. Mauris sagittis commodo sapien, a elementum ipsum dapibus at. Nullam sapien nisl, ultrices eu felis id, blandit sagittis turpis. Interdum et malesuada fames ac ante ipsum primis in faucibus. 

### So how do we do that?
Here's a compressed example with less text so you can see the code snippets at a glance.


```{%raw%}
{% include scrollybox/bg-multi-long.html
  bg-id="bg1"
  image-path="/assets/images/backgrounds/fish-1.jpg"
  above-box-space="0"
%}


Some text that's in your scrolly box.

### IMAGE SWITCH HERE 
When this text is roughly in the middle of the screen, the background image should change.

{% include scrollybox/bg-switch.html
  image-path="/assets/images/backgrounds/fish-2.jpg"
  switch-id="switch1"
  bg-id="bg1"
%}

Here is the text that scolls past after the image has switched.

{% include scrollybox/bg-multi-long-close.html %}

```{%endraw%}


## The End
---
title: Background Scroll Boxes
layout: default
date: 2024-10-24
---

{% include nav/scrollspy-toc.html %}

# Background Scroll Boxes

## Revealed images
Fixed images move along with scrolling, but sometimes it's fun to have a background image be revealed as the reader scrolls down the page.

Nunc id urna eget nunc hendrerit aliquam. Fusce maximus eleifend ipsum, nec aliquet ante vestibulum eget. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam erat volutpat. Nullam porta blandit tellus, vitae porta odio ultricies a. Integer iaculis euismod feugiat. Etiam ipsum ipsum, pulvinar id semper et, laoreet ac felis. Ut fermentum cursus augue ac feugiat. Nullam convallis vitae sapien in condimentum. Maecenas at vulputate turpis, tempor faucibus dui. Sed quis volutpat elit, commodo mollis ligula. Sed id velit lacus. Mauris et pellentesque justo.

In laoreet, risus ac porttitor congue, libero eros ullamcorper nisl, vel volutpat est nunc sed nisi. Integer dolor ipsum, aliquam ac fermentum dapibus, accumsan eu tortor. Etiam laoreet tellus a dignissim porta. Vivamus et sapien nec urna mollis placerat id nec neque. Phasellus mattis non arcu vitae ultrices. Etiam a posuere ipsum. Nam nunc ex, aliquet eu consequat et, scelerisque quis lorem. Suspendisse sapien tortor, rutrum vitae sollicitudin vel, gravida ut nunc. Fusce non egestas lacus. Maecenas dictum commodo ultricies.

Keep scrolling! Once the whole image is visible, the regular story will continue scrolling up on top of the image. The code snippet below creates this effect. You can customize how large you want the background image to be. `100vh` means 100% viewport height. The viewport is the part of the browser that's showing your webpage. 

```{%raw%}
{%
include scrollybox/bg.html
height="100vh"
image-path="/assets/images/backgrounds/image_3.jpg"
%}
{%endraw%}
```

{% 
include scrollybox/bg.html
height="100vh"
image-path="/assets/images/backgrounds/image_3.jpg"
%}

#### Now we're back to the story
You noticed that this "main" part of the story did not start until the background image was fully visible---because the height parameter was set to `100vh`.

### Scrolly boxes on revealed images
We can also have textboxes scroll up past the image after the image fully comes into view.

Basically, you're scrolling up to reveal a background image, just like above. But this time, once you reveal the whole image (or a specified part of it), a textbox will scroll up, out of view, and the page scrolling will resume as normal.

We use basically the same code snippet as before, but this time we include text that we want to display in the box. You can use regular Markdown to style your text.


```
{%raw%}
{%
include scrollybox/bg.html
above-box-space="50vh"
below-box-space="50vh"
height="100vh"
image-path="/assets/images/backgrounds/hike-3.jpg"
box-align="right"
box-content="
See, there is a text box scrolling by, visible after the whole background came into view. Once this text box scrolls off the top of the page, you'll start to see the next section emerge at the bottom of the screen.

### Here is a header
Here is a new paragraph."
%}
{%endraw%}
```

Notice in the code snippet a few additional parameters to create the scrolly box effect. `above-box-space` and `below-box-space` indicate how much space above and below the scrolly text box should appear between it and the "main" part of your story. As we saw in the last example, using `100vh` means a background image will be completely revealed before the scrolly box starts scrolling up.

In this case, as you can see above, we demonstrate `50vh` to have the scrolly box and main story appear sooner. Adjust this to whatever feels right for your story!

The `box-content` parameter is the text you want to appear. You can use markdown to create headers, italics, bold, etc. The context has to be in double quotes. If you want to use quotes **in your text**, put a backslash (`\`) before each quote like \\"quote in a quote\\".

Use `box-align` to position the text box relative to the background image. This is especially useful when the subject in the image is on one side — put the text on the other to keep both visible:

| `box-align` | Effect |
|-------------|--------|
| `center` | Centered (default) |
| `left` | Near the left edge |
| `right` | Near the right edge |



{% 
include scrollybox/bg.html
above-box-space="50vh"
below-box-space="50vh"
image-path="/assets/images/backgrounds/hike-3.jpg"  
box-content=" 
See, there is a text box scrolling by, visible after about 50% of  background came into view (because we used `50vh`). 

Once this text box is about halfway off the page, you'll start to see the next section emerge at the bottom of the screen.

### Here is a header     
Here is a new paragraph under our markdown header, with a **little bold** just for fun. "
%}




### Scrolly boxes on fixed images
In the above examples, we've seen how to have a large background image "revealed" by the page scrolling up off of it, meaning it looks stationary while text scrolls past it.

As we demonstrate below, you can also have a large background image scroll into view instead of remaining still.

The image freezes when it when it gets to the top of the viewport, and a textbox scrolls past, grabbing the background with it as it scrolls away. 

Notice in the snippet we use a slightly different include file. For this effect, we use `scrollybox/bg-sticky.html`. Everything else is the same — including `box-align` — so the same left/right/center positioning works here. Notice just for fun we use `below-box-space="80vh"` so that the story returns just before the scrolly box finishes scrolling off.

```
{%raw%}
{% include scrollybox/bg-sticky.html
  image-path="/assets/images/backgrounds/hike-4.jpg"
  above-box-space="100vh"
  below-box-space="80vh"
  box-content="
  This text box is scrolling. And as soon as it leaves the viewport, the background image will begin to scroll away. 

  This text box is scrolling. And as soon as it leaves the viewport, the background image will begin to scroll away. 

  This text box is scrolling. And as soon as it leaves the viewport, the background image will begin to scroll away. 

  This text box is scrolling. And as soon as it leaves the viewport, the background image will begin to scroll away."
%}
{%endraw%}
```


{% include scrollybox/bg-sticky.html
  image-path="/assets/images/backgrounds/hike-4.jpg"
  above-box-space="100vh"
  below-box-space="80vh"
  box-content="
  This text box is scrolling. And as soon as it leaves the viewport, the background image will begin to scroll away. 

  This text box is scrolling. And as soon as it leaves the viewport, the background image will begin to scroll away. 

  This text box is scrolling. And as soon as it leaves the viewport, the background image will begin to scroll away. 

  This text box is scrolling. And as soon as it leaves the viewport, the background image will begin to scroll away."
%}


## That's a wrap 
That's all for scrollybox basics. 

We can also do [background switching](bg-switch) and [side scrolling](side-scroll).

Other feature are listed in the `Page components` nav menu.
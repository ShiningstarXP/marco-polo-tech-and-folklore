---
title: Embedding Media
layout: default
date: 2024-10-24
---

{% include nav/scrollspy-toc.html %}

# Embedding Media
This page shows how to embed media on your pages. In many instances, you will copy "embed code" from a website like YouTube or SketchFab, and paste it on your page. There are a few cases where we use include files to help us keep everything standardized and more easily maintainable. 

The blue code boxes show what code you can copy and paste on to your page, and the result shows up just underneath it. 


## Sound files
To embed a sound file with a simple playback interface, use the `audio.html` include file, and set the `src` parameter as the path to your file.

```
{% raw %}
{% include media/audio.html
  src="/assets/audio/sample-audio.mp3"
%}
{% endraw %}
```



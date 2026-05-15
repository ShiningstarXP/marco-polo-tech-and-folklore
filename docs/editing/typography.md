---
title: Typography
layout: default
date: 2019-04-23
---

{% include nav/scrollspy-toc.html %}

# Typography

Good typography isn't just about looking nice—it's about helping readers understand and engage with your content. Well-chosen typefaces, clear hierarchies, and thoughtful spacing guide readers through your ideas, highlight what matters, and make complex information easier to process.

**Typography helps readers in three key ways:**

**Visual hierarchy** - Different heading sizes, weights, and styles show readers how your content is organized. First-level headings signal major topics, smaller headings introduce subsections, and pull quotes emphasize key ideas. This structure helps readers scan, navigate, and find what they need.

**Readability and flow** - Proper line length, spacing, and font choices reduce eye strain and keep readers engaged. Text that's too long per line (over 75 characters) forces tiring eye movements. Text that's too cramped feels dense and uninviting. Good typography creates comfortable reading rhythms.

**Emphasis and attention** - Strategic use of blockquotes, pull quotes, and text styles draws the eye to important passages without overwhelming the page. These elements break up long text, provide visual interest, and guide attention to your most compelling ideas.

This page shows you how to use Xanthan's typographic features to make your content clear, engaging, and visually organized. Each section includes code examples (in green boxes) followed by live demonstrations of the feature. For image-related typography and captions, see the [image guide](images).

---

## Headings
It's useful to divide even small pages into clear sections with informative section headings. Longer pages may need several levels of headings. You can easily create headings by using the `#` character in front of your headings. A single `#` is the largest, for top-level headings, `##` gives you a slightly smaller heading, etc. The code in the box below produces the headers and text just below it.

``` markdown
## Second-level heading
You can see the font size is a little smaller than the top-level heading at the top of the page.

### Third-level heading
And this one is a little smaller...

#### Fourth-level heading
Etc...

```


## Second-level heading
You can see the font size is a little smaller than the top-level heading at the top of the page.

### Third-level heading
And this one is a little smaller...

#### Fourth-level heading
Etc...



---


## Pull Quotes
Pull quotes highlight a key passage from your text — a memorable phrase, a central argument, a line worth making the reader pause on. Place them between paragraphs for visual emphasis.

```
{%raw%}{% include typography/pullquote.html
  text="Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce id purus."
%}{%endraw%}
```

{% include typography/pullquote.html
  text="Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce id purus."
%}

The pull quote appears centered at 70% width between your paragraphs. Content before and after it flows normally at full width.


## Block quotes
Extended quotations from another source. The simplest approach is Markdown's `>` syntax — just start the line with a greater-than sign:

```
> Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce id purus. Ut varius tincidunt libero. Phasellus dolor. Maecenas vestibulum mollis diam. Pellentesque ut neque.
```

Here is some regular text in the flow of the page.

> Here is my very interesting quote. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce id purus. Ut varius tincidunt libero. Phasellus dolor. Maecenas vestibulum mollis diam. Pellentesque ut neque.

And back to the regular text.

If you want to align the blockquote left or right, use the include instead of the `>` syntax:

```
{%raw%}{%
include typography/blockquote.html
box-align="right"
text="Here is a significant quotation worth setting apart from the body text."
%}{%endraw%}
```

---


## Footnotes

Academic and research writing relies on citations to show sources, provide context, and establish credibility. Xanthan's footnotes appear as clickable numbered buttons[^example] that open elegant popup windows—no need to scroll to the bottom of the page.

[^example]: Like this! Click any footnote number to see the citation in a popup. Click again to close it.

**Perfect for:**
- Source citations and bibliographic references
- Additional context without disrupting reading flow
- Explanatory notes and asides
- Cross-references to other sections

### How to Create Footnotes

Creating footnotes requires two simple steps:

**Step 1:** Place a footnote reference where you want the numbered button to appear. Use the format `[^identifier]` where `identifier` is a unique name (like `source1`, `smith2020`, or `methodology-note`).

```markdown
Academic research shows significant effects.[^smith2020]
```

**Step 2:** Define the footnote content anywhere in your document (typically at the end of a section or the full document). Use the same identifier with a colon and your note text:

```markdown
[^smith2020]: Smith, J. (2020). "Research Methods in Digital Humanities." _Journal of DH_, 15(2), 45-67.
```

### Complete Example

```markdown
The study examined three primary sources[^sources] and found compelling evidence.[^results]

Later analysis confirmed these findings.[^confirmation]

[^sources]: Letters from the National Archives (1891-1895), Census records (1890, 1900), and contemporary newspaper accounts from the _Daily Tribune_.

[^results]: Success rates increased 47% compared to the control group (p < 0.01).

[^confirmation]: See Johnson (2019) for independent verification of these results.
```

The study examined three primary sources[^sources] and found compelling evidence.[^results]

Later analysis confirmed these findings.[^confirmation]

[^sources]: Letters from the National Archives (1891-1895), Census records (1890, 1900), and contemporary newspaper accounts from the _Daily Tribune_.

[^results]: Success rates increased 47% compared to the control group (p < 0.01).

[^confirmation]: See Johnson (2019) for independent verification of these results.

**Key features:**
- **Automatic numbering** - Don't worry about order; numbers update automatically
- **Click to view** - Readers click the number to see the note
- **No page jumps** - Popups keep readers in context
- **Flexible placement** - Define footnotes anywhere in your document

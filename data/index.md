---
title: Aladore Data
layout: page
---

## Download 

*derivatives generated from the project text*

- [Illustration gallery]({{ '/data/gallery.html' | absolute_url }}) (or [image list CSV]({{ '/data/image_list.csv' | absolute_url }}))
- HTML full text: [newbolt_aladore_1914.html]({{ '/data/newbolt_aladore_1914.html' | absolute_url }}) (*minimal html with full text content*)
- Plain text: [newbolt_aladore_1914.txt]({{ '/data/newbolt_aladore_1914.txt' | absolute_url }})
- Minimized plain text: [newbolt_aladore_1914_min.txt]({{ '/data/newbolt_aladore_1914_min.txt' | absolute_url }}) (*no front matter, no chapter names, no line breaks except between chapters*)
- CSV: [newbolt_aladore_1914.csv]({{ '/data/newbolt_aladore_1914.csv' | absolute_url }}) (*each chapter is a row, with columns chapter_number, chapter_title, chapter_text*)
- Mallet: [mallet.txt]({{ '/data/mallet.txt' | absolute_url }}) (*each paragraph is a "document" in the standard Mallet tab delimited format: ID tab label tab text. This file is ready for upload to [jsLDA](https://mimno.infosci.cornell.edu/jsLDA/)*)

## Metadata

{% comment %} Capture list of characters to remove (punctionation) {% endcomment %} 
{%- capture remove_list -%}~ ` ! # % ^ * ( ) + = { } [ ] | \ : ; . , < > / ? " —{%- endcapture -%}
{% comment %} Capture full text {% endcomment %} 
{%- assign chapters = site.html_pages | where: "layout", "chapter" -%}
{%- capture full_text -%}
{%- for c in chapters -%}
{%- unless c.frontmatter -%}
{{ c.content | strip_html | normalize_whitespace }} {% endunless %}{% endfor %}{%- endcapture -%}
{% comment %} remove stuff {% endcomment %} 
{%- assign remove_list = remove_list | split: " " -%}
{%- for r in remove_list -%}
{%- assign full_text = full_text | replace: r, " " -%}
{%- endfor -%}
{%- assign full_text = full_text | downcase | normalize_whitespace -%}
{%- assign word_count = full_text | number_of_words -%}
{%- assign unique_words = full_text | split: " " | uniq | size -%}
{%- assign character_count = full_text | size -%}

*calculated from text excluding front matter and chapter headings.*

- Total words count: {{ word_count }}
- Unique words: {{ unique_words }}
- Vocabulary density: {% assign w_float = word_count | times: 1.0 %}{{ unique_words | divided_by: w_float | round: 4 }}
- Character count: {{ character_count }}
- Line count: 477 (approximately paragraphs)
- Illustrations: {{ site.data.illustrations | size }}
- Chapter word counts: [wordcounts.csv]({{ '/data/wordcounts.csv' | absolute_url }})

## Source Texts

- EvanWill, *Digital Aladore* project, 2014, <https://digitalaladore.wordpress.com>
    - [epub3](https://archive.org/details/AladoreHenryNewbolt3) (on Internet Archive)
    - [epub2](https://archive.org/details/AladoreHenryNewbolt) (on Internet Archive)
- Henry Newbolt, *Aladore*, Edinburgh: William Blackwood and Sons, 1914. (digitized by Internet Archive, from University of Toronto, "scanner-katie-lawson", 2006, <https://archive.org/details/aladoren00newbuoft/page/n8>)
- Henry Newbolt, *Aladore*, New York: E.P. Dutton & Company, 1915. (digitized by Internet Archive, from University of California, "scanner-melissa-cunningham", 2006, <https://archive.org/details/aladorehen00newbrich/page/n8>)

## Source Code

- [aladore-book]({{ site.github-repo }}) (on GitHub)

---
title: About aladore-book
layout: page
---

*Aladore* is a classic fantasy novel by [Henry Newbolt](https://en.wikipedia.org/wiki/Henry_Newbolt), first published in 1914.

Despite being republished in the 1970's and 80's in "forgotten fantasy" paperbacks, Aladore is not well known or popular.
The book is now in the public domain and there are a few digitized copies available for free download from repositories such as [Internet Archive](https://archive.org/details/aladoren00newbuoft/page/n7).
However, these are all PDFs of scanned materials with poor quality OCR.
The out-of-date, poorly optimized PDF and automatically generated e-book formats do not provide a satisfactory reading experience on many devices.

`aladore-book` is a web based digital edition of *Aladore* with text derived from the [Digital Aladore](https://digitalaladore.wordpress.com/) project (2014).

Digital Aladore's text is based on two digitized print editions: 

- Edinburgh: William Blackwood and Sons (1914)
- New York: E.P. Dutton & Company (1915)

Page images of both editions were OCRed using [Tesseract](https://github.com/tesseract-ocr/tesseract). 
The digital transcripts were collated and edited for accuracy.

This text is also freely available as an [epub edition](https://archive.org/details/AladoreHenryNewbolt3).

## Technical 

The site was developed from the [basic-book](https://github.com/evanwill/basic-book) template, using [Jekyll](http://jekyllrb.com/) static site generator and hosted on [GitHub Pages](https://pages.github.com/).

The text is stored as a series of plain text files in Markdown format, one for each chapter.
This text is used to generate both the web pages of the book and [data derivatives]({{ '/data/' | absolute_url }}) for importing into other tools for analysis.

The source code is hosted in a GitHub repository, [aladore-book]({{ site.github-repo }}).
This allows the book to be easily shared, adapted, and modified by anyone--or used as a template for creating other books.

## License 

The text and illustrations of Aladore were originally published in 1914 in the UK and 1915 in USA, thus are in the Public Domain.
The website project is [licensed MIT (copyright Evan Will)](https://github.com/evanwill/aladore-book/blob/master/LICENSE), and other content are <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" >CC BY-SA</a> by [Evan Will](https://github.com/evanwill), {{ site.site-date }}.

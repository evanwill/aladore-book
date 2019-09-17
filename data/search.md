---
title: Search
layout: page
---

This page provides a basic search of book content.
*Note: it may take a few seconds to load!* 

<input type="text" size="15" id="lunr-search" placeholder="Search..." aria-label="search">
<input class="button-all" type="button" onclick="lunr_search();" value=" Search ">

<p id="count"></p>
<ul id="search-results"></ul>

<hr>

Tips: search fields `title:foo` or `text:foo`, or use wildcards `foo*`.

Built using [Lunr.js](https://lunrjs.com/).

<script src="{{ '/assets/js/lunr.min.js' | absolute_url }}"></script>
<script src="{{ '/assets/js/lunr-store.js' | absolute_url }}"></script>
<script>
/* initialize lunr index */
var idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('text')
  for (var item in store) {
    this.add({
      title: store[item].title,
      text: store[item].text,
      id: item
    })
  }
});
/* search function */
function lunr_search () {
  var resultDiv = document.getElementById('search-results');
  var resultCount = document.getElementById('count');
  var query = document.getElementById('lunr-search').value;
  /* basic search that supports operators */
  var results = idx.search(query); 
  /* display results */
  resultDiv.innerHTML = '';
  resultCount.innerHTML = results.length + ' Result(s) found</p>';
  if (results.length) {
    var appendString = '';
    for (item in results) {
      var ref = results[item].ref;
      var searchItem = '<li><a href="' + store[ref].url + '">' + store[ref].title + '</a><br>' + store[ref].text.substring(0,150) + '... </li>';
      appendString += searchItem;
    }
    resultDiv.innerHTML = appendString;
  } else {
    resultDiv.innerHTML = '<li>No results found</li>';
  }
}
</script>

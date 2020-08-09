---
title: Search
layout: page
---

This page provides a basic search of book content.
*Note: it may take a few seconds to load!* 

<form id="searchform" onsubmit="lunr_search(); return false">
  <input type="text" size="18" id="lunr-search" class="form-all" placeholder="Search text..." aria-label="search">
  <input class="button-all" type="button" value="Search">
</form>

<p id="count"></p>
<ul id="search-results"></ul>

<hr>

Advanced Search Tips: 

- search fields `title:foo` or `text:foo`
- use wildcards `foo*` or `*oo`
- fuzzy matching `foo~1`
- must contain `+foo`
- must not contain `-foo`.

Built using [Lunr.js](https://lunrjs.com/){:target='_blank' rel='noopener'}.

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

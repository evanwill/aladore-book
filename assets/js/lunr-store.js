---
# create lunr store 
---
var store = [ 
{% for post in site.html_pages %}{ "url": {{ post.url | relative_url | jsonify }}, "title": {{ post.title | jsonify }}, "text": {{ post.content | strip_html | normalize_whitespace | jsonify }} }{% unless forloop.last %},{% endunless %}
{% endfor %}
];
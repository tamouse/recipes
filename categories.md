---
layout: page
title: "Categories"
navbar: true
---

{% assign category_list = site.categories | sort %}
{% for category in category_list %}
[{{ category.first }}]({{site.baseurl}}/category/{{ category.first }}/index.html)
{% endfor %}

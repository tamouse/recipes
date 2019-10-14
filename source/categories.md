---
layout: page
title: "Categories"
navbar: true
---

{% assign category_list = site.categories | sort %}
<div class="recipe-grid">
{% for category in category_list %}
<div class="recipe-card">
  <a href="{{site.baseurl}}/category/{{category.first}}/index.html">{{category.first}}</a>
</div>
{% endfor %}
</div>

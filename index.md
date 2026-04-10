---
layout: default
title: "AirTourer Technical Resources"
description: "Technical documents, maintenance manuals, service bulletins, and 3D scans for AirTourer aircraft"
---

<section class="hero">
  <h1>AirTourer Technical Resources</h1>
  <p>Technical documents and 3D scans to support the maintenance and preservation of AirTourer aircraft.</p>
  <p>This site is a companion resource to the <a href="https://www.airtourer.asn.au/" target="_blank" rel="noopener">AirTourer Association</a>.</p>
</section>

<section id="documents" class="file-section">
  <h2>Document Catalogue</h2>

  {% assign categories = site.docs | map: "category" | uniq | sort %}

  {% if site.docs.size > 0 %}
  <div class="catalogue-filter">
    <span class="filter-label">Filter by category:</span>
    <button class="filter-btn active" data-filter="all">All</button>
    {% for cat in categories %}
    <button class="filter-btn" data-filter="{{ cat }}">{{ cat | replace: '-', ' ' | capitalize }}</button>
    {% endfor %}
  </div>

  {% for cat in categories %}
  <div class="category-group" data-category="{{ cat }}">
  <h3 class="category-heading">{{ cat | replace: '-', ' ' | capitalize }}</h3>
  <div class="file-list">
    {% assign cat_docs = site.docs | where: "category", cat | sort: "title" %}
    {% for doc in cat_docs %}
    <div class="file-card">
      <div class="file-info">
        <h4><a href="{{ doc.url | relative_url }}">{{ doc.title }}</a></h4>
        {% if doc.description %}<p>{{ doc.description }}</p>{% endif %}
      </div>
      <div class="file-actions">
        {% if doc.conversion_status == "complete" %}<span class="badge badge-web">Web</span>{% endif %}
        {% if doc.original_pdf %}<a href="{{ doc.original_pdf | relative_url }}" class="btn btn-download">Original PDF</a>{% endif %}
        {% if doc.clean_pdf %}<a href="{{ doc.clean_pdf | relative_url }}" class="btn btn-download">Clean PDF</a>{% endif %}
        {% if doc.conversion_status == "pending" and doc.original_pdf %}<span class="badge badge-pending">Conversion pending</span>{% endif %}
      </div>
    </div>
    {% endfor %}
  </div>
  </div>
  {% endfor %}
  {% else %}
  <p class="empty-notice">No documents have been added yet. Check back soon.</p>
  {% endif %}
</section>

<section id="scans" class="file-section">
  <h2>3D Scans</h2>

  {% if site.data.scans.size > 0 %}
  <div class="scan-grid">
    {% for scan in site.data.scans %}
    <div class="scan-card">
      {% if scan.thumbnail %}
      <a href="{{ scan.path | relative_url }}" class="scan-thumbnail">
        <img src="{{ scan.thumbnail | relative_url }}" alt="{{ scan.title }}" loading="lazy">
      </a>
      {% endif %}
      <div class="scan-info">
        <h4>{{ scan.title }}</h4>
        {% if scan.description %}<p>{{ scan.description }}</p>{% endif %}
        <a href="{{ scan.path | relative_url }}" download class="btn btn-download">Download</a>
      </div>
    </div>
    {% endfor %}
  </div>
  {% else %}
  <p class="empty-notice">No 3D scans have been added yet. Check back soon.</p>
  {% endif %}
</section>

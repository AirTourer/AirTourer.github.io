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
  <h2>Technical Documents</h2>

  {% assign categories = site.docs | map: "category" | uniq | sort %}

  {% if site.docs.size > 0 %}
  {% for cat in categories %}
  <h3 class="category-heading">{{ cat | capitalize }}</h3>
  <div class="file-list">
    {% assign cat_docs = site.docs | where: "category", cat %}
    {% for doc in cat_docs %}
    <div class="file-card">
      <div class="file-info">
        <h4><a href="{{ doc.url | relative_url }}">{{ doc.title }}</a></h4>
        {% if doc.description %}<p>{{ doc.description }}</p>{% endif %}
        {% if doc.date %}<time datetime="{{ doc.date | date_to_xmlschema }}">{{ doc.date | date: "%d %B %Y" }}</time>{% endif %}
      </div>
    </div>
    {% endfor %}
  </div>
  {% endfor %}
  {% endif %}

  {% if site.data.documents.size > 0 %}
  {% assign pdf_categories = site.data.documents | map: "category" | uniq | sort %}
  {% for cat in pdf_categories %}
  <h3 class="category-heading">{{ cat | capitalize }}</h3>
  <div class="file-list">
    {% assign cat_pdfs = site.data.documents | where: "category", cat %}
    {% for item in cat_pdfs %}
    <div class="file-card">
      <div class="file-info">
        <h4>{{ item.title }}</h4>
        {% if item.description %}<p>{{ item.description }}</p>{% endif %}
      </div>
      <div class="file-actions">
        {% if item.viewer %}<a href="{{ item.viewer | relative_url }}" class="btn btn-view">View</a>{% endif %}
        <a href="{{ item.path | relative_url }}" download class="btn btn-download">Download</a>
      </div>
    </div>
    {% endfor %}
  </div>
  {% endfor %}
  {% endif %}

  {% if site.docs.size == 0 and site.data.documents.size == 0 %}
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

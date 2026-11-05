# Radha Raman Ethnics — Official Website Experience

> **"Grace in Every Drape"**  
> Boutique Ethnic-Wear Store · Sola, Ahmedabad, Gujarat, India

---

## 1. Business Profile & Summary

* **Business Name:** Radha Raman Ethnics
* **Founder:** Pinaki Patel
* **Boutique Address:** C-402, Arise Pride, Sola, Ahmedabad, Gujarat 380060, India
* **Visit Policy:** **Strictly by compulsory appointment only** (In-house boutique experience)
* **Primary Contact & WhatsApp:** `+91 99258 57682`
* **Alternate Phone:** `+91 98795 81544`
* **Official Instagram:** [https://www.instagram.com/radharaman_ethnics/](https://www.instagram.com/radharaman_ethnics/)
* **Official Facebook:** [https://www.facebook.com/1112646218606357/](https://www.facebook.com/1112646218606357/)

---

## 2. Architectural Overview

The website is engineered as a bespoke, static HTML5/CSS3/JavaScript experience tailored specifically for assisted shopping, lead generation, and private boutique consultations.

### Pages Included:
1. **`index.html` (Home):**
   * Editorial brand hero with authentic circular collection badge lockup
   * Prominent compulsory appointment notice
   * 8 curated collection showcase cards (South Silk, Banarasi, Bandhani & Patola, Mal Cotton, Co-ords, Dress Materials, 3-Piece Suits, One-Piece Outfits)
   * Assisted commerce service pillars (In-Boutique Visits, 1-on-1 Video Shopping, Worldwide Shipping, Direct WhatsApp Styling)
   * The in-house boutique story & Pinaki Patel's philosophy
   * Social integration with Instagram & Facebook
   * Interactive FAQ Accordion with Schema.org alignment
   * Direct booking & WhatsApp CTAs

2. **`collections.html` (All Collections & Style Discovery):**
   * Real-time search engine with live filtering across 9 categories
   * Instant result counter ("Showing X of Y styles")
   * Quick WhatsApp enquiry modal trigger on every card
   * Textile intelligence & saree drape guide

3. **`book-appointment.html` (Compulsory Appointment Booking):**
   * Interactive multi-step appointment request wizard
   * Date picker, time slot selector (Morning, Afternoon, Evening), visitor count
   * Multi-selection checkboxes for collections of interest
   * Direct formatted WhatsApp message dispatcher to `+91 99258 57682`
   * Sola location guide, landmarks, and visiting etiquette

4. **`video-shopping.html` (Virtual 1-on-1 Video-Call Shopping):**
   * Dedicated virtual shopping concierge for remote & NRI clients
   * 4-step virtual shopping journey
   * Timezone-accommodating booking form (WhatsApp Video / Google Meet)

5. **`worldwide-shipping.html` (Global Delivery & Packaging):**
   * Transparent delivery guidelines for USA, UK, Canada, Australia, UAE, Europe, and India
   * Protective moisture-barrier packaging standards
   * Real-time destination shipping quote calculator on WhatsApp

6. **`about.html` (The Radha Raman Story):**
   * Founder vision of Pinaki Patel and "Grace in Every Drape"
   * The Four Pillars: Curated Distinction, Dedicated Hospitality, Artisan Respect, Global Connection
   * Visual tribute to the royal crest and peacock feather motif

7. **`contact.html` (Boutique Location & Enquiries):**
   * Direct contact cards for phones, WhatsApp, and social media
   * Sola, Ahmedabad address and visitor access details
   * Direct enquiry form with WhatsApp dispatch

8. **`product.html` (Deep Saree Style Enquiry):**
   * Interactive thumbnail switcher
   * Dynamic URL parameter support (`?style=South%20Silk`)
   * Care guidelines and tailored WhatsApp dispatch

9. **`privacy-policy.html` & `terms.html`:**
   * Legitimate, transparent privacy and consultation policies

10. **`sitemap.xml` & `robots.txt`:**
    * Clean SEO search engine indexing instructions

---

## 3. Brand & Visual Design System

* **100% Bespoke Photography & Generated Assets (Zero Stock/Unsplash Dependencies):**
  * `hero-saree-model.jpg`: Regal wine South Silk drape with gold temple border on Indian model
  * `south-silk-saree.jpg`: Emerald green Kanjivaram silk with crimson red border and gold zari pallu
  * `banarasi-saree.jpg`: Royal deep wine/maroon Banarasi katan silk featuring intricate all-over floral zari jaal
  * `bandhani-patola-saree.jpg`: Vibrant vermilion & saffron mustard Bandhani bindi resist with Patola borders
  * `mal-cotton-saree.jpg`: Lightweight pastel blush Mulmul cotton for daily and office wear
  * `ethnic-coord-set.jpg`: Contemporary tailored two-piece ethnic co-ord set in jewel tones
  * `dress-materials.jpg`: Luxury unstitched Chanderi silk with embroidered neckline and zari dupatta
  * `stitched-three-piece.jpg`: Stitched 3-piece festive ethnic suit in peacock blue with scalloped mustard dupatta
  * `one-piece-outfit.jpg`: Floor-length royal sapphire reception gown / Anarkali maxi with zardozi embroidery
  * `founder-pinaki-patel.jpg`: Warm, dignified portrait of founder Pinaki Patel in her boutique setting
  * `video-shopping-session.jpg`: Live 1-on-1 virtual video shopping session demonstration
  * `boutique-interior.jpg`: Private Sola, Ahmedabad boutique interior with brass urli and illuminated silk shelves
  * `radha-raman-badge.png`: Official circular brand crest
  * `radha-raman-collection-badge.png`: Official royal saree collection badge

* **Primary Colors:**
  * Royal Burgundy (`#5B1723`, `#3C0C14`, `#29060C`)
  * Antique Heritage Gold (`#B58A3B`, `#D7BD7B`, `#FBF5E7`)
  * Silk Ivory / Parchment (`#FBF8F3`, `#FFFDFA`, `#F4EDE2`)
  * Peacock Jewel Accents (Teal `#147C78` & Blue `#1C4F7C`)
* **Typography:**
  * Serif Headings: *Playfair Display* & *Cormorant Garamond*
  * Sans-Serif Body & UI: *Plus Jakarta Sans*
* **Design Motifs:** Gold filigree center dividers (`❖`), traditional arch/jharokha frames, and circular crest emblems using real high-res assets (`Radha Raman Ethnics Saree Badge.png` and `Radha Raman Ethnics Saree Collection.png`).

---

## 4. How to Test & Deploy

### Local Preview:
Simply open `index.html` in any modern web browser, or serve using Python / Node:
```powershell
# Using Python:
python -m http.server 8000

# Open in browser:
http://localhost:8000
```

### Static Hosting:
The site is 100% static and zero-dependency, deployable instantly to:
* **Cloudflare Pages**
* **Vercel**
* **Netlify**
* **GitHub Pages**
* **Amazon S3 / Firebase Hosting**

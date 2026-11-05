/**
 * RADHA RAMAN ETHNICS — MASTER ENGINE
 * Creative & Interactive Client Scripts
 * Sola, Ahmedabad, Gujarat · "Grace in Every Drape"
 */

document.addEventListener('DOMContentLoaded', () => {
  initScrollReveal();
  initMobileNav();
  initFaqAccordions();
  initCollectionFilters();
  initAppointmentForm();
  initVideoShoppingForm();
  initShippingForm();
  initEnquiryModals();
  initProductGallery();
});

/* ==========================================================================
   1. Scroll Reveal Animations
   ========================================================================== */
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    reveals.forEach((el) => observer.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add('visible'));
  }
}

/* ==========================================================================
   2. Mobile Off-Canvas Navigation Drawer
   ========================================================================== */
function initMobileNav() {
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const drawer = document.querySelector('.mobile-nav-drawer');
  const closeBtn = document.querySelector('.mobile-nav-close');
  const navLinks = document.querySelectorAll('.mobile-nav-link');

  if (!menuBtn || !drawer) return;

  function openMenu() {
    drawer.classList.add('open');
    document.body.style.overflow = 'hidden';
    menuBtn.setAttribute('aria-expanded', 'true');
  }

  function closeMenu() {
    drawer.classList.remove('open');
    document.body.style.overflow = '';
    menuBtn.setAttribute('aria-expanded', 'false');
  }

  menuBtn.addEventListener('click', openMenu);
  closeBtn?.addEventListener('click', closeMenu);

  drawer.addEventListener('click', (e) => {
    if (e.target === drawer) closeMenu();
  });

  navLinks.forEach((link) => link.addEventListener('click', closeMenu));

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) {
      closeMenu();
    }
  });
}

/* ==========================================================================
   3. Accessible FAQ Accordions
   ========================================================================== */
function initFaqAccordions() {
  const triggers = document.querySelectorAll('.faq-trigger');

  triggers.forEach((btn) => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const content = item.querySelector('.faq-content');
      const isOpen = item.classList.contains('active');

      // Close open siblings within same list if desired
      const siblingItems = item.parentElement.querySelectorAll('.faq-item');
      siblingItems.forEach((sibling) => {
        if (sibling !== item && sibling.classList.contains('active')) {
          sibling.classList.remove('active');
          sibling.querySelector('.faq-trigger')?.setAttribute('aria-expanded', 'false');
          const sibContent = sibling.querySelector('.faq-content');
          if (sibContent) sibContent.style.maxHeight = null;
        }
      });

      if (isOpen) {
        item.classList.remove('active');
        btn.setAttribute('aria-expanded', 'false');
        content.style.maxHeight = null;
      } else {
        item.classList.add('active');
        btn.setAttribute('aria-expanded', 'true');
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  });
}

/* ==========================================================================
   4. Collection Filtering & Real-time Live Search
   ========================================================================== */
function initCollectionFilters() {
  const filterPills = document.querySelectorAll('.filter-pill');
  const searchInput = document.querySelector('#collectionSearch');
  const cards = document.querySelectorAll('.collection-item');
  const countEl = document.querySelector('#filterCount');
  const emptyState = document.querySelector('#noResultsState');

  if (!cards.length) return;

  let currentCategory = 'all';

  function applyFilter() {
    const query = (searchInput?.value || '').trim().toLowerCase();
    let visibleCount = 0;

    cards.forEach((card) => {
      const category = card.dataset.category || '';
      const text = card.textContent.toLowerCase();

      const matchesCat = currentCategory === 'all' || category.includes(currentCategory);
      const matchesSearch = !query || text.includes(query);

      if (matchesCat && matchesSearch) {
        card.style.display = '';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    if (countEl) {
      countEl.textContent = `Showing ${visibleCount} of ${cards.length} styles`;
    }

    if (emptyState) {
      emptyState.style.display = visibleCount === 0 ? 'block' : 'none';
    }
  }

  filterPills.forEach((pill) => {
    pill.addEventListener('click', () => {
      filterPills.forEach((p) => p.classList.remove('active'));
      pill.classList.add('active');
      currentCategory = pill.dataset.filter || 'all';
      applyFilter();
    });
  });

  searchInput?.addEventListener('input', applyFilter);
}

/* ==========================================================================
   5. Appointment Booking Form Handler (Direct WhatsApp Handoff)
   ========================================================================== */
function initAppointmentForm() {
  const form = document.querySelector('#appointmentForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!form.reportValidity()) return;

    const fd = new FormData(form);
    const name = fd.get('name') || '';
    const phone = fd.get('phone') || '';
    const date = fd.get('date') || '';
    const time = fd.get('time') || '';
    const visitors = fd.get('visitors') || '1-2 People';
    const notes = fd.get('notes') || '';

    // Collect checked styles
    const interests = [];
    form.querySelectorAll('input[name="interests"]:checked').forEach((cb) => {
      interests.push(cb.value);
    });

    const lines = [
      '✨ *RADHA RAMAN ETHNICS — BOUTIQUE APPOINTMENT REQUEST* ✨',
      '───────────────────────────',
      `*Name:* ${name}`,
      `*Contact Phone:* ${phone}`,
      `*Preferred Date:* ${date}`,
      `*Preferred Time Window:* ${time}`,
      `*Number of Visitors:* ${visitors}`,
      `*Collections of Interest:* ${interests.length ? interests.join(', ') : 'Open Exploration'}`,
      notes ? `*Special Occasion / Notes:* ${notes}` : '',
      '───────────────────────────',
      '📍 *Boutique Location:* C-402, Arise Pride, Sola, Ahmedabad, Gujarat',
      '_I understand visits are strictly by appointment only. Awaiting your booking confirmation._'
    ].filter(Boolean);

    const targetNumber = '919925857682';
    const waUrl = `https://wa.me/${targetNumber}?text=${encodeURIComponent(lines.join('\n'))}`;

    showToast('Opening WhatsApp with your appointment request...');
    window.open(waUrl, '_blank', 'noopener');
  });
}

/* ==========================================================================
   6. Video-Call Shopping Form Handler
   ========================================================================== */
function initVideoShoppingForm() {
  const form = document.querySelector('#videoShoppingForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!form.reportValidity()) return;

    const fd = new FormData(form);
    const name = fd.get('name') || '';
    const phone = fd.get('phone') || '';
    const city = fd.get('city') || '';
    const platform = fd.get('platform') || 'WhatsApp Video Call';
    const occasion = fd.get('occasion') || 'Festive / Wedding';
    const notes = fd.get('notes') || '';

    const lines = [
      '📹 *RADHA RAMAN ETHNICS — VIDEO-CALL SHOPPING ENQUIRY* 📹',
      '───────────────────────────',
      `*Customer Name:* ${name}`,
      `*Contact / WhatsApp:* ${phone}`,
      `*Location / City:* ${city}`,
      `*Preferred Platform:* ${platform}`,
      `*Occasion / Requirement:* ${occasion}`,
      notes ? `*Specific Design / Saree Details:* ${notes}` : '',
      '───────────────────────────',
      '_I would like to schedule a personal 1-on-1 video call session to view available saree drapes and collections._'
    ].filter(Boolean);

    const waUrl = `https://wa.me/919925857682?text=${encodeURIComponent(lines.join('\n'))}`;
    showToast('Connecting you to our personal stylist on WhatsApp...');
    window.open(waUrl, '_blank', 'noopener');
  });
}

/* ==========================================================================
   7. Worldwide Shipping Calculator & Enquiry Form
   ========================================================================== */
function initShippingForm() {
  const form = document.querySelector('#shippingEnquiryForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!form.reportValidity()) return;

    const fd = new FormData(form);
    const name = fd.get('name') || '';
    const phone = fd.get('phone') || '';
    const country = fd.get('country') || 'International';
    const pincode = fd.get('pincode') || '';
    const items = fd.get('items') || 'Saree Collection';

    const lines = [
      '✈️ *RADHA RAMAN ETHNICS — WORLDWIDE SHIPPING ENQUIRY* ✈️',
      '───────────────────────────',
      `*Name:* ${name}`,
      `*WhatsApp Phone:* ${phone}`,
      `*Destination Country / City:* ${country}`,
      pincode ? `*Postal / Zip Code:* ${pincode}` : '',
      `*Garment / Collection Interested:* ${items}`,
      '───────────────────────────',
      '_Please share shipping charges, dispatch timelines and order fulfillment options for my location._'
    ].filter(Boolean);

    const waUrl = `https://wa.me/919925857682?text=${encodeURIComponent(lines.join('\n'))}`;
    showToast('Generating your international delivery enquiry...');
    window.open(waUrl, '_blank', 'noopener');
  });
}

/* ==========================================================================
   8. Quick Saree Enquiry Modal System
   ========================================================================== */
function initEnquiryModals() {
  const modal = document.querySelector('#quickEnquiryModal');
  const closeBtn = document.querySelector('#modalCloseBtn');
  const styleNameInput = document.querySelector('#modalStyleName');
  const modalTitle = document.querySelector('#modalStyleTitle');
  const enquiryForm = document.querySelector('#modalEnquiryForm');

  if (!modal) return;

  window.openQuickEnquiry = function(styleName) {
    if (styleNameInput) styleNameInput.value = styleName || 'Saree Collection';
    if (modalTitle) modalTitle.textContent = styleName || 'Selected Design';
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  function closeModal() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  closeBtn?.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeModal();
    }
  });

  enquiryForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const style = styleNameInput?.value || 'Saree Collection';
    const name = document.querySelector('#modalCustomerName')?.value || '';
    const note = document.querySelector('#modalCustomerNote')?.value || '';

    const lines = [
      '🌸 *RADHA RAMAN ETHNICS — COLLECTION ENQUIRY* 🌸',
      `*Design / Saree:* ${style}`,
      name ? `*Customer Name:* ${name}` : '',
      note ? `*Note / Requirement:* ${note}` : '',
      '───────────────────────────',
      '_Hello Radha Raman Ethnics, please share current designs, fabric details and availability for this collection._'
    ].filter(Boolean);

    const waUrl = `https://wa.me/919925857682?text=${encodeURIComponent(lines.join('\n'))}`;
    closeModal();
    window.open(waUrl, '_blank', 'noopener');
  });
}

/* ==========================================================================
   9. Interactive Image Thumbnail Switcher
   ========================================================================== */
function initProductGallery() {
  const mainImage = document.querySelector('#galleryMainImage');
  const thumbs = document.querySelectorAll('.gallery-thumb');

  if (!mainImage || !thumbs.length) return;

  thumbs.forEach((thumb) => {
    thumb.addEventListener('click', () => {
      thumbs.forEach((t) => t.classList.remove('active'));
      thumb.classList.add('active');

      const newSrc = thumb.dataset.fullSrc || thumb.src;
      const newAlt = thumb.dataset.alt || thumb.alt;

      mainImage.style.opacity = '0.35';
      setTimeout(() => {
        mainImage.src = newSrc;
        mainImage.alt = newAlt;
        mainImage.style.opacity = '1';
      }, 150);
    });
  });
}

/* ==========================================================================
   10. Toast Notification Helper
   ========================================================================== */
function showToast(msg) {
  let toast = document.querySelector('.rr-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'rr-toast';
    Object.assign(toast.style, {
      position: 'fixed',
      bottom: '90px',
      left: '50%',
      transform: 'translateX(-50%) translateY(20px)',
      background: 'rgba(59, 12, 19, 0.94)',
      backdropFilter: 'blur(10px)',
      color: '#fdf7f8',
      border: '1px solid #b58a3b',
      borderRadius: '6px',
      padding: '12px 24px',
      fontSize: '0.85rem',
      fontWeight: '600',
      letterSpacing: '0.04em',
      zIndex: '3000',
      boxShadow: '0 12px 30px rgba(0,0,0,0.25)',
      opacity: '0',
      transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
      pointerEvents: 'none'
    });
    document.body.appendChild(toast);
  }

  toast.textContent = msg;
  toast.style.opacity = '1';
  toast.style.transform = 'translateX(-50%) translateY(0)';

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(-50%) translateY(20px)';
  }, 2800);
}

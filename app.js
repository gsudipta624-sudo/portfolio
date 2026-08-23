/**
 * SUDIPTA GHORAI - HIGHLY ANIMATED PORTFOLIO & INTERACTIVE CV
 * Interactive Systems, 3D Tilt Engine, Typewriter & Sparkle Effects
 */

document.addEventListener('DOMContentLoaded', () => {
  initScrollProgress();
  initDynamicTypewriter();
  init3DTiltEngine();
  initSpotlightSearch();
  initCertModals();
  initPhotoLightbox();
  initContactModal();
  initSkillFilters();
  initScrollAnimations();
  initCopyActions();
  initBackToTop();
  initSparkleEffects();
});

/* ==========================================================================
   1. DATA REPOSITORY FOR SEARCH & MODALS
   ========================================================================== */
const RESUME_DATA = {
  personal: {
    fullName: "Sudipta Ghorai",
    dob: "01 NOV 2006",
    location: "Kolkata, West Bengal, India",
    phone: "+91 7501654363",
    email: "gsudipta624@gmail.com",
    tagline: "COMPUTER SCIENCE & ENGINEERING STUDENT",
    college: "Hooghly Engineering & Technology College",
    university: "Maulana Abul Kalam Azad University of Technology (MAKAUT)"
  },
  skills: [
    { name: "Python", category: "Programming", level: 85, desc: "Object-oriented programming, data structures, scripting, algorithm design", icon: "🐍" },
    { name: "C Language", category: "Programming", level: 88, desc: "Memory management, pointers, low-level data structures, system programming", icon: "⚙️" },
    { name: "Data Structure", category: "Core CS", level: 82, desc: "Arrays, Stacks, Queues, Linked Lists, Trees, Graphs, Sorting & Searching algorithms", icon: "🧩" },
    { name: "Data Analysis", category: "Core CS", level: 75, desc: "Data manipulation, statistical analysis, evaluation and pattern extraction", icon: "📊" },
    { name: "HTML", category: "Web & Tools", level: 90, desc: "Semantic markup, accessibility, modern HTML5 web structures", icon: "🌐" },
    { name: "CSS", category: "Web & Tools", level: 85, desc: "Responsive styling, Flexbox, CSS Grid, media queries, modern UI aesthetics", icon: "🎨" },
    { name: "Communication", category: "Soft Skills", level: 88, desc: "Technical presentation, team collaboration, clear written and verbal correspondence", icon: "💬" }
  ],
  education: [
    {
      id: "btech",
      degree: "B.Tech in Computer Science & Engineering",
      institution: "Hooghly Engineering & Technology College",
      board: "Under Maulana Abul Kalam Azad University of Technology (MAKAUT)",
      duration: "2024 – 2028",
      status: "Currently Pursuing (1st Year - CSE)",
      target: "section-education"
    },
    {
      id: "hs",
      degree: "Higher Secondary Education (Class XII - Science)",
      institution: "West Bengal Council of Higher Secondary Education (WBCHSE)",
      board: "WBCHSE Board",
      duration: "Completed 2024",
      status: "74% Aggregate",
      target: "section-education"
    },
    {
      id: "secondary",
      degree: "Secondary Examination (Class X)",
      institution: "West Bengal Board of Secondary Education (WBBSE)",
      board: "WBBSE Board",
      duration: "Completed 2022",
      status: "86% Distinction",
      target: "section-education"
    }
  ],
  certifications: {
    "cert-dsa-c": {
      id: "cert-dsa-c",
      title: "Data Structure in C",
      issuer: "Simplilearn | SkillUp",
      platform: "Simplilearn SkillUp Platform",
      status: "Verified & Completed",
      credentialId: "SL-DSA-C-847291",
      description: "Comprehensive professional certification covering theoretical fundamentals and practical implementation of core Data Structures in the C programming language.",
      syllabus: [
        "Pointers & Dynamic Memory Allocation (malloc, calloc, free)",
        "Linear Structures: Singly & Doubly Linked Lists, Circular Lists",
        "Stack & Queue implementations with real-world applications",
        "Non-linear Structures: Binary Search Trees (BST), AVL Trees, Graphs",
        "Sorting Algorithms (Quick Sort, Merge Sort, Heap Sort) & Binary Search",
        "Time and Space Complexity Analysis (Big-O Notation)"
      ]
    },
    "cert-ead-iit-kgp": {
      id: "cert-ead-iit-kgp",
      title: "EAD 2025 (Entrepreneurship Awareness Drive)",
      issuer: "Entrepreneurship Cell | IIT Kharagpur",
      platform: "E-Cell, Indian Institute of Technology Kharagpur",
      status: "Verified & Completed",
      credentialId: "IITKGP-EAD2025-SG",
      description: "Prestigious flagship initiative organized by the Entrepreneurship Cell of IIT Kharagpur to foster technological innovation, startup building, and venture leadership.",
      syllabus: [
        "Technology Product Ideation & Feasibility Analysis",
        "Problem-Solution Fit in emerging tech sectors",
        "Startup Ecosystem, Incubation & Venture Architecture",
        "Networking with visionary tech founders and engineering leaders",
        "Strategic Decision-making and Leadership dynamics"
      ]
    }
  },
  projects: [
    {
      title: "Preparing for SIH 2026",
      tagline: "Smart India Hackathon Initiative",
      description: "We are preparing for SIH 2026 by exploring innovative problem statements, selecting suitable projects, and developing practical software solutions.",
      target: "section-projects"
    }
  ]
};

/* ==========================================================================
   2. TOP SCROLL PROGRESS BAR
   ========================================================================== */
function initScrollProgress() {
  const progressBar = document.getElementById('scrollProgressBar');
  if (!progressBar) return;

  window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
    progressBar.style.width = `${progress}%`;
  }, { passive: true });
}

/* ==========================================================================
   3. DYNAMIC TYPEWRITER SUBTITLE ENGINE
   ========================================================================== */
function initDynamicTypewriter() {
  const el = document.getElementById('dynamicTypewriter');
  if (!el) return;

  const phrases = [
    "COMPUTER SCIENCE & ENGINEERING STUDENT",
    "PASSIONATE PROBLEM SOLVER & CODER",
    "PREPARING FOR SMART INDIA HACKATHON 2026",
    "DATA STRUCTURES & ALGORITHMS IN C",
    "PYTHON & WEB APPLICATION DEVELOPER"
  ];

  let phraseIndex = 0;
  let charIndex = phrases[0].length;
  let isDeleting = true;
  let typingSpeed = 50;

  function typeCycle() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
      el.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 25;
    } else {
      el.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 55;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
      isDeleting = true;
      typingSpeed = 2200; // Hold full phrase
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      typingSpeed = 400; // Pause before typing new phrase
    }

    setTimeout(typeCycle, typingSpeed);
  }

  setTimeout(typeCycle, 2000);
}

/* ==========================================================================
   4. 3D PERSPECTIVE TILT & MOUSE FOLLOWER
   ========================================================================== */
function init3DTiltEngine() {
  const tiltElements = document.querySelectorAll('.tilt-card, .tilt-item, .cv-header-banner');

  tiltElements.forEach(el => {
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = ((y - centerY) / centerY) * -6; // max 6 deg
      const rotateY = ((x - centerX) / centerX) * 6;  // max 6 deg

      el.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-2px)`;
    });

    el.addEventListener('mouseleave', () => {
      el.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)`;
      el.style.transition = 'transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
    });

    el.addEventListener('mouseenter', () => {
      el.style.transition = 'transform 0.1s ease-out';
    });
  });
}

/* ==========================================================================
   5. SPOTLIGHT COMMAND SEARCH PALETTE (Ctrl+K or /)
   ========================================================================== */
function initSpotlightSearch() {
  const modal = document.getElementById('spotlightModal');
  const input = document.getElementById('spotlightInput');
  const clearBtn = document.getElementById('spotlightClearBtn');
  const escBtn = document.getElementById('spotlightEscBtn');
  const resultsContainer = document.getElementById('spotlightResults');
  const matchCount = document.getElementById('spotlightMatchCount');
  
  const triggers = [
    document.getElementById('searchTriggerBtn'),
    document.getElementById('searchSpotlightTrigger'),
    document.querySelector('.nav-btn-mini[title*="Ctrl+K"]')
  ];

  function openSpotlight() {
    if (!modal) return;
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    setTimeout(() => input?.focus(), 50);
  }

  function closeSpotlight() {
    if (!modal) return;
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    if (input) input.value = '';
    renderSearchResults('');
  }

  triggers.forEach(btn => btn?.addEventListener('click', openSpotlight));
  escBtn?.addEventListener('click', closeSpotlight);

  modal?.addEventListener('click', (e) => {
    if (e.target === modal) closeSpotlight();
  });

  // Global Keyboard shortcut (Ctrl+K or ⌘K or /)
  window.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      modal?.classList.contains('active') ? closeSpotlight() : openSpotlight();
    } else if (e.key === '/' && !['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) {
      e.preventDefault();
      openSpotlight();
    } else if (e.key === 'Escape' && modal?.classList.contains('active')) {
      closeSpotlight();
    }
  });

  // Live input filter
  input?.addEventListener('input', (e) => {
    const query = e.target.value.trim();
    if (clearBtn) clearBtn.style.display = query ? 'block' : 'none';
    renderSearchResults(query);
  });

  clearBtn?.addEventListener('click', () => {
    if (input) input.value = '';
    clearBtn.style.display = 'none';
    input?.focus();
    renderSearchResults('');
  });

  function renderSearchResults(query) {
    if (!resultsContainer) return;
    
    if (!query) {
      resultsContainer.innerHTML = `
        <div class="spotlight-empty-state">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          <p class="empty-title">Type to search Sudipta's portfolio</p>
          <p class="empty-subtitle">Search for "Python", "C", "MAKAUT", "Certifications", "Email", "Skills"...</p>
        </div>
      `;
      if (matchCount) matchCount.textContent = 'Ready to search';
      return;
    }

    const q = query.toLowerCase();
    const matches = [];

    // Personal matches
    if (RESUME_DATA.personal.fullName.toLowerCase().includes(q)) {
      matches.push({ title: RESUME_DATA.personal.fullName, category: "Profile", snippet: RESUME_DATA.personal.tagline, icon: "👤", action: () => scrollToTarget('hero') });
    }
    if (RESUME_DATA.personal.email.toLowerCase().includes(q)) {
      matches.push({ title: RESUME_DATA.personal.email, category: "Contact", snippet: "Click to copy email address", icon: "✉️", action: () => copyText(RESUME_DATA.personal.email, "Email address copied!") });
    }
    if (RESUME_DATA.personal.phone.toLowerCase().includes(q)) {
      matches.push({ title: RESUME_DATA.personal.phone, category: "Contact", snippet: "Click to copy phone number", icon: "📞", action: () => copyText(RESUME_DATA.personal.phone, "Phone number copied!") });
    }
    if (RESUME_DATA.personal.location.toLowerCase().includes(q)) {
      matches.push({ title: RESUME_DATA.personal.location, category: "Location", snippet: "Current Address / City", icon: "📍", action: () => scrollToTarget('section-personal') });
    }

    // Skills matches
    RESUME_DATA.skills.forEach(skill => {
      if (skill.name.toLowerCase().includes(q) || skill.category.toLowerCase().includes(q) || skill.desc.toLowerCase().includes(q)) {
        matches.push({
          title: skill.name,
          category: `Skill (${skill.level}%)`,
          snippet: skill.desc,
          icon: skill.icon,
          action: () => scrollToTarget('section-skills')
        });
      }
    });

    // Education matches
    RESUME_DATA.education.forEach(edu => {
      if (edu.degree.toLowerCase().includes(q) || edu.institution.toLowerCase().includes(q) || edu.board.toLowerCase().includes(q)) {
        matches.push({
          title: edu.degree,
          category: "Education",
          snippet: `${edu.institution} (${edu.duration}) - ${edu.status}`,
          icon: "🎓",
          action: () => scrollToTarget(edu.target)
        });
      }
    });

    // Project matches
    RESUME_DATA.projects.forEach(proj => {
      if (proj.title.toLowerCase().includes(q) || proj.description.toLowerCase().includes(q)) {
        matches.push({
          title: proj.title,
          category: "Projects",
          snippet: proj.description,
          icon: "🚀",
          action: () => scrollToTarget(proj.target)
        });
      }
    });

    // Certification matches
    Object.values(RESUME_DATA.certifications).forEach(cert => {
      if (cert.title.toLowerCase().includes(q) || cert.issuer.toLowerCase().includes(q) || cert.credentialId.toLowerCase().includes(q)) {
        matches.push({
          title: cert.title,
          category: "Certification",
          snippet: `${cert.issuer} • ID: ${cert.credentialId}`,
          icon: "📜",
          action: () => openCertModal(cert.id)
        });
      }
    });

    if (matchCount) matchCount.textContent = `Found ${matches.length} match${matches.length === 1 ? '' : 'es'}`;

    if (matches.length === 0) {
      resultsContainer.innerHTML = `
        <div class="spotlight-empty-state">
          <p class="empty-title">No results found for "${query}"</p>
          <p class="empty-subtitle">Try searching for keywords like Python, C, MAKAUT, or Education.</p>
        </div>
      `;
      return;
    }

    resultsContainer.innerHTML = matches.map((item, idx) => `
      <div class="spotlight-result-item" data-index="${idx}">
        <div class="res-left">
          <div class="res-icon">${item.icon}</div>
          <div class="res-content">
            <div class="res-title-row">
              <span class="res-title">${item.title}</span>
              <span class="res-category">${item.category}</span>
            </div>
            <span class="res-snippet">${item.snippet}</span>
          </div>
        </div>
        <button class="res-action">Go ➔</button>
      </div>
    `).join('');

    resultsContainer.querySelectorAll('.spotlight-result-item').forEach((elem, index) => {
      elem.addEventListener('click', () => {
        closeSpotlight();
        matches[index].action();
      });
    });
  }

  function scrollToTarget(targetId) {
    const target = document.getElementById(targetId);
    if (!target) return;
    target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    target.classList.add('highlight-search-target');
    setTimeout(() => target.classList.remove('highlight-search-target'), 2000);
  }
}

/* ==========================================================================
   6. CERTIFICATION DETAIL MODAL
   ========================================================================== */
function initCertModals() {
  const modal = document.getElementById('certDetailModal');
  const closeBtn = document.getElementById('certModalCloseBtn');
  const doneBtn = document.getElementById('certModalDoneBtn');

  function closeCert() {
    if (!modal) return;
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
  }

  closeBtn?.addEventListener('click', closeCert);
  doneBtn?.addEventListener('click', closeCert);
  modal?.addEventListener('click', (e) => {
    if (e.target === modal) closeCert();
  });
}

window.openCertModal = function(certId) {
  const cert = RESUME_DATA.certifications[certId];
  if (!cert) return;

  const modal = document.getElementById('certDetailModal');
  const title = document.getElementById('certModalTitle');
  const issuer = document.getElementById('certModalIssuer');
  const org = document.getElementById('certModalOrg');
  const platform = document.getElementById('certModalPlatform');
  const status = document.getElementById('certModalStatus');
  const credId = document.getElementById('certModalId');
  const desc = document.getElementById('certModalDesc');
  const skillsContainer = document.getElementById('certModalSkills');

  if (title) title.textContent = cert.title;
  if (issuer) issuer.textContent = cert.issuer;
  if (org) org.textContent = cert.issuer;
  if (platform) platform.textContent = cert.platform;
  if (status) status.textContent = cert.status;
  if (credId) credId.textContent = cert.credentialId;
  if (desc) desc.textContent = cert.description;

  if (skillsContainer) {
    skillsContainer.innerHTML = cert.syllabus.map(s => `
      <div class="cert-syllabus-tag">
        <span>✓</span>
        <span>${s}</span>
      </div>
    `).join('');
  }

  modal?.classList.add('active');
  modal?.setAttribute('aria-hidden', 'false');
};

/* ==========================================================================
   7. PHOTO LIGHTBOX MODAL
   ========================================================================== */
function initPhotoLightbox() {
  const avatarFrame = document.getElementById('avatarFrame');
  const modal = document.getElementById('photoLightboxModal');
  const closeBtn = document.getElementById('lightboxCloseBtn');

  function openLightbox() {
    modal?.classList.add('active');
    modal?.setAttribute('aria-hidden', 'false');
  }

  function closeLightbox() {
    modal?.classList.remove('active');
    modal?.setAttribute('aria-hidden', 'true');
  }

  avatarFrame?.addEventListener('click', openLightbox);
  closeBtn?.addEventListener('click', closeLightbox);
  modal?.addEventListener('click', (e) => {
    if (e.target === modal) closeLightbox();
  });
}

/* ==========================================================================
   8. CONTACT FORM MODAL & COMPOSER
   ========================================================================== */
function initContactModal() {
  const modal = document.getElementById('contactModal');
  const openBtns = [
    document.getElementById('openContactModalBtn'),
    document.getElementById('sidebarContactBtn')
  ];
  const closeBtn = document.getElementById('contactModalCloseBtn');
  const cancelBtn = document.getElementById('contactModalCancelBtn');
  const form = document.getElementById('contactComposerForm');

  function openModal() {
    modal?.classList.add('active');
    modal?.setAttribute('aria-hidden', 'false');
  }

  function closeModal() {
    modal?.classList.remove('active');
    modal?.setAttribute('aria-hidden', 'true');
  }

  openBtns.forEach(btn => btn?.addEventListener('click', openModal));
  closeBtn?.addEventListener('click', closeModal);
  cancelBtn?.addEventListener('click', closeModal);
  modal?.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  // Modal Copy triggers
  document.getElementById('modalCopyEmail')?.addEventListener('click', () => {
    copyText('gsudipta624@gmail.com', 'Email copied to clipboard!');
  });
  document.getElementById('modalCopyPhone')?.addEventListener('click', () => {
    copyText('+91 7501654363', 'Phone copied to clipboard!');
  });

  // Form submission generates mailto link
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('contactName')?.value.trim() || 'Colleague';
    const email = document.getElementById('contactEmail')?.value.trim() || '';
    const subject = document.getElementById('contactSubject')?.value.trim() || 'Internship Opportunity';
    const message = document.getElementById('contactMessage')?.value.trim() || '';

    const mailtoUrl = `mailto:gsudipta624@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Hello Sudipta,\n\n${message}\n\nFrom: ${name} (${email})`)}`;
    
    window.location.href = mailtoUrl;
    showToast('Opening default email app...');
    setTimeout(closeModal, 1200);
  });
}

/* ==========================================================================
   9. SKILLS CATEGORY FILTER & ANIMATED BARS
   ========================================================================== */
function initSkillFilters() {
  const filterBtns = document.querySelectorAll('.skill-filter-btn');
  const skillChips = document.querySelectorAll('.skill-chip');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.getAttribute('data-filter');
      
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      skillChips.forEach(chip => {
        const chipCat = chip.getAttribute('data-category');
        if (category === 'All' || chipCat === category) {
          chip.style.display = 'block';
          chip.style.opacity = '0';
          chip.style.transform = 'translateY(10px)';
          setTimeout(() => {
            chip.style.transition = 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)';
            chip.style.opacity = '1';
            chip.style.transform = 'translateY(0)';
          }, 20);
        } else {
          chip.style.display = 'none';
        }
      });
    });
  });
}

/* ==========================================================================
   10. COPY TO CLIPBOARD ACTIONS
   ========================================================================== */
function initCopyActions() {
  const emailTriggers = [
    document.getElementById('quickCopyEmailBtn'),
    document.getElementById('emailCopyItem')
  ];

  const phoneTriggers = [
    document.getElementById('quickCopyPhoneBtn'),
    document.getElementById('phoneCopyItem')
  ];

  emailTriggers.forEach(btn => {
    btn?.addEventListener('click', (e) => {
      e.preventDefault();
      copyText('gsudipta624@gmail.com', 'Email copied: gsudipta624@gmail.com');
    });
  });

  phoneTriggers.forEach(btn => {
    btn?.addEventListener('click', (e) => {
      e.preventDefault();
      copyText('+91 7501654363', 'Phone copied: +91 7501654363');
    });
  });

  document.getElementById('printCvBtn')?.addEventListener('click', () => {
    window.print();
  });
}

function copyText(text, successMsg) {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(successMsg);
    }).catch(() => {
      fallbackCopy(text, successMsg);
    });
  } else {
    fallbackCopy(text, successMsg);
  }
}

function fallbackCopy(text, successMsg) {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.style.position = 'fixed';
  textArea.style.opacity = '0';
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    document.execCommand('copy');
    showToast(successMsg);
  } catch (err) {
    showToast('Failed to copy text');
  }
  document.body.removeChild(textArea);
}

/* ==========================================================================
   11. FLOATING TOAST NOTIFICATION SYSTEM
   ========================================================================== */
function showToast(message) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast-message';
  toast.innerHTML = `
    <svg style="width: 18px; height: 18px; color: #10b981;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px) scale(0.95)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 2400);
}

/* ==========================================================================
   12. SCROLL REVEAL ANIMATIONS & SKILL COUNTER
   ========================================================================== */
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('.main-section, .timeline-item, .project-showcase-card, .cert-card, .sidebar-section');

  animatedElements.forEach(el => {
    el.classList.add('reveal-init');
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-visible');

        // Animate skill progress bars & counters
        if (entry.target.id === 'section-skills') {
          animateSkillBars();
        }

        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  animatedElements.forEach(el => observer.observe(el));
}

function animateSkillBars() {
  const skillChips = document.querySelectorAll('.skill-chip');
  skillChips.forEach((chip, i) => {
    setTimeout(() => {
      const bar = chip.querySelector('.skill-bar-fill');
      const counter = chip.querySelector('.skill-counter');
      const targetPct = parseInt(chip.getAttribute('data-target-pct') || '80', 10);

      if (bar) {
        bar.style.width = `${targetPct}%`;
      }

      if (counter) {
        let current = 0;
        const duration = 1000;
        const stepTime = 20;
        const totalSteps = duration / stepTime;
        const increment = targetPct / totalSteps;

        const timer = setInterval(() => {
          current += increment;
          if (current >= targetPct) {
            current = targetPct;
            clearInterval(timer);
          }
          counter.textContent = `${Math.round(current)}%`;
        }, stepTime);
      }
    }, i * 100);
  });
}

/* ==========================================================================
   13. BACK TO TOP BUTTON
   ========================================================================== */
function initBackToTop() {
  const fab = document.getElementById('fabScrollTop');
  const footerBtn = document.getElementById('footerTopBtn');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      fab?.classList.add('visible');
    } else {
      fab?.classList.remove('visible');
    }
  }, { passive: true });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  fab?.addEventListener('click', scrollToTop);
  footerBtn?.addEventListener('click', scrollToTop);
}

/* ==========================================================================
   14. MICRO SPARKLE BURST EFFECTS
   ========================================================================== */
function initSparkleEffects() {
  const triggerElements = document.querySelectorAll('.verified-pill, .btn-primary, .avatar-badge-status');

  triggerElements.forEach(el => {
    el.addEventListener('click', (e) => {
      createSparkles(e.clientX, e.clientY);
    });
  });
}

function createSparkles(x, y) {
  for (let i = 0; i < 8; i++) {
    const spark = document.createElement('div');
    spark.style.position = 'fixed';
    spark.style.left = `${x}px`;
    spark.style.top = `${y}px`;
    spark.style.width = '6px';
    spark.style.height = '6px';
    spark.style.borderRadius = '50%';
    spark.style.backgroundColor = ['#2563eb', '#6366f1', '#10b981', '#f59e0b', '#06b6d4'][Math.floor(Math.random() * 5)];
    spark.style.pointerEvents = 'none';
    spark.style.zIndex = '99999';
    spark.style.boxShadow = '0 0 8px currentColor';
    document.body.appendChild(spark);

    const angle = Math.random() * Math.PI * 2;
    const distance = 25 + Math.random() * 35;
    const destX = Math.cos(angle) * distance;
    const destY = Math.sin(angle) * distance;

    spark.animate([
      { transform: 'translate(0, 0) scale(1)', opacity: 1 },
      { transform: `translate(${destX}px, ${destY}px) scale(0)`, opacity: 0 }
    ], {
      duration: 600,
      easing: 'cubic-bezier(0.16, 1, 0.3, 1)'
    }).onfinish = () => spark.remove();
  }
}

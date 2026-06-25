/* ============================================
   MediCare Plus - Main JavaScript
   ============================================ */

// Data
const departments = [
  { name: 'Cardiology', icon: 'fa-heart-pulse', desc: 'Advanced heart care with cutting-edge diagnostic and treatment options.' },
  { name: 'Neurology', icon: 'fa-brain', desc: 'Expert neurological care for brain, spine, and nervous system disorders.' },
  { name: 'Orthopedics', icon: 'fa-bone', desc: 'Comprehensive bone, joint, and musculoskeletal treatment and surgery.' },
  { name: 'Pediatrics', icon: 'fa-baby', desc: 'Specialized healthcare for infants, children, and adolescents.' },
  { name: 'Dermatology', icon: 'fa-hand-dots', desc: 'Skin, hair, and nail care with cosmetic and medical dermatology.' },
  { name: 'Gynecology', icon: 'fa-venus', desc: "Women's health services from routine care to specialized treatments." },
  { name: 'Dentistry', icon: 'fa-tooth', desc: 'Complete dental care including cosmetic, restorative, and preventive services.' },
  { name: 'General Medicine', icon: 'fa-stethoscope', desc: 'Primary care and internal medicine for overall health management.' }
];

const doctors = [
  {
    name: 'Dr. Sarah Mitchell',
    specialty: 'Cardiologist',
    experience: '18 years',
    education: 'Harvard Medical School',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face',
    department: 'Cardiology'
  },
  {
    name: 'Dr. James Chen',
    specialty: 'Neurologist',
    experience: '15 years',
    education: 'Johns Hopkins University',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face',
    department: 'Neurology'
  },
  {
    name: 'Dr. Emily Rodriguez',
    specialty: 'Pediatrician',
    experience: '12 years',
    education: 'Stanford Medicine',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop&crop=face',
    department: 'Pediatrics'
  },
  {
    name: 'Dr. Michael Thompson',
    specialty: 'Orthopedic Surgeon',
    experience: '20 years',
    education: 'Mayo Clinic School',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1622253692010-333fbd734039?w=400&h=400&fit=crop&crop=face',
    department: 'Orthopedics'
  },
  {
    name: 'Dr. Lisa Park',
    specialty: 'Dermatologist',
    experience: '10 years',
    education: 'Yale School of Medicine',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop&crop=face',
    department: 'Dermatology'
  },
  {
    name: 'Dr. Robert Williams',
    specialty: 'General Physician',
    experience: '22 years',
    education: 'Columbia University',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1537368910025-700350f70c04?w=400&h=400&fit=crop&crop=face',
    department: 'General Medicine'
  }
];

const services = [
  {
    title: 'Online Consultation',
    icon: 'fa-video',
    desc: 'Connect with our specialists via secure video calls from anywhere. Get prescriptions, follow-ups, and expert advice without leaving home.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop',
    cta: 'Start Consultation'
  },
  {
    title: 'Lab Testing',
    icon: 'fa-flask',
    desc: 'Comprehensive laboratory services with rapid results. From routine blood work to specialized diagnostic panels, all processed in our certified lab.',
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=600&h=400&fit=crop',
    cta: 'Book Lab Test'
  },
  {
    title: 'Health Checkups',
    icon: 'fa-clipboard-check',
    desc: 'Preventive health screenings and full body checkups tailored to your age, gender, and risk factors. Early detection saves lives.',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&h=400&fit=crop',
    cta: 'View Packages'
  },
  {
    title: 'Vaccination',
    icon: 'fa-syringe',
    desc: 'Complete immunization services for all ages. Stay protected with our comprehensive vaccination programs and travel medicine.',
    image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?w=600&h=400&fit=crop',
    cta: 'Schedule Vaccine'
  },
  {
    title: 'Surgery',
    icon: 'fa-scalpel',
    desc: 'Minimally invasive and traditional surgical procedures performed by experienced surgeons in our state-of-the-art operating theaters.',
    image: 'https://images.unsplash.com/photo-1551190822-a933c51140de?w=600&h=400&fit=crop',
    cta: 'Consult Surgeon'
  },
  {
    title: 'Emergency Care',
    icon: 'fa-truck-medical',
    desc: '24/7 emergency medical services with rapid triage, advanced life support, and immediate specialist consultation when every second counts.',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=600&h=400&fit=crop',
    cta: 'Emergency Help'
  },
  {
    title: 'Home Visits',
    icon: 'fa-house-medical',
    desc: 'Professional medical care delivered to your doorstep. Ideal for elderly patients, post-surgery recovery, and chronic condition management.',
    image: 'https://images.unsplash.com/photo-1631217868264-e5b1bbfb1073?w=600&h=400&fit=crop',
    cta: 'Request Visit'
  }
];

const testimonials = [
  {
    name: 'Jennifer Adams',
    rating: 5,
    review: 'The care I received at MediCare Plus was exceptional. Dr. Mitchell took the time to explain everything and made me feel truly cared for. Highly recommend!',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face'
  },
  {
    name: 'David Kumar',
    rating: 5,
    review: 'From booking to treatment, everything was seamless. The online portal makes managing appointments and accessing reports incredibly easy.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
  },
  {
    name: 'Maria Santos',
    rating: 5,
    review: 'Brought my daughter here for pediatric care. Dr. Rodriguez is wonderful with children. The facility is clean, modern, and the staff is incredibly friendly.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face'
  },
  {
    name: 'Robert Chen',
    rating: 4,
    review: 'Had my knee surgery here and the recovery has been great. The orthopedic team is top-notch and the rehabilitation program is well structured.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
  }
];

const blogPosts = [
  {
    title: '10 Essential Tips for Heart Health in 2026',
    category: 'Cardiology',
    date: 'Mar 20, 2026',
    image: 'https://images.unsplash.com/photo-1628348068343-c6a8489622a9?w=500&h=300&fit=crop'
  },
  {
    title: 'Understanding Mental Health: A Complete Guide',
    category: 'Wellness',
    date: 'Mar 15, 2026',
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=500&h=300&fit=crop'
  },
  {
    title: 'Child Vaccination Schedule: What Parents Need to Know',
    category: 'Pediatrics',
    date: 'Mar 10, 2026',
    image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?w=500&h=300&fit=crop'
  }
];

const faqs = [
  {
    question: 'How do I book an appointment?',
    answer: 'You can book an appointment online through our website form, call our helpline at +1 (800) 555-1234, or use our patient portal. Same-day appointments are available for urgent cases.'
  },
  {
    question: 'Do you accept insurance?',
    answer: 'Yes, we accept all major insurance providers including HealthGuard, MediShield, CarePlus, LifeCare, and more. Contact our billing department for specific coverage details.'
  },
  {
    question: 'What are your emergency timings?',
    answer: 'Our emergency department operates 24 hours a day, 7 days a week, 365 days a year. For life-threatening emergencies, call +1 (800) 911-HELP immediately.'
  },
  {
    question: 'Is video consultation available?',
    answer: 'Yes, we offer secure HIPAA-compliant video consultations with all our specialists. Book a video appointment through our online portal or appointment form.'
  },
  {
    question: 'How can I access my medical reports?',
    answer: 'All medical reports are available through our patient portal. You can download PDFs, share with other providers, and track your health metrics in real-time.'
  },
  {
    question: 'What should I bring to my first visit?',
    answer: 'Please bring a valid ID, insurance card, list of current medications, previous medical records, and any relevant test results. Arrive 15 minutes early for registration.'
  }
];

const healthTips = [
  'Stay hydrated — drink at least 8 glasses of water daily!',
  'Take a 10-minute walk after meals to aid digestion.',
  'Get 7-8 hours of quality sleep every night.',
  'Wash your hands regularly to prevent infections.',
  'Include colorful fruits and vegetables in your diet.',
  'Take breaks from screens every 20 minutes.',
  'Practice deep breathing for 5 minutes to reduce stress.',
  'Schedule your annual health checkup today!'
];

const searchData = [
  ...doctors.map(d => ({ type: 'Doctor', name: d.name, desc: d.specialty, link: '#doctors' })),
  ...departments.map(d => ({ type: 'Department', name: d.name, desc: d.desc.substring(0, 50) + '...', link: '#specialities' })),
  ...services.map(s => ({ type: 'Service', name: s.title, desc: s.desc.substring(0, 50) + '...', link: '#services' }))
];

// DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  initLoader();
  initTheme();
  initNavigation();
  initScrollEffects();
  initRevealAnimations();
  initCounters();
  renderDepartments();
  renderDoctors();
  renderServices();
  renderTestimonials();
  renderBlog();
  renderFAQ();
  initCarousels();
  initAppointmentForm();
  initSearch();
  initSymptomChecker();
  initForms();
  initChat();
  initHealthTips();
  initCookieConsent();
  initRipple();
  setMinDate();
});

// Loader
function initLoader() {
  const loader = document.getElementById('loader');
  setTimeout(() => {
    loader.classList.add('hidden');
    document.body.style.overflow = '';
  }, 1800);
}

// Theme Toggle
function initTheme() {
  const toggle = document.getElementById('themeToggle');
  const saved = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', saved);
  updateThemeIcon(saved);

  toggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    updateThemeIcon(next);
  });
}

function updateThemeIcon(theme) {
  const icon = document.querySelector('#themeToggle i');
  icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

// Navigation
function initNavigation() {
  const header = document.getElementById('header');
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 50);
  });

  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('open');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('active');
      navMenu.classList.remove('open');
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });

  const sections = document.querySelectorAll('section[id]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
        });
      }
    });
  }, { threshold: 0.3, rootMargin: '-80px 0px -50% 0px' });

  sections.forEach(section => observer.observe(section));
}

// Scroll Effects
function initScrollEffects() {
  const progress = document.getElementById('scrollProgress');
  const backToTop = document.getElementById('backToTop');

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    progress.style.width = `${scrollPercent}%`;
    backToTop.classList.toggle('visible', scrollTop > 500);
  });

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// Reveal Animations
function initRevealAnimations() {
  const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  elements.forEach(el => observer.observe(el));
}

// Animated Counters
function initCounters() {
  const counters = document.querySelectorAll('.stat-number');
  let animated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        counters.forEach(counter => {
          const target = parseInt(counter.dataset.target);
          const duration = 2000;
          const step = target / (duration / 16);
          let current = 0;

          const update = () => {
            current += step;
            if (current < target) {
              counter.textContent = Math.floor(current).toLocaleString();
              requestAnimationFrame(update);
            } else {
              counter.textContent = target.toLocaleString();
            }
          };
          update();
        });
      }
    });
  }, { threshold: 0.5 });

  const statsSection = document.querySelector('.stats-grid');
  if (statsSection) observer.observe(statsSection);
}

// Render Functions
function renderDepartments() {
  const grid = document.getElementById('departmentsGrid');
  const deptSelect = document.getElementById('department');

  grid.innerHTML = departments.map((dept, i) => `
    <div class="dept-card reveal" style="--delay: ${i * 0.1}s">
      <div class="dept-icon"><i class="fas ${dept.icon}"></i></div>
      <h3>${dept.name}</h3>
      <p>${dept.desc}</p>
      <a href="#appointment" class="btn btn-secondary">Learn More</a>
    </div>
  `).join('');

  deptSelect.innerHTML = '<option value="">Select Department</option>' +
    departments.map(d => `<option value="${d.name}">${d.name}</option>`).join('');

  deptSelect.addEventListener('change', updateDoctorOptions);
  updateDoctorOptions();
}

function updateDoctorOptions() {
  const dept = document.getElementById('department').value;
  const doctorSelect = document.getElementById('doctor');
  const filtered = dept ? doctors.filter(d => d.department === dept) : doctors;

  doctorSelect.innerHTML = '<option value="">Select Doctor</option>' +
    filtered.map(d => `<option value="${d.name}">${d.name} - ${d.specialty}</option>`).join('');
}

function renderDoctors() {
  const carousel = document.getElementById('doctorsCarousel');

  carousel.innerHTML = doctors.map(doc => `
    <div class="doctor-card">
      <div class="doctor-image">
        <img src="${doc.image}" alt="${doc.name}" loading="lazy">
        <div class="doctor-social">
          <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
          <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
          <a href="#" aria-label="Email"><i class="fas fa-envelope"></i></a>
        </div>
      </div>
      <div class="doctor-info">
        <h3>${doc.name}</h3>
        <p class="doctor-specialty">${doc.specialty}</p>
        <div class="doctor-meta">
          <span><i class="fas fa-briefcase"></i> ${doc.experience}</span>
          <span><i class="fas fa-graduation-cap"></i> ${doc.education}</span>
        </div>
        <div class="doctor-rating">
          <span class="stars">${'★'.repeat(Math.floor(doc.rating))}${doc.rating % 1 ? '½' : ''}</span>
          <span>${doc.rating}</span>
        </div>
        <a href="#appointment" class="btn btn-primary btn-block">Book Appointment</a>
      </div>
    </div>
  `).join('');
}

function renderServices() {
  const list = document.getElementById('servicesList');

  list.innerHTML = services.map((service, i) => `
    <div class="service-item ${i % 2 !== 0 ? 'reverse' : ''} reveal">
      <div class="service-image">
        <img src="${service.image}" alt="${service.title}" loading="lazy">
      </div>
      <div class="service-content">
        <div class="service-icon"><i class="fas ${service.icon}"></i></div>
        <h3>${service.title}</h3>
        <p>${service.desc}</p>
        <a href="#appointment" class="btn btn-primary">${service.cta}</a>
      </div>
    </div>
  `).join('');
}

function renderTestimonials() {
  const carousel = document.getElementById('testimonialsCarousel');

  carousel.innerHTML = testimonials.map(t => `
    <div class="testimonial-card">
      <div class="testimonial-header">
        <img src="${t.avatar}" alt="${t.name}" class="testimonial-avatar" loading="lazy">
        <div>
          <h4>${t.name}</h4>
          <div class="testimonial-rating">${'★'.repeat(t.rating)}</div>
        </div>
      </div>
      <p>"${t.review}"</p>
    </div>
  `).join('');
}

function renderBlog() {
  const grid = document.getElementById('blogGrid');

  grid.innerHTML = blogPosts.map((post, i) => `
    <article class="blog-card reveal" style="--delay: ${i * 0.1}s">
      <div class="blog-image">
        <img src="${post.image}" alt="${post.title}" loading="lazy">
      </div>
      <div class="blog-content">
        <span class="blog-category">${post.category}</span>
        <h3>${post.title}</h3>
        <p class="blog-date"><i class="far fa-calendar"></i> ${post.date}</p>
        <a href="#" class="blog-link">Read More <i class="fas fa-arrow-right"></i></a>
      </div>
    </article>
  `).join('');
}

function renderFAQ() {
  const list = document.getElementById('faqList');

  list.innerHTML = faqs.map((faq, i) => `
    <div class="faq-item ${i === 0 ? 'active' : ''}">
      <button class="faq-question" aria-expanded="${i === 0}">
        ${faq.question}
        <i class="fas fa-chevron-down"></i>
      </button>
      <div class="faq-answer">
        <p>${faq.answer}</p>
      </div>
    </div>
  `).join('');

  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.parentElement;
      const isActive = item.classList.contains('active');

      document.querySelectorAll('.faq-item').forEach(i => {
        i.classList.remove('active');
        i.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      });

      if (!isActive) {
        item.classList.add('active');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

// Carousels
function initCarousels() {
  setupCarousel('doctorsCarousel', 'doctorsPrev', 'doctorsNext', 'doctorsDots');
  setupCarousel('testimonialsCarousel', null, null, 'testimonialsDots', true);
}

function setupCarousel(carouselId, prevId, nextId, dotsId, autoPlay = false) {
  const carousel = document.getElementById(carouselId);
  const dotsContainer = document.getElementById(dotsId);
  if (!carousel) return;

  const cards = carousel.children;
  if (!cards.length) return;

  let currentIndex = 0;
  let cardsPerView = getCardsPerView();
  let totalSlides = Math.ceil(cards.length / cardsPerView);

  function getCardsPerView() {
    if (window.innerWidth <= 768) return 1;
    if (window.innerWidth <= 1200) return 2;
    return 3;
  }

  function createDots() {
    if (!dotsContainer) return;
    dotsContainer.innerHTML = '';
    for (let i = 0; i < totalSlides; i++) {
      const dot = document.createElement('button');
      dot.className = `carousel-dot ${i === 0 ? 'active' : ''}`;
      dot.setAttribute('aria-label', `Slide ${i + 1}`);
      dot.addEventListener('click', () => goToSlide(i));
      dotsContainer.appendChild(dot);
    }
  }

  function updateCarousel() {
    const cardWidth = cards[0].offsetWidth + 28;
    carousel.style.transform = `translateX(-${currentIndex * cardWidth * cardsPerView}px)`;

    if (dotsContainer) {
      dotsContainer.querySelectorAll('.carousel-dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === currentIndex);
      });
    }
  }

  function goToSlide(index) {
    currentIndex = index;
    updateCarousel();
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateCarousel();
  }

  createDots();
  updateCarousel();

  if (prevId) document.getElementById(prevId)?.addEventListener('click', prevSlide);
  if (nextId) document.getElementById(nextId)?.addEventListener('click', nextSlide);

  let autoPlayInterval;
  if (autoPlay) {
    autoPlayInterval = setInterval(nextSlide, 5000);
    carousel.parentElement.addEventListener('mouseenter', () => clearInterval(autoPlayInterval));
    carousel.parentElement.addEventListener('mouseleave', () => {
      autoPlayInterval = setInterval(nextSlide, 5000);
    });
  }

  window.addEventListener('resize', () => {
    cardsPerView = getCardsPerView();
    totalSlides = Math.ceil(cards.length / cardsPerView);
    currentIndex = Math.min(currentIndex, totalSlides - 1);
    createDots();
    updateCarousel();
  });
}

// Appointment Form
function initAppointmentForm() {
  const form = document.getElementById('appointmentForm');
  const modal = document.getElementById('confirmationModal');
  const closeBtn = document.getElementById('closeConfirmation');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    modal.classList.add('show');
    form.reset();
    updateDoctorOptions();
  });

  closeBtn.addEventListener('click', () => modal.classList.remove('show'));
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('show');
  });

  setInterval(() => {
    const slots = document.getElementById('slotsAvailable');
    const current = parseInt(slots.textContent);
    const change = Math.random() > 0.5 ? 1 : -1;
    slots.textContent = Math.max(5, Math.min(20, current + change));
  }, 8000);
}

function setMinDate() {
  const dateInput = document.getElementById('date');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
  }
}

// Search
function initSearch() {
  const input = document.getElementById('searchInput');
  const results = document.getElementById('searchResults');

  input.addEventListener('input', () => {
    const query = input.value.toLowerCase().trim();

    if (query.length < 2) {
      results.classList.remove('active');
      return;
    }

    const filtered = searchData.filter(item =>
      item.name.toLowerCase().includes(query) ||
      item.desc.toLowerCase().includes(query) ||
      item.type.toLowerCase().includes(query)
    );

    if (filtered.length) {
      results.innerHTML = filtered.slice(0, 6).map(item => `
        <div class="search-result-item" data-link="${item.link}">
          <strong>${item.name}</strong>
          <span>${item.type} — ${item.desc}</span>
        </div>
      `).join('');
      results.classList.add('active');

      results.querySelectorAll('.search-result-item').forEach(item => {
        item.addEventListener('click', () => {
          const link = item.dataset.link;
          document.querySelector(link)?.scrollIntoView({ behavior: 'smooth' });
          results.classList.remove('active');
          input.value = '';
        });
      });
    } else {
      results.innerHTML = '<div class="search-result-item"><span>No results found</span></div>';
      results.classList.add('active');
    }
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-search')) {
      results.classList.remove('active');
    }
  });
}

// Symptom Checker (Demo)
function initSymptomChecker() {
  const input = document.getElementById('symptomInput');
  const result = document.getElementById('symptomResult');
  const analyzeBtn = document.getElementById('analyzeSymptoms');
  const tags = document.querySelectorAll('.symptom-tag');

  tags.forEach(tag => {
    tag.addEventListener('click', () => {
      tag.classList.toggle('active');
      const symptom = tag.dataset.symptom;
      const current = input.value;
      if (tag.classList.contains('active')) {
        input.value = current ? `${current}, ${symptom}` : symptom;
      } else {
        input.value = current.replace(new RegExp(`(, )?${symptom}`, 'g'), '').replace(/^, /, '');
      }
    });
  });

  analyzeBtn.addEventListener('click', () => {
    const symptoms = input.value.trim();
    if (!symptoms) return;

    result.innerHTML = '<div class="result-placeholder"><i class="fas fa-spinner fa-spin"></i><p>Analyzing symptoms...</p></div>';

    setTimeout(() => {
      const severity = symptoms.toLowerCase().includes('fever') || symptoms.toLowerCase().includes('chest')
        ? 'medium' : 'low';
      const severityLabel = severity === 'medium' ? 'Moderate' : 'Mild';

      result.innerHTML = `
        <div class="symptom-analysis">
          <h4><i class="fas fa-robot"></i> AI Analysis Results</h4>
          <span class="severity ${severity}">Severity: ${severityLabel}</span>
          <p>Based on your reported symptoms: <strong>${symptoms}</strong></p>
          <p>Possible considerations:</p>
          <ul>
            <li>Common viral infection or seasonal illness</li>
            <li>Stress-related symptoms — ensure adequate rest</li>
            <li>Monitor symptoms for 24-48 hours</li>
          </ul>
          <p><strong>Recommendation:</strong> Schedule a consultation with our General Medicine department for proper diagnosis.</p>
          <a href="#appointment" class="btn btn-primary" style="margin-top: 16px;">
            <i class="fas fa-calendar-check"></i> Book Consultation
          </a>
          <p style="font-size: 12px; color: var(--text-muted); margin-top: 12px;">
            <i class="fas fa-info-circle"></i> This is a demo tool. Always consult a healthcare professional for medical advice.
          </p>
        </div>
      `;
    }, 2000);
  });
}

// Forms
function initForms() {
  document.getElementById('quickContactForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    showToast('Message sent successfully! We\'ll get back to you soon.');
    e.target.reset();
  });

  document.getElementById('newsletterForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    showToast('Thank you for subscribing to our newsletter!');
    e.target.reset();
  });
}

function showToast(message) {
  const toast = document.createElement('div');
  toast.style.cssText = `
    position: fixed; bottom: 100px; left: 50%; transform: translateX(-50%);
    background: var(--text); color: #fff; padding: 14px 28px; border-radius: 12px;
    font-size: 14px; z-index: 10000; box-shadow: var(--shadow-lg);
    animation: fadeUp 0.3s ease;
  `;
  toast.textContent = message;
  document.body.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.3s';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// Live Chat
function initChat() {
  const toggle = document.getElementById('chatToggle');
  const chatWindowEl = document.getElementById('chatWindow');
  const close = document.getElementById('chatClose');
  const form = document.getElementById('chatForm');
  const messages = document.getElementById('chatMessages');
  const input = document.getElementById('chatInput');

  const responses = [
    'Thank you for reaching out! How can I assist you today?',
    'I can help you book an appointment. Would you like to schedule one?',
    'Our emergency line is available 24/7 at +1 (800) 911-HELP.',
    'Let me connect you with our appointment team. One moment please.',
    'Is there anything else I can help you with?'
  ];

  toggle.addEventListener('click', () => chatWindowEl.classList.toggle('open'));
  close.addEventListener('click', () => chatWindowEl.classList.remove('open'));

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = input.value.trim();
    if (!text) return;

    messages.innerHTML += `
      <div class="chat-msg user">
        <p>${text}</p>
        <span class="msg-time">Just now</span>
      </div>
    `;
    input.value = '';
    messages.scrollTop = messages.scrollHeight;

    setTimeout(() => {
      const response = responses[Math.floor(Math.random() * responses.length)];
      messages.innerHTML += `
        <div class="chat-msg agent">
          <p>${response}</p>
          <span class="msg-time">Just now</span>
        </div>
      `;
      messages.scrollTop = messages.scrollHeight;
    }, 1000);
  });
}

// Health Tips Banner
function initHealthTips() {
  const banner = document.getElementById('healthTipsBanner');
  const tipText = document.getElementById('healthTipText');
  const closeBtn = document.getElementById('tipsClose');

  if (localStorage.getItem('tipsDismissed')) return;

  setTimeout(() => {
    banner.classList.add('show');
    let tipIndex = 0;
    setInterval(() => {
      tipIndex = (tipIndex + 1) % healthTips.length;
      tipText.style.opacity = '0';
      setTimeout(() => {
        tipText.textContent = healthTips[tipIndex];
        tipText.style.opacity = '1';
      }, 300);
    }, 8000);
  }, 5000);

  closeBtn.addEventListener('click', () => {
    banner.classList.remove('show');
    localStorage.setItem('tipsDismissed', 'true');
  });
}

// Cookie Consent
function initCookieConsent() {
  const consent = document.getElementById('cookieConsent');
  const accept = document.getElementById('cookieAccept');
  const decline = document.getElementById('cookieDecline');

  if (!localStorage.getItem('cookieConsent')) {
    setTimeout(() => consent.classList.add('show'), 2500);
  }

  accept.addEventListener('click', () => {
    localStorage.setItem('cookieConsent', 'accepted');
    consent.classList.remove('show');
  });

  decline.addEventListener('click', () => {
    localStorage.setItem('cookieConsent', 'declined');
    consent.classList.remove('show');
  });
}

// Ripple Effect
function initRipple() {
  document.querySelectorAll('.ripple').forEach(btn => {
    btn.addEventListener('click', function (e) {
      const rect = this.getBoundingClientRect();
      const ripple = document.createElement('span');
      ripple.className = 'ripple-effect';
      const size = Math.max(rect.width, rect.height);
      ripple.style.width = ripple.style.height = `${size}px`;
      ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
      ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
      this.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    });
  });
}

// Re-observe dynamically added reveal elements
const mutationObserver = new MutationObserver((mutations) => {
  mutations.forEach(mutation => {
    mutation.addedNodes.forEach(node => {
      if (node.nodeType === 1) {
        const reveals = node.classList?.contains('reveal') ? [node] :
          [...(node.querySelectorAll?.('.reveal, .reveal-left, .reveal-right') || [])];
        reveals.forEach(el => {
          const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) entry.target.classList.add('visible');
            });
          }, { threshold: 0.1 });
          observer.observe(el);
        });
      }
    });
  });
});

mutationObserver.observe(document.body, { childList: true, subtree: true });

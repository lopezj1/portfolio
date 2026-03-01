// Apply site config (links and profile image)
if (typeof SITE_CONFIG !== 'undefined') {
    // Profile image
    const profileImg = document.getElementById('profile-img');
    if (profileImg) profileImg.src = SITE_CONFIG.profileImage;

    // Resolve a dot-separated key like "linkedin" or "noaaFishing.webApp"
    const resolveLink = (key) => {
        const [section, prop] = key.split('.');
        if (prop === undefined) return SITE_CONFIG.links[section];
        return SITE_CONFIG.projects[section]?.[prop];
    };

    document.querySelectorAll('[data-link]').forEach(el => {
        const value = resolveLink(el.dataset.link);
        if (!value || value === '#') {
            el.removeAttribute('href');
            el.classList.add('coming-soon');
            const textNode = Array.from(el.childNodes).find(n => n.nodeType === Node.TEXT_NODE);
            if (textNode) textNode.textContent = textNode.textContent.trimEnd() + ' (coming soon)';
        } else {
            el.href = value;
            el.target = '_blank';
            el.rel = 'noopener noreferrer';
        }
    });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.project-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(card);
});

document.addEventListener('DOMContentLoaded', function() {
    // Fade in elements with better timing
    const elements = document.querySelectorAll('.header, .description, .partners-grid, .social-grid, .disclaimer');
    elements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        setTimeout(() => {
            element.style.transition = 'all 0.6s ease';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 200);
    });

    // Logo hover effects
    const logos = document.querySelectorAll('.partner-logo, .social-logo');
    logos.forEach(logo => {
        logo.addEventListener('mouseenter', () => {
            logo.style.transform = 'translateY(-5px) scale(1.05)';
        });
        logo.addEventListener('mouseleave', () => {
            logo.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Ajout de la gestion responsive des animations
    function handleResponsiveAnimations() {
        const isMobile = window.innerWidth <= 768;
        
        elements.forEach((element, index) => {
            const delay = isMobile ? index * 100 : index * 200; // Animations plus rapides sur mobile
            setTimeout(() => {
                element.style.transition = `all ${isMobile ? '0.4s' : '0.6s'} ease`;
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, delay);
        });
    }

    // Écouter les changements de taille d'écran
    window.addEventListener('resize', handleResponsiveAnimations);
});

function openPopup(card) {
    const popup = document.getElementById('imagePopup');
    const popupImg = document.getElementById('popupImage');
    const img = card.querySelector('.screenshot-img');
    
    popupImg.src = img.src;
    popup.style.display = 'flex';
    
    // Ajuster l'affichage pour le mobile
    if (window.innerWidth <= 768) {
        popupImg.style.width = '95%';
        popupImg.style.height = 'auto';
    }
    
    document.body.style.overflow = 'hidden';
}

function closePopup() {
    const popup = document.getElementById('imagePopup');
    popup.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close popup when clicking outside the image
document.getElementById('imagePopup').addEventListener('click', function(e) {
    if (e.target === this) {
        closePopup();
    }
});

// Close popup with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closePopup();
    }
});

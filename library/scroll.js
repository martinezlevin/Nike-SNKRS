window.sr = ScrollReveal();


ScrollReveal().reveal('.carts', { scale: 0.90 });
ScrollReveal().reveal('.carts', { reset: true });

    sr.reveal('.carts', 
        {
         duration: 2500,
         opacity: 0.9,
        },
    );

    sr.reveal('.header-section', {
        duration: 2000,
        origin: 'bottom',
        distance: '-100px',
    });



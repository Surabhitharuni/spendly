// main.js — students will add JavaScript here as features are built

(function () {
    var overlay  = document.getElementById('how-it-works-modal');
    var openBtn  = document.getElementById('open-how-it-works');
    var closeBtn = document.getElementById('close-modal');
    var iframe   = document.getElementById('how-it-works-video');

    if (!overlay || !openBtn) return;

    var videoSrc = iframe.src;

    function openModal(e) {
        e.preventDefault();
        iframe.src = videoSrc;
        overlay.classList.add('is-open');
        overlay.setAttribute('aria-hidden', 'false');
    }

    function closeModal() {
        overlay.classList.remove('is-open');
        overlay.setAttribute('aria-hidden', 'true');
        iframe.src = '';
    }

    openBtn.addEventListener('click', openModal);
    closeBtn.addEventListener('click', closeModal);

    overlay.addEventListener('click', function (e) {
        if (e.target === overlay) closeModal();
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') closeModal();
    });
}());

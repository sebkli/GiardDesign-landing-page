const gridProperties = {
  columns: 3,
  trueOrder: false,
  margin: { x: 35, y: 35 },
  breakAt: {
    720: {
      trueOrder: false,
      columns: 2,
      margin: {
        x: 10,
        y: 15,
      },
    },
  },
};

document.querySelectorAll('.card').forEach((card, index) => {
  card.addEventListener('click', () => {
    console.log(`Oferta numer ${index + 1}`);
  });
});

const masonryGrid = Macy({
  container: '.gallery-container',
  ...gridProperties,
});

let galleryModal;

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('gallery-img')) {
    const src = e.target.getAttribute('src');
    document.querySelector('.modal-img').src = src;

    if (!galleryModal) {
      galleryModal = new bootstrap.Modal(
        document.getElementById('gallery-modal')
      );
    }
    galleryModal.show();
  }
});

document
  .getElementById('gallery-modal')
  .addEventListener('hidden.bs.modal', () => {
    galleryModal.hide();
  });

const toggleOverlay = () => {
  const overlay = document.getElementById('gallery-overlay');
  overlay.style.display = overlay.style.display === 'none' ? 'block' : 'none';
};

document.getElementById('gallery-btn').addEventListener('click', () => {
  toggleOverlay();
  return Macy({
    container: '.gallery-container-collapsed',
    ...gridProperties,
  });
});

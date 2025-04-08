const svgStars = document.querySelectorAll('.rating-svg svg');
  const svgOutput = document.getElementById('svgRatingValue');
  let selectedRating = 0;

  svgStars.forEach((star, index) => {
    star.addEventListener('click', () => {
      selectedRating = star.dataset.value;
      svgOutput.textContent = `Оцінка: ${selectedRating}`;
      updateStars(selectedRating);
    });
  });

  function updateStars(rating) {
    svgStars.forEach(star => {
      star.classList.remove('selected');
    });
    svgStars.forEach(star => {
      if (star.dataset.value <= rating) {
        star.classList.add('selected');
      }
    });
  }
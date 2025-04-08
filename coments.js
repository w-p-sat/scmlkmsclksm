// const form = document.getElementById('commentForm');
//   const commentsContainer = document.getElementById('commentsContainer');

//   form.addEventListener('submit', function(e) {
//     e.preventDefault();

//     const name = document.getElementById('name').value.trim();
//     const email = document.getElementById('email').value.trim();
//     const text = document.getElementById('commentText').value.trim();

//     if (name && email && text) {
//       const comment = document.createElement('div');
//       comment.className = 'comment';
//       comment.innerHTML = `
//         <strong>${name}</strong>
//         <small>${email}</small>
//         <p>${text}</p>
//       `;
//       commentsContainer.prepend(comment);

//       // Очищаємо форму
//       form.reset();
//     }
//   });
const form = document.getElementById("commentForm");
const container = document.getElementById("commentsContainer");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const comment = document.getElementById("commentText").value.trim();

  if (!name || !comment) return;

  // Створення коментаря
  const commentBlock = document.createElement("div");
  commentBlock.classList.add("comment");

  // SVG аватар
  const initial = name[0].toUpperCase();
  const avatarSVG = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  avatarSVG.setAttribute("width", "40");
  avatarSVG.setAttribute("height", "40");
  avatarSVG.setAttribute("viewBox", "0 0 40 40");
  avatarSVG.classList.add("avatar-svg");

  const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  circle.setAttribute("cx", "20");
  circle.setAttribute("cy", "20");
  circle.setAttribute("r", "20");
  circle.setAttribute("fill", "#ffd700");

  const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
  text.setAttribute("x", "50%");
  text.setAttribute("y", "50%");
  text.setAttribute("dominant-baseline", "middle");
  text.setAttribute("text-anchor", "middle");
  text.setAttribute("font-size", "18");
  text.setAttribute("fill", "#fff");
  text.setAttribute("font-family", "Arial, sans-serif");
  text.textContent = initial;

  avatarSVG.appendChild(circle);
  avatarSVG.appendChild(text);

  // Вміст справа від аватарки
  const content = document.createElement("div");
  content.classList.add("comment-content");

  const topRow = document.createElement("div");
  topRow.classList.add("top-row");

  const author = document.createElement("h4");
  author.textContent = name;

  const timestamp = document.createElement("span");
  const now = new Date();
  timestamp.textContent = now.toLocaleString("uk-UA");
  timestamp.classList.add("timestamp");

  topRow.appendChild(author);
  topRow.appendChild(timestamp);

  const commentText = document.createElement("p");
  commentText.textContent = comment;

  content.appendChild(topRow);
  content.appendChild(commentText);

  // Збираємо все
  commentBlock.appendChild(avatarSVG);
  commentBlock.appendChild(content);
  container.appendChild(commentBlock);

  form.reset();
});
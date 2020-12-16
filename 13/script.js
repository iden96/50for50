const container = document.getElementById('tags');
const textarea = document.getElementById('textarea');

const times = 30;

textarea.focus();

textarea.addEventListener('keyup', e => {
  updateTags(e.target.value);
  if (e.key === 'Enter') {
    e.target.value = '';
    makeChoice();
  };
});

function updateTags(str) {
  const tags = str.split(',');
  container.innerHTML = '';
  if (!str) return;
  tags.forEach(tag => {
    const $el = document.createElement('div');
    $el.classList.add('tag');
    $el.textContent = tag;
    container.appendChild($el);
  });
}

function makeChoice() {
  const tags = document.querySelectorAll('.tag');
  for (let i = 0; i < times; i++) {
    setTimeout(() => {
      unhighlightTags(tags);
      highlightTag(getRandomTag(tags));
    }, i*100);
  }
}

function highlightTag(tag) {
  tag.classList.add('highlight');
}

function unhighlightTags(tags) {
  tags.forEach(tag => tag.classList.remove('highlight'));
}

function getRandomTag(tags) {
  return tags[Math.floor((Math.random() * tags.length))];
}

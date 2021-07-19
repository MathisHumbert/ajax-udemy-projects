const btn = document.querySelector('.btn');
const content = document.querySelector('.content');
const img = document.querySelector('.container img');
const url = 'https://api.chucknorris.io/jokes/random';

btn.addEventListener('click', () => {
  fetch(url)
    .then((data) => data.json())
    .then((response) => displayData(response))
    .catch((err) => console.log(err));
});

const displayData = (data) => {
  img.classList.add('shake-img');
  // const { value: joke } = JSON.parse(xhr.responseText);
  // const response = JSON.parse(data);
  const joke = data.value;
  content.textContent = joke;
  const random = Math.random() * 1000;
  setTimeout(() => {
    img.classList.remove('shake-img');
  }, random);
};

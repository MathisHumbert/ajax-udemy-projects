const btn = document.querySelector('.btn');
const content = document.querySelector('.content');
const img = document.querySelector('.container img');
const url = 'https://api.chucknorris.io/jokes/random';

btn.addEventListener('click', async () => {
  try {
    const data = await fetch(url);
    const response = await data.json();
    displayData(response);
  } catch (error) {
    console.log(error);
  }
});

const displayData = ({ value: joke }) => {
  img.classList.add('shake-img');
  content.textContent = joke;
  const random = Math.random() * 1000;
  setTimeout(() => {
    img.classList.remove('shake-img');
  }, random);
};

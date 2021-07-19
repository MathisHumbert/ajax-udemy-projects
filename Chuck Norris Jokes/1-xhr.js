const btn = document.querySelector('.btn');
const content = document.querySelector('.content');
const url = 'https://api.chucknorris.io/jokes/random';

btn.addEventListener('click', () => {
  getData(url);
});

const getData = (url) => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.send();
  xhr.onreadystatechange = () => {
    if (xhr.readyState !== 4) {
      return;
    }
    if (xhr.status === 200) {
      // const { value: joke } = JSON.parse(xhr.responseText);
      const response = JSON.parse(xhr.responseText);
      const joke = response.value;
      content.textContent = joke;
    } else {
      console.log({
        status: xhr.status,
        text: xhr.statusText,
      });
    }
  };
};

const getPosts = () => {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');
  xhr.send();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const postsContainer = document.getElementById('posts');
      postsContainer.innerHTML = '';
      const posts = JSON.parse(xhr.responseText);
      posts.forEach(post => {
        const li = document.createElement('li');
        li.textContent = post.title;
        postsContainer.prepend(li);
      });
    }
  };

  xhr.onerror = function (error) {
    console.error(error);
  };
};

const button = document.querySelector('button');
button.addEventListener('click', getPosts);

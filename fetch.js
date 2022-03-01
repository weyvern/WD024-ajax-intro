const getPosts = () => {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(posts => {
      const postsContainer = document.getElementById('posts');
      postsContainer.innerHTML = '';
      posts.forEach(post => {
        const li = document.createElement('li');
        li.textContent = post.title;
        postsContainer.prepend(li);
      });
    })
    .catch(err => console.error(err));
};

const button = document.querySelector('button');
button.addEventListener('click', getPosts);

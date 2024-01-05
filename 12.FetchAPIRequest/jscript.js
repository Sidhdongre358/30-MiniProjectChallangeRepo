const btton = document.querySelector(".btn");

const postsConatainer = document.querySelector(".posts");
console.log(postsConatainer);

// let's fetch data from the jsonplaceholder api's

const getPosts = async () => {
  try {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const response = await fetch(url);
    const data = await response.json();

    // lets convert it into the html

    let output = data.map((post) => {
      return ` <div class="post">
      <h3> Post ${post.id}  ${post.title}</h3>
      <p>${post.body}</p>
    </div>`;
    });
    let finalOutput = output.join("");

    postsConatainer.innerHTML = finalOutput;
  } catch (error) {
    console.log(error);
  }
};

// funtion to load posts
const loadPost = () => {
  console.log("clicked");
  getPosts();
};
// add evemt listener to btn
btton.addEventListener("click", loadPost);

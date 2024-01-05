const btton = document.querySelector(".btn");
const unloadbtn = document.querySelector(".unload-btn");
const postsConatainer = document.querySelector(".posts");
const textHeading = document.getElementById("load-text");

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
    textHeading.innerHTML = `<h2>Data fetched...<h2/>`;
  } catch (error) {
    console.log(error);
  }
};

// funtion to load posts
const loadPost = () => {
  console.log("loaded");
  getPosts();
};
const unloadPost = () => {
  console.log("unloaded");
  textHeading.innerHTML = `<h2>Please click to fetch the Posts<h2/>`;
  postsConatainer.innerHTML = null;
};
unloadPost();
// add evemt listener to btn
btton.addEventListener("click", loadPost);
unloadbtn.addEventListener("click", unloadPost);

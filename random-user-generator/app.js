const result = document.getElementById("result");
const btn = document.querySelector(".btn");
const listItems = [];
const getRandomUser = async () => {
  const num = Math.floor(Math.random() * 80 + 1);
  const url = `https://randomuser.me/api/?results=1&gender=female&seed=${num}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    result.innerHTML = "";
    if (data.results && data.results.length > 0) {
      generateCard(data.results[0]);
    } else {
      throw new Error("No user data found");
    }
  } catch (error) {
    console.error("Error fetching random user data:", error);
  }
};
const generateCard = (user) => {
  const li = document.createElement("li");
  const { picture, name, location } = user;

  li.innerHTML = `
    <img src="${picture.large}" class="user-img">
    <h4 class="user-name">${name.first} ${name.last}</h4>
    <p class="user-location">${location.city}, ${location.country}</p>
  `;
  result.appendChild(li);
  listItems.push(li);
};
btn.addEventListener("click", getRandomUser);

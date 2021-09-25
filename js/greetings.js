const hello = [
  "I wish you the best of luck.",
  "God bless you!",
  "I hope you'll be happy.",
  "I wish you happiness.",
  "You can do it!",
  "Don’t give up!",
  "You’re almost there!",
  "Keep it up!",
  "I’m so proud of you.",
  "You’re so awesome.",
  "You can make it.",
  "Anything is possible.",
  "Do your best.",
  "I am here for you.",
  "I got your back.",
  "Better late than never.",
  "It's now or never.",
  "Nothing can stop you.",
  "I believe in you.",
  "I hope it goes well.",
  "God is with you.",
  "Don't be afraid of consequences.",
  "You are doing great.",
  "Everything changes in the end.",
  "Don't lose heart.",
  "The sky is the limit.",
  "You will be alright.",
  "It's not over until it's over.",
  "Take care of yourself.",
  "Take it easy.",
  "Keep it up.",
];

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const userTemp = loginInput.value;
  username = userTemp.charAt(0).toUpperCase() + userTemp.slice(1);
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

const todayshello = hello[Math.floor(Math.random() * hello.length)];

function paintGreetings(username) {
  greeting.innerText = `${username}, ${todayshello}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  todo.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}

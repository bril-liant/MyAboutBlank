const images = [
  "https://pbs.twimg.com/media/ENbTFEfVUAEcft6.jpg:orig",
  "https://pbs.twimg.com/media/EWw7EKqXkAQzf08.jpg:orig",
  "https://pbs.twimg.com/media/EqkfJeyVkAA8_eK.jpg:orig",
  "https://pbs.twimg.com/media/D9OipFwVUAA9YYc.jpg:orig",
  "https://pbs.twimg.com/media/EX-v445VAAAbXhw.jpg:orig",
  "https://pbs.twimg.com/media/EkSPgwkUcAIb3os.jpg:orig",
  "https://pbs.twimg.com/media/EaOzUtJWsAAp1df.jpg:orig",
  "https://pbs.twimg.com/media/EzlL7qnUcAIpvo8.jpg:orig",
  "https://pbs.twimg.com/media/ElgWXJ5VoAIkwWX.jpg:orig",
  "https://pbs.twimg.com/media/Ej5G7PMVkAEJE05.jpg:orig",
  "https://pbs.twimg.com/media/EojYN1SUYAI_7Xd.jpg:orig",
  "https://pbs.twimg.com/media/E9TIz-CUUAAkTby.jpg:orig",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = chosenImage;

document.body.appendChild(bgImage);

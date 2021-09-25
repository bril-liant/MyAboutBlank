let images = [
  "https://pbs.twimg.com/media/EqkfJeyVkAA8_eK.jpg:orig",
  "https://pbs.twimg.com/media/EX-v445VAAAbXhw.jpg:orig",
  "https://pbs.twimg.com/media/EkSPgwkUcAIb3os.jpg:orig",
  "https://pbs.twimg.com/media/EzlL7qnUcAIpvo8.jpg:orig",
  "https://pbs.twimg.com/media/Ej5G7PMVkAEJE05.jpg:orig",
  "https://pbs.twimg.com/media/EojYN1SUYAI_7Xd.jpg:orig",
  "https://pbs.twimg.com/media/E1RPlkjVIAUHY7e.jpg:orig",
  "https://pbs.twimg.com/media/EqFwGZBUUAAUJBB.jpg:orig",
  "https://pbs.twimg.com/media/Ejacqp9UwAA2U8i.jpg:orig",
  "https://pbs.twimg.com/media/ErRx97eU0AEmuhD.jpg:orig",
  "https://pbs.twimg.com/media/Epq1IQBVQAATzaS.jpg:orig",
  "https://pbs.twimg.com/media/E8lfdcdUUAQx5jW.jpg:orig",
  "https://pbs.twimg.com/media/EkNFFaDVoAApZbW.jpg:orig",
  "https://pbs.twimg.com/media/EpB9rBXUcActF7w.jpg:orig",
  "https://pbs.twimg.com/media/E8u_-fFVcAE-tT0.jpg:orig",
  "https://pbs.twimg.com/media/E9EJ23uVkAENj5Y.jpg:orig",
  "https://pbs.twimg.com/media/ElkLzHiVgAIoKLV.jpg:orig",
  "https://pbs.twimg.com/media/E0x786-UYAAd8w2.jpg:orig",
  "https://pbs.twimg.com/media/FAIMnwJVUAMKBLQ.jpg:orig",
  "https://pbs.twimg.com/media/EWw7EKqXkAQzf08.jpg:orig",
  "https://pbs.twimg.com/media/E8WXTc7VIAoDDUl.jpg:orig",
  "https://pbs.twimg.com/media/E9EJ23uVkAENj5Y.jpg:orig",
  "https://pbs.twimg.com/media/E8VngetVcAECg_j.jpg:orig",
  "https://pbs.twimg.com/media/EjPLjNlVoAEoLgI.jpg:orig",
  "https://pbs.twimg.com/media/E29zVcTVIAQtOLA.jpg:orig",
  "https://pbs.twimg.com/media/Eoe9wS8VEAIRXqx.jpg:orig",
  "https://pbs.twimg.com/media/Eoe9wS7U8AI51Cm.jpg:orig",
  "https://pbs.twimg.com/media/EoitGAVVQAABZVU.jpg:orig",
  "https://pbs.twimg.com/media/EoitGAVVoAAxMsq.jpg:orig",
  "https://pbs.twimg.com/media/Ei7WcC4U0AI5PsU.jpg:orig",
  "https://pbs.twimg.com/media/Eph12Z3VQAIHy7-.jpg:orig",
  "https://pbs.twimg.com/media/Ei182mGVgAEfQyK.jpg:orig",
  "https://pbs.twimg.com/media/E9oCMNgVkAQoSzY.jpg:orig",
  "https://pbs.twimg.com/media/Eph12Z4VgAMtT4m.jpg:orig",
  "https://pbs.twimg.com/media/E9tb9OPVkAAXFjW.jpg:orig",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = chosenImage;

document.documentElement.style.setProperty(
  `--background-image`,
  `url(${chosenImage})`
);

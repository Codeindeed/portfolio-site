import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";

const textInput = document.getElementById("texts-input");
const button = document.getElementById("button");
const footerContent = document.querySelector(".footer__text");
const Dates = new Date().getFullYear();

footerContent.innerHTML = `  © ${Dates} - Developed by
        <a rel="noreferrer" href="https://github.com/Codeindeed" target="_blank">Alex Favour</a>`;

async function sendMessage() {
  if (!textInput.value || textInput.value.length < 5) {
    textInput.value = "";
    console.log(textInput.placeholder);
    return (textInput.placeholder = "Send me a long nice message");
  }
  const inputs = {
    chatId: "79001234567@c.us",
    message: `${textInput.value} from portfolio`,
  };
  const instance = 1101746670;
  const apiTokenInstance = `189fa2eaee2a4c32bc26a1f62311a3b818dd810b6d194a1e94`;
  const API = `https://api.green-api.com/waInstance${instance}/SendMessage/${apiTokenInstance}`;
  try {
    let response = await fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputs),
    });
    let data = await response.json();
    let info = data.idMessage ? true : false;
    if (info) {
      button.textContent = "Success";
      setTimeout(() => (button.textContent = "Send Message"), 4000);
      textInput.value = "";
      textInput.placeholder = "Message me on whatsapp anonymously";
    } else {
      button.textContent = "Message failed ";
      throw new Error();
    }
  } catch (error) {
    console.log(error.message);
  }
}

button.addEventListener("click", sendMessage);
initScrollReveal(targetElements, defaultProps);
initTiltEffect();

if (module.hot) {
  module.hot.accept();
}

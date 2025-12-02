let btn = document.querySelector("#btn");
let content = document.querySelector("#content");
let voice = document.querySelector("#voice");

function speak(text) {
    let speech = new SpeechSynthesisUtterance(text);

    speech.rate = 1;
    speech.pitch = 0.5;
    speech.volume = 5;

    speechSynthesis.cancel();
    speechSynthesis.speak(speech);
}

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new SpeechRecognition();

recognition.lang = "en-US";
recognition.continuous = false;
recognition.onresult = (event) => {
    let userVoice = event.results[0][0].transcript;
    content.innerText = userVoice;

    respond(userVoice.toLowerCase());
};

btn.addEventListener("click", () => {
    recognition.start();
    btn.style.display = "none";
    voice.style.display = "block";
});

function respond(message) {
    btn.style.display = "flex";
    voice.style.display = "none";
    if (message.includes("hello") || message.includes("hi")) {
        speak("Hello! How can I help you today?");
    }
    else if (message.includes("how are you")) {
        speak("I am doing great! Thanks for asking.");
    }
    else if (message.includes("your name")) {
        speak("My name is Anshul i am your virtual assistant.");
    }
    else if (message.includes("time")) {
        let time = new Date().toLocaleTimeString();
        speak("The time is " + time);
    }
    else if (message.includes("date")) {
        let date = new Date().toDateString();
        speak("Today is " + date);
    }
    else if (message.includes("open youtube")) {
        speak("Opening YouTube......");
        window.open("https://www.youtube.com", "_blank");
    }
    else if (message.includes("open google")) {
        speak("Opening Google......");
        window.open("https://www.google.com", "_blank");
    }
    else if (message.includes("open instagram")) {
        speak("Opening Instagram.....");
        window.open("https://www.instagram.com", "_blank");
    }
    else if (message.includes("who made you")) {
        speak("I was created by my developer.");
    }
    else if (message.includes("thank you")) {
        speak("You're most welcome!");
    }
    else if (message.includes("open calculator")) {
        speak("Opening Calculator...");
        window.open("calculator://", "_blank");
    }
    else if (message.includes("open spotify")) {
        speak("Opening Spotify...");
        window.open("spotify://", "_blank");
    }
    else if (message.includes("open whatsapp")) {
        speak("Opening WhatsApp...");
        window.open("whatsapp://", "_blank");
    }
    else if (message.includes("play some music")) {
        speak("Playing some music on Spotify...");
        window.open("spotify:track:08GYLNhKthS3arMdXsveRI?si=5daf3a16bcac4b4a", "_blank");
    }
    else if (message.includes("play an english song")) {
        speak("Playing C O 2 on Spotify...");
        window.open("spotify:track:3hB9lDLyAClYVZivMMl20N?si=1cc165be722f46ea", "_blank");
    }
    else if (message.includes("open my playlist")) {
        speak("Opening your playlist on Spotify...");
        window.open("spotify:playlist:07Ny8rvJ5bAils6mo47crH?si=e8a49ad201ab48ea", "_blank");
    }
    else {
        let finalText="this is what I found on internet regarding " + message.replace("anshul", "") || message.replace("Anshul","")
        speak(finalText)
        window.open(`https://www.google.com/search?q=${message.replace("anshul", "")}`, "_blank")
    }
}
btn.addEventListener("click", () => {
    speak("Listening...");
    recognition.start();
});

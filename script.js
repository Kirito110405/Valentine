const messages = [
    "Em có chắc không?",
    "Em thực sự chắc chắn??",
    "Em hong thay đổi ý định hả?",
    "Em ơi, làm ơn cho anh cơ hội đi :3...",
    "Hãy suy nghĩ kỹ lại đi mà!",
    "Nếu em nói không, anh sẽ rất buồn...",
    "Anh cực kỳ buồn...",
    "Anh sẽ cực cực cực kỳ buồn...",
    "Được rồi, anh sẽ ngừng hỏi...",
    "Đùa thôi, em làm ơn nói có đi! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
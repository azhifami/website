const form = document.getElementById('chat-form');
const input = document.getElementById('user-input');
const chatBox = document.getElementById('chat-box');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const userMessage = input.value.trim();
  if (!userMessage) return;

  appendMessage(userMessage, 'user');
  input.value = '';
  
  // Tampilkan "typing..."
  appendMessage('...', 'bot', true);

  const botMessage = await getChatGPTResponse(userMessage);

  // Hapus "typing..." dan ganti dengan jawaban asli
  const typingElem = document.querySelector('.bot.typing');
  if (typingElem) typingElem.remove();

  appendMessage(botMessage, 'bot');
});

function appendMessage(message, sender, typing = false) {
  const msgDiv = document.createElement('div');
  msgDiv.classList.add('message', sender);
  if (typing) msgDiv.classList.add('typing');
  msgDiv.textContent = message;
  chatBox.appendChild(msgDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

async function getChatGPTResponse(prompt) {
  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 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'
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
        max_tokens: 200
      })
    });
    const data = await response.json();
    return data.choices[0].message.content.trim();
  } catch (err) {
    console.error(err);
    return "Maaf, terjadi error saat menghubungi ChatGPT.";
  }
}

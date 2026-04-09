// ======================= script.js =======================
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

function checkAnswer(btn, correct) {
  if (correct) {
    btn.classList.add('correct');
    btn.innerText += " (إجابة صحيحة!)";
  } else {
    btn.classList.add('wrong');
    btn.innerText += " (حاول مرة أخرى)";
  }
}
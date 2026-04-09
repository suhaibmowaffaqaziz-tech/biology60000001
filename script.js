// وظيفة التمرير السلس بين الأقسام
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// وظيفة تصحيح الأسئلة التفاعلية
function checkAnswer(btn, correct) {
  const parent = btn.parentElement;
  const buttons = parent.querySelectorAll('button');
  
  // تعطيل الأزرار بعد الإجابة
  buttons.forEach(b => b.style.pointerEvents = 'none');

  if (correct) {
    btn.classList.add('correct');
    btn.innerHTML += " ✓ (إجابة صحيحة)";
  } else {
    btn.classList.add('wrong');
    btn.innerHTML += " ✗ (إجابة خاطئة)";
  }
}
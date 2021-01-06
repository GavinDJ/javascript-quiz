const correctAnswers = ["B","B","B","B"]
const form = document.querySelector(".quiz-form")
const result = document.querySelector(".result");



form.addEventListener("submit", e => {
  e.preventDefault();
  let score = 0;

  const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

  userAnswers.forEach((answer, i) => {
    if(answer === correctAnswers[i]){
      score += 25;
    }
  });

  let output = 0;
  let interval = setInterval(() => {
      result.querySelector("span").textContent = `${output}%`
    if (output === score){
      clearInterval(interval)
    } else {
      output++
    }
  }, 20)

  scrollTo(0,0);

  result.classList.remove("d-none")
});

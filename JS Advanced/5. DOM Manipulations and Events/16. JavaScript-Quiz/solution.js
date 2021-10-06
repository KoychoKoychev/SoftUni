function solve() {
  let answers = {
    1:"onclick",
    2:"JSON.stringify()",
    3:"A programming API for HTML and XML documents",
  }
  const options = document.getElementsByClassName("answer-text");
  const arr = Array.from(options);
  let correct = 0;
  let answered = 0;
  for (let el of arr){
    el.addEventListener("click",check);
  }
  function check(ev){
    const section = ev.target.parentNode.parentNode.parentNode.parentNode;
    answered++
    if (Object.values(answers).includes((ev.target.textContent))){
      correct++;
    }
    section.style.display = "none";
    section.nextElementSibling.style.display = "block";
    if (answered == 3){
      document.getElementById("results").style.display = "block"
      if (correct==3){
        document.getElementsByClassName("results-inner")[0].firstElementChild.textContent = "You are recognized as top JavaScript fan!";
      }else{
        document.getElementsByClassName("results-inner")[0].firstElementChild.textContent = `You have ${correct} right answers`;
      }
    }
  }
}

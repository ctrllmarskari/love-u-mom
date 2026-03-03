const message = `ur love means everything to me.\nyou'll always be number one, life has been unfair to u.\n\nbut u never gave up.u cried i silence,fought alone,n showed up.”\n\nu r the strongest woman i know,i love u mom w all my heart\n\ni hope u live longer mom.`;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}

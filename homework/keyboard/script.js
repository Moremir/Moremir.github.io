const qs = (selector) => document.querySelector(selector);

const ePiano = qs('.electro-piano');

document.addEventListener('keyup', (e) => {
    switch (e.keyCode) {
      case 49:
        const audio1 = new Audio("./musics/1.mp3");
        audio1.play();
        qs(".do").style.backgroundColor = "purple";
        qs('.do').style.marginTop = "50px";
        break;

      case 50:
        const audio2 = new Audio("./musics/2.mp3");
        audio2.play();
        qs(".re").style.backgroundColor = "brown";
        qs('.re').style.marginBottom = "50px";
        break;

      case 51:
        const audio3 = new Audio("./musics/3.mp3");
        audio3.play();
        qs(".mi").style.backgroundColor = "green";
        qs(".mi").style.marginTop = "50px";
        break;

      case 52:
        const audio4 = new Audio("./musics/4.mp3");
        audio4.play();
        qs(".fa").style.backgroundColor = "blue";
        qs(".fa").style.marginBottom = "50px";
        break;

      case 53:
        const audio5 = new Audio("./musics/5.mp3");
        audio5.play();
        qs(".so").style.backgroundColor = "grey";
        qs(".so").style.marginTop = "50px";
        break;

      case 54:
        const audio6 = new Audio("./musics/6.mp3");
        audio6.play();
        qs(".lya").style.backgroundColor = "yellow";
        qs(".lya").style.marginBottom = "50px";
        break;

      case 55:
        const audio7 = new Audio("./musics/7.mp3");
        audio7.play();
        qs(".si").style.backgroundColor = "indigo";
        qs(".si").style.marginTop = "50px";
        break;

      default:
        break;
    }
})


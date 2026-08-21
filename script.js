/* =========================================================
   PRIYANKA & NAVEEN
   CINEMATIC ANNIVERSARY EXPERIENCE
========================================================= */


/* =========================================================
   CONFIGURATION
========================================================= */

const anniversaryDate = new Date("2020-08-23T00:00:00");


/* =========================================================
   ELEMENTS
========================================================= */

const loader = document.getElementById("loader");
const song = document.getElementById("song");
const musicBtn = document.getElementById("musicBtn");


/* =========================================================
   PAGE LOADER
========================================================= */

window.addEventListener("load", () => {

  setTimeout(() => {

    if (!loader) return;

    loader.style.opacity = "0";

    setTimeout(() => {
      loader.remove();
    }, 800);

  }, 900);

});


/* =========================================================
   LIVE ANNIVERSARY COUNTER
========================================================= */

function updateCounter() {

  const now = new Date();

  const difference =
    Math.max(
      0,
      now.getTime() - anniversaryDate.getTime()
    );

  const totalSeconds =
    Math.floor(difference / 1000);


  const days =
    Math.floor(totalSeconds / 86400);

  const hours =
    Math.floor(totalSeconds / 3600) % 24;

  const minutes =
    Math.floor(totalSeconds / 60) % 60;

  const seconds =
    totalSeconds % 60;


  const daysElement =
    document.getElementById("days");

  const hoursElement =
    document.getElementById("hours");

  const minutesElement =
    document.getElementById("minutes");

  const secondsElement =
    document.getElementById("seconds");


  if (daysElement) {
    daysElement.textContent =
      days.toLocaleString();
  }

  if (hoursElement) {
    hoursElement.textContent =
      String(hours).padStart(2, "0");
  }

  if (minutesElement) {
    minutesElement.textContent =
      String(minutes).padStart(2, "0");
  }

  if (secondsElement) {
    secondsElement.textContent =
      String(seconds).padStart(2, "0");
  }

}


updateCounter();

setInterval(updateCounter, 1000);


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealObserver =
  new IntersectionObserver(

    (entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          entry.target.classList.add("visible");

          revealObserver.unobserve(entry.target);

        }

      });

    },

    {
      threshold: 0.14
    }

  );


document
  .querySelectorAll(".reveal")
  .forEach((element) => {

    revealObserver.observe(element);

  });


/* =========================================================
   JOURNEY IMAGE PARALLAX
========================================================= */

const journeyImages =
  document.querySelectorAll(
    ".journey-image img"
  );


window.addEventListener(
  "scroll",
  () => {

    const windowHeight =
      window.innerHeight;


    journeyImages.forEach((image) => {

      const rect =
        image.getBoundingClientRect();

      const center =
        rect.top + rect.height / 2;

      const distance =
        center - windowHeight / 2;

      const movement =
        Math.max(
          -18,
          Math.min(18, distance * -0.025)
        );


      image.style.transform =
        `scale(1.035) translateY(${movement}px)`;

    });

  },
  {
    passive: true
  }
);


/* =========================================================
   MUSIC PLAYER
========================================================= */

if (musicBtn) {

  musicBtn.addEventListener(
    "click",
    () => {

      /*
        IMPORTANT:

        Add music.mp3 to the project folder.

        Then change in index.html:

        src=""

        to:

        src="music.mp3"
      */


      if (!song || !song.src) {

        alert(
          "Add the couple's licensed song as music.mp3 and set src=\"music.mp3\" in index.html."
        );

        return;

      }


      if (song.paused) {

        song
          .play()
          .then(() => {

            musicBtn.innerHTML =
              "❚❚ <span>Our Song</span>";

          })
          .catch(() => {

            alert(
              "The browser blocked audio playback. Click the music button again."
            );

          });

      } else {

        song.pause();

        musicBtn.innerHTML =
          "♪ <span>Our Song</span>";

      }

    }
  );

}


/* =========================================================
   FLOATING HEARTS
========================================================= */

function createHeart() {

  const heart =
    document.createElement("div");

  heart.className =
    "floating-heart";

  heart.innerHTML = "♥";


  const size =
    Math.random() * 12 + 8;

  const left =
    Math.random() * 100;

  const duration =
    Math.random() * 5 + 5;


  heart.style.left =
    `${left}%`;

  heart.style.fontSize =
    `${size}px`;

  heart.style.animationDuration =
    `${duration}s`;


  document.body.appendChild(heart);


  setTimeout(() => {

    heart.remove();

  }, duration * 1000);

}


/*
   Create a heart occasionally.
*/

setInterval(
  createHeart,
  2800
);


/* =========================================================
   LOVE LETTER EXPERIENCE
========================================================= */

const letter =
  document.querySelector(".letter");


if (letter) {

  const letterWrap =
    letter.parentElement;


  /*
     Create the button.
  */

  const openButton =
    document.createElement("button");

  openButton.className =
    "open-letter";

  openButton.type =
    "button";

  openButton.innerHTML =
    `
      <span class="envelope-icon">✉</span>
      <span>Open My Heart</span>
    `;


  /*
     Put button before the letter.
  */

  letterWrap.insertBefore(
    openButton,
    letter
  );


  /*
     Initially hide letter.
  */

  letter.classList.add(
    "letter-hidden"
  );


  /*
     Button interaction.
  */

  openButton.addEventListener(
    "click",
    () => {

      letter.classList.toggle(
        "letter-open"
      );


      openButton.classList.toggle(
        "opened"
      );


      if (
        openButton.classList.contains(
          "opened"
        )
      ) {

        openButton.innerHTML =
          `
            <span class="envelope-icon">♥</span>
            <span>With All My Love</span>
          `;

      } else {

        openButton.innerHTML =
          `
            <span class="envelope-icon">✉</span>
            <span>Open My Heart</span>
          `;

      }

    }
  );

}


/* =========================================================
   FINAL SECTION OBSERVER
========================================================= */

const finalSection =
  document.querySelector(".final");


if (finalSection) {

  const finalObserver =
    new IntersectionObserver(

      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            finalSection.classList.add(
              "final-active"
            );

            createHeartBurst();

            finalObserver.unobserve(
              finalSection
            );

          }

        });

      },

      {
        threshold: 0.4
      }

    );


  finalObserver.observe(
    finalSection
  );

}


/* =========================================================
   FINAL HEART BURST
========================================================= */

function createHeartBurst() {

  const numberOfHearts = 22;


  for (
    let i = 0;
    i < numberOfHearts;
    i++
  ) {

    setTimeout(() => {

      const heart =
        document.createElement("div");

      heart.className =
        "burst-heart";

      heart.innerHTML =
        "♥";


      const angle =
        (Math.PI * 2 * i) /
        numberOfHearts;


      const distance =
        Math.random() * 220 + 100;


      heart.style.setProperty(
        "--x",
        `${Math.cos(angle) * distance}px`
      );


      heart.style.setProperty(
        "--y",
        `${Math.sin(angle) * distance}px`
      );


      finalSection.appendChild(
        heart
      );


      setTimeout(() => {

        heart.remove();

      }, 1800);

    }, i * 35);

  }

}


/* =========================================================
   SMOOTH ANCHOR NAVIGATION
========================================================= */

document
  .querySelectorAll('a[href^="#"]')
  .forEach((link) => {

    link.addEventListener(
      "click",
      (event) => {

        const target =
          document.querySelector(
            link.getAttribute("href")
          );


        if (!target) return;


        event.preventDefault();


        target.scrollIntoView({
          behavior: "smooth"
        });

      }
    );

  });


/* =========================================================
   CURSOR GLOW — DESKTOP
========================================================= */

const cursorGlow =
  document.createElement("div");

cursorGlow.className =
  "cursor-glow";

document.body.appendChild(
  cursorGlow
);


window.addEventListener(
  "mousemove",
  (event) => {

    cursorGlow.style.left =
      `${event.clientX}px`;

    cursorGlow.style.top =
      `${event.clientY}px`;

  },
  {
    passive: true
  }
);


/* =========================================================
   REDUCE EFFECTS FOR MOBILE
========================================================= */

if (window.innerWidth < 700) {

  cursorGlow.remove();

}
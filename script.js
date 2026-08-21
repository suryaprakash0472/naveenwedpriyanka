/* =========================================================
   PRIYANKA & NAVEEN
   FROM HELLO TO FOREVER
   PREMIUM ANNIVERSARY EXPERIENCE
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       ELEMENTS
    ===================================================== */

    const loader = document.getElementById("loader");
    const navbar = document.getElementById("navbar");

    const beginButton =
        document.getElementById("beginButton");

    const journey =
        document.getElementById("journey");

    const topButton =
        document.getElementById("topButton");

    const menuButton =
        document.getElementById("menuButton");

    const mobileMenu =
        document.getElementById("mobileMenu");

    const musicButton =
        document.getElementById("musicButton");

    const loveSong =
        document.getElementById("loveSong");

    const cursorHeart =
        document.getElementById("cursorHeart");

    const lightbox =
        document.getElementById("lightbox");

    const lightboxImage =
        document.getElementById("lightboxImage");

    const lightboxCaption =
        document.getElementById("lightboxCaption");

    const lightboxClose =
        document.getElementById("lightboxClose");

    const yearsTogether =
        document.getElementById("yearsTogether");

    const daysTogether =
        document.getElementById("daysTogether");


    /* =====================================================
       PAGE LOADER
    ===================================================== */

    window.addEventListener("load", () => {

        setTimeout(() => {

            if (loader) {

                loader.classList.add("hide");

            }

        }, 900);

    });


    /* =====================================================
       NAVBAR SCROLL EFFECT
    ===================================================== */

    function updateNavbar() {

        if (!navbar) return;

        if (window.scrollY > 60) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }

    }

    window.addEventListener(
        "scroll",
        updateNavbar,
        { passive: true }
    );

    updateNavbar();


    /* =====================================================
       BEGIN STORY BUTTON
    ===================================================== */

    if (beginButton && journey) {

        beginButton.addEventListener("click", () => {

            journey.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    }


    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    const revealElements =
        document.querySelectorAll(".reveal");


    const revealObserver =
        new IntersectionObserver(

            (entries, observer) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "visible"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },

            {
                threshold: 0.12,
                rootMargin: "0px 0px -40px 0px"
            }

        );


    revealElements.forEach((element) => {

        revealObserver.observe(element);

    });


    /* =====================================================
       MOBILE MENU
    ===================================================== */

    if (menuButton && mobileMenu) {

        menuButton.addEventListener(
            "click",
            () => {

                mobileMenu.classList.toggle(
                    "active"
                );

                document.body.classList.toggle(
                    "no-scroll"
                );

            }
        );


        const mobileLinks =
            mobileMenu.querySelectorAll("a");


        mobileLinks.forEach((link) => {

            link.addEventListener(
                "click",
                () => {

                    mobileMenu.classList.remove(
                        "active"
                    );

                    document.body.classList.remove(
                        "no-scroll"
                    );

                }
            );

        });

    }


    /* =====================================================
       DESKTOP NAVIGATION SMOOTH SCROLL
    ===================================================== */

    document
        .querySelectorAll('a[href^="#"]')
        .forEach((link) => {

            link.addEventListener(
                "click",
                (event) => {

                    const targetId =
                        link.getAttribute("href");

                    const target =
                        document.querySelector(
                            targetId
                        );

                    if (!target) return;

                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }
            );

        });


    /* =====================================================
       BACK TO TOP
    ===================================================== */

    function updateTopButton() {

        if (!topButton) return;

        if (window.scrollY > 800) {

            topButton.classList.add("show");

        } else {

            topButton.classList.remove("show");

        }

    }


    window.addEventListener(
        "scroll",
        updateTopButton,
        { passive: true }
    );


    if (topButton) {

        topButton.addEventListener(
            "click",
            () => {

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            }
        );

    }


    /* =====================================================
       CUSTOM CURSOR HEART
    ===================================================== */

    if (
        cursorHeart &&
        window.matchMedia("(pointer:fine)").matches
    ) {

        let cursorX = 0;
        let cursorY = 0;

        let heartX = 0;
        let heartY = 0;


        document.addEventListener(
            "mousemove",
            (event) => {

                cursorX = event.clientX;
                cursorY = event.clientY;

            },
            { passive: true }
        );


        function animateCursor() {

            heartX +=
                (cursorX - heartX) * 0.12;

            heartY +=
                (cursorY - heartY) * 0.12;


            cursorHeart.style.left =
                `${heartX}px`;

            cursorHeart.style.top =
                `${heartY}px`;


            requestAnimationFrame(
                animateCursor
            );

        }


        animateCursor();

    } else if (cursorHeart) {

        cursorHeart.style.display = "none";

    }


    /* =====================================================
       MUSIC
    ===================================================== */

    let isPlaying = false;


    if (musicButton && loveSong) {

        musicButton.addEventListener(
            "click",
            async () => {

                /*
                 IMPORTANT

                 Your HTML currently has no song source.

                 If you want music:

                 1. Put song.mp3 in your project root.
                 2. In index.html change:

                 <audio id="loveSong">

                 to:

                 <audio id="loveSong">
                     <source
                       src="song.mp3"
                       type="audio/mpeg"
                     >
                 </audio>
                */


                if (!loveSong.querySelector("source")) {

                    alert(
                        "Add your licensed song as song.mp3 in the project folder first."
                    );

                    return;

                }


                try {

                    if (!isPlaying) {

                        await loveSong.play();

                        isPlaying = true;

                        musicButton.classList.add(
                            "playing"
                        );

                        musicButton.innerHTML =
                            `
                            <span class="music-icon">
                                ❚❚
                            </span>

                            <span class="music-text">
                                Our Song
                            </span>
                            `;

                    } else {

                        loveSong.pause();

                        isPlaying = false;

                        musicButton.classList.remove(
                            "playing"
                        );

                        musicButton.innerHTML =
                            `
                            <span class="music-icon">
                                ♪
                            </span>

                            <span class="music-text">
                                Our Song
                            </span>
                            `;

                    }

                } catch (error) {

                    console.error(
                        "Music playback error:",
                        error
                    );

                }

            }
        );


        loveSong.addEventListener(
            "ended",
            () => {

                isPlaying = false;

                musicButton.classList.remove(
                    "playing"
                );

            }
        );

    }


    /* =====================================================
       GALLERY LIGHTBOX
    ===================================================== */

    const galleryItems =
        document.querySelectorAll(
            ".gallery-item"
        );


    function openLightbox(
        imageSrc,
        caption
    ) {

        if (!lightbox) return;


        lightboxImage.src =
            imageSrc;

        lightboxImage.alt =
            caption || "Memory";


        lightboxCaption.textContent =
            caption || "";


        lightbox.classList.add(
            "active"
        );


        document.body.classList.add(
            "no-scroll"
        );

    }


    function closeLightbox() {

        if (!lightbox) return;


        lightbox.classList.remove(
            "active"
        );


        document.body.classList.remove(
            "no-scroll"
        );


        setTimeout(() => {

            if (lightboxImage) {

                lightboxImage.src = "";

            }

        }, 400);

    }


    galleryItems.forEach((item) => {

        item.addEventListener(
            "click",
            () => {

                const image =
                    item.querySelector("img");

                const caption =
                    item.querySelector("figcaption");


                if (!image) return;


                openLightbox(
                    image.src,
                    caption
                        ? caption.textContent
                        : ""
                );

            }
        );

    });


    if (lightboxClose) {

        lightboxClose.addEventListener(
            "click",
            closeLightbox
        );

    }


    if (lightbox) {

        lightbox.addEventListener(
            "click",
            (event) => {

                if (
                    event.target === lightbox
                ) {

                    closeLightbox();

                }

            }
        );

    }


    /* =====================================================
       ESCAPE KEY
    ===================================================== */

    document.addEventListener(
        "keydown",
        (event) => {

            if (
                event.key === "Escape" &&
                lightbox &&
                lightbox.classList.contains(
                    "active"
                )
            ) {

                closeLightbox();

            }

        }
    );


    /* =====================================================
       ANNIVERSARY COUNTER
    ===================================================== */

    const weddingDate =
        new Date(
            "2020-08-23T00:00:00"
        );


    function updateAnniversaryCounter() {

        const now =
            new Date();


        const difference =
            now.getTime() -
            weddingDate.getTime();


        if (difference < 0) {

            if (yearsTogether) {
                yearsTogether.textContent = "0";
            }

            if (daysTogether) {
                daysTogether.textContent = "0";
            }

            return;

        }


        /*
         Calculate full years.
        */

        let years =
            now.getFullYear() -
            weddingDate.getFullYear();


        const anniversaryThisYear =
            new Date(
                now.getFullYear(),
                7,
                23
            );


        if (
            now < anniversaryThisYear
        ) {

            years--;

        }


        /*
         Total days together.
        */

        const totalDays =
            Math.floor(
                difference /
                (1000 * 60 * 60 * 24)
            );


        if (yearsTogether) {

            yearsTogether.textContent =
                years.toLocaleString();

        }


        if (daysTogether) {

            daysTogether.textContent =
                totalDays.toLocaleString();

        }

    }


    updateAnniversaryCounter();


    setInterval(
        updateAnniversaryCounter,
        60000
    );


    /* =====================================================
       HERO PARALLAX
    ===================================================== */

    const heroBackground =
        document.querySelector(
            ".hero-background"
        );


    const anniversaryBackground =
        document.querySelector(
            ".anniversary-background"
        );


    function updateParallax() {

        const scrollY =
            window.scrollY;


        if (
            heroBackground &&
            scrollY < window.innerHeight
        ) {

            heroBackground.style.transform =
                `scale(1.06) translateY(${scrollY * 0.10}px)`;

        }


        if (
            anniversaryBackground
        ) {

            const rect =
                anniversaryBackground
                    .parentElement
                    .getBoundingClientRect();


            const distance =
                rect.top -
                window.innerHeight / 2;


            if (
                rect.top < window.innerHeight &&
                rect.bottom > 0
            ) {

                anniversaryBackground.style.transform =
                    `scale(1.05) translateY(${distance * -0.03}px)`;

            }

        }

    }


    window.addEventListener(
        "scroll",
        updateParallax,
        { passive: true }
    );


    /* =====================================================
       IMAGE LOADING
    ===================================================== */

    const allImages =
        document.querySelectorAll("img");


    allImages.forEach((image) => {

        image.addEventListener(
            "load",
            () => {

                image.classList.add(
                    "loaded"
                );

            }
        );


        image.addEventListener(
            "error",
            () => {

                console.error(
                    "Image failed to load:",
                    image.getAttribute("src")
                );


                image.classList.add(
                    "image-error"
                );

            }
        );

    });


    /* =====================================================
       RANDOM FLOATING HEARTS
    ===================================================== */

    function createFloatingHeart() {

        /*
         Only create these occasionally.
        */

        if (
            window.innerWidth < 700
        ) {

            return;

        }


        const heart =
            document.createElement("span");


        heart.textContent =
            "♥";


        heart.style.position =
            "fixed";


        heart.style.left =
            `${Math.random() * 100}%`;


        heart.style.bottom =
            "-20px";


        heart.style.zIndex =
            "2";


        heart.style.pointerEvents =
            "none";


        heart.style.color =
            "rgba(217,154,158,0.18)";


        heart.style.fontSize =
            `${8 + Math.random() * 10}px`;


        const duration =
            7 + Math.random() * 7;


        heart.style.transition =
            `transform ${duration}s linear, opacity ${duration}s linear`;


        document.body.appendChild(
            heart
        );


        requestAnimationFrame(() => {

            heart.style.transform =
                `
                translateY(-${window.innerHeight + 100}px)
                rotate(${Math.random() * 40 - 20}deg)
                `;

            heart.style.opacity =
                "0";

        });


        setTimeout(() => {

            heart.remove();

        }, duration * 1000);

    }


    setInterval(
        createFloatingHeart,
        3500
    );


    /* =====================================================
       TIMELINE IMAGE TILT
    ===================================================== */

    const timelineImages =
        document.querySelectorAll(
            ".timeline-image"
        );


    if (
        window.matchMedia("(pointer:fine)").matches
    ) {

        timelineImages.forEach((container) => {

            container.addEventListener(
                "mousemove",
                (event) => {

                    const rect =
                        container.getBoundingClientRect();


                    const x =
                        event.clientX -
                        rect.left;


                    const y =
                        event.clientY -
                        rect.top;


                    const rotateY =
                        ((x / rect.width) - 0.5) * 4;


                    const rotateX =
                        ((y / rect.height) - 0.5) * -4;


                    const image =
                        container.querySelector(
                            "img"
                        );


                    if (image) {

                        image.style.transform =
                            `
                            scale(1.04)
                            perspective(800px)
                            rotateX(${rotateX}deg)
                            rotateY(${rotateY}deg)
                            `;

                    }

                }
            );


            container.addEventListener(
                "mouseleave",
                () => {

                    const image =
                        container.querySelector(
                            "img"
                        );


                    if (image) {

                        image.style.transform =
                            "";

                    }

                }
            );

        });

    }


    /* =====================================================
       KEYBOARD ACCESSIBILITY
    ===================================================== */

    document.addEventListener(
        "keydown",
        (event) => {

            if (
                event.key === "m" ||
                event.key === "M"
            ) {

                if (musicButton) {

                    musicButton.click();

                }

            }

        }
    );


    /* =====================================================
       PAGE VISIBILITY
    ===================================================== */

    document.addEventListener(
        "visibilitychange",
        () => {

            if (
                document.hidden &&
                loveSong &&
                !loveSong.paused
            ) {

                loveSong.pause();

                isPlaying = false;

                if (musicButton) {

                    musicButton.classList.remove(
                        "playing"
                    );

                }

            }

        }
    );


    /* =====================================================
       FINAL CONSOLE MESSAGE
    ===================================================== */

    console.log(
        "%c♥ PRIYANKA & NAVEEN ♥",
        `
        font-size:24px;
        color:#d99a9e;
        font-family:Georgia;
        `
    );

    console.log(
        "%cFrom Hello to Forever.",
        `
        font-size:15px;
        color:#c9a878;
        `
    );

});
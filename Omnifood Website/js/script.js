//-----------------------------------------------//
//? Setting the current year in the copyright text
const currentYear = new Date().getFullYear();
const copyrightEl = document.querySelector(".copyright");
copyrightEl.textContent = `Copyright © ${currentYear} Omnifood, Inc. All rights reserved`;

//-----------------------------------------------//
//-----------------------------------------------//
//? Making the mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
    headerEl.classList.toggle("nav-open");
});
//-----------------------------------------------//
//-----------------------------------------------//
//? Implementing smooth scrolling
const allLinks = document.querySelectorAll("a:link");
allLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
        event.preventDefault();
        const href = link.getAttribute("href");

        //Scrolling back to top
        if (href === "#") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }

        //Scrolling to other links
        if (href !== "#" && href.startsWith("#")) {
            const sectionEl = document.querySelector(href);
            sectionEl.scrollIntoView({ behavior: "smooth" });
        }

        //Closing mobile application
        if (link.classList.contains("main-nav-link")) {
            headerEl.classList.toggle("nav-open");
        }
    });
});
//-----------------------------------------------//
//-----------------------------------------------//
//? Implementing sticky navigation
const sectionHeroEl = document.querySelector(".section-hero");

const observer = new IntersectionObserver(
    function (entires) {
        const entry = entires[0];

        if (!entry.isIntersecting) {
            document.body.classList.add("sticky");
        }

        if (entry.isIntersecting) {
            document.body.classList.remove("sticky");
        }
    },
    {
        root: null,
        threshold: 0,
        rootMargin: "-80px",
    }
);
observer.observe(sectionHeroEl);
//-----------------------------------------------//
///////////////////////////////////////////////////////////
//? Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
    var flex = document.createElement("div");
    flex.style.display = "flex";
    flex.style.flexDirection = "column";
    flex.style.rowGap = "1px";

    flex.appendChild(document.createElement("div"));
    flex.appendChild(document.createElement("div"));

    document.body.appendChild(flex);
    var isSupported = flex.scrollHeight === 1;
    flex.parentNode.removeChild(flex);
    console.log(isSupported);

    if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

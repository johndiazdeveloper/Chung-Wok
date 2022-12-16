document.addEventListener("DOMContentLoaded", () => {
    "use strict";
    const e = document.querySelector("#header");
    e && document.addEventListener("scroll", () => {
        100 < window.scrollY ? e.classList.add("sticked") : e.classList.remove("sticked")
    });
    let t = document.querySelectorAll("#navbar a");

    function o() {
        t.forEach(e => {
            var t, o;
            !e.hash || (t = document.querySelector(e.hash)) && ((o = window.scrollY + 200) >= t.offsetTop && o <= t.offsetTop + t.offsetHeight ? e.classList.add("active") : e.classList.remove("active"))
        })
    }
    window.addEventListener("load", o), document.addEventListener("scroll", o);
    const n = document.querySelector(".mobile-nav-show"),
        c = document.querySelector(".mobile-nav-hide");

    function s() {
        document.querySelector("body").classList.toggle("mobile-nav-active"), n.classList.toggle("d-none"), c.classList.toggle("d-none")
    }
    document.querySelectorAll(".mobile-nav-toggle").forEach(e => {
        e.addEventListener("click", function(e) {
            e.preventDefault(), s()
        })
    }), document.querySelectorAll("#navbar a").forEach(e => {
        e.hash && document.querySelector(e.hash) && e.addEventListener("click", () => {
            document.querySelector(".mobile-nav-active") && s()
        })
    });
    const l = document.querySelectorAll(".navbar .dropdown > a");
    l.forEach(e => {
        e.addEventListener("click", function(t) {
            if (document.querySelector(".mobile-nav-active")) {
                t.preventDefault(), this.classList.toggle("active"), this.nextElementSibling.classList.toggle("dropdown-active");
                let e = this.querySelector(".dropdown-indicator");
                e.classList.toggle("bi-chevron-up"), e.classList.toggle("bi-chevron-down")
            }
        })
    });
    const i = document.querySelector(".scroll-top");
    var r;
    i && (r = function() {
        100 < window.scrollY ? i.classList.add("active") : i.classList.remove("active")
    }, window.addEventListener("load", r), document.addEventListener("scroll", r), i.addEventListener("click", window.scrollTo({
        top: 0,
        behavior: "smooth"
    })));
    GLightbox({
        selector: ".glightbox"
    });
    window.addEventListener("load", () => {
        AOS.init({
            duration: 300,
            easing: "ease-in-out",
            once: !0,
            mirror: !1
        })
    })
});

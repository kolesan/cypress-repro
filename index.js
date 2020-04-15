const { body } = document;
const [red, blue] = body.querySelectorAll("div");

new IntersectionObserver(([intersection]) => {
    if (intersection.isIntersecting) {
        console.log("Found it!");
        alert("Found it!");
    }
}).observe(blue);
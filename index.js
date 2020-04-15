const { body } = document;
const [red, blue] = body.querySelectorAll("div");

new IntersectionObserver(([intersection]) => {
    if (intersection.isIntersecting) {
        console.log("Found you!");
    }
}).observe(blue);
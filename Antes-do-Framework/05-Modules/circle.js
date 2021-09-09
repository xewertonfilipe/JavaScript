import randomNumber from "./randomNumber.js";

function area(ray) {
    return Math.PI * ray * ray;
}

function circumference(ray) {
    return 2 * ray * Math.PI;
}

function random() {
    return randomNumber();
}

const circle = {
    area,
    circumference,
    random
}

export default circle;
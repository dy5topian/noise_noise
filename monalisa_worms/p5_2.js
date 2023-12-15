let circle_num = 10;
let worms = new Array(circle_num);

function setup() {
    createCanvas(1000, 550);
    background(200);
    for (let i = 0; i < circle_num; i++) {
        let x = Math.random() * 1000;
        let y = Math.random() * 550;
        let color = new Array(Math.random() * 255, Math.random() * 255, Math.random() * 255);
        worms[i] = { x, y, color };
    }
}

function draw() {
    for (let i = 0; i < circle_num; i++) {
        // if the worm is out of the canvas, that means it went underground, so it will be dug and appear in a random position
        if (worms[i].x > 1000 || worms[i].x < 0)
            worms[i].x = Math.random() * 1000;
        if (worms[i].y > 550 || worms[i].y < 0)
            worms[i].y = Math.random() * 550;

        worms[i].x += Math.random() * 10 - 5;
        worms[i].y += Math.random() * 10 - 5;
        noStroke();
        // Add fading effect to the worm's tail
        fill(worms[i].color[0], worms[i].color[1], worms[i].color[2], 50); // Set the alpha value to 50 for a fading effect
        circle(worms[i].x, worms[i].y, 10);
    }
}

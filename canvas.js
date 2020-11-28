const canvas = document.querySelector('#canvasBox');
const ctx = canvas.getContext('2d');

canvas.height = 350;
canvas.width = 370;

let count = 0;

function fail() {
    if (correct === false) {
        correct = true;
        count++;
    }
    switch (count) {
        case 1:
            // 1. floor
            ctx.fillRect(0, 295, 310, 7);
            break;
        case 2:
            // 2. big stick
            ctx.fillRect(150, 10, 7, 290);
            break;
        case 3:
            // 3. top stick
            ctx.fillRect(150, 10, 130, 7);
            break;
        case 4:
            // 4. rope
            ctx.fillRect(277, 10, 4, 50);
            break;
        case 5:
            // 5. head
            ctx.beginPath();
            ctx.arc(280, 90, 30, 0, 2 * Math.PI);
            ctx.stroke();
            break;
        case 6:
            // 6. body
            ctx.fillRect(278, 120, 5, 80);
            break;
        case 7:
            // 7. right arm
            ctx.fillRect(280, 120, 50, 4);
            break;
        case 8:
            // 8. left arm
            ctx.fillRect(230, 120, 50, 4);
            break;
        case 9:
            // 9. right leg
            ctx.fillRect(233, 200, 50, 4);
            break;
        case 10:
            // 10. left leg
            ctx.fillRect(278, 200, 5, 50);
            break;
    }
}

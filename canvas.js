window.addEventListener('load', () => {
    const canvas = document.querySelector('#canvasBox');
    const ctx = canvas.getContext('2d');

    canvas.height = 300;
    canvas.width = 800;

    //top stick
    ctx.fillRect(150, 10, 130, 7);
    //big stick
    ctx.fillRect(150, 10, 7, 290);
    // floor
    ctx.fillRect(0, 295, 310, 7);
    // rope
    ctx.fillRect(277, 10, 4, 50);
    // head
    ctx.beginPath();
    ctx.arc(280, 90, 30, 0, 2 * Math.PI);
    ctx.stroke();
    // body
    ctx.fillRect(278, 120, 5, 80);
    // right arm
    ctx.rotate(10 * Math.PI / 180);
    ctx.fillRect(290, 70, 5, 50);
    // left arm
    ctx.rotate(10 * Math.PI / -90);
    ctx.fillRect(256, 167, 5, 50);
    // right leg
    ctx.rotate(10 * Math.PI / 180);
    ctx.fillRect(278, 200, 5, 60);
    // left leg
    ctx.rotate(10 * Math.PI / -85);
    ctx.fillRect(188, 285, 5, 60);
})

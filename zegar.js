function zegar() {
    let date = new Date();

    const li = document.getElementById("zegar");

    li.innerText = date.toLocaleTimeString();

    setInterval(zegar, 1000);
}

function przekieruj(strona) {
    window.location.href=strona;
}
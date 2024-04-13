document.querySelector(".search button").addEventListener("click", () => {
    if (!document.querySelector(".search input#query").value) {
        document.querySelector(".search input#query").style.border = "3px solid red";
        setInterval(() => {
            document.querySelector(".search input#query").style.border = "none";
        }, 2500);
        return;
    }
    document.querySelector(".res iframe").src = document.querySelector(".search input#query").value.startsWith("https://") ? document.querySelector(".search input#query").value : "https://" + document.querySelector(".search input#query").value;
});

document.querySelector(".res button").addEventListener("click", () => {
    document.querySelector(".res iframe").requestFullscreen();
});

window.addEventListener("keydown", (event) => {
    if (event.key == "Enter") {
        document.querySelector(".search button").click();
    }
});
export function sliderintoview(id) {
    const element = document.querySelector("#" + id);
    if (element) {
        element.scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "center",
        });
    }
}

const modal = document.getElementById("modal");
const title = document.getElementById("modal-title");
const desc = document.getElementById("modal-description");
const close = document.getElementById("close");

document.querySelectorAll(".project").forEach(card => {
card.addEventListener("click", () => {

title.textContent = card.dataset.title;
desc.textContent = card.dataset.description;

modal.style.display = "flex";

});
});

close.onclick = () => modal.style.display = "none";

window.onclick = (e) => {
if (e.target === modal) {
modal.style.display = "none";
}
};
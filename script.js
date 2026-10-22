const sidebar = document.querySelector(".sidebar")

function updateSidebar() {
    if (window.innerWidth < 768) {
        sidebar.classList.add("collapsed")
    } else {
        sidebar.classList.remove("collapsed")
    }
}

window.addEventListener("resize", updateSidebar)
updateSidebar()

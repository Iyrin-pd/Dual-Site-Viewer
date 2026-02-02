function loadSites() {
    let left = document.getElementById("leftUrl").value;
    let right = document.getElementById("rightUrl").value;

    document.getElementById("leftFrame").src = left;
    document.getElementById("rightFrame").src = right;
}

function setOpacity(frameId, value) {
    document.getElementById(frameId).style.opacity = value;
}

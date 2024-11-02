const shareLink = document.getElementById("shareLink");
const shareContent = document.getElementById("shareContent");
const shareLinkContent = document.getElementsByClassName("shareLink")

shareContent.style.display = "none";


function changeShareContentDisplay(){
    console.log("oljhn");
    
    if (shareContent.style.display === "none") {
        shareContent.style.display = "flex"
    } else {
        shareContent.style.display = "none"
    }
}


shareLink.onclick = changeShareContentDisplay
shareContent.onclick = changeShareContentDisplay
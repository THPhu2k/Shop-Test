var FavStat = "No"

function FavButton() {
    if(FavStat == "No") {
        FavStat = "Yes"
        document.getElementById("Icon").src = "./Assets/Img/Favorite Icon.png";
    } else if (FavStat == "Yes") {
        FavStat = "No"
        document.getElementById("Icon").src = "./Assets/Img/unFavorite Icon.png";
    }
}
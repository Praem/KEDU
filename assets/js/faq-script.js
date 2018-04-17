// -------------------------------------------- FAQ --------------------------------------------

// Box 1
function myFunction() {
	var text1 ="KUBO’s physical coding language, TagTiles, is flexible enough to teach a number of different subjects — from music to math, and everything in between! New subject and activity packages — including the soon-to-be-released language and spelling package — are always being developed by our expert team of educational consultants.";
    document.getElementById("faq-post-text1").innerHTML = text1;

    var text2 = document.getElementById("faq-post-text1");
    if (text2.style.display === "none") {
        text2.style.display = "block";
    } else {
        text2.style.display = "none";
    }

}
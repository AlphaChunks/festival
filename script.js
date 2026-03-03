document.addEventListener("DOMContentLoaded", () => {
  const bannerImage = document.getElementById("bannerImage");
  const bannerText = document.getElementById("bannerMetaText");

  if (!bannerImage || !bannerText) return;

  const slides = [
    { src: "Images/Banners/BURNLEY_ART_FESTIVAL.png", text: "Burnley Arts Festival" },
    { src: "Images/Banners/PAINTING.png", text: "Painting" },
    { src: "Images/Banners/MUSIC.png", text: "Music" },
    { src: "Images/Banners/THEATRE.png", text: "Theatre" },
    { src: "Images/Banners/LITERATURE.png", text: "Literature" },
    { src: "Images/Banners/CINEMA.png", text: "Cinema" },
    { src: "Images/Banners/POTTERY.png", text: "Pottery" }
  ];

  let slideIndex = 0;

  function showSlide(index) {
    bannerImage.style.opacity = 0;
    bannerImage.style.transform = "translateX(-40px)";

    setTimeout(() => {
      bannerImage.style.backgroundImage = `url('${slides[index].src}')`;
      bannerText.textContent = slides[index].text;
      bannerImage.style.transform = "translateX(40px)";

      setTimeout(() => {
        bannerImage.style.opacity = 1;
        bannerImage.style.transform = "translateX(0)";
      }, 40);
    }, 700);
  }

  showSlide(slideIndex);

  setInterval(() => {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
  }, 5000);
});


const elementById = (id) => {
  return  document.getElementById(id);
  };
  
  const handleSearch = () => {
    const keyword = elementById("keyword");
    const url = `https://theaudiodb.com/api/v1/json/2/search.php?s=${keyword.value}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) =>showArtists(data));
};
const showArtists = ({artists}) => {
  // console.log(data);
  const artistsContainer = elementById('artists');
  artists.forEach(artist => {
    // console.log(artist);
    const div = document.createElement("div");
    div.classList.add("artist-card");
    div.innerHTML = `<div class="image-container">
    <div class="image-container-inner">
      <img
        src="${artist.strArtistThumb}"
        alt=""
      />
    </div>
  </div>
  <div class="info-container">
    <h1>${artist.strArtist}</h1>
    <p>Country: ${artist.strCountry}</p>
    <p>Style: ${artist.strGenre}</p>
  </div>
  <button class="album-button">
    <i class="fa-solid fa-compact-disc"></i>
    <p onclick="fetchAlbums('${artist.idArtist}')" class="button-title">Albums</p>
  </button>`;
    artistsContainer.appendChild(div);
  });
  }
  

  
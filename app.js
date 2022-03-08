

const elementById = (id) => {
  return  document.getElementById(id);
  };
  
  const handleSearch = () => {
    const keyword = elementById("keyword");
    const artistsContainer = elementById('artists');
    const albumContainer = elementById('albums');
    const url = `https://theaudiodb.com/api/v1/json/2/search.php?s=${keyword.value}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => showArtists(data));
    // clear tabbbbbbbb
    keyword.value = '';
    artistsContainer.innerHTML = '';
    albumContainer.innerHTML = '';
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
        src="${artist.strArtistThumb ? artist.strArtistThumb:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG_yIbHjzrzghXkTcOahJZn0eZCjyyLZ_lOg&usqp=CAU"} "
        alt=""
      />
    </div>
  </div>
  <div class="info-container">
    <h1>${artist.strArtist}</h1>
    <p>Country: ${artist.strCountry ? artist.strCountry:"not found" }</p>
    <p>Style: ${artist.strGenre ? artist.strGenre:"not found"}</p>
  </div>
  <button class="album-button">
    <i class="fa-solid fa-compact-disc"></i>
    <p onclick="fetchAlbums('${artist.idArtist}')" class="button-title">Albums</p>
  </button>`;
    artistsContainer.appendChild(div);
  });
}
const fetchAlbums = (id) => {
  const albumContainer = elementById('albums');
  // console.log(id);
  const url = `https:theaudiodb.com/api/v1/json/2/album.php?i=112024`;
  // console.log(url);
  fetch(url)
    .then(res => res.json())
    .then(data => showAlbum(data))
  albumContainer.innerHTML = '';
}
const showAlbum = ({album}) => {
  // console.log(album);
  album.forEach(albums => {
    const albumContainer = elementById('albums');
    const div = document.createElement('div');
    div.classList.add("album");
    div.innerHTML = `        <div class="album-image-container">
      <img
       src="${albums.strAlbumThumb}"
        alt=""
        />
       </div>
       <div class="album-name">
           <h3>${albums.strAlbum}</h3>
        </div>

    `;
    albumContainer.appendChild(div);
    
  });
  }
  

  
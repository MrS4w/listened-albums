const target = document.querySelector('#albums');

albums.forEach((album, index) => {
  target.innerHTML += `
    <div class="card col-lg-2 col-md-3 p-2">
      <img
        src="${album.cover}"
        class="card-img-top"
      />
      <span class="text-center">#${index + 1}</span>
      <h5 class="card-title text-center">${album.name}</h5>
      <h6 class="text-center">Artist: ${album.artist}</h6>
      <h6 class=" text-center">Released: ${album.releaseYear}</h6>
    </div>
    `;
});

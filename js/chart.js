function getAlbumsQuantityByYear(firstYear, lastYear) {
  const albumsQuantity = albums.filter(
    album => album.releaseYear >= firstYear && album.releaseYear <= lastYear
  ).length;
  return albumsQuantity;
}

const seventy = getAlbumsQuantityByYear(1970, 1979);
const eighty = getAlbumsQuantityByYear(1980, 1989);
const ninety = getAlbumsQuantityByYear(1990, 1999);
const twoThousand = getAlbumsQuantityByYear(2000, 2009);
const twoThousandTen = getAlbumsQuantityByYear(2010, 2019);

const context = document.getElementById('myChart').getContext('2d');

const chart = new Chart(context, {
  type: 'pie',
  data: {
    labels: ["70's", "80's", "90's", "2000's", "2010's"],
    datasets: [
      {
        backgroundColor: ['#1e2c4f', '#007', '#f92', '#700', '#077'],
        borderColor: '#fff',
        data: [seventy, eighty, ninety, twoThousand, twoThousandTen]
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: 'Number of albums per decades'
    }
  }
});

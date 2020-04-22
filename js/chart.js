function getAlbumsQuantityByYear(firstYear, lastYear) {
  const albumsQuantity = albums.filter(
    (album) => album.releaseYear >= firstYear && album.releaseYear <= lastYear
  ).length;
  return albumsQuantity;
}

const sixty = getAlbumsQuantityByYear(1960, 1969);
const seventy = getAlbumsQuantityByYear(1970, 1979);
const eighty = getAlbumsQuantityByYear(1980, 1989);
const ninety = getAlbumsQuantityByYear(1990, 1999);
const twoThousand = getAlbumsQuantityByYear(2000, 2009);
const twoThousandTen = getAlbumsQuantityByYear(2010, 2019);
const twoThousandTwenty = getAlbumsQuantityByYear(2020, 2029);

const context = document.getElementById('myChart').getContext('2d');

const chart = new Chart(context, {
  type: 'pie',
  data: {
    labels: ["60's", "70's", "80's", "90's", "2000's", "2010's", "2020's"],
    datasets: [
      {
        backgroundColor: [
          '#af400f',
          '#1e2c4f',
          '#007',
          '#f92',
          '#700',
          '#077',
          '#666',
        ],
        borderColor: '#fff',
        data: [
          sixty,
          seventy,
          eighty,
          ninety,
          twoThousand,
          twoThousandTen,
          twoThousandTwenty,
        ],
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: 'Number of albums per decades',
    },
  },
});

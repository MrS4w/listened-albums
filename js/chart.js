function getAlbumsQuantityByYear(firstYear, lastYear) {
  const albumsQuantity = albums.filter(
    (album) => album.releaseYear >= firstYear && album.releaseYear <= lastYear
  ).length;
  return albumsQuantity;
}

const fifty = getAlbumsQuantityByYear(1950, 1959);
const sixty = getAlbumsQuantityByYear(1960, 1969);
const seventy = getAlbumsQuantityByYear(1970, 1979);
const eighty = getAlbumsQuantityByYear(1980, 1989);
const ninety = getAlbumsQuantityByYear(1990, 1999);
const twoThousand = getAlbumsQuantityByYear(2000, 2009);
const twoThousandTen = getAlbumsQuantityByYear(2010, 2019);
const twoThousandTwenty = getAlbumsQuantityByYear(2020, 2029);

const context = document.getElementById('myChart').getContext('2d');

function getData() {
  let dataArray = [];
  let colorsArray = [];
  let labelsArray = [];

  if (fifty) {
    labelsArray.push("50's");
    colorsArray.push('#000');
    dataArray.push(fifty);
  }

  if (sixty) {
    labelsArray.push("60's");
    colorsArray.push('#af400f');
    dataArray.push(sixty);
  }

  if (seventy) {
    labelsArray.push("70's");
    colorsArray.push('#1e2c4f');
    dataArray.push(seventy);
  }

  if (eighty) {
    labelsArray.push("80's");
    colorsArray.push('#007');
    dataArray.push(eighty);
  }

  if (ninety) {
    labelsArray.push("90's");
    colorsArray.push('#f92');
    dataArray.push(ninety);
  }

  if (twoThousand) {
    labelsArray.push("2000's");
    colorsArray.push('#700');
    dataArray.push(twoThousand);
  }

  if (twoThousandTen) {
    labelsArray.push("2010's");
    colorsArray.push('#077');
    dataArray.push(twoThousandTen);
  }

  if (twoThousandTwenty) {
    labelsArray.push("2020's");
    colorsArray.push('#666');
    dataArray.push(twoThousandTwenty);
  }

  return { labels: labelsArray, colors: colorsArray, data: dataArray };
}

const chart = new Chart(context, {
  type: 'pie',
  data: {
    labels: getData()['labels'],
    datasets: [
      {
        backgroundColor: getData()['colors'],
        borderColor: '#fff',
        data: getData()['data'],
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

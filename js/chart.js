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

const labels = getLabels();
const colors = getColors();
const data = getData();

function getLabels() {
  let labelsArray = [];
  if (sixty) labelsArray.push("60's");
  if (seventy) labelsArray.push("70's");
  if (eighty) labelsArray.push("80's");
  if (ninety) labelsArray.push("90's");
  if (twoThousand) labelsArray.push("2000's");
  if (twoThousandTen) labelsArray.push("2010's");
  if (twoThousandTwenty) labelsArray.push("2020's");

  return labelsArray;
}

function getColors() {
  let colorsArray = [];
  if (sixty) colorsArray.push('#af400f');
  if (seventy) colorsArray.push('#1e2c4f');
  if (eighty) colorsArray.push('#007');
  if (ninety) colorsArray.push('#f92');
  if (twoThousand) colorsArray.push('#700');
  if (twoThousandTen) colorsArray.push('#077');
  if (twoThousandTwenty) colorsArray.push('#666');

  return colorsArray;
}

function getData() {
  let dataArray = [];
  if (sixty) dataArray.push(sixty);
  if (seventy) dataArray.push(seventy);
  if (eighty) dataArray.push(eighty);
  if (ninety) dataArray.push(ninety);
  if (twoThousand) dataArray.push(twoThousand);
  if (twoThousandTen) dataArray.push(twoThousandTen);
  if (twoThousandTwenty) dataArray.push(twoThousandTwenty);

  return dataArray;
}

const chart = new Chart(context, {
  type: 'pie',
  data: {
    labels: labels,
    datasets: [
      {
        backgroundColor: colors,
        borderColor: '#fff',
        data: data,
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

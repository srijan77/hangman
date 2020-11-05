// making a http request
// see callback.js
// see promises.js
// see fetch.js
// const getPuzzle = (wordCount) => {
//   return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`, {})
//     .then((response) => {
//       // console.log(response); gives a object
//       if (response.status === 200) {
//         return response.json();
//       } else {
//         throw new Error("unable to fetch");
//       }
//     })
//     .then((data) => {
//       return data.puzzle;
//     });
// };

const getPuzzle = async (wordCount) => {
  const response = await fetch(
    `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`
  );

  if (response.status === 200) {
    const data = await response.json();
    return data.puzzle;
  } else {
    throw new Error("Unable to get puzzle");
  }
};

const getCurrentCountry = async () => {
  const location = await getLocation();
  return getCountry(location.country);
};

const getCountry = async (countryCode) => {
  const response = await fetch("http://restcountries.eu/rest/v2/all");

  if (response.status === 200) {
    const data = await response.json();
    return data.find((country) => country.alpha2Code === countryCode);
  } else {
    throw new Error("Unable to fetch the country");
  }
};

const getLocation = async () => {
  const response = await fetch("http://ipinfo.io/json?token=1a11bd55cc8f9c");

  if (response.status === 200) {
    return response.json();
  } else {
    throw new Error("Unable to get the current location");
  }
};

function urlencoded(object) {
  let formBody = [];
  for (const property in object) {
    const encodedKey = encodeURIComponent(property);
    const encodedValue = encodeURIComponent(object[property]);
    formBody.push(encodedKey + '=' + encodedValue);
  }
  formBody = formBody.join('&');
  return formBody;
}

function networkRequest(url, httpVerb, credentials, setError) {
  fetch(url, {
    method: httpVerb,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: credentials,
  })
    .then((response) => {
      if (response.status !== 200) {
        throw new Error();
      } else {
        setError(false);
        return response.json();
      }
    })
    .then(({ token }) => {
      const myStorage = window.localStorage;
      myStorage.setItem('knightBlogToken', token);
      const mine = myStorage.getItem('knightBlogToken');
      console.log(mine);
    })
    .catch((error) => setError(true));
}

module.exports = {
  urlencoded,
  networkRequest,
};

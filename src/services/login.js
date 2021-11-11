export const postLogin = (route, params) => {
  let dataResponse;
  fetch(route, params).then(
    res => res.json()
  ).then(params => {
    dataResponse = params;
  });

  return dataResponse;
}
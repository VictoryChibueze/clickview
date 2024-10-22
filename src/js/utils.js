export function convertToJSON(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw Error("Bad response");
  }
}

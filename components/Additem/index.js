export default function AddItem() {
  setMovies((oldValue) => {
    const newValueMovie = [...oldValueMovie, { isAdded: true }];
    return newValue;
  });
}

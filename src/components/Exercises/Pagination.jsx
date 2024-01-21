function Pagination(pagesAmount) {
  const arrLi = [];

  for (let i = 1; i <= 4; i++) {
    const li = <li key={i}>{i}</li>;

    arrLi.push(li);
  }

  console.log(arrLi);

  return <ul>
    {arrLi.map((LiElement) => {
      return LiElement;
    })}
  </ul>;
}

export default Pagination;

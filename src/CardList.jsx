import Card from "./Card";

const CardList = ({ robots }) => {
  // robots.forEach((element) => {
  //   console.log(element.name);
  // });
  return (
    <>
      {robots.map((user) => {
        return (
          <Card
            key={user.id}
            id={user.id}
            name={user.name}
            email={user.email}
          />
        );
      })}
      <h1>TEST</h1>
    </>
  );
};

export default CardList;

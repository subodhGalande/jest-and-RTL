type greetProps = {
  name?: string;
};

const Greet = ({ name }: greetProps) => {
  return (
    <>
      <h1>Hello {name}</h1>
    </>
  );
};

export default Greet;

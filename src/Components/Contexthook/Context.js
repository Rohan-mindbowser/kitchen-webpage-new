import { AppContext } from "../../App";
import { useContext } from "react";

export const Context = () => {
  const { name } = useContext(AppContext);
  return (
    <>
      <h1>Hello {name}</h1>
    </>
  );
};

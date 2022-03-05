import { useDispatch, useSelector } from "react-redux";
import { Banner } from "../components/Banner";
import { UnderBanner } from "../components/UnderBanner";
import { Counter } from "../features/counter/Counter";

const Home = () => {
  // const contacts = useSelector((state) => state.contacts.contacts);
  // const dispatch = useDispatch();
  // console.log(contacts);
  return (
    <>
      <Banner />
      <h1>totot</h1>
      {/* {contacts.map((contact) => (
        <div>
          <p>name: {contact.name}</p>
          <p>age: {contact.age}</p>
        </div>
      ))} */}
      <Counter/>
      <UnderBanner />
    </>
  );
};

export default Home;

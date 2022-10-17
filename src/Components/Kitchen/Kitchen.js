import {
  Dish1,
  Dish2,
  Dish3,
  Dish4,
  Dish5,
  Dish6,
  Dish7,
  FoxnForkLogo,
  KitchenHeader,
  ProfilePicture,
} from "../../Constants/Image";
import { Dish } from "../Dishes/Dish";
import "./Kitchen.css";
import { useQuery, gql } from "@apollo/client";

const GET_LOCATIONS = gql`
  query GetLocations {
    locations {
      id
      name
      description
      photo
    }
  }
`;

export const Kitchen = () => {
  const { loading, error, data } = useQuery(GET_LOCATIONS);
  console.log("From Kitchen :", data);
  return (
    <>
      <div className="main_container">
        <div className="logo">
          <img src={FoxnForkLogo} alt="Logo"></img>
        </div>
        <div className="kitchen_content">
          <div className="banner_and_profile">
            <div className="banner">
              <img src={KitchenHeader} alt="banner"></img>
            </div>
            <div className="profile_picture">
              <img src={ProfilePicture} alt="profile"></img>
            </div>
          </div>
          <div className="kitchen_description">
            <p className="kitchen_name">Penguin 🐧 ‘s Korean Fusion</p>
            <p className="kitchen_location">Kensington, CA, USA</p>
            <p className="kitchen_desc">I make some awesome Korean dishes</p>
          </div>

          <div className="dish_container">
            <div className="dish_image">
              <Dish image={Dish1} />
            </div>
            <div className="dish_image">
              <Dish image={Dish2} />
            </div>
            <div className="dish_image">
              <Dish image={Dish3} />
            </div>
            <div className="dish_image">
              <Dish image={Dish4} />
            </div>
            <div className="dish_image">
              <Dish image={Dish5} />
            </div>
            <div className="dish_image">
              <Dish image={Dish6} />
            </div>

            <div className="dish_image">
              <Dish image={Dish7} />
            </div>
            <div className="dish_image">
              <Dish image={Dish2} />
            </div>
            <div className="dish_image">
              <Dish image={Dish3} />
            </div>
            <div className="dish_image">
              <Dish image={Dish4} />
            </div>
            <div className="dish_image">
              <Dish image={Dish5} />
            </div>
            <div className="dish_image">
              <Dish image={Dish6} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

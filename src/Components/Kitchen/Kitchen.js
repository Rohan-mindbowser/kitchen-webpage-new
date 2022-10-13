import {
  Dish1,
  Dish2,
  Dish3,
  Dish4,
  Dish5,
  Dish6,
  FoxnForkLogo,
  KitchenHeader,
  ProfilePicture,
} from "../../Constants/Image";
import { Dish } from "../Dishes/Dish";
import "./Kitchen.css";

export const Kitchen = () => {
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
          </div>
        </div>
      </div>
    </>
  );
};

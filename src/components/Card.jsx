import "./_CardStyle.scss";
import button from "../assets/images/icon-dice.svg";
import divider from "../assets/images/pattern-divider-desktop.svg";
import dividerMobile from "../assets/images/pattern-divider-mobile.svg";

function Card() {
  return (
    <div className="card">
      <div className="card__content">
        <p className="card__title">{"ADVICE #117"}</p>
          <p className="card__paragraph">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. In nostrum 
          </p>
        <img className="card__icon" src={divider} alt="divider" />
        <div className="card__containerButton">
          <img className="card__button" src={button} alt="Button" />
        </div>
      </div>
    </div>
  );
}

export default Card;

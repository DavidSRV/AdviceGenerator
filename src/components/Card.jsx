import "./_CardStyle.scss";
import button from "../assets/images/icon-dice.svg";
import divider from "../assets/images/pattern-divider-desktop.svg";
import dividerMobile from "../assets/images/pattern-divider-mobile.svg";
import { fetchData } from "../service/randomAdvice";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

function Card() {
  const [info, setInfo] = useState({});
  const [load, setLoad] = useState(false);

  useEffect(() => {
    fetchData()
      .then((data) => setInfo(data))
      .finally(() => setLoad(true));
  }, []);

  const handleClick = () => {
    fetchData().then((data) => setInfo(data));
  };

 const mobile = useMediaQuery({ query: '(max-width: 800px)'})

  return (
    <>
      {load && (
        <div className="card">
          <div className="card__content">
            <p className="card__title">{`ADVICE #${info.id}`}</p>
            <p className="card__paragraph">{info.advice}</p>
            <img className="card__icon" src={mobile ? dividerMobile : divider } alt="divider" />
            <div onClick={handleClick} className="card__containerButton">
              <img className="card__button" src={button} alt="Button" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Card;

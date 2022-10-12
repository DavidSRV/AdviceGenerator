import "./_CardStyle.scss";
import button from "../assets/images/icon-dice.svg";
import divider from "../assets/images/pattern-divider-desktop.svg";
import dividerMobile from "../assets/images/pattern-divider-mobile.svg";
import { getData } from "../service/randomAdvice";
import { useEffect, useState } from "react";

function Card() {
  const [loaded, setLoaded] = useState(false);
  const [info, setInfo] = useState({});

  useEffect(() => {
    getData()
      .then((data) => setInfo(data))
      .finally(() => setLoaded(true));
  },[]);

  console.log(info + " info")
  console.log(loaded + " loaded")

  return (
    <>
      {loaded && (
        <div className="card">
          <div className="card__content">
            <p className="card__title">{`ADVICE #${info.slip.id}`}</p>
            <p className="card__paragraph">
              {info.slip.advice}
            </p>
            <img className="card__icon" src={divider} alt="divider" />
            <div onClick={() => getData()} className="card__containerButton">
              <img className="card__button" src={button} alt="Button" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Card;

/* CSS */
import "./NewGame.css";

// Assets
import brazil from "../assets/countries/brazil.png";
import argentina from "../assets/countries/argentina.png";
import french from "../assets/countries/french.png";
import spanish from "../assets/countries/spanish.png";
import italy from "../assets/countries/italy.png";
import england from "../assets/countries/england.png";
import portugal from "../assets/countries/portugal.png";
import { useState } from "react";

const countries = [
  { id: 1, image: brazil, name: "Brasil" },
  { id: 2, image: argentina, name: "Argentina" },
  { id: 3, image: french, name: "França" },
  { id: 4, image: spanish, name: "Espanha" },
  { id: 5, image: italy, name: "Itália" },
  { id: 6, image: england, name: "Inglaterra" },
  { id: 7, image: portugal, name: "Portugal" },
];

const NewGame = () => {
  const [image, setImage] = useState<number>();
  const [teamName, setTeamName] = useState<string>("");
  const [stadiumName, setStadiumName] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [informations, setInformations] = useState<object>({});

  const handleSubmit = () => {
    teamName &&
      stadiumName &&
      country &&
      console.log(teamName, stadiumName, country);
  };

  return (
    <div className="container">
      <h3>Escreva as informações do seu time</h3>
      <div className="select-container">
        <p>Escolha o nome do seu time</p>
        <input
          type="text"
          placeholder="Ex.: Campeões FC"
          onBlur={(e) => {
            if (e.target.value.length < 3) {
              e.target.style.border = "1px solid #d6504b";
              setTeamName("");
            } else {
              e.target.style.border = "1px solid #64ff5e";
              setTeamName(e.target.value);
            }
          }}
        />
        <span>O nome precisa ter entre 3 e 15 caracteres.</span>
      </div>
      <div className="division"></div>
      <div className="select-container">
        <p>Escolha o nome do seu estádio</p>
        <input
          type="text"
          placeholder="Ex.: Champions Stadium"
          onBlur={(e) => {
            if (e.target.value.length < 3) {
              e.target.style.border = "1px solid #d6504b";
              setStadiumName("");
            } else {
              e.target.style.border = "1px solid #64ff5e";
              setStadiumName(e.target.value);
            }
          }}
        />
        <span>O nome precisa ter entre 3 e 15 caracteres.</span>
      </div>
      <div className="division"></div>
      <div className="select-container">
        <p>Escolha o país do seu time</p>
        <div id="countries">
          {countries.map((country) => {
            return (
              <img
                key={country.id}
                width={70}
                height={70}
                src={country.image}
                alt={country.name}
                className={image === country.id ? "active" : ""}
                onClick={() => {
                  setImage(country.id);
                  setCountry(country.name);
                }}
              />
            );
          })}
        </div>
      </div>
      <button onClick={handleSubmit}>Avançar</button>
    </div>
  );
};

export default NewGame;

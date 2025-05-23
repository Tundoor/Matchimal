import { useState, useEffect } from "react"
import Header from "./Header.jsx"
import Footer from "./Footer.jsx"

function Home() {

  localStorage.clear()
  const [pics, setPics] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random/100')
      .then(res => {
        if (!res.ok) {
          throw Error("Data Fetching Failed");
        }
        return res.json();
      })
      .then(data => {
        setPics(data.message);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);


  // Favourites logic starts


  const [favourites, setFavourites] = useState(() => {
    return JSON.parse(localStorage.getItem("Favourites") || "[]");
  });

  // Effect to sync favourites to localStorage
  useEffect(() => {
    localStorage.setItem("Favourites", JSON.stringify(favourites));
  }, [favourites]);

  // Match function to add dog to favourites
  function Match(index) {
    const updatedFavourites = [...favourites, pics[index]];
    setFavourites(updatedFavourites);  // Update the state
  }
  // favourite logic ends

  if (error) {
    return <div>Error: {error}</div>;
  }
  return loading ? (
    <div>
      <h1>Loading</h1>
    </div>
  ) : (
    <>
      <Header></Header>
      <div id="homePage">
        <div id="content" className="content">
          {pics.map((dog, index) => (

            <div className="content-div" key={index} >
              <img src={dog} alt="picture of a dog" className="picture" />
              <div className="user">
                <div className="User-info">
                  <div className="name-age-user">
                    <h1 className="Name">John Doe</h1>
                    <h1 className="Age">6 years </h1>
                  </div>

                  <div className="Buttons-Div">
                    <img
                      src={
                        favourites.includes(dog)
                          ? "./src/assets/icons/icons8-home-30"
                          : "./src/assets/icons/heart-svgrepo-com (1).svg"
                      }
                      id="accept-btn"
                      className="Btn"
                      width="48"
                      onClick={() => Match(index)}
                    />
                  </div>
                </div>
                <div className="User-desc">
                  <h1>About</h1>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit,
                    voluptatibus harum? Cupiditate nostrum voluptatum tenetur?
                    Doloribus quia eum sequi, dolores consequatur provident! Ad
                    molestias quaerat similique odio doloribus hic perferendis.
                  </p>
                </div>
              </div>
            </div>

          ))}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Home

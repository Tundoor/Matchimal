import { useState, useEffect } from "react"

function Home() {

  const [pics, setPics] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(res => {
        if (!res.ok) {
          throw Error("Data Fetching Failed");
        }
        return res.json();
      })
      .then(data => {
        console.log(data)
        setPics(data.message);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <div id="content" className="content">
        <div className="content-div">
          <img src={pics} alt="picture of a dog" className="picture"></img>
          <div className="user">
            <div className="User-info">
              <div className="name-age-user">
                <h1 className="Name">Name</h1>
                <h1 className="Age">Age: </h1>
              </div>

              <div className="Buttons-Div">
                <img src="./src/assets/icons/icons8-tick-48.png" id="accept-btn" className="Btn" ></img>
                <img src="./src/assets/icons/icons8-cross-48.png" id="reject-btn" className="Btn"></img>
              </div>
            </div>
            <div className="User-desc">
              <h1>About</h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Odit, voluptatibus harum? Cupiditate nostrum voluptatum tenetur?
                Doloribus quia eum sequi, dolores consequatur provident!
                Ad molestias quaerat similique odio doloribus hic perferendis.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home

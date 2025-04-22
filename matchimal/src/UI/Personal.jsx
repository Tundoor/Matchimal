import Header from "./Header.jsx"
import Footer from "./Footer.jsx"


function Personal() {
    return (
        <>
            <Header />
            <div className="Personal">
                <div className="Account-Page-header">

                    <img className="This-user-img" src="https://images.dog.ceo/breeds/terrier-australian/n02096294_8721.jpg"></img>

                    <div className="This-user-info">
                        <div className="this-user-name-age">
                            <h1 className="this-user-Name">Name</h1>
                            <h1 className="this-user-Age">Age: </h1>
                        </div>
                        <div className="This-user-desc">
                            <h1>Description</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Minima animi laudantium commodi? Illo, ducimus animi illum deserunt sit tenetur neque
                                doloribus dolores, iste soluta officiis consequatur consequuntur ratione id dolorem.
                            </p>
                        </div>
                    </div>

                </div>

                <div className="Account-Page-Edit">
                    <button onClick={() => { }}><img></img></button>
                </div>

                {/* <div className="Account-Page-Main">
                    <div className="content-div">
                        <img src='https://images.dog.ceo/breeds/terrier-australian/n02096294_8721.jpg' alt="picture of a dog" className="picture"></img>
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
                </div> */}
            </div>
            <hr></hr>
            <Footer />
        </>)
}

export default Personal
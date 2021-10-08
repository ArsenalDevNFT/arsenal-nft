import React from "react";
const Allcomponents = (props) => {
  return (
    <div>
      <div className="card card-cascade wider reverse">
        <div className="view view-cascade overlay bg_img_div">
          <div className="fornav"> 
            <nav
              class="navbar navbar-expand-lg navbar-expand-md navbar-expand-sm navbar-expand navbar-expand-xs navbar-dark black-color"
              style={{
                backgroundColor: "black",
                width: "700px",
                marginLeft: "30%",
                marginTop: "10px",
                borderRadius: "15px",
                height: "60px",
                // justifyContent: "center",
                justifyContent: "center",
                fontFamily: "Verdana",
              }}
            >
              <ul class="navbar-nav" style={{ textAlign: "center" }}>
                <li class="nav-item" style={{ paddingLeft: "0px" }}>
                  <a class="nav-link" href="#roadmap">
                    Roadmap
                  </a>
                </li>
                <li class="nav-item" style={{ paddingLeft: "20px" }}>
                  <a class="nav-link" href="#gallery">
                    Gallery
                  </a>
                </li>
                <li class="nav-item" style={{ paddingLeft: "20px" }}>
                  <a class="nav-link" href="#faq">
                    FAQ
                  </a>
                </li>
                <li class="nav-item" style={{ paddingLeft: "20px" }}>
                  <a class="nav-link" href="#minting">
                    Minting
                  </a>
                </li>
                <li class="nav-item" style={{ paddingLeft: "20px" }}>
                  <a class="nav-link" href="#rarity">
                    Rarity
                  </a>
                </li>
                <li
                  class="nav-item active bg-primary"
                  style={{ borderRadius: "10px", marginLeft: "20px" }}
                >
                  <a class="nav-link" href="#">
                    Mint <span class="sr-only">(current)</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="main_content">
            <h1
              className="font-weight-bold  main_heading"
              style={{ textAlign: "center" }}
            >
              {props.main_heading}
            </h1>
            <a
              className="btn btn-md btn-info"
              href="/signup"
              style={{
                borderRadius: "10px",
                border: "solid 3px black",
                color: "black",
                fontSize: "21px",
                fontWeight: "bold",
                width: "200px",
                fontFamily: "'Courier New', Courier, monospace",
              }}
            >
              {props.btn_txt}
            </a>

            <div class="view overlay">
              <a href="https://twitter.com/BruceTheGoozNFT">
                <img
                  src="https://brucethegoose.club/assets/twitter-logo-png-twitter-logo-vector-png-clipart-library-518.59071154.png"
                  className="img-fluid"
                  alt="Sample image with waves effect."
                  style={{ width: "100px", height: "100px", display: "inline" }}
                />
              </a>
              <a href="https://discord.com/invite/ByWzSj9rxf">
                <img
                  src="https://brucethegoose.club/assets/concours-discord-cartes-voeux-fortnite-france-6.c7539176.png"
                  className="img-fluid"
                  alt="Sample image with waves effect."
                  style={{ width: "100px", height: "100px", display: "inline" }}
                />
              </a>
            </div>

            <p
              className="main_paragraph"
              style={{
                fontFamily: "'Courier New', Courier, monospace",
                fontWeight: "bold",
              }}
            >
              {props.main_text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

//Services Section
const Services = (props) => {
  return (
    <>




 {/* Mint Goose Section */}
 <div
        className="my-1 p-5 z-depth-1"
        style={{ backgroundColor: "blue", height: "900px" }}
        id="minting"
      >
        <section className="dark-grey-text">
          <div style={{}}>
            <a
              className="btn btn-md btn-info"
              href="/signup"
              style={{
                color: "white",
                borderRadius: "10px",
                border: "solid 3px black",
                fontSize: "21px",
                fontWeight: "bold",
                width: "300px",
                fontFamily: "'Courier New', Courier, monospace",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              Connect MetaMask!
            </a>
            <h3
              className="font-weight-bold mb-4 pb-2"
              style={{
                color: "#fff",
                textAlign: "center",
                fontFamily: "'Courier New', Courier, monospace",
              }}
            >
              MINT YOUR GOOSE!
            </h3>
            <h5
              className="font-weight-bold mb-4 pb-2"
              style={{
                color: "#fff",
                textAlign: "center",
                fontFamily: "'Courier New', Courier, monospace",
              }}
            >
              88 FTM
            </h5>

            <h5
              className="font-weight-bold mb-4 pb-2"
              style={{
                color: "#fff",
                textAlign: "center",
                fontFamily: "'Courier New', Courier, monospace",
              }}
            >
              --- of 888 available!
            </h5>
            <div class="view overlay">
              <img
                src="https://brucethegoose.club/assets/capture.02087f44.png"
                className="img-fluid"
                alt="Sample image with waves effect."
                style={{
                  width: "400px",
                  height: "450px",
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              />
            </div>
            <div className="xbtn" style={{}}>
              <a
                className="btn btn-md btn-info"
                href="/signup"
                style={{
                  color: "white",
                  borderRadius: "10px",
                  border: "solid 3px black",
                  fontSize: "21px",
                  fontWeight: "bold",
                  width: "100px",
                  height: "50px",
                  fontFamily: "'Courier New', Courier, monospace",
                }}
              >
                1X
              </a>
              <a
                className="btn btn-md btn-info"
                href="/signup"
                style={{
                  color: "white",
                  borderRadius: "10px",
                  border: "solid 3px black",
                  fontSize: "21px",
                  fontWeight: "bold",
                  width: "100px",
                  height: "50px",
                  fontFamily: "'Courier New', Courier, monospace",
                }}
              >
                2X
              </a>
              <a
                className="btn btn-md btn-info"
                href="/signup"
                style={{
                  color: "white",
                  borderRadius: "10px",
                  border: "solid 3px black",
                  fontSize: "21px",
                  fontWeight: "bold",
                  width: "100px",
                  height: "50px",
                  fontFamily: "'Courier New', Courier, monospace",
                }}
              >
                3X
              </a>
            </div>

            <br />
            <a
              className="btn btn-md btn-grey"
              href="/signup"
              style={{
                color: "white",
                borderRadius: "10px",
                fontSize: "21px",
                fontWeight: "bold",
                width: "300px",
                height: "50px",
                fontFamily: "'Courier New', Courier, monospace",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              Mint closed, sorry!
            </a>
          </div>
        </section>
      </div>



      <div
        className="my-1 p-5 z-depth-1"
        style={{ backgroundColor: "blue", height: "300px" }}
        id="gallery"
      >
        <section className="dark-grey-text">
          <a
            className="btn btn-md btn-info"
            href="/signup"
            style={{
              color: "white",
              borderRadius: "10px",
              border: "solid 3px black",
              fontSize: "21px",
              fontWeight: "bold",
              width: "300px",
              fontFamily: "'Courier New', Courier, monospace",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Connect MetaMask!
          </a>
          <h3
            className="font-weight-bold"
            style={{
              color: "#fff",
              textAlign: "center",
              paddingTop: "20px",
              fontFamily: "'Courier New', Courier, monospace",
            }}
          >
            YOUR VERY OWN GEESE!
          </h3>
          <p
            className=""
            style={{
              color: "white",
              textAlign: "center",
              fontFamily: "'Courier New', Courier, monospace",
            }}
          >
            loading...
          </p>
        </section>
      </div>





      <div className="container-fluid mt-5" id="roadmap">
        <section className="dark-grey-text text-center">
          <div className="row">
            <div className="col-2"></div>

            <div className="col-8" style={{ textAlign: "justify" }}>
              <h3
                className="font-weight-bold mb-4 pb-2"
                style={{
                  fontFamily: "'Courier New', Courier, monospace",
                  fontWeight: "bold",
                  color: "black",
                }}
              >
                {props.main_heading}
              </h3>
              <h5
                className="font-weight-bold mb-4 pb-2"
                style={{
                  color: "black",
                  fontFamily: "'Courier New', Courier, monospace",
                  fontWeight: "bold",
                  color: "black",
                }}
              >
                25% 10% Of the sales into the community wallet Community Funds:
              </h5>

              <p
                className=""
                style={{
                  fontFamily: "'Courier New', Courier, monospace",
                  fontWeight: "bold",
                  color: "black",
                }}
              >
                {props.main_para}{" "}
              </p>
              <h5
                className="font-weight-bold mb-4 pb-2"
                style={{
                  color: "black",
                  fontFamily: "'Courier New', Courier, monospace",
                  fontWeight: "bold",
                }}
              >
                50% FTM Raffle to the holders:
              </h5>
              <p
                className=""
                style={{
                  fontFamily: "'Courier New', Courier, monospace",
                  fontWeight: "bold",
                  color: "black",
                }}
              >
                Once the amount of mints have surpassed 50%, we will do a FTM
                raffle to all of our holders.
              </p>
              <h5
                className="font-weight-bold mb-4 pb-2"
                style={{
                  color: "black",
                  fontFamily: "'Courier New', Courier, monospace",
                  fontWeight: "bold",
                }}
              >
                75% Goose Raffle:
              </h5>
              <p
                className=""
                style={{
                  fontFamily: "'Courier New', Courier, monospace",
                  fontWeight: "bold",
                  color: "black",
                }}
              >
                We will drop five random Bruce The Goose NFT to our minters.The
                drops will range from common to legendary.
              </p>
              <h5
                className="font-weight-bold mb-4 pb-2"
                style={{
                  color: "black",
                  fontFamily: "'Courier New', Courier, monospace",
                  fontWeight: "bold",
                }}
              >
                100% The Goslings:
              </h5>
              <p
                className=""
                style={{
                  fontFamily: "'Courier New', Courier, monospace",
                  fontWeight: "bold",
                  color: "black",
                }}
              >
                Whenever Bruce The Goose is sold out, we will work onto the next
                airdrop “Goslings Gang”. Be aware, that the style will differ
                from this project Bruce The Goose’s pixel art. Certain artists
                are on the lists as candidates for the next project. FYI, these
                Goslings will be airdropped to Bruce The Goose NFT holders. It
                is still uncertain whether these NFTs will provide any future
                utility.
              </p>
              <h5
                className="font-weight-bold mb-4 pb-2"
                style={{
                  color: "black",
                  fontFamily: "'Courier New', Courier, monospace",
                  fontWeight: "bold",
                }}
              >
                After-Sale-Roadmap:
              </h5>
              <p
                className=""
                style={{
                  fontFamily: "'Courier New', Courier, monospace",
                  fontWeight: "bold",
                  color: "black",
                }}
              >
                ‍ We want to provide value to this project, and we do not want
                to come up with just only a profile picture project. We have
                seen interesting approaches of other projects on Ethereum and
                wish to bring it over to Fantom. Certain approaches such as
                supplying your NFT with a serum to turn it into another NFT is
                interesting to implement, but this is not the limit of what can
                be achieved. One of the other possibilities is to implement a
                staking mechanism for Bruce The Goose, this will reward
                individual holders for keeping off the NFT from the marketplace.
                The reward consists of redistributing the sales of the NFT
                marketplace to stakers. As you might have notice, this can have
                an interesting effect on the price of Bruce The Goose NFT.
                Otherwise, we can allow existing Bruce The Goose holders to
                breed their NFTs in order to get more Goslings Pixels. The
                possibilities are limitless, and these options will be provided
                to the community in the same manner how we have decided the mint
                price/launch date. Bruce The Goose NFT holders will be able to
                vote on these possibilities in the near future.
              </p>
            </div>
          </div>
        </section>
      </div>

   
    </>
  );
};

const FeaturesCode = () => {
  return (
    <>
      <div className="container-fluid mt-5" id="faq">
        <section className="dark-grey-text text-center">
          <h2
            className="text-center font-weight-bold mb-4 pb-2"
            style={{
              fontFamily: "'Courier New', Courier, monospace",
              color: "black",
            }}
          >
            WELCOME TO THE GOOSE CLUB
          </h2>
          <div className="row">
            <div className="col-2"></div>
            <div className="col-8" style={{ textAlign: "justify" }}>
              <p
                className=""
                style={{
                  fontFamily: "'Courier New', Courier, monospace",
                  color: "black",
                }}
              >
                We started Bruce The Goose NFT project on two beliefs: an
                original NFT project that is not a derivative of some kind of
                project that has an existing foundation. ‍ The second belief is
                building up a community that benefits from the growth of Bruce
                The Goose NFT over time. The Goose Club has been inspired by a
                myriad of new communities on the Ethereum and Solana network. We
                desire to bring this to the Fantom network. We as a team have
                brainstormed, and are looking into different options that can be
                beneficial for future development. All 888 Geese are generated
                from 47 traits, the list of traits can be found down below the
                website. The Geese are designed by Spork, he is as well a
                co-founder of this project. Moreover, the Geese are stored as an
                ERC-721 token on the Fantom Opera network and hosted on IPFS.
                All Geese will be minted from our website for a fixed price 88
                FTM + gas, with a maximum purchase of 8 Geese per TX.
              </p>
              <h5
                className="font-weight-bold mb-4 pb-2"
                style={{
                  color: "black",
                  fontFamily: "'Courier New', Courier, monospace",
                  fontWeight: "bold",
                }}
              >
                FAQ
              </h5>
              <h5
                className="font-weight-bold mb-4 pb-2"
                style={{
                  color: "black",
                  fontFamily: "'Courier New', Courier, monospace",
                  fontWeight: "bold",
                }}
              >
                What is the Goose Club?
              </h5>

              <p
                className=""
                style={{
                  color: "black",
                  fontFamily: "'Courier New', Courier, monospace",
                }}
              >
                The Goose Club is a collection of 888 unique Bruce The Goose
                NFT’s waiting for a new owner. Holders of Bruce The Goose will
                unlock a gateway to The Goose Club, focused on providing value
                towards this project.
              </p>

              <h5
                className="font-weight-bold mb-4 pb-2"
                style={{
                  color: "black",
                  fontFamily: "'Courier New', Courier, monospace",
                  fontWeight: "bold",
                }}
              >
                Why a Goose?
              </h5>

              <p
                className=""
                style={{
                  color: "black",
                  fontFamily: "'Courier New', Courier, monospace",
                }}
              >
                Geese posses many of the qualities that humans value and strive
                to attain. Devoted to each other, goose couples mate for life,
                raise and protect their babies together, and take care of one
                another. We are a community orientated project, and value the
                qualities of a goose in real life.
              </p>

              <h5
                className="font-weight-bold mb-4 pb-2"
                style={{
                  color: "black",
                  fontFamily: "'Courier New', Courier, monospace",
                  fontWeight: "bold",
                }}
              >
                How much for a Bruce The Goose NFT?
              </h5>

              <p
                className="f"
                style={{
                  color: "black",
                  fontFamily: "'Courier New', Courier, monospace",
                }}
              >
                The universal price is 88 FTM, this price has been chosen by the
                community in the early stages of the project.
              </p>

              <h5
                className="font-weight-bold mb-4 pb-2"
                style={{
                  color: "black",
                  fontFamily: "'Courier New', Courier, monospace",
                  fontWeight: "bold",
                }}
              >
                How many Bruce The Goose NFT can we mint?
              </h5>

              <p
                className=""
                style={{
                  color: "black",
                  fontFamily: "'Courier New', Courier, monospace",
                }}
              >
                There is an initial supply of 888 NFTS, the team will keep 44
                NFTs for further promotional events. This is important to get
                the word out on the FTM network.
              </p>

              <h5
                className="font-weight-bold mb-4 pb-2"
                style={{
                  color: "black",
                  fontFamily: "'Courier New', Courier, monospace",
                  fontWeight: "bold",
                }}
              >
                Do the Bruce The Goose minters stick together?
              </h5>

              <p
                className=""
                style={{
                  color: "black",
                  fontFamily: "'Courier New', Courier, monospace",
                }}
              >
                The team insisted in the very beginning that this will be a
                community driven project, this means that the community will be
                rewarded over time. This project will evolve into more
                sophisticated over time. Certain options like staking or
                breeding are heavily considered, but the community will have the
                last vote in what we actually will implement
              </p>

              <h5
                className="font-weight-bold mb-4 pb-2"
                style={{
                  color: "black",
                  fontFamily: "'Courier New', Courier, monospace",
                  fontWeight: "bold",
                }}
              >
                What can a Bruce The Goose do?
              </h5>

              <p
                className=""
                style={{
                  color: "black",
                  fontFamily: "'Courier New', Courier, monospace",
                }}
              >
                Holding a Bruce The Goose will have a profound effect on the
                Gooose Club, as the geese will remain key in this project. The
                more this project will mature, the more value we can supply to
                our Goose Club.
              </p>
            </div>
          </div>
        </section>
      </div>

     

      {/* Rarity List Start here!! */}
      <div className="my-1 p-5" id="rarity">
        <section className="dark-grey-text">
          <h2
            className="text-center font-weight-bold mb-4 pb-2"
            style={{ fontFamily: "Courier", color: "black" }}
          >
            Rarity List
          </h2>

          <p
            className="text-center lead mx-auto mb-5"
            style={{ fontFamily: "Courier", color: "black" }}
          >
            The Rarity varies from Common to Legendary.
          </p>
          <div className="container">
            <div className="row">
              <div className="col-lg-2 col-md-2 col-sm-2 col-2"></div>
              <div
                className="col-lg-4 col-md-4 col-sm-4 col-6"
                style={{ justifyContent: "center" }}
              >
                <h2
                  className="font-weight-bold"
                  style={{ fontFamily: "Courier", color: "black" }}
                >
                  Background:
                </h2>
                <ul
                  style={{
                    listStyle: "none",
                    fontFamily: "Courier",
                    color: "black",
                    fontWeight: "bold",
                    fontSize: "18px",
                  }}
                >
                  <li>Soft Pink</li>
                  <li>Soft Yellow</li>
                  <li>Soft Green</li>
                  <li>Beige</li>
                  <li>Soft Blue</li>
                </ul>
                <h2
                  className="font-weight-bold"
                  style={{ fontFamily: "Courier", color: "black" }}
                >
                  Body:
                </h2>
                <ul
                  style={{
                    listStyle: "none",
                    fontFamily: "Courier",
                    color: "black",
                    fontWeight: "bold",
                    fontSize: "18px",
                  }}
                >
                  <li>Good Bruce</li>
                  <li>Evil Bruce</li>
                  <li>Golden Bruce</li>
                  <li>Rainbow Bruce</li>
                  <li>Rainbow Golden Bruce</li>
                  <li>Alien Bruce</li>
                  <li>Golden Egg Bruce</li>
                  <li>Shiny Bruce</li>
                  <li>Rainbow Golden Egg Golden Bruce</li>
                </ul>
                <h2
                  className="font-weight-bold"
                  style={{ fontFamily: "Courier", color: "black" }}
                >
                  Eyes:
                </h2>
                <ul
                  style={{
                    listStyle: "none",
                    fontFamily: "Courier",
                    color: "black",
                    fontWeight: "bold",
                    fontSize: "18px",
                  }}
                >
                  <li>Blank </li>
                  <li>Glasses </li>
                  <li>Eye patch</li>
                  <li>Tear </li>
                  <li>Diamond</li>
                  <li>Monocle </li>
                </ul>
                <h2
                  className="font-weight-bold"
                  style={{ fontFamily: "Courier", color: "black" }}
                >
                  Hats:
                </h2>
                <ul
                  style={{
                    listStyle: "none",
                    fontFamily: "Courier",
                    color: "black",
                    fontWeight: "bold",
                    fontSize: "18px",
                  }}
                >
                  <li>Blank </li>
                  <li>Derp Hat </li>
                  <li>Fez </li>
                  <li>McDonald Hat </li>
                  <li>Crown </li>
                  <li>Santa Hat </li>
                  <li>Sunvisor </li>
                  <li>Wizzard Hat </li>
                  <li>Fantom Hat </li>
                  <li>Halo </li>
                  <li>Horns </li>
                  <li>Top Hat </li>
                </ul>
                <h2
                  className="font-weight-bold"
                  style={{ fontFamily: "Courier", color: "black" }}
                >
                  Mouth:
                </h2>
                <ul
                  style={{
                    listStyle: "none",
                    fontFamily: "Courier",
                    color: "black",
                    fontWeight: "bold",
                    fontSize: "18px",
                  }}
                >
                  <li>Blank </li>
                  <li>Cigarette </li>
                  <li>Pipe </li>
                  <li>Vampire </li>
                  <li>Candy Cane </li>
                  <li>Keychain </li>
                  <li>Knife </li>
                  <li>Mustache </li>
                </ul>
                <h2
                  className="font-weight-bold"
                  style={{ fontFamily: "Courier", color: "black" }}
                >
                  Neck:
                </h2>
                <ul
                  style={{
                    listStyle: "none",
                    fontFamily: "Courier",
                    color: "black",
                    fontWeight: "bold",
                    fontSize: "18px",
                  }}
                >
                  <li>Blank </li>
                  <li>Bow Tie </li>
                  <li>Neck Tie </li>
                  <li>Cape </li>
                  <li>Pastor </li>
                  <li>Ethereum Chain </li>
                  <li>Fantom Chain </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-3 col-1">
                <h2 className="text-center font-weight-bold mb-3 pb-4"></h2>
                <ul
                  className="mb-6 pb-6"
                  style={{
                    listStyle: "none",
                    fontFamily: "Courier",
                    color: "black",
                    fontWeight: "bold",
                    fontSize: "18px",
                    paddingTop: "5px",
                  }}
                >
                  <li>-</li>
                  <li>-</li>
                  <li>-</li>
                  <li>-</li>
                  <li>-</li>
                </ul>
                <h2 className="text-center font-weight-bold mb-3 pb-4"></h2>
                <ul
                  className="mb-6 pb-6"
                  style={{
                    listStyle: "none",
                    fontFamily: "Courier",
                    color: "black",
                    fontWeight: "bold",
                    fontSize: "18px",
                    paddingTop: "8px",
                  }}
                >
                  <li>-</li>
                  <li>-</li>
                  <li>-</li>
                  <li>-</li>
                  <li>-</li>
                  <li>-</li>
                  <li>-</li>
                  <li>-</li>
                  <li>-</li>
                </ul>
                <h2 className="text-center font-weight-bold mb-3 pb-4"></h2>
                <ul
                  className="mb-6 pb-6"
                  style={{
                    listStyle: "none",
                    fontFamily: "Courier",
                    color: "black",
                    fontWeight: "bold",
                    fontSize: "18px",
                  }}
                >
                  <li>-</li>
                  <li>-</li>
                  <li>-</li>
                  <li>-</li>
                  <li>-</li>
                  <li>-</li>
                </ul>
                <h2 className="text-center font-weight-bold mb-3 pb-4"></h2>
                <ul
                  className="mb-6 pb-6"
                  style={{
                    listStyle: "none",
                    fontFamily: "Courier",
                    color: "black",
                    fontWeight: "bold",
                    fontSize: "18px",
                    paddingTop: "7px",
                  }}
                >
                  <li>-</li>
                  <li>-</li>
                  <li>-</li>
                  <li>-</li>
                  <li>-</li>
                  <li>-</li>
                  <li>-</li>
                  <li>-</li>
                  <li>-</li>
                  <li>-</li>
                  <li>-</li>
                  <li>-</li>
                </ul>
                <h2 className="text-center font-weight-bold mb-3 pb-4"></h2>
                <ul
                  className="mb-6 pb-6"
                  style={{
                    listStyle: "none",
                    fontFamily: "Courier",
                    color: "black",
                    fontWeight: "bold",
                    fontSize: "18px",
                    paddingTop: "6px",
                  }}
                >
                  <li>-</li>
                  <li>-</li>
                  <li>-</li>
                  <li>-</li>
                  <li>-</li>
                  <li>-</li>
                  <li>-</li>
                  <li>-</li>
                </ul>
                <h2 className="text-center font-weight-bold mb-3 pb-4"></h2>
                <ul
                  className="mb-6 pb-6"
                  style={{
                    listStyle: "none",
                    fontFamily: "Courier",
                    color: "black",
                    fontWeight: "bold",
                    fontSize: "18px",
                  }}
                >
                  <li>-</li>
                  <li>-</li>
                  <li>-</li>
                  <li>-</li>
                  <li>-</li>
                  <li>-</li>
                  <li>-</li>
                  <li>-</li>
                </ul>
                <h2 className="text-center font-weight-bold mb-3 pb-4"></h2>
                <h2 className="text-center font-weight-bold mb-3 pb-4"></h2>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-3 col-3">
                <ul
                  style={{
                    listStyle: "none",
                    fontFamily: "Courier",
                    color: "black",
                    fontWeight: "bold",
                    fontSize: "18px",
                    paddingTop: "44px",
                  }}
                >
                  <li>Common</li>
                  <li>Common</li>
                  <li>Rare</li>
                  <li>Epic</li>
                  <li>Legendary</li>
                </ul>
                <ul
                  style={{
                    listStyle: "none",
                    fontFamily: "Courier",
                    color: "black",
                    fontWeight: "bold",
                    fontSize: "18px",
                    paddingTop: "45px",
                  }}
                >
                  <li>Common</li>
                  <li>Common</li>
                  <li>Rare</li>
                  <li>Rare</li>
                  <li>Epic</li>
                  <li>Epic</li>
                  <li>Legendary</li>
                  <li>Legendary</li>
                  <li>Legendary</li>
                </ul>
                <ul
                  style={{
                    listStyle: "none",
                    fontFamily: "Courier",
                    color: "black",
                    fontWeight: "bold",
                    fontSize: "18px",
                    paddingTop: "45px",
                  }}
                >
                  <li>Common</li>
                  <li>Common</li>
                  <li>Rare</li>
                  <li>Rare</li>
                  <li>Epic</li>
                  <li>Legendary</li>
                </ul>

                <ul
                  style={{
                    listStyle: "none",
                    fontFamily: "Courier",
                    color: "black",
                    fontWeight: "bold",
                    fontSize: "18px",
                    paddingTop: "45px",
                  }}
                >
                  <li>Common</li>
                  <li>Rare</li>
                  <li>Rare</li>
                  <li>Epic</li>
                  <li>Epic</li>
                  <li>Epic</li>
                  <li>Epic</li>
                  <li>Epic</li>
                  <li>Epic</li>
                  <li>Legendary</li>
                  <li>Legendary</li>
                  <li>Legendary</li>
                </ul>

                <ul
                  style={{
                    listStyle: "none",
                    fontFamily: "Courier",
                    color: "black",
                    fontWeight: "bold",
                    fontSize: "18px",
                    paddingTop: "45px",
                  }}
                >
                  <li>Common</li>
                  <li>Rare</li>
                  <li>Rare</li>
                  <li>Rare</li>
                  <li>Epic</li>
                  <li>Epic</li>
                  <li>Epic</li>
                  <li>Legendary</li>
                </ul>
                <ul
                  style={{
                    listStyle: "none",
                    fontFamily: "Courier",
                    color: "black",
                    fontWeight: "bold",
                    fontSize: "18px",
                    paddingTop: "45px",
                  }}
                >
                  <li>Common</li>
                  <li>Rare</li>
                  <li>Rare</li>
                  <li>Epic</li>
                  <li>Epic</li>
                  <li>Legendary</li>
                  <li>Legendary</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export { Allcomponents, Services, FeaturesCode };

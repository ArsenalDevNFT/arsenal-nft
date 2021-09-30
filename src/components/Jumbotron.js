import './Jumbotron.css';

function Jumbotron() {
    return (
        <section className='jumbotron'>

            <div className='jt-container'>
                <div className='jt-image'>
                </div>
                <div className='jt-content'>
                    <h1>Scrappy <br className='desktop-only' /> Squirrels</h1>
                    <p>
                        Scrappy Squirrels is a collection of 10,000 randomly generated NFTs on the Ethereum Blockchain. Scrappy Squirrels are meant for buyers, creators, and developers who are completely new to the NFT ecosystem.
                    </p>
                    <p>
                        The community is built around learning about the NFT revolution, exploring its current use cases, discovering new applications, and finding members to collaborate on exciting projects with.
                    </p>
                    <div className='jt-social-links'>

                    </div>
                </div>
            </div>

        </section>
    )
}

export default Jumbotron;
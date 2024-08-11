import { useState, useEffect } from 'react'
import './App.css'
import introImage from './assets/intro.jpg';
import awashImage from './assets/awash.jpg';
import awash2Image from './assets/awash2.jpg';
import awashbank1Image from './assets/awashcard1.png';
import awashbank2Image from './assets/awashcard2.png';
import awashbank3Image from './assets/awashcard3.png';
import virtual from './assets/virtual.png'
import About from './about.jsx'

function App() {
  const [count1, setCount1] = useState(0);
  const [showAbout, setShowAbout] = useState(false); // New state to manage About visibility

  useEffect(() => {
    const interval = setInterval(() => { setCount1(count1 => count1 + 1); } , 5000);
    return () => clearInterval(interval);
  }, []);

  const handleAboutClick = () => {
    setShowAbout(true); // Set state to show About component
  };

  if (showAbout) {
    return <About/>; // Render About component if showAbout is true
  }

  return (
    <>
    <div class="header">
        <div class="logo">
            <img src={awashImage} alt=""/>
        </div>
        <input type="text" class="search-bar" placeholder="Search"/>
    </div>
    <div class="tabs">
        <div class="MENUTAB">
            <div class="home">
            <h4>HOME</h4>
            </div>
            <a href="#" onClick={handleAboutClick}>ABOUT US</a> {/* Updated to call handleAboutClick */}
            <a href="">PRODUCT & SERVICES</a>
            <a href="">E-COMMERCE</a>
            <a href="">VACANCY</a>
            <a href="">IFB</a>
            <a href="">MEDIA</a>
            <a href="">ONLINE SUPPORT</a>
        </div>
        <div class="SocialMedia">
                <i class="fa-brands fa-linkedin"></i>
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-twitter"></i>
        </div>
    </div>
    <div class="intro">
        <div class="introimg">
            {count1 % 2===0 ? <img src={introImage} alt="Intro" /> : <img src={awash2Image} alt="Intro" />}
        </div>
        <div class="introtext">
            <h1>Bank of Abyssinia</h1>
            <hr/>
            <p>
                In an era where commercial banking services were in an inchates stage and striding
                towards transforming different sectors of the economy, Bank of Abyssinia's founders
                believed in the need for a bank that gives comprehensive commercial banking
                sercives. Thus, the Bank of Abyssinia (BOA) was open for business in 1996 with
                enthused initiation and determination
            </p>
            <br/>
            <h3>Lorem ipsum dolor sit amet sonsectetur. Posuere asipscing</h3>
                <button id="LearnMore">About Us</button>

        </div>
      </div>
    <div class="product">
        <h2>Product</h2>
    </div>
    <div class="foote">
        <div class="footerSkill">
            <h2 >Online Banking</h2>
            <p >Through our systematized and stylish 
              <br/>
                online banking platform, you will avoid 
                <br/>
                unnecessary queues to be served. Our 
                <br/>
                online banking enables you to manage 
                <br/>
                your financial activity without a problem.</p>
                <br/>
            {/* <a href="">Learn More</a> */}
            <button id="LearnMore">Learn more</button>
        </div>

        <div class="footerSkill">
            <h2 >Mobile Banking</h2>
            <p>Through our systematized and stylish 
              <br/>
                online banking platform, you will avoid 
                <br/>
                unnecessary queues to be served. Our 
                <br/>
                online banking enables you to manage 
                <br/>
                your financial activity without a problem.</p>
                <br/>
            {/* <a href="">Learn More</a> */}
            <button id="LearnMore">Learn more</button>
        </div>

        <div class="footerSkill">
            <h2 >GizePay</h2>
            <p>Through our systematized and stylish 
              <br/>
                online banking platform, you will avoid 
                <br/>
                unnecessary queues to be served. Our 
                <br/>
                online banking enables you to manage 
                <br/>
                your financial activity without a problem.</p>
                <br/>
            <button id="LearnMore">Learn more</button>
        </div>
    </div>
        <br/><br/><br/>
        <div class="product">
            <h2>Habesha Debit Cards</h2>
        </div>
    <div className='cards'>
            <div>
                <img src={awashbank1Image} alt=""/>
                <h2>Gold Card</h2>
                <p>As main business partners of BoA,<br/>
                    you are of paramount importance <br/>
                    to us. Gold Debit card powers your<br/>
                    status in our bank and allows you<br/>
                    unmatched purchasing ower at a <br/>
                    single stop. With superlative cash<br/>
                    withdrawing capacity, yo are the<br/>
                    owner of unimaginable possibilities.<br/>
                </p>
                <button id="Button">Learn more</button>
            </div>
            <div className='awashcard2'>
                <img src={awashbank2Image} alt=""/>
                <h2>AbyssinAmeen Card</h2>
                <p>Ameen interset free banking offers <br/>
                    you the Havesha Ameen debit card<br/>
                    whichgives purchasing power up <br/>
                    to ETB 200,000 daily purchases. you<br/>
                    are offered exceptional services<br/>
                    through this debit card.<br/><br/><br/>
                </p>
                <button id="Button">Learn more</button>
            </div>
            <div>
                <img src={awashbank3Image} alt=""/>
                <h2>Classic Card</h2>
                <p>BoA values its banking customers.<br/>
                    That is why we provide you with<br/>
                    the Habesha classic debit card<br/>
                    which gives a massive purchasing<br/>
                    power. With up to ETB 200,000<br/>
                    daily purchases you are offered<br/>
                    exceptional services through this<br/>
                    debit card.<br/>
                </p>
                <button id="Button">Learn more</button>
            </div>
    </div>
    <br/><br/><br/>
    <div class="tabs">
        
        <div class="MENUTAB">
            <a href="">Virtual Banking</a>
            <a href="">E-COMMERCE</a>
            <a href="">Interest Free Banking</a>
            <a href="">Latest News</a>
            <a href="">Exchange Rate</a>
        
        </div>

    </div>
        <div className='virtualbank'>
            
            <div className='virtual img'>
                <img src={virtual}/>
            </div>
            
            <div class="introtext">
                <h1>Only at Bank of Abyssinia</h1>
                <hr/>
                <p>
                    Bank of Abyssinia proudly introduces the new self-service machine that hosts the
                    service of branch banking through our excellent and friendky virtual tellers from the
                    comfort of any ITM corner. Experiencee, virtual banking from Bank of Abyssinia for an
                    instant, easy and convenient banking at your suitable locations.<br/>
                </p>
                <br/>
                <h3>Lorem ipsum dolor sit amet sonsectetur. Posuere asipscing</h3>
                    <button id="LearnMore">About Us</button>

            </div>

        </div>
            
        <div class="tabs">
            
            <div class="Buttons">
                <button id="Button">DOWNLOAD</button>
                <button id="Button">DOWNLOAD</button>
                <button id="Button">JOIN OUR</button>
            </div>

            <div class="SocialMedia">
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-twitter"></i>
            </div>
        </div>
            <div class="reserved"><p>Bank of abyssinia @ 2022 / All Rights Reserved</p></div>
    <div class="lastFooter">
        <div class="footlinks">
            <div class="product1">
                <h2>Ways to Bank</h2>
            </div>
            <a href="">Abyssinia online</a>
            <a href="">mobile banking</a>
            <a href="">Virtual Banking</a>
            <a href="">Card Banking</a>
            <a href="">Agent Banking</a>
            <a href="">E-commerce</a>
        </div>
        <div class="footlinks">
            <div class="product1">
                <h2>International Banking</h2>
            </div>
            <a href="">Foreign currency deposit accountts</a>
            <a href="">Trade services</a>
            <a href="">Money Transfer</a>
            <a href="">Correspondent Banks</a>
        </div>
        <div class="footlinks">
            <div class="product1">
                <h2>Useful Links</h2>
            </div>
            <a href="">corprate and commercial</a>
            <a href="">Consumer and Mortgage Products</a>
            <a href="">Bank Guarantee</a>
            <a href="">loan Calculator</a>
            <div class="product1">
                <br/>
                <h2>Customer Care</h2>
            </div>
            <a href="">8397 (toll-free)</a>
            <a href="">contactcenter@bankofabyssinia.com</a>
            <a href="">SWIFT: ABYSETAA, Addis Ababa,</a>
            <a href="">HQ Building. The Gambia st. legenar</a><br/>
            
        </div>
    </div>
    </>
    )
}

export default App
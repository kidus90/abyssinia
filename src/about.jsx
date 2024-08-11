import './about.css'
import introImage from './assets/intro.jpg';
import awashImage from './assets/awash.jpg';
import awash2Image from './assets/awash2.jpg';
import { useState, useEffect } from 'react'

const About = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval =setInterval(() => { setCount (count => count + 1)}, 5000);
    return () => clearInterval(interval);
    }, []);


    return (
<div>
            
            <div class="header">
            
                <div class="logo">
                    <img src={awashImage} alt=""/>
                </div>
                
                <input type="text" class="search-bar" placeholder="Search"/>
            
            </div>

            <div class="tabs">
                
                <div class="MENUTAB">
                    <a href="">HOME</a>
                    <div class="home">
                    <h4>ABOUT US</h4>
                    </div>
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
                        {count % 2===0 ? <img src={introImage} alt="Intro" /> : <img src={awash2Image} alt="Intro" />}
                    </div>
                
                    <div class="introtext">
                            <h1>Bank of Abyssinia</h1>
                        <hr/>
                        <p>
                            The name Abyssinia resembles cravery and character hich are the core attributes of
                            BoA. its identity is demarcated with a sense of hope,optimism, and belief as it is
                            perfectly displayed in its logo, the Asey Abeba. Adey Abeba brings the promise of a
                            new beginning BoA brings that very sense to all the customers it engages with.
                            Working with and through BoA brings sustained success with the help of a bank
                            thath is a symbol of determination and hard work.
                        </p>
                        <br/>
                        <h2>THE FIRST BANK OF ABYSSINIA</h2>

                    </div>
                </div><br/>
                <div class="product">
                
                    <h2>Ownership</h2>
                    <p>
                    Bank of Abyssinia is a share company of private individuals who a mass experience and success in different,areas including business,<br/>
                    entertainment and education. Such diverse ownership not only reflects the company's determination and willingness to succeed in <br/>
                    the sector it operates in, but also signify its ability to oek together towards building a successful business venture and commercial<br/>
                    bank services.
                    </p><br/>

                </div>
                <div className='cards'>
                    <div>
                        <h2>Vision </h2>
                        <h4>Tirelessly Working to achieve our vision </h4>
                        <p>
                            To become the leading commercial bank<br/>
                            in Cast, Africa by the year 2030.<br/>
                        </p>
                    </div>
                    
                    <div>

                        <h2>Mission</h2>
                        <h4>Our mission enables us to drive<br/> 
                            forward with aim</h4>
                        <p>
                            Provide excellent financial services<br/>
                            through competent. Motivated<br/>
                            employees and digital technology in<br/>
                            order to maximize value to all<br/>
                            stakeholders.<br/>
                        </p>
                    </div>

                    <div>
                        <h2>Values</h2>
                        <h4>Our values reflect our identity</h4>
                        <p>
                            Customer satisfaction<br/>
                            Integrity<br/>
                            Team work and collabiration<br/>
                            Caring for our community<br/>
                        </p>
                        <br/>
                        <button id="Button">Learn more</button><br/><br/>

                    </div>
                    
                
                </div>

                <div class="product">
                
                    <h2>Strategic Partnership</h2>
                    <p>
                    Bank of abyssinia,to build its brand traction and expand its customer base, has formed a strategic partnership with different international
                    organization
                    </p><br/>

                </div>

                <div class="product">
                
                    <h2>Corporate Social Responsibility</h2>
                    <p>
                    As one of our core values, the Bank of Abyssinia promotes corporate social responsibility. It believes the well-being and improved living conditions 
                    of our community will benefit us all. As such, BoA participates in various national projects and other social and economic initiatives. These include 
                    the construction of the Ethiopian Grand Renaissance Dam, the establishment of the Ethiopian Cardiac Center, Ethiopia Rotary Club, and the 
                    establishment of Ethiopian Women Traders’ Associations.
                    </p><br/>

                </div>
                
                <div class="product">
                
                    <h2>Current Capital</h2>
                    <p>
                    Through its 779 branches in the country, BoA serves over 7.5 million customers. BoA’s well-structured financial service system is connected 
                    through the T-24 core banking system. This coupled with the 1271 ATM machines, 16 virtual banking centers, and more than 1256 POS placed 
                    in different locations to afford customers to access their accounts from anywhere at any time. This also allowed BoA to increase its capital a 
                    hundred-fold from ETB50 million to ETB 5.5 billion.
                    </p><br/>

                </div>

                <div class="numbers">
                    <div class="Customers">
                        <h2>7514405</h2>
                        <h3>Customer</h3>
                    </div>
                    <div class="Employees">
                        <h2>9696</h2>
                        <h3>Employees</h3>
                    </div>
                    <div class="Branches">
                        <h2>788</h2>
                        <h3>Branches</h3>
                    </div>
                    <div class="ATMs">
                        <h2>1271</h2>
                        <h3>ATMs</h3>
                    </div>
                    <div class="VirtualBankingCenters">
                        <h2>16</h2>
                        <h3>Virtual Banking Centers</h3>
                </div>
                <br/>
                </div>

                <div class="tabs">
        
                    <div class="MENUTAB">
                        <a href="">Board of Directors</a>
                        <a href="">Board of Sub-Committe Members</a>
                        <a href="">The Management Team</a>
                    </div>

                </div>
                <br/><br/>
{/*                                  */}
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
                        
        </div>
    );
}

export default About;


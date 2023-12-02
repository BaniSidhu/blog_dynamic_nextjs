// import blog from "@/blog/[slug]/page";
import Blog from "./blog/[slug]/page";
import React from "react";

export default function Home({ slug, description }: { slug: string; description: string }) {
	

  const handleClick = () => {
    
  };
  return (
    <main>
      <body className="container">
        <div className="margin"></div>
        <header id="header">
          <img
            id="header-img"
            src="/1.jpeg"
            alt="cof"
            width={100}
            height={100}
          />
          <nav id="nav-bar">
            <a className="nav-link" href="#about">
              ABOUT US
            </a>
            <a className="nav-link" href="#gallery">
              GALLERY
            </a>
            <a className="nav-link" href="#contact">
              CONTACT
            </a>
          </nav>
        </header>

        <section className="main">
          <div>
            <img
              src="/1.jpeg"
              width={500}
              height={500}
            />
          </div>
          <div className="form">
            <h1>Fresh Breakfast With Bassam</h1>
            <p className="form-p">subscribe for weekly coupons</p>
            <form id="form" action="/">
              <input type="email" name="email" id="email" placeholder="enter your email" />
              <input id="submit" type="submit" value="Get Coupons" className="btn" />
            </form>
          </div>
        </section>
<section id="blog">
<div className="blog_par">
<div id="first" className="blog"  >
	<div className="layer">London</div>
	</div>
<div id="sec" className="blog">
	<div className="layer"> History</div>
	</div>
<div id="third" className="blog">
	<div className="layer">London night</div>
	</div>
		
		  </div>
</section>
        <section id="about">
          <div id="about-text">
            <h1>
              About<span>Us</span>
            </h1>
            <br />
            <p>
            
London Bridge is a historic and iconic structure that spans the River Thames, connecting the City of London with Southwark. Although the current bridge, opened to traffic in 1973, might not be as visually striking as its predecessors, it holds a significant place in the history and folklore of London.
            </p>

            <p>
			The name "London Bridge" is associated with multiple bridges that have occupied the same location over the centuries. The original bridge, built by the Romans around AD 50, was the first permanent crossing over the Thames in the London area. Throughout history, various iterations of London Bridge have been constructed, each with its architectural style and unique features.
            </p>
          </div>

          <div className="about-img">
            <img
              src="/4.jpg"
              width={500}
              height={500}
            />
          </div>
        </section>

     
          

        <section id="contact">
          <form className="formcontact">
            <h1 className="ch1">
              Contact<span>Us</span>
            </h1>
            <div className="formTop">
              <input className="name" type="text" placeholder="Name" />
              <input className="email" type="email" placeholder="Email" />
            </div>
            <div className="formBottom">
              <input className="subject" type="text" placeholder="Subject" />
              <textarea className="message" placeholder="Message"></textarea>
              <input className="submit" type="submit" value="Send Now!" />
            </div>
          </form>
        </section>
      </body>
    </main>
  );
}

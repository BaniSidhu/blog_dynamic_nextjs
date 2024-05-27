'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Contact from './contact/Contact';

export default function Home({ slug, description }: { slug: string; description: string }) {
  const router = useRouter();


  const move_to1 = () => {
    router.push('/blog/top-eng');
  };

  const move_to2 = () => {
    router.push('/blog/top-bassam');
  };

  return (
    <main>
      <div className="container">
        <div className="margin"></div>
        <header id="header">
          <img id="header-img" src="/1.jpeg" alt="cof" width={100} height={100} />
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
            <img src="/1.jpeg" width={500} height={500} alt="main image" />
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
            <div id="first" className="blog" onClick={move_to1}>
              <div className="layer">London</div>
            </div>
            <div id="sec" className="blog" onClick={move_to2}>
              <div className="layer">History</div>
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
            <img src="/4.jpg" width={500} height={500} alt="about image" />
          </div>
        </section>
<Contact></Contact>     
      </div>
    </main>
  );
}

import React, { useState,useEffect } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './MainPage.css'; // Import CSS file for MainPage
import image1 from '../../Assets/img_nature_wide.png'; // Import images from the correct relative path
import image2 from '../../Assets/img_snow_wide.png';
import image3 from '../../Assets/img_lights_wide.png';

function MainPage() {
  const [slideIndex, setSlideIndex] = useState(1);

  const showSlides = (n) => {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if (slides.length === 0) return;

    if (n > slides.length) { setSlideIndex(1); }
    if (n < 1) { setSlideIndex(slides.length); }

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  };

  const plusSlides = (n) => {
    let newIndex = slideIndex + n;
    if (newIndex > 3) {
      newIndex = 1;
    } else if (newIndex < 1) {
      newIndex = 3;
    }
    setSlideIndex(newIndex);
  };

  const currentSlide = (n) => {
    setSlideIndex(n);
  };

  useEffect(() => {
    showSlides(slideIndex);
  }, [slideIndex]);

  return (
    <div className="main-page">
      <Sidebar className="Sidebar" />
      <div className="content">
        <div className="slideshow-container">
          <div className="mySlides fade">
            <div className="numbertext">1 / 3</div>
            <img src={image1} alt="Slide 1" />
          </div>
          <div className="mySlides fade">
            <div className="numbertext">2 / 3</div>
            <img src={image2} alt="Slide 2" />
          </div>
          <div className="mySlides fade">
            <div className="numbertext">3 / 3</div>
            <img src={image3} alt="Slide 3" />
          </div>
          <a className="prev" onClick={() => plusSlides(-1)}>&#10094;</a>
          <a className="next" onClick={() => plusSlides(1)}>&#10095;</a>
          <br />
          <div style={{ textAlign: 'center' }}>
            <span className="dot" onClick={() => currentSlide(1)}></span>
            <span className="dot" onClick={() => currentSlide(2)}></span>
            <span className="dot" onClick={() => currentSlide(3)}></span>
          </div>
        </div>
        <div className="search-container">
          <input type="text" placeholder="Search..." className="search-bar" />
          <button className="filter-button">Filter</button>
        </div>
        <h2>Recommend teacher</h2>
        <div className="four-divs-container">
          <div className="inner-div">
            <img src={image1} alt="Image 1"/>
            <h5>Teacher 1</h5>
            <p>Veteran teacher</p>
          </div>
          <div className="inner-div">
            <img src={image2} alt="Image 2"/>
            <h5>Teacher 2</h5>
            <p>Veteran teacher</p>
          </div>
          <div className="inner-div">
            <img src={image3} alt="Image 3"/>
            <h5>Teacher 3</h5>
            <p>Veteran teacher</p>
          </div>
          <div className="inner-div">
            <img src={image1} alt="Image 4"/>
            <h5>Teacher 4</h5>
            <p>Veteran teacher</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;

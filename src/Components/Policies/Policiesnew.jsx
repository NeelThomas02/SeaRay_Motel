import React, { useState, useEffect } from 'react'
import "./Policies.css";

function Policies () {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.pageYOffset;
        const policiesElement = document.getElementById('policies');

        if (policiesElement) {
          const elementOffsetTop = policiesElement.offsetTop;
          const elementHeight = policiesElement.offsetHeight;

          // Calculate the visible range based on element position and window height
          const visibleRangeStart = scrollPosition + window.innerHeight * 0.25;
          const visibleRangeEnd = scrollPosition + window.innerHeight * 0.9;

          // Check if the element is within the visible range
          const isVisible = elementOffsetTop + elementHeight > visibleRangeStart && elementOffsetTop < visibleRangeEnd;
          setIsVisible(isVisible);
        }
      };

      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  return (
    <div id='policies' className={`policies ${isVisible ? 'visible' : ''}`} >
        <div className='container text-center'>
      <div className="row">
        <div className="col-12">
          <h4 style={{fontSize:'44px'}}>Policies</h4>
            <div className='row row-cols-4'>
            <div class="col ">
            </div>
            <div className="col-4">
            <h5 style={{fontSize:'29px'}}>Check-in</h5>
            <ul className='clean'>
              <li style={{fontSize:'20px'}}>Check-in from 3:00 PM to 5:00 AM</li>
              <li style={{fontSize:'20px'}}>Late Check-in subject to availability</li>
              <li style={{fontSize:'20px'}}>Minimum check-in age-25</li>
            </ul>
            <h5 style={{fontSize:'29px'}}>Special check-in instructions</h5>
            <ul className='distancing'>
              <li style={{fontSize:'20px'}}>Front desk staff will greet guests on arrival</li>
            </ul>
            <h5 style={{fontSize:'29px'}}>Access Methods</h5>
            <ul>
              <li style={{fontSize:'20px'}}>Staffed front desk</li>
            </ul>
            <h5 style={{fontSize:'29px'}}>Pets</h5>
            <ul>
              <li style={{fontSize:'20px'}}>Pets not allowed</li>
            </ul>
            <h5 style={{fontSize:'29px'}}>Children and Extra beds</h5>
            <ul>
              <li style={{fontSize:'20px'}}>Children are welcome</li>
            </ul>
            <h5 style={{fontSize:'29px'}}>Payments types at the property</h5>
            <ul>
              <li style={{fontSize:'20px'}}>Pets not allowed</li>
            </ul>
            <br/>
        </div>
            <div className="col-4">
            <h5 style={{fontSize:'29px'}}>Check-out</h5>
            <ul className='clean'>
              <li style={{fontSize:'20px'}}>Check-out before 10:00 AM</li>
            </ul>
        </div>
      </div>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Policies
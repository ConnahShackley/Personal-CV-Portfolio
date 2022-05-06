import React, { useState, useRef, useEffect } from 'react';

import { CarouselButton, CarouselButtonDot, CarouselButtons, CarouselContainer, CarouselItem, CarouselItemImg, CarouselItemText, CarouselItemTitle, CarouselMobileScrollNode } from './TimeLineStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
 const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef();

  const scroll = (node, left) => {
    return node.scrollTo({ left, behavior: 'smooth' });
  }

  const handleClick = (e, i) => {
    e.preventDefault();

    if (carouselRef.current) {
      const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length));
      
      scroll(carouselRef.current, scrollLeft);
    }
  }

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round((carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7)) * TimeLineData.length);

      setActiveItem(index);
    }
  }

  // snap back to beginning of scroll when window is resized
  // avoids a bug where content is covered up if coming from smaller screen
  useEffect(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    }

    window.addEventListener('resize', handleResize);
  }, []);
  return (
  <Section id ="about">
    <SectionTitle>About Me</SectionTitle>
    <SectionText>
      
    Driver's License: Yes <br>
    </br>
    Eligible to work in the UK: Yes <br>
    </br>
    Highest level of education: Bachelor's <br>
    </br>
    Industry: Software Development <br>
    </br>
    Total years of experience: 2 <br>
    </br>
    <br>
    </br>

    I am a talented graduate/junior software developer with a strong academic background. I believe I have a good level of technical competence, as well as having a confident and creative approach to my work. I recently graduated from Edge Hill University gaining a Ba (Hons) degree in Games Programming. <br>
    </br>
    <br>
    </br>
    Throughout University, I have had experience with numerous programming languages such as HTML5 and CSS3, JavaScript, React, Java and C#. Also, I have had exposure in developing programs and software concepts using the .NET Framework infrastructure. <br>
    </br>
    <br>
    </br>
    After I had finished University, I enrolled on to a 12-week full-time Master course with CodeNation to further add to my programming and knowledge skill set with JavaScript to industry standard. <br>
    </br>
    <br>
    </br>
    During the course, I completed 480 hours coding time. Our final group project was to come up with an idea for a full stack application, create it and publish the application and make available for general public use. <br>
    </br>
    <br>
    </br>
    The final 2-week project of the course was predominantly based around the front-end aspects of the application, focusing on the visual aspect of the design layout by using HTML5 and CSS3 programming. This is thought to be my current strongest aspect of programming. <br>
    </br>
    <br>
    </br>
    In order for the application to become user friendly and store their data, I had contributed a structure to the back end of the application functionality process which entailed the use of Netlify React.js, React-Router-Dom, MongoDB and a REST-API to create a user database, account, and profile. This allows the user to create, read, update, and delete (CRUD) information for the users live database. This was later published on GitHub. <br>
    </br> 
    <br>
    </br>
    My main passion in the Software development industry is using software’s such as Visual Studio Code, in order to create fun and inventive projects with regards to front-end, back-and and Full stack applications when programming in Javascript. I am currently looking to excel in these subjects, as I firmly believe I can become a very talented games developer, animator, and editor with the right guidance throughout the early stages of my career. <br>
    </br>
    <br>
    </br>
    I am excited to start my journey and eventually be part of a team where I can contribute my concept ideas and thoughts to a hard-working group of people and create ground-breaking applications and projects which can be released to the public. <br>
    </br> 
    <br>
    </br>
    I have gained many skills with regards to teamwork, as I have worked in the hospitality industry for several years whilst studying. This has given me confidence and responsibility to engage in a positive way with new people and create a calm, friendly working environment. <br>
    </br>
    <br>
    </br>
    In my spare time, I have hobbies and interests associated with computing such as designing NFT's and creating game art which I then convert to Adobe Photoshop and paint using many different tools. Although I am a gaming and computer science fanatic, I live a healthy balanced lifestyle and play sports such as football and golf. I am currently based in Liverpool but would be willing to relocate.

    </SectionText>
    <CarouselContainer ref={carouselRef} onScroll={handleScroll}>
      <>
      {TimeLineData.map((item, index) => (
        <CarouselMobileScrollNode key={index} final={index == TOTAL_CAROUSEL_COUNT -1}>
          <CarouselItem
          index={index}
          id={`carousel__item-${index}`}
          active={activeItem}
          onClick={(e) => handleClick(e, index)}
          >
            <CarouselItemTitle>
              {item.year}
              <CarouselItemImg
                    width="208"
                    height="6"
                    viewBox="0 0 208 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z"
                      fill="url(#paint0_linear)"
                      fill-opacity="0.33"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear"
                        x1="-4.30412e-10"
                        y1="0.5"
                        x2="208"
                        y2="0.500295"
                        gradientUnits="userSpaceOnUse">
                        <stop stop-color="white" />
                        <stop
                          offset="0.79478"
                          stop-color="white"
                          stop-opacity="0"
                        />
                      </linearGradient>
                    </defs>
                  </CarouselItemImg>
              </CarouselItemTitle>
              <CarouselItemText>{item.text}</CarouselItemText>
              </CarouselItem>
            </CarouselMobileScrollNode>
          ))}
        </>
      </CarouselContainer>
      <CarouselButtons>
        {TimeLineData.map((item, index) => (
          <CarouselButton
          key={index}
          index={index}
          active={activeItem}
          onClick={(e) => handleClick(e, index)}
          type="button"
            >
              <CarouselButtonDot active={activeItem} />
            </CarouselButton>
        ))}
      </CarouselButtons>
      <SectionDivider />
    </Section>
  );
};

export default Timeline;

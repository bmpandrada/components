import React, { useState } from 'react';
import './accordion.css';

const items = [
  {
    number: '01',
    text: 'How long do I have to return my chair?',
  },
  {
    number: '02',
    text: 'Hi how do you do?',
  },
  {
    number: '03',
    text: 'Do you ship to? country',
  },
];

const Accordion = () => {
  const [isToggle, setToggle] = useState(null)

  const handleClick = (index) => {
   setToggle(index === isToggle ? null : index)
  };

  console.log(isToggle);
  return (
    <div className="accordion">
      {items.map((item, index) => (
        <div
          key={index}
          className={`item ${index === isToggle ? 'open' : ''}`}
          onClick={() => handleClick(index)}
        >
          <p className="number">{item.number}</p>
          <p className="text">{item.text}</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>

          <div className={`hidden ${index === isToggle ? 'open' : ''}`}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
              eaque at mollitia illo fuga earum iusto nesciunt hic omnis
              aliquam! Est ipsa explicabo fugit praesentium dolores dolor
              reiciendis, consequatur quis facilis aliquid odio, odit minima ut
              necessitatibus, rerum iusto repudiandae?
            </p>
            <ul>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident, aspernatur.
              </li>

              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident, aspernatur.
              </li>

              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident, aspernatur.
              </li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;

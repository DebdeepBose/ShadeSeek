import styled from "styled-components";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Tooltip = () => {
  return (
    <StyledWrapper>
      <aside className="menu-tooltip">
        <input type="checkbox" id="toggle" />
        <label htmlFor="toggle" className="toggle font-bold text-black">
          +
        </label>

        <li style={{ "--i": 0 }} className="circle-box">
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="anchor"
          >
            <FaLinkedin />
          </a>
        </li>

        <li style={{ "--i": 1 }} className="circle-box">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="anchor"
          >
            <FaGithub />
          </a>
        </li>
        <li style={{ "--i": 2 }} className="circle-box">
          <a
            href="https://leetcode.com/"
            target="_blank"
            rel="noreferrer"
            className="anchor"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              fill={"currentColor"}
              viewBox="0 0 24 24"
            >
              <path d="m15.42 16.94-2.25 2.17a2.1 2.1 0 0 1-1.52.56 2.1 2.1 0 0 1-1.52-.56l-3.61-3.63a2.18 2.18 0 0 1-.58-1.55 2.07 2.07 0 0 1 .58-1.52l3.6-3.65a2.1 2.1 0 0 1 1.53-.54 2.08 2.08 0 0 1 1.52.55l2.25 2.17A1.14 1.14 0 0 0 17 9.33l-2.17-2.2a4.24 4.24 0 0 0-2-1.12l2.06-2.08a1.15 1.15 0 0 0-1.62-1.62l-8.43 8.42a4.48 4.48 0 0 0-1.24 3.2 4.57 4.57 0 0 0 1.24 3.23l3.63 3.63A4.38 4.38 0 0 0 11.66 22a4.45 4.45 0 0 0 3.2-1.25L17 18.56a1.14 1.14 0 0 0-1.61-1.62z"></path>
              <path d="M19.34 12.84h-8.45a1.12 1.12 0 0 0 0 2.24h8.45a1.12 1.12 0 0 0 0-2.24"></path>
            </svg>
          </a>
        </li>
        <li style={{ "--i": 3 }} className="circle-box">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="anchor"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 48 48"
            >
              <path
                fill="#43a047"
                d="M29.035,24C29.014,23.671,29,23.339,29,23c0-6.08,2.86-10,7-10c3.411,0,6.33,2.662,7,7l2,0l0.001-9	L43,11c0,0-0.533,1.506-1,1.16c-1.899-1.066-3.723-1.132-6.024-1.132C30.176,11.028,25,16.26,25,22.92	c0,0.364,0.021,0.723,0.049,1.08h-2.099C22.979,23.643,23,23.284,23,22.92c0-6.66-5.176-11.892-10.976-11.892	c-2.301,0-4.125,0.065-6.024,1.132C5.533,12.506,5,11,5,11l-2.001,0L3,20l2,0c0.67-4.338,3.589-7,7-7c4.14,0,7,3.92,7,10	c0,0.339-0.014,0.671-0.035,1H0v2h1.009c1.083,0,1.977,0.861,1.999,1.943C3.046,29.789,3.224,32.006,4,33c1.269,1.625,3,3,8,3	c5.022,0,9.92-4.527,11-10h2c1.08,5.473,5.978,10,11,10c5,0,6.731-1.375,8-3c0.776-0.994,0.954-3.211,0.992-5.057	C45.014,26.861,45.909,26,46.991,26H48v-2H29.035z M11.477,33.73C9.872,33.73,7.322,33.724,7,32	c-0.109-0.583-0.091-2.527-0.057-4.046C6.968,26.867,7.855,26,8.943,26H19C18.206,30.781,15.015,33.73,11.477,33.73z M41,32	c-0.322,1.724-2.872,1.73-4.477,1.73c-3.537,0-6.729-2.949-7.523-7.73h10.057c1.088,0,1.975,0.867,2,1.954	C41.091,29.473,41.109,31.417,41,32z"
              ></path>
            </svg>
          </a>
        </li>
      </aside>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .menu-tooltip {
    --toggle-color: white;
    --item-1-gradient: linear-gradient(
      45deg,
      #0077b5,
      #0e76a8
    ); 
    --item-2-gradient: linear-gradient(45deg, #333, #000); /* GitHub black */
    --item-3-gradient: linear-gradient(
      45deg,
      #f89f1b,
      #000
    ); 
    width: 200px;
    height: 200px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    -webkit-tap-highlight-color: transparent;
    user-select: none;
    rotate: 180deg;
    .toggle {
      width: 50px;
      height: 50px;
      background-color: var(--toggle-color);
      text-align: center;
      line-height: 45px;
      border-radius: 50%;
      font-size: 1.8em;
      z-index: 999;
      position: absolute;
      transition: transform 1.2s ease-in-out;
      cursor: pointer;
      box-shadow: inset -2px -2px 4px 0 #0006, inset 2px 2px 4px 0 #0008;

      &:before {
        content: "";
        position: absolute;
        inset: 0px;
        background-color: var(--toggle-color);
        z-index: -1;
        filter: blur(40px) saturate(900%) opacity(0.1);
      }
    }

    #toggle {
      appearance: none;
      visibility: hidden;
      &:checked + .toggle {
        transform: rotate(315deg);
      }

      &:checked ~ .circle-box {
        transform: rotate(calc(360deg / 6 * var(--i)));
      }
    }

    .circle-box {
      position: absolute;
      left: 0;
      list-style-type: none;
      transition: 0.5s;
      transform-origin: 100px;
      transition-delay: calc(0.1s * var(--i));
      transform: rotate(0deg) translateX(80px);

      &:nth-of-type(1) .anchor {
        background: var(--item-1-gradient);
      }

      &:nth-of-type(2) .anchor {
        background: var(--item-2-gradient);
      }

      &:nth-of-type(3) .anchor {
        background: var(--item-3-gradient);
      }

      &:nth-of-type(5),
      &:nth-of-type(6),
      &:nth-of-type(7) {
        visibility: hidden;
      }

      .anchor {
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        font-size: 1.4em;
        color: white;
        text-decoration: none;
        transform: rotate(calc(360deg / -8 * var(--i)));

        &:hover {
          &::before {
            inset: -7px;
          }
        }

        &:before {
          content: "";
          position: absolute;
          inset: 0px;
          background-image: inherit;
          border-radius: inherit;
          z-index: -1;
          filter: blur(30px) saturate(900%);
          transition: inset 0.2s ease;
        }

        svg {
          width: 24px;
          height: 24px;
        }
      }
    }
    .circle-box:nth-of-type(4) .anchor {
      background: black;
      border: 2px solid #43a047;
      color: #43a047;
      rotate: -45deg;
    }
    .circle-box:nth-of-type(3) .anchor {
      rotate: 150deg;
    }
      .circle-box:nth-of-type(2) .anchor {
      rotate: 165deg;
    }
      .circle-box:nth-of-type(1) .anchor {
      rotate: 180deg;
    }
      .circle-box:nth-of-type(4) .anchor {
      rotate: 135deg;
    }
    .circle-box:nth-of-type(4) .anchor::before {
      content: "";
      position: absolute;
      inset: 0px;
      background: #43a047; /* green glow */
      border-radius: inherit;
      z-index: -1;
      filter: blur(20px) opacity(0.7);
      transition: inset 0.2s ease;
    }
      .circle-box:nth-of-type(2) .anchor::before {
      content: "";
      position: absolute;
      inset: 0px;
      background: white; /* green glow */
      border-radius: inherit;
      z-index: -1;
      filter: blur(20px) opacity(0.2);
      transition: inset 0.2s ease;
    }

    /* Hover makes the glow stronger */
    .circle-box:nth-of-type(4) .anchor:hover::before {
      inset: -7px;
      filter: blur(30px) opacity(1);
    }
       .circle-box:nth-of-type(2) .anchor:hover::before {
      inset: -5px;
      filter: blur(40px) opacity(1);
    }
  }
`;

export default Tooltip;

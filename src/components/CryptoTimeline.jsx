import timelineElements from "./timelineElements";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
import { FaBitcoin, FaEthereum, FaExchangeAlt, FaPizzaSlice, FaChartLine, FaMoneyBillAlt, FaVirus } from 'react-icons/fa'

const getIcon = (icon) => {
  switch(icon) {
    case 'bitcoin':
      return <FaBitcoin />;
    case 'ethereum':
      return <FaEthereum />;
    case 'exchange':
      return <FaExchangeAlt />;
    case 'pizza':
      return <FaPizzaSlice />;
    case 'chart':
      return <FaChartLine />;
    case 'money':
      return <FaMoneyBillAlt />;
    case 'virus':
      return <FaVirus />;
    default:
      return null;
  }
}
const CryptoTimeline = () => {
  let leftIconStyles = { background: "#06D6A0" };
  let rightIconStyles = { background: "#f9c74f" };

  return (
    <div>
      <h1 className="title">Timeline</h1>
      <VerticalTimeline>
        {timelineElements.map((element) => {
          let isalertnativeIcon = ["bitcoin", "pizza", "chart", "virus"].includes(element.icon);
          let showButton =
            element.buttonText !== undefined &&
            element.buttonText !== null &&
            element.buttonText !== "";

          return (
            <VerticalTimelineElement
              key={element.key}
              date={element.date}
              dateClassName="date"
              iconStyle={isalertnativeIcon ? leftIconStyles : rightIconStyles}
              icon={getIcon(element.icon)}
            >
              <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                {element.location}
              </h5>
              <p id="description">{element.description}</p>
              {showButton && (
                <a
                  className={`button ${
                    isalertnativeIcon ? "left" : "right"
                  }`}
                  href="/"
                >
                  {element.buttonText}
                </a>
              )}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}

export default CryptoTimeline;

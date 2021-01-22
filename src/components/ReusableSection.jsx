import React from "react";
import ReusableButton from "./ReusableButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const ReusableSection = ({
  title,
  desc,
  descLink,
  backgroundImg,
  leftBtnTxt,
  leftBtnLink,
  rightBtnTxt,
  rightBtnLink,
  twoButtons,
  first,
}) => {
  return (
    <div
      className='item'
      style={{
        backgroundImage: `url(${backgroundImg})`,
      }}>
      <div className='item__container'>
        <div className='item__text'>
          <p>{title}</p>
          <div className='item__textDesc'>
            <p>{desc}</p>
          </div>
        </div>
        <div className='item__lowerThird'>
          <div className='item__buttons'>
            <ReusableButton
              imp='primary'
              text={leftBtnTxt}
              link={leftBtnLink}
            />
            {twoButtons && (
              <ReusableButton
                imp='secondary'
                text={rightBtnTxt}
                link={rightBtnLink}
              />
            )}
          </div>
          {first && (
            <div className='item__expand'>
              <ExpandMoreIcon />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReusableSection;

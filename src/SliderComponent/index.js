import React, { useState, useEffect } from "react";
import { Range } from "rc-slider";
import "rc-slider/assets/index.css";
import styled from "styled-components";

const RangeWrapper = styled.div`
  width: 540px;
`;

const BottomDataView = styled.div`
  width: 100%;
  position: relative;
`;
const TopView = styled.div`
  width: 100%;
  position: relative;
`;
const MinBox = styled.span`
  position: absolute;
  left: ${props => props.left};
  margin-left: -7px;
  top: 7px;
  white-space: nowrap;
`;

const MaxBox = styled.span`
  position: absolute;
  left: ${props => props.left};
  margin-left: -13px;
  top: 7px;
  white-space: nowrap;
`;

const MinBoxTop = styled.span`
  position: absolute;
  left: ${props => props.left};
  bottom: 4px;
  color: grey;
  opacity: 0.8;
  margin-left: -13px;
`;

const MaxBoxTop = styled.span`
  position: absolute;
  left: ${props => props.left};
  bottom: 4px;
  color: grey;
  opacity: 0.8;
  margin-left: -13px;
`;

const RangeSlider = props => {
  const [start, setStart] = useState(props.min);
  const [end, setEnd] = useState(props.max);
  const [startLeft, setStartLeft] = useState(0);
  const [endLeft, setEndLeft] = useState(0);

  useEffect(() => {
    const slider1style = document.getElementsByClassName(
      "rc-slider-handle-1"
    )[0].style.left;
    const slider2style = document.getElementsByClassName(
      "rc-slider-handle-2"
    )[0].style.left;
    setStartLeft(slider1style);
    setEndLeft(slider2style);
  }, [props, start, end]);

  const onChangeHandler = a => {
    setStart(a[0]);
    setEnd(a[1]);
  };
  return (
    <RangeWrapper>
      <TopView>
        <MinBoxTop left={startLeft}>min</MinBoxTop>
        <MaxBoxTop left={endLeft}>max</MaxBoxTop>
      </TopView>
      <Range
        onAfterChange={() => props.valueHandler([start, end])}
        min={props.min}
        max={props.max}
        defaultValue={[0, 10000]}
        value={[start, end]}
        allowCross={false}
        step={props.steps}
        onChange={onChangeHandler}
        trackStyle={[{ backgroundColor: props.rangeColor }]}
        handleStyle={[
          {
            backgroundColor: props.dotColor,
            width: "20px",
            height: "20px",
            top: "2px",
            boxShadow: "none",
            border: "none"
          },
          {
            backgroundColor: props.dotColor,
            width: "20px",
            height: "20px",
            top: "2px",
            boxShadow: "none",
            border: "none"
          }
        ]}
        railStyle={{ backgroundColor: props.outerColor }}
      />
      <BottomDataView>
        <MinBox left={startLeft}>
          {props.stepUnit ? props.stepUnit + " " + start : start}
        </MinBox>
        <MaxBox left={endLeft}>
          {props.stepUnit ? props.stepUnit + " " + end : end}
        </MaxBox>
      </BottomDataView>
    </RangeWrapper>
  );
};
RangeSlider.defaultProps = {
  min: 0,
  max: 50000,
  steps: 100,
  dotColor: "blue",
  rangeColor: "blue",
  outerColor: "#c5c3c3",
  valueHandler: e => console.log(e)
};
export default RangeSlider;

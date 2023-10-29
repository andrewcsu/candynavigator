import React from "react";
import styled from "styled-components";

const StyledDesktop = styled.div`
  background-color: #070505;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;

  & .div {
    background-color: var(--background);
    height: 4650px;
    position: relative;
    width: 1440px;
  }

  & .frame {
    background-color: #ffa500;
    border-bottom-style: solid;
    border-bottom-width: 0.5px;
    height: 67px;
    left: 0;
    position: absolute;
    top: 0;
    width: 1440px;
  }

  & .group {
    height: 288px;
    left: 272px;
    position: absolute;
    top: 167px;
    width: 896px;
  }

  & .frame-wrapper {
    height: 288px;
  }

  & .frame-2 {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 32px;
    position: relative;
    width: 896px;
  }

  & .div-wrapper {
    align-items: center;
    align-self: stretch;
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 16px;
    position: relative;
    width: 100%;
  }

  & .frame-3 {
    align-items: center;
    align-self: stretch;
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 24px;
    justify-content: center;
    position: relative;
    width: 100%;
  }

  & .text-wrapper {
    align-self: stretch;
    color: #ffffff;
    font-family: "Gothic A1-Regular", Helvetica;
    font-size: 96px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: normal;
    margin-top: -1px;
    position: relative;
    text-align: center;
  }

  & .p {
    color: #bdbdbd;
    font-family: "Gothic A1-Regular", Helvetica;
    font-size: 24px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: normal;
    position: relative;
    text-align: center;
    width: 668px;
  }

  & .frame-4 {
    align-items: center;
    background-color: #ffa500;
    border-radius: 100px;
    display: inline-flex;
    flex: 0 0 auto;
    gap: 8px;
    justify-content: center;
    padding: 16px 32px;
    position: relative;
  }

  & .text-wrapper-2 {
    color: #ffffff;
    font-family: "Gothic A1-Black", Helvetica;
    font-size: 40px;
    font-weight: 900;
    letter-spacing: 0;
    line-height: normal;
    margin-top: -1px;
    position: relative;
    width: fit-content;
  }

  & .overlap-group {
    height: 2655px;
    left: 0;
    position: absolute;
    top: 1507px;
    width: 1440px;
  }

  & .frame-5 {
    background-color: #ffa500;
    height: 2178px;
    left: 0;
    position: absolute;
    top: 477px;
    width: 1440px;
  }

  & .text-wrapper-3 {
    color: var(--background);
    font-family: "Gothic A1-Regular", Helvetica;
    font-size: 76px;
    font-weight: 400;
    left: 332px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    text-align: center;
    top: 99px;
    width: 776px;
  }

  & .frame-6 {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 32px;
    left: 272px;
    position: absolute;
    top: 318px;
    width: 896px;
  }

  & .frame-7 {
    align-items: center;
    background-color: #000000;
    border-radius: 100px;
    display: inline-flex;
    flex: 0 0 auto;
    gap: 8px;
    justify-content: center;
    padding: 16px 32px;
    position: relative;
  }

  & .frame-8 {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 24px;
    height: 609px;
    left: 272px;
    position: absolute;
    top: 0;
    width: 896px;
  }

  & .text-wrapper-4 {
    align-self: stretch;
    color: var(--white);
    font-family: "Gothic A1-Regular", Helvetica;
    font-size: 76px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: normal;
    margin-top: -1px;
    position: relative;
    text-align: center;
  }

  & .text-wrapper-5 {
    color: #ffffff;
    font-family: "Gothic A1-Regular", Helvetica;
    font-size: 24px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 28px;
    position: relative;
    text-align: center;
    width: 668px;
  }

  & .frame-9 {
    align-items: flex-start;
    display: inline-flex;
    flex-direction: column;
    gap: 60px;
    height: 220px;
    left: 72px;
    position: absolute;
    top: 4201px;
  }

  & .frame-10 {
    align-items: flex-start;
    display: inline-flex;
    flex: 0 0 auto;
    gap: 4px;
    position: relative;
  }

  & .text-wrapper-6 {
    color: var(--white);
    font-family: "Gothic A1-Regular", Helvetica;
    font-size: 64px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: normal;
    margin-top: -1px;
    position: relative;
    width: fit-content;
  }

  & .frame-11 {
    align-items: flex-start;
    display: inline-flex;
    flex-direction: column;
    gap: 60px;
    height: 199px;
    margin-bottom: -119px;
    position: relative;
  }

  & .eric-chen-andrew-su {
    color: #ffffff;
    font-family: "Gothic A1-Regular", Helvetica;
    font-size: 36px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: normal;
    margin-top: -1px;
    position: relative;
    width: fit-content;
  }

  & .line {
    height: 1px;
    object-fit: cover;
    position: relative;
    width: 1296px;
  }

  & .image {
    height: 777px;
    left: 42px;
    object-fit: cover;
    position: absolute;
    top: 578px;
    width: 1358px;
  }

  & .frame-12 {
    background-color: #ffa500;
    border-bottom-style: solid;
    border-bottom-width: 0.5px;
    height: 67px;
    left: 0;
    position: absolute;
    top: 4583px;
    width: 1440px;
  }
`;

export const Desktop = () => {
  return (
    <StyledDesktop>
      <div className="div">
        <div className="frame" />
        <div className="group">
          <div className="frame-wrapper">
            <div className="frame-2">
              <div className="div-wrapper">
                <div className="frame-3">
                  <div className="text-wrapper">Candy Navigator</div>
                  <p className="p">Creating a faster way to Trick o’ Treat</p>
                </div>
              </div>
              <div className="frame-4">
                <div className="text-wrapper-2">Try Now</div>
              </div>
            </div>
          </div>
        </div>
        <div className="overlap-group">
          <div className="frame-5">
            <p className="text-wrapper-3">See Real Time Maps and Plan Your Trip</p>
            <div className="frame-6">
              <div className="frame-7">
                <div className="text-wrapper-2">Try Below!</div>
              </div>
            </div>
          </div>
          <div className="frame-8">
            <div className="text-wrapper-4">Mission</div>
            <p className="text-wrapper-5">
              Candy Navigator seeks to make trick o’ treating more efficient by plotting precise directions to maximize
              the user’s candy haul with the least amount of walking.
            </p>
          </div>
        </div>
        <div className="frame-9">
          <div className="frame-10">
            <div className="text-wrapper-6">Development Team</div>
          </div>
          <div className="frame-11">
            <div className="eric-chen-andrew-su">
              Eric Chen
              <br />
              Andrew Su
              <br />
              Benjamin Lin
            </div>
            <img className="line" alt="Line" src="line-1.svg" />
          </div>
        </div>
        <img className="image" alt="Image" src="image-1.png" />
        <div className="frame-12" />
      </div>
    </StyledDesktop>
  );
};

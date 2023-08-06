import React from "react";
import profile from './myimage.png';

function HeaderComponent() {
  return (
    <div class="div-main">
      {/* <div class="inner-div">
            <div class="div-img">
                <div class="div-img1"></div>
                <div class="div-img2"></div>
            </div>
            <div class="div-header">
              <div class="div-name">
                <h1 class="pro-name">Pushti</h1>
              </div>
              <div class="div-icons">
                <div class="div-inner-icon">
                <img class="img-github" src="https://www.svgrepo.com/show/361182/github-inverted.svg"/>
                <img class="img-frontend" src="https://icons.iconarchive.com/icons/simpleicons-team/simple/256/frontendmentor-icon.png"/>
                <img class="img-linkedin" src="https://cdn-icons-png.flaticon.com/512/61/61109.png"/>
                <img class="img-twitter" src="https://cdn-icons-png.flaticon.com/512/81/81725.png"/>
                </div>
              </div>

            </div>
            <div>
              <p class="desc">Nice to meet you!</p>
              <p class="desc"> I'm Pushti Lakhani</p>
            </div>
        </div> */}

      <div class="inner-div">
        <div class="div-name">
          <h1 class="pro-name">Pushti</h1>
        </div>
        <div class="div-icons">
          <div class="div-inner-icon">
            <img
              class="img-github"
              src="https://www.svgrepo.com/show/361182/github-inverted.svg"
            />
            <img
              class="img-frontend"
              src="https://icons.iconarchive.com/icons/simpleicons-team/simple/256/frontendmentor-icon.png"
            />
            <img
              class="img-linkedin"
              src="https://cdn-icons-png.flaticon.com/512/61/61109.png"
            />
            <img
              class="img-twitter"
              src="https://cdn-icons-png.flaticon.com/512/81/81725.png"
            />
          </div>
        </div>
      </div>
      <div class="main-div-parts">
        <div class="div-part-1">
          <div class="div-desc">
            <p class="desc">Nice to meet you!</p>
            <p class="desc">
              I'm <u>Pushti Lakhani.</u>
            </p>
          </div>
          <div>
            <p class="main-desc">
              Based in the UK, I'm a front-end developer passionate about
              building accesible web apps that user love.
            </p>
          </div>
          <div class="div-a">
            <a class="contact-me">CONTACT ME</a>
          </div>
        </div>
        <div class="div-part-2">
          <img
            class="img-profile"
            src={profile}
            alt="profile"
          />
        </div>
      </div>
      <div class="bottom-line"></div>
    </div>
  );
}

export default HeaderComponent;

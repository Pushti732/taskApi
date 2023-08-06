import React from 'react'

function FooterComponent() {
  return (
    <div class="main-footer-div">
      <div>
      <div class="div-inner-footer">
       <div class="div-footer-content">
        <p class="div-inner-p">Contact</p>
        <p class="div-inner-cont">I would love to hear about your project and how I could help. Please fill in the form, and i'll get back to you as soon as possible.</p>
       </div>
       <div class="div-footer-form">
        <div>
        <input className='form-input' type='text' placeholder='NAME'/>
        </div>
        <div >
        <input className='form-input' type='email' placeholder='EMAIL'/>
        </div>
        <div>
        <textarea className='form-input' rows={3} placeholder='MESSAGE' ></textarea>
        </div>
        <div className='div-btn'>
          <button className='btn-message'>SEND MESSAGE</button>
        </div>
       </div>
      </div>
      </div>
      <div class="bottom-line1"></div>
      <div class="inner-div">
        <div class="div-name1">
          <h1 class="pro-name">Pushti</h1>
        </div>
        <div class="div-icons1">
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
    </div>
  )
}

export default FooterComponent
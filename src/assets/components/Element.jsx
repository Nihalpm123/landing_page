import React from 'react'
import Images from '../images/formimage.jpg'

const Element = () => {
  return (
    <>
        <section className="element">
            <div className="element__left">
                <img src={Images} alt=""  className='element__image'/>
            </div>

            <div className="element__right">
              <h2>Sign Up Today Now!</h2>
              <p className='element__subtitle'>
              Fill out the form to sign up for our newsletter and receive updates
              </p>
            

            <form className='element__form'>
              <h3>Your Intrests</h3>
              <ul className='element__list'>
                <li className='element__list-item'>Web Development</li>
                <li className='element__list-item'>Ui/Ux Design</li>
                <li className='element__list-item'>Digital Marketing</li>
              </ul>

              <div class="element__form-group">
            <label for="username">Username:</label>
            <input type="text" id="username" placeholder="Enter Username" />
          </div>
          <div class="element__form-group">
            <label for="course">Select Course</label>
            <select id="course">
              <option value="">Choose a course</option>
              <option value="html">HTML & CSS</option>
              <option value="js">Javascript</option>
              <option value="react">React</option>
            </select>
          </div>
          <button type="submit" class="element__button">Submit Form</button>
          </form>
          </div>
        </section>
    </>
  )
}

export default Element
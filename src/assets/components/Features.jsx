import React from 'react'
import FeatureImg from '../images/features.jpg'

const Features = () => {
  return (
    <>
        <section className='features'>
            <div className="feature__container">
                <div className="feature__item">
                    <h2 className='feature__title feature__title--selected'>Empower Student Learning</h2>
                    <p className='feature__description'>
                        Our platform enhances student engagements intractive  learning tools.
                        Experience a seamless integration of technology that supports
                        learning styles
                    </p>
                </div>
                <div className="feature__item">
                    <h2 className='feature__title feature__title--selected'>Streamlined Communication Tools</h2>
                    <p className='feature__description'>
                        Our platform enhances student engagements intractive  learning tools.
                        Experience a seamless integration of technology that supports
                        learning styles
                    </p>
                </div>
                <div className="feature__item">
                    <h2 className='feature__title feature__title--selected'>Customizable Learning Experience</h2>
                    <p className='feature__description'>
                        Our platform enhances student engagements intractive  learning tools.
                        Experience a seamless integration of technology that supports
                        learning styles
                    </p>
                </div>
            </div>
            <div className='feature__image-container'>
                <img src={FeatureImg} alt="feature image" className='feature__image'/>
            </div>
        </section>
    </>
  )
}

export default Features
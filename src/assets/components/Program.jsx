import React from 'react'
import Program1 from '../images/program1.jpg'
import Program2 from '../images/program2.jpg'
import Program3 from '../images/program3.jpg'

const Program = () => {
  return (
    <>
        <section className='programs'>
            <h2>
                Explore Our State of the Art Facilities and Enriching Learning
                Experience
            </h2>
            <div className='programs__cards'>
                <div className="programs__card">
                    <img src={Program1} alt="program1" />
                
                <h3>
                    Engaging Extra Curricular Activities for Holistic student
                    development
                </h3>
                <p className='programs__card-description'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                    possimus exercitationem ab, recusandae, rerum corporis consectetur
                </p>
                <button className='programs__button'>Learn More</button>
                </div>



                <div className="programs__card">
                    <img src={Program2} alt="program2" />
                
                <h3>
                    Engaging Extra Curricular Activities for Holistic student
                    development
                </h3>
                <p className='programs__card-description'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                    possimus exercitationem ab, recusandae, rerum corporis consectetur
                </p>
                <button className='programs__button'>Learn More</button>
                </div>



                <div className="programs__card">
                    <img src={Program3} alt="program3" />
                
                <h3>
                    Engaging Extra Curricular Activities for Holistic student
                    development
                </h3>
                <p className='programs__card-description'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                    possimus exercitationem ab, recusandae, rerum corporis consectetur
                </p>
                <button className='programs__button'>Learn More</button>
                </div>
            </div>
        </section>
    </>
  )
}

export default Program
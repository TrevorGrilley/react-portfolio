import React from 'react';


function About() {
    return (
        <section id="about" className="aboutMyself">
          <h1>About Me</h1>
          <div>
            <img
              id="profilePicture"
              src={require(`../../assets/profilePicture.jpg`)}
              alt="profilePicture"
            />
            <div>
                Filler fakdjfklansdfklasdnfalksdfn asldkfjsdfk asldkfjasdkfj asdlfjksjdf sldfjlkjsdf sldkfjslkj
            </div>
          </div>
        </section>
    );
}

export default About;
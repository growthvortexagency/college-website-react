import React from 'react'
import CEBLogo from '../../assets/images/CEB_Logo.webp'
import '../../styles/pages/Trust.css'

const Trust = () => {
  return (
    <div className='trust-container'>
      <div className='trust-wrapper'>
        <img src={CEBLogo} alt='trust-logo-image'></img>
        <div className='trust-text-box'>
          <h2>About the Trust</h2>
          <div className='trust-paragraph'>
            <p>
              There is only one Education, and it has only one goal: the freedom of the mind. Anything that needs an
              adjective, be it civics education, or socialist education, or Christian education, or whatever-you-like
              education, is not education in the general sense, as it can have different goals. The very existence of
              modified "educations" is testimony to the fact that their proponents cannot bring about what they want
              in a mind that is free. An "education" that cannot do its work in a free mind, and so must "teach" by
              homily and precept in the service of these feelings and attitudes and beliefs rather than those, is pure
              and unmistakable tyranny.
            </p>
            <p>
              The words of the underground Grammarian, Mr. Richard Mitchell, is in place and power in it. The inspiring
              and outgoing desire, the burning bush flame and the heart throbbing impulses of the concerned and to be
              corned of the periphery or the cry of the outer ring of the society was an awakening timely call to the
              capuchins of the Holy Trinity Province to hanker into their boat into the education field. The fruit of the
              long-awaited wish of the millions of the society and the distant dream of our elders emerged in the four walls
              of the schools. The beauty and the mind meet in the capuchin education board.
            </p>
            <h3>Motto:</h3>
            <p>
            The Motto of Capuchin Education Board (CEB) is: jnanenaiva vimuktih: "Indeed, Liberation is through enlightenment". 
            As the temporal, mundane existence is characterized by the experience of bondage (samsara) ignorance (avidya) and pain 
            (duhkha), the eminent sages and prophets have propagated means to alleviate oneself from the above negative experiences 
            of human existence, and fill life with hope and joy. The fullness of existence is characterised by Liberation attained 
            through true knowledge, which is an experience of enlightenment.
            </p>
            <h3>The Function of Capuchin Education Board:</h3>
            <p>The Capuchin Education Board functions under the supervision of Provincial Minister and his Definitory. 
              The Education ministry of the Province is teamwork of all the friars involved in the ministry. The ministry 
              constitutes one single unit with one goal, one ideal and one system of organisation that goes to make one 
              single tradition.
            </p>
            <p>More Details visit our website: {""} <a href='https://www.capuchineducation.com' rel="noopener noreferrer">www.capuchineducation.com</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Trust
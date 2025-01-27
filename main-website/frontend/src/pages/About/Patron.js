import React from 'react'
import '../../styles/pages/Patron.css'
import PatronPadua from '../../assets/images/padua-patron.webp'

const Patron = () => {
  return (
    <div className='patron-container'>
      <div className='patron-wrapper'>
        <img src={PatronPadua} alt='patron-padua-image'></img>
        <div className='patron-text-box'>
          <h2>Patron of St. Anthony of Padua</h2>
          <div className='patron-paragraph'>
            <p>
            St. Anthony of Padua is a Portuguese Catholic Saint, born in 1195. Born in a very rich family 
            of nobility, he wanted to be a popular man, in the eyes of the world. Hence, his family arranged 
            sound education for him at the local cathedral school. But God's wish was different. Against the 
            wish of his family, Anthony entered the Augustinian Abbey of St. Vincent on the outskirt of Lisbon. 
            He studied Scripture and Latin classics.
            </p>
            <p>
              After his ordination to priesthood, Anthony was strongly attracted to the simple Gospel lifestyle 
              of the Franciscan friars. In February 1220, news arrived that the five Franciscans had been martyred 
              in Morocco. Anthony meditated on the heroism of these Franciscans. He wanted to obey God's call to leave 
              everything and follow him.
              </p>
            <p> 
              In the Franciscan order, he became a popular preacher of the Gospel. At the Papal court, his preaching 
              was hailed as a “Jewel case of the Bible”. Saint Anthony died on 13 June 1231 at the age of 36. When he
              passed away, it is said that the children cried in the streets and that all the bells of the churches rang 
              on their own accord, rung by angels come to earth to honor the death of the Saint. He is known to have 
              become the “quickest” saint in the history of the Catholic Church. St. Anthony of Padua is also known as 
              'Miracle Worker'. People plead for his intercession in times of difficulty. May St. Anthony intercede for 
              us and God bless our Institution.
            </p>
            <p><i>
            “We are living in an information driven society which bombards us indiscriminately with data, all treated as 
            being equal importance, and which leads to remarkable superficiality in the area of moral discernment. In 
            response, we need to provide an education which teaches critical thinking and encourages the development of 
            mature moral values”</i>
            </p>
            <p><i>- Pope Francis</i></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Patron
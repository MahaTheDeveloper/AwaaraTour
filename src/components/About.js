import aboutImg from '../images/about.jpeg'
import Title from './Title'
const About = () => {
  return (
    <section className="section" id="about">
      <Title title='About' subTitle='us'/>

      <div className="section-center about-center">
        <div className="about-img">
          <img
            src={aboutImg}
            className="about-photo"
            alt="awesome beach"
          />
        </div>
        <article className="about-info">
          <h3>explore the difference</h3>
          <p>
          In our journey through life, we often encounter a multitude of differences that shape our experiences and perspectives. 
          These differences can be found in the people we meet, the places we visit, the cultures we encounter, and the ideas we explore. 
          They provide us with a rich tapestry of diversity that both challenges and enriches our lives.
          </p>
          <p>
          The exploration of difference is not merely a matter of encountering the unfamiliar; it is a fundamental aspect of human existence that can be embraced and celebrated. 
          It enables us to learn, grow, and evolve as individuals and as a society.
          </p>
          <a href="#about" className="btn">read more</a>
        </article>
      </div>
    </section>
  )
}
export default About
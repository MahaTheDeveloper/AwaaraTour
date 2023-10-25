import { service } from '../data.js'

const Service = () => {
  return (
    <div className="section-center services-center">
        {
          service.map(({id, icon, h4, p})=>{
            return(
              <article className="service" key={id}>
                <span className="service-icon"><i className={icon}></i></span>
                <div className="service-info">
                  <h4 className="service-title">{h4}</h4>
                  <p className="service-text">{p}</p>
                </div>
              </article>)
          }
          )
        }
      </div>
  )
}
export default Service
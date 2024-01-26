import '../CSS/Testimonials.css'
const Testimonials = () => {
  return (<div>
    <section className="testimonials">
      <div
        style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <div
          className="testinomial-header aos-init aos-animate"
          data-aos="fade-right"
          data-aos-easing="ease"
          data-aos-duration={1000}
        >
          <h1>Reviews</h1>
        </div>
      </div>
      <div className="testinomial-container">
        <div
          className="testinomial-card aos-init aos-animate"
          id="testinomial-card-1"
          data-aos="fade-up"
          data-aos-easing="ease"
          data-aos-duration={1000}
        >
          <div className="testinomial-card-head">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1200px-User-avatar.svg.png" alt="img" />
            <div style={{ lineHeight: "1.4", fontSize: "0.9rem" }}>
              <h3>Utkarsh Saxena</h3>
              <p>
                <a href="http://">@utkarsh123</a>
              </p>
            </div>
          </div>
          <p>
            The team at Builder is highly professional, knowledgeable, and dedicated
            to delivering exceptional results. From the very beginning, I was
            impressed with their attention to detail and commitment to quality. They
            worked closely with me to understand my needs and preferences, and were
            always willing to provide valuable input and suggestions to ensure that
            the project exceeded my expectations
          </p>
        </div>
        <div
          className="testinomial-card aos-init aos-animate"
          id="testinomial-card-2"
          data-aos="fade-down"
          data-aos-easing="ease"
          data-aos-duration={1000}
        >
          <div className="testinomial-card-head">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1200px-User-avatar.svg.png" alt="img" />
            <div style={{ lineHeight: "1.4", fontSize: "0.9rem" }}>
              <h3>Abhi Patel</h3>
              <p>
                <a href="http://">@abhi677</a>
              </p>
            </div>
          </div>
          <p>
            Throughout the project, the team at Builder demonstrated a high level of
            expertise, and their workmanship was top-notch. They were able to
            navigate the complexities of the project with ease, and their attention
            to detail and commitment to quality was evident in every aspect of their
            work. Had an easy construction journey with Builder.
          </p>
        </div>
        <div
          className="testinomial-card aos-init aos-animate"
          data-aos="fade-right"
          data-aos-easing="ease"
          data-aos-duration={1000}
        >
          <div className="testinomial-card-head">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1200px-User-avatar.svg.png" alt="img" />
            <div style={{ lineHeight: "1.4", fontSize: "0.9rem" }}>
              <h3>Rolika Agarwal</h3>
              <p>
                <a href="http://">@rolika233</a>
              </p>
            </div>
          </div>
          <p>
            What impressed me the most was their focus on customer service. The team
            at Builder was always available to answer my questions.
          </p>
        </div>
        <div
          className="testinomial-card aos-init aos-animate"
          data-aos="fade-up"
          data-aos-easing="ease"
          data-aos-duration={1000}
        >
          <div className="testinomial-card-head">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1200px-User-avatar.svg.png" alt="img" />
            <div style={{ lineHeight: "1.4", fontSize: "0.9rem" }}>
              <h3>Kartikay Asija</h3>
              <p>
                <a href="http://">@kartikay123</a>
              </p>
            </div>
          </div>
          <p>
            I would highly recommend Builder for any construction project. Their
            professionalism and dedication to customer service make them the best in
            the business.
          </p>
        </div>
        <div
          className="testinomial-card aos-init aos-animate"
          id="testinomial-card-5"
          data-aos="fade-down"
          data-aos-easing="ease"
          data-aos-duration={1000}
        >
          <div className="testinomial-card-head">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1200px-User-avatar.svg.png" alt="img" />
            <div style={{ lineHeight: "1.4", fontSize: "0.9rem" }}>
              <h3>Swastik</h3>
              <p>
                <a href="http://">@swastik67</a>
              </p>
            </div>
          </div>
          <p>
            The team was skilled, experienced, and attentive to detail, and they
            worked tirelessly to ensure that every aspect of the project was
            completed to my satisfaction. The communication throughout the process
            was excellent. I am thrilled with the final result and would highly
            recommend Builder Construction to anyone looking for a reliable
            construction firm.
          </p>
        </div>
      </div>
    </section>
    <br/>
    <br/>
    <br/>

  </div>)
}

export default Testimonials;
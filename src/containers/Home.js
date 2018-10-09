import React from 'react';
// import ShopProductsBtn from '../components/ShopProductsBtn';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <section className="section has-background-grey-light">
      <div className="container">
        <div className="tile is-ancestor">
          <div className="tile is-parent">
            <article className="tile is-child notification has-background-grey-light">
              <div className="content">
                <p className="title">
                  We want you to feel
                  <br />
                  confident on your period.
                </p>
                <div className="content">
                  We continously speak with Medical Researchers,
                  <br />
                  Gynecologists, Midwives and other Health Realted
                  <br />
                  Specialists to make sure we are truly there for you.
                </div>
                <Link className="button is-dark" to="/products-page">
                  LEARN MORE
                </Link>
              </div>
            </article>
          </div>

          <div className="tile is-vertical is-6">
            <div className="tile">
              <div className="tile">
                <div className="tile is-parent">
                  <article className="tile is-child notification">
                    <figure className="image">
                      <img src="" alt="row1pic1" />
                    </figure>
                  </article>
                </div>
              </div>
              <div className="tile is-5">
                <div className="tile is-parent">
                  <article className="tile is-child notification is-white ">
                    <figure className="image">
                      <img src="" alt="row1pic2" />
                    </figure>
                  </article>
                </div>
              </div>
            </div>

            <div className="tile">
              <div className="tile is-5">
                <div className="tile is-parent">
                  <article className="tile is-child notification is-white ">
                    <figure className="image">
                      <img src="" alt="row2pic1" />
                    </figure>
                  </article>
                </div>
              </div>
              <div className="tile">
                <div className="tile is-parent">
                  <article className="tile is-child notification is-white ">
                    <figure className="image">
                      <img src="" alt="row2pic2" />
                    </figure>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section has-background-white-ter">
      <div className="container">
        <div className="tile is-ancestor">
          <div className="tile is-vertical is-6">
            <div className="tile">
              <div className="tile">
                <div className="tile is-parent">
                  <article className="tile is-child notification has-background-grey-light">
                    <figure className="image">
                      <img src="" alt="row1pic1" />
                    </figure>
                  </article>
                </div>
              </div>
            </div>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child notification">
              <div className="content">
                <p className="subtitle">
                  It takes time to find the product that gets
                  <br />
                  you. Use our comparison tool to help
                  <br />
                  figure out what produdct is right fr you!
                </p>
                <Link className="button is-dark" to="/products-page">
                  COMPARE PRODUCTS
                </Link>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>

    <section className="section has-background-grey">
      <div className="container">
        <div className="tile is-ancestor">
          <div className="tile is-parent">
            <article className="tile is-child notification has-background-grey">
              <div className="content">
                <p className="title">Hi Taylor! </p>
                <div className="content">
                  Change happens. If you are having new interests in
                  <br />
                  pelvic health topics or are needing a fresh rebrand,
                  <br />
                  update your customization preferences in order to be
                  <br />
                  a true reflection of you.
                </div>
                <Link className="button is-dark" to="/products-page">
                  CUSTOMIZE TO ME
                </Link>
              </div>
            </article>
          </div>

          <div className="tile is-6">
            <article className="tile is-6 is-child notification has-background-grey-light">
              <div className="content">
                <p className="subtitle">What you have looked at</p>
                <div className="content">
                  You have not looked at anything
                  <br />
                  yet!
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>

    <div className="container">
      <div className="tile has-text-centered is-ancestor">
        <article className="tile is-child notification has-background-white">
          <div className="content">
            <p className="subtitle">Taylors Top Interests</p>
            <a href="/" className="button is-dark">Sustainability</a>
            <a href="/" className="button is-dark">Sex & Intimacy</a>
            <a href="/" className="button is-dark">Cups</a>
            <a href="/" className="button is-dark">Organic Tampons</a>
          </div>
        </article>
      </div>
      <div className="tile has-text-centered is-ancestor">
        <article className="tile is-child notification has-background-white">
          <div className="content">
            <button type="submit" className="button is-dark">
              <i className="fas fa-arrow-left" />
            </button>
            <a href="/" className="button is-dark">Product Usage</a>
            <a href="/" className="button is-dark">Birth Control</a>
            <a href="/" className="button is-dark">Pelvic Health</a>
            <a href="/" className="button is-dark">Disc</a>
          </div>
        </article>
      </div>
    </div>

    <section className="section has-background-white">
      <div className="container">
        <div className="tile is-ancestor">
          <div className="tile is-6">
            <article className="tile is-6 is-child notification has-background-grey-light">
              <div className="content">
                <p className="subtitle">What you have looked at</p>
                <div className="content">
                  You have not looked at anything
                  <br />
                  yet!
                </div>
              </div>
            </article>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child notification has-background-white">
              <div className="content">
                <div className="title">
                  <u>
                    Period Look Color: Brown,
                    <br />
                    Black, or Dark - Does It
                    <br />
                    Matter?
                  </u>
                </div>
                <div className="content">
                  <strong> 7 min * September 14th, 2018 </strong>
                  <br />
                  Content Manager, Clar McWeeney
                  <br />
                  <i className="fas fa-book-open" />
                  <em> Article </em>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="tile is-ancestor">
          <div className="tile is-parent">
            <article className="tile is-child notification has-background-white">
              <div className="content">
                <div className="title">
                  <u>
                    Natural Birth Control And
                    <br />
                    Fertility Awareness
                    <br />
                    Methods
                  </u>
                </div>
                <div className="content">
                  <strong> 15 min read* June 20th, 2018 </strong>
                  <br />
                  Science Writer, Maegan Boutot
                  <br />
                  <i className="fas fa-book-open" />
                  <em> Article </em>
                </div>
              </div>
            </article>
          </div>
          <div className="tile is-6">
            <article className="tile is-6 is-child notification has-background-grey-light">
              <div className="content">
                <p className="subtitle">What you have looked at</p>
                <div className="content">
                  You have not looked at anything
                  <br />
                  yet!
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="tile is-ancestor">
          <div className="tile is-6">
            <article className="tile is-6 is-child notification has-background-grey-light">
              <div className="content">
                <p className="subtitle">What you have looked at</p>
                <div className="content">
                  You have not looked at anything
                  <br />
                  yet!
                </div>
              </div>
            </article>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child notification has-background-white">
              <div className="content">
                <div className="title">
                  <u>
                    How Long Can A Menstrual
                    <br />
                    Cup Be Worn?
                  </u>
                </div>
                <div className="content">
                  <strong> 45 sec * September 14th, 2018 </strong>
                  <br />
                  Dr. Shari Mahrdt
                  <br />
                  <i className="fas fa-video" />
                  <em> Video </em>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Home;

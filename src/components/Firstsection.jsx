import "./Firstsection.scss";
import brush from "../assets/img/brush.svg";
import objectSelect from "../assets/img/object-select.svg";
import megaphone from "../assets/img/megaphone.svg";
import globe from "../assets/img/globe_icon.svg";
import frikadellen from "../assets/img/frikadellen.jpeg";
import glass from "../assets/img/glass.jpeg";
import pizza from "../assets/img/pizza.jpeg";
import pizzaTwo from "../assets/img/pizza2.jpeg";
import salat from "../assets/img/salat.jpeg";
import scampi from "../assets/img/scampi.jpeg";
import spaghetti from "../assets/img/spagetthi.jpeg";
import teller from "../assets/img/teller.jpeg";

const Firstsection = () => {
  return (
    <main>
      <h2 className="section-title">What We Do</h2>
      <h3 className="section-subtitle">
        We've got everything you need to launch and grow your business
      </h3>
      <section className="servicescontainerone">
        <div>
          <div>
            <img src={brush} alt="" />
            <h4>Brand Identity</h4>
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio quo,
            tenetur aut eos mollitia animi quia non excepturi. Velit molestiae
            fugiat perferendis porro, vel odio!
          </p>
        </div>
        <div>
          <div>
            <img src={objectSelect} alt="" />
            <h4>Illustration</h4>
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio quo,
            tenetur aut eos mollitia animi quia non excepturi. Velit molestiae
            fugiat perferendis porro, vel odio!
          </p>
        </div>
        <div>
          <div>
            <img src={megaphone} alt="" />
            <h4>Marketing</h4>
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio quo,
            tenetur aut eos mollitia animi quia non excepturi. Velit molestiae
            fugiat perferendis porro, vel odio!
          </p>
        </div>
        <div>
          <div>
            <img src={megaphone} alt="" />
            <h4>Web Design</h4>
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio quo,
            tenetur aut eos mollitia animi quia non excepturi. Velit molestiae
            fugiat perferendis porro, vel odio!
          </p>
        </div>
      </section>
      <section className="foodcardcontainer">
        <section className="foodcardsubcontainer">
          <article className="foodcarditems">
            <img src={frikadellen} alt="" />
            <h5>Fusce dictum finibus</h5>
            <p className="fooddescr">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque, at?
            </p>
            <h6>$45/$55</h6>
          </article>
          <article className="foodcarditems">
            <img src={glass} alt="" />
            <h5>aliquam sagittis</h5>
            <p className="fooddescr">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque, at?
            </p>
            <h6>$45/$55</h6>
          </article>
          <article className="foodcarditems">
            <img src={pizza} alt="" />
            <h5>sed varius turpis</h5>
            <p className="fooddescr">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque, at?
            </p>
            <h6>$45/$55</h6>
          </article>
          <article className="foodcarditems">
            <img src={pizzaTwo} alt="" />
            <h5>Aliquam agittis</h5>
            <p className="fooddescr">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque, at?
            </p>
            <h6>$45/$55</h6>
          </article>
          <article className="foodcarditems">
            <img src={salat} alt="" />
            <h5>Maeccenas eget</h5>
            <p className="fooddescr">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque, at?
            </p>
            <h6>$45/$55</h6>
          </article>
          <article className="foodcarditems">
            <img src={scampi} alt="" />
            <h5>Quisiqe et felois eroe</h5>
            <p className="fooddescr">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque, at?
            </p>
            <h6>$45/$55</h6>
          </article>
          <article className="foodcarditems">
            <img src={spaghetti} alt="" />
            <h5>sed ultricies duis</h5>
            <p className="fooddescr">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque, at?
            </p>
            <h6>$45/$55</h6>
          </article>
          <article className="foodcarditems">
            <img src={teller} alt="" />
            <h5>Donec porta consequat</h5>
            <p className="fooddescr">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque, at?
            </p>
            <h6>$45/$55</h6>
          </article>
        </section>
      </section>
    </main>
  );
};

export default Firstsection;

import Image from "next/image";

export default function Hero() {
  return (
    <>
      <section className="shell hero" aria-labelledby="name">
        <div className="intro">
          <p className="eyebrow hero-motion">
            Content creator <span>·</span> Creative director
          </p>
          <h1 id="name" className="hero-motion">
            Edna Osayamen <em>Orumwense.</em>
          </h1>
          <p className="lede hero-motion">
            I make short-form videos that give people a real feel for student life, explain what a brand offers, and
            bring products into everyday stories.
          </p>
          <div className="actions hero-motion">
            <a className="button primary" href="#work">
              View my work <span aria-hidden="true">↓</span>
            </a>
            <a className="button outline" href="mailto:eddywense@gmail.com">
              Email me{" "}
            </a>
          </div>
          <p className="location hero-motion">
            <span aria-hidden="true" />
            Middlesbrough, UK
          </p>
        </div>
        <figure className="portrait hero-motion">
          <Image
            src="/images/portrait.webp"
            alt="Edna Osayamen Orumwense wearing a bright pink shirt"
            priority
            width={1125}
            height={1500}
          />
        </figure>
      </section>
    </>
  );
}

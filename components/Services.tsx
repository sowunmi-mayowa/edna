import Image from "next/image";
export default function Services() {
  return (
    <>
      <section
        id="services"
        className="services"
        aria-labelledby="services-title"
      >
        <div className="shell">
          <div className="section-head reveal">
            <h2 id="services-title">
              What I <em>do.</em>
            </h2>
            <p>
              From making the first video to planning and running your social
              channels.
            </p>
          </div>
          <div className="service-grid">
            <article className="service-card service-feature">
              <Image
                src="/images/service-icons/video-creation.svg?v=2"
                alt=""
                unoptimized
                width={72}
                height={72}
                className="service-icon"
              />
              <h3>Short-form video creation</h3>
              <p>
                On-camera videos, vlogs and explainers for TikTok, Reels and
                other vertical formats.
              </p>
              <div className="video-mockup" aria-hidden="true">
                <div className="video-frame">
                  <div className="phone-screen">
                    <Image
                      src="/images/phone-screen.webp"
                      alt=""
                      width={300}
                      height={534}
                    />
                    <div className="phone-editor">
                      <div className="phone-time">
                        <span>00:09</span>
                        <span>01:02</span>
                      </div>
                      <div className="video-timeline">
                        <i />
                        <i />
                        <i />
                        <b />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
            <article className="service-card">
              <Image
                src="/images/service-icons/video-editing.svg?v=2"
                alt=""
                unoptimized
                width={72}
                height={72}
                className="service-icon"
              />
              <h3>Video editing</h3>
              <p>
                Edits that tighten the pacing, bring out the strongest moments
                and use captions to make the story easy to follow.
              </p>
            </article>
            <article className="service-card">
              <Image
                src="/images/service-icons/brand-promotion.svg?v=2"
                alt=""
                unoptimized
                width={72}
                height={72}
                className="service-icon"
              />
              <h3>Brand promotional content</h3>
              <p>
                Social videos that introduce a product, explain a service or
                give people a clear reason to act on a campaign.
              </p>
            </article>
            <article className="service-card">
              <Image
                src="/images/service-icons/content-planning.svg?v=2"
                alt=""
                unoptimized
                width={72}
                height={72}
                className="service-icon"
              />
              <h3>Content strategy and planning</h3>
              <p>
                Content ideas, recurring themes and a posting plan shaped around
                your audience and what you want to achieve.
              </p>
            </article>
            <article className="service-card">
              <Image
                src="/images/service-icons/user-generated-content.svg?v=2"
                alt=""
                unoptimized
                width={72}
                height={72}
                className="service-icon"
              />
              <h3>User-generated content</h3>
              <p>
                Creator-led product demos, reviews and everyday-use videos that
                brands can share on their own channels.
              </p>
            </article>
            <article className="service-card">
              <Image
                src="/images/service-icons/voice-over.svg?v=2"
                alt=""
                unoptimized
                width={72}
                height={72}
                className="service-icon"
              />
              <h3>Voice-over services</h3>
              <p>
                Clear, conversational narration for explainers, product demos
                and social campaigns.
              </p>
              <div className="voice-wave" aria-hidden="true">
                <i style={{ "--peak": "8px" } as React.CSSProperties} />
                <i style={{ "--peak": "15px" } as React.CSSProperties} />
                <i style={{ "--peak": "26px" } as React.CSSProperties} />
                <i style={{ "--peak": "12px" } as React.CSSProperties} />
                <i style={{ "--peak": "20px" } as React.CSSProperties} />
                <i style={{ "--peak": "31px" } as React.CSSProperties} />
                <i style={{ "--peak": "19px" } as React.CSSProperties} />
                <i style={{ "--peak": "12px" } as React.CSSProperties} />
                <i style={{ "--peak": "25px" } as React.CSSProperties} />
                <i style={{ "--peak": "16px" } as React.CSSProperties} />
                <i style={{ "--peak": "8px" } as React.CSSProperties} />
                <i style={{ "--peak": "13px" } as React.CSSProperties} />
                <i style={{ "--peak": "21px" } as React.CSSProperties} />
                <i style={{ "--peak": "12px" } as React.CSSProperties} />
                <i style={{ "--peak": "7px" } as React.CSSProperties} />
              </div>
            </article>
            <article className="service-card">
              <Image
                src="/images/service-icons/social-management.svg?v=2"
                alt=""
                unoptimized
                width={72}
                height={72}
                className="service-icon"
              />
              <h3>Social media management</h3>
              <p>
                Ongoing support with planning, publishing and keeping your
                brand’s voice consistent across social channels.
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}

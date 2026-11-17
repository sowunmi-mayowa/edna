import Image from "next/image";

export default function Services() {
  return (
    <>
      <section id="services" className="services" aria-labelledby="services-title">
        <div className="shell">
          <div className="section-head reveal">
            <h2 id="services-title">
              What I <em>do.</em>
            </h2>
            <p>From making the first video to planning and running your social channels.</p>
          </div>
          <div className="service-grid">
            <article className="service-card service-feature">
              <svg className="service-icon" viewBox="0 0 24 24" aria-hidden="true">
                <rect x="6" y="2" width="12" height="20" rx="2" />
                <path d="m10 8 5 4-5 4z" />
              </svg>
              <h3>Short-form video creation</h3>
              <p>On-camera videos, vlogs and explainers for TikTok, Reels and other vertical formats.</p>
              <div className="video-mockup" aria-hidden="true">
                <div className="video-frame">
                  <div className="phone-screen">
                    <Image src="/images/phone-screen.webp" alt="" width={300} height={534} />
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
              <svg className="service-icon" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="6" cy="6" r="3" />
                <circle cx="6" cy="18" r="3" />
                <path d="m8 8 13 13M8 16 21 3" />
              </svg>
              <h3>Video editing</h3>
              <p>
                Edits that tighten the pacing, bring out the strongest moments and use captions to make the story easy
                to follow.
              </p>
            </article>
            <article className="service-card">
              <svg className="service-icon" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M3 10v4h4l12 5V5L7 10H3zm4 4 2 6h3l-2-5m12-5v4" />
              </svg>
              <h3>Brand promotional content</h3>
              <p>
                Social videos that introduce a product, explain a service or give people a clear reason to act on a
                campaign.
              </p>
            </article>
            <article className="service-card">
              <svg className="service-icon" viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3" y="5" width="18" height="16" rx="2" />
                <path d="M7 3v4m10-4v4M3 10h18m-13 5h3m3 0h3" />
              </svg>
              <h3>Content strategy and planning</h3>
              <p>
                Content ideas, recurring themes and a posting plan shaped around your audience and what you want to
                achieve.
              </p>
            </article>
            <article className="service-card">
              <svg className="service-icon" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20 11a7 7 0 0 1-7 7H8l-5 3 2-5a7 7 0 0 1-2-5 8 8 0 0 1 8-8h2a7 7 0 0 1 7 8zM8 11h.01M12 11h.01M16 11h.01" />
              </svg>
              <h3>User-generated content</h3>
              <p>
                Creator-led product demos, reviews and everyday-use videos that brands can share on their own channels.
              </p>
            </article>
            <article className="service-card">
              <svg className="service-icon" viewBox="0 0 24 24" aria-hidden="true">
                <rect x="9" y="2" width="6" height="13" rx="3" />
                <path d="M5 10v2a7 7 0 0 0 14 0v-2m-7 9v3m-3 0h6" />
              </svg>
              <h3>Voice-over services</h3>
              <p>Clear, conversational narration for explainers, product demos and social campaigns.</p>
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
              <svg className="service-icon" viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3" y="4" width="18" height="16" rx="2" />
                <path d="M3 9h18m-13 7v-3m4 3v-2m4 2v-4" />
              </svg>
              <h3>Social media management</h3>
              <p>
                Ongoing support with planning, publishing and keeping your brand’s voice consistent across social
                channels.
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}

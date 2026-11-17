export default function Work() {
  return (
    <>
      <section className="work" id="work" aria-labelledby="work-title">
        <div className="shell">
          <div className="section-head reveal">
            <h2 id="work-title">
              Selected <em>work.</em>
            </h2>
            <p>Student storytelling, on-camera presenting and social content for brands.</p>
          </div>
          <div className="featured reveal">
            <div className="feature-copy">
              <p className="eyebrow">Featured video · On-camera content</p>
              <h3>On camera</h3>
            </div>
            <div className="feature-media">
              <video
                controls
                playsInline
                preload="metadata"
                poster="/images/featured-poster.webp"
                src="/videos/featured.mp4"
                aria-label="Edna’s uploaded video"
              />
            </div>
          </div>
          <div className="projects">
            <article className="project reveal">
              <p className="eyebrow">Teesside University · Student content</p>
              <h3>What to pack before moving to the UK</h3>
              <p>
                Drawing on my experience as an international student, I share six practical things to bring when you’re
                moving to the UK for university.
              </p>
              <a
                className="text-link"
                href="https://www.instagram.com/reel/DcRRHsMgavf/"
                target="_blank"
                rel="noopener"
              >
                Watch on Instagram{" "}
              </a>
            </article>
            <article className="project reveal">
              <p className="eyebrow">MyQuickServe · Recruitment marketing</p>
              <h3>Band 5 NHS nursing support</h3>
              <p>A short promotion for nurses looking for help with NHS applications and interviews.</p>
              <a
                className="text-link"
                href="https://www.instagram.com/reel/Dfb4mpaMfz2/"
                target="_blank"
                rel="noopener"
              >
                Watch on Instagram
              </a>
            </article>
            <article className="project reveal">
              <p className="eyebrow">MyQuickServe · B2B social content</p>
              <h3>Virtual assistants for healthcare agencies</h3>
              <p>A social reel showing how virtual assistants can help healthcare agencies with day-to-day admin.</p>
              <a
                className="text-link"
                href="https://www.instagram.com/reel/DYCWKUfMRAL/"
                target="_blank"
                rel="noopener"
              >
                Watch on Instagram
              </a>
            </article>
            <article className="project reveal">
              <p className="eyebrow">MyQuickServe · Service explainer</p>
              <h3>NHS application and interview support</h3>
              <p>
                A short explainer introducing the support available to NHS jobseekers, from applications to interview
                coaching.
              </p>
              <a
                className="text-link"
                href="https://www.instagram.com/reel/Dbv8DnwM2u8/"
                target="_blank"
                rel="noopener"
              >
                Watch on Instagram
              </a>
            </article>
          </div>
          <div className="social-work reveal">
            <h3>More on TikTok</h3>
            <div>
              <a className="text-link" href="https://vm.tiktok.com/ZN8567ARM/" target="_blank" rel="noopener">
                Watch clip 1
              </a>
              <a className="text-link" href="https://vm.tiktok.com/ZN856QTrG/" target="_blank" rel="noopener">
                Watch clip 2
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

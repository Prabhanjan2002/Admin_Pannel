export const Home = () => {
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p>we are the best</p>
              <h1>welcome to prabhu's web</h1>
              <p>
                wdchbqefgcerWqyc6t3f3ebw6y8wrwfe4ugvf r43feuygcverf rfegrfedb
                efchruefcre rgefcyh4gy7re regf7u7uyr8 refgyuhgyref
                refbvgyuhfgrcreu f7reyfgh refyhgyu 7f5re4yhf7uyh
                yrh478uyherfdvefhryt rfecdyrgf rfegyghrfe4 re4fghuih refgyugr
                re4ufhyhgrf
              </p>
              <div className="btn btn-group">
                <a href="/contact">
                  <button className="btn">Connect now</button>
                </a>
                <a href="/services">
                  <button className="btn secondary-btn">Learn more</button>
                </a>
              </div>
            </div>

            {/* hero images part */}
            <div className="hero-image">
              <img
                src="/images/home.png"
                alt="home image"
                width="400"
                height="500"
              />
            </div>
          </div>
        </section>
      </main>

      {/* 2ns section  */}
      <section className="section-analytics">
        <div className="container grid grid-four-cols">
          <div className="div1">
            <h2>50+</h2>
            <p>registered companies</p>
          </div>
          <div className="div1">
            <h2>50+</h2>
            <p>registered companies</p>
          </div>
          <div className="div1">
            <h2>50+</h2>
            <p>registered companies</p>
          </div>
          <div className="div1">
            <h2>50+</h2>
            <p>registered companies</p>
          </div>
        </div>
      </section>

      {/* 3rd section */}
      <section className="section-hero">
        <div className="container grid grid-two-cols">
          {/* hero images part */}
          <div className="hero-image">
            <img
              src="/images/home.png"
              alt="home image"
              width="400"
              height="500"
            />
          </div>
          <div className="hero-content">
            <p>we are the best</p>
            <h1>welcome to prabhu's web</h1>
            <p>
              wdchbqefgcerWqyc6t3f3ebw6y8wrwfe4ugvf r43feuygcverf rfegrfedb
              efchruefcre rgefcyh4gy7re regf7u7uyr8 refgyuhgyref
              refbvgyuhfgrcreu f7reyfgh refyhgyu 7f5re4yhf7uyh
              yrh478uyherfdvefhryt rfecdyrgf rfegyghrfe4 re4fghuih refgyugr
              re4ufhyhgrf
            </p>
            <div className="btn btn-group">
              <a href="/contact">
                <button className="btn">Connect now</button>
              </a>
              <a href="/services">
                <button className="btn secondary-btn">Learn more</button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

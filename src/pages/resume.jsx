export default function Resume() {
  return (
    <div className=" max-w-[1000px] mx-auto">
      <h1 className=" font-bold text-5xl text-center">Nishant Patil</h1>
      <article className="flex justify-center items-center space-x-5 mt-5">
        <span>Mumbai,India</span>
        <span>+91 9511692910</span>
        <span>nishantpatil0121@gmail.com</span>
      </article>
      <div className="my-6 border-b border-gray-300"></div>
      <article>
        <h1 className="font-semibold text-3xl ">SUMMARY</h1>
        <p className=" mt-4">
          I’m Nishant Patil, a passionate and dedicated Web Developer with
          hands-on experience in building dynamic and user-centric web
          applications. With a strong foundation in front-end technologies, I
          specialize in creating seamless and efficient web experiences.
        </p>
      </article>
      <div className="my-6 border-b border-gray-300"></div>
      <article>
        <h1 className="font-semibold text-3xl ">PROJECTS</h1>
        <section className=" mt-4">
          <div className=" flex justify-between ">
            <h3 className=" underline">Alumni Hub</h3>
            <h3>Aug 2024 - Present</h3>
          </div>
          <div>
            <p className=" mt-3">
              • The website addresses student challenges by centralizing alumni
              data, offering career guidance, and providing enhanced student
              support and interaction features.
            </p>
            <p>
              • Anonymous public posts, career path visualization, course
              recommendations, and a multilingual website.
            </p>
          </div>
        </section>
        <section className=" mt-4">
          <div className=" flex justify-between ">
            <h3 className=" underline">FinWise</h3>
            <h3> Mar 2024 - April 2024</h3>
          </div>
          <div>
            <p className=" mt-4">
              • Manages user-profiles and financial data. Provides budgeting
              tools, savings, and investment tracking. Offers debt management
              and personalized financial recommendations. Includes educational
              resources and community features
            </p>
          </div>
        </section>
        <section className=" mt-4">
          <div className=" flex justify-between ">
            <h3 className=" underline">Chit-Chat</h3>
            <h3>Dec 2023 - Jan 2024</h3>
          </div>
          <div>
            <p className=" mt-4">
              • A Chatting Application helping people connect.
            </p>
            <p className=" mt-4">
              • Features like: - Following the people you know, establishing
              communication with those you following
            </p>
          </div>
        </section>
      </article>
    </div>
  );
}

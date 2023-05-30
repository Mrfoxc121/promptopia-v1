import Feed from "@components/Feed";

const Home = () => (
  <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
    Discover Limitless Possibilities
      <br className='max-md:hidden' />
      <span className='orange_gradient text-center'> with AI-Enhanced Prompts</span>
    </h1>
    <p className='desc text-center'>
    Write and share Prompt Recommendations: Receive and share prompt suggestions and delve into a world of writing prompts that resonate with your style and spark your imagination.
    </p>

    <Feed />
  </section>
);

export default Home;

function Home({ home, lang = 'fr' }) {
  return (
    <>
      <h1>{home.key[lang]}</h1>
    </>
  );
}
export default Home;
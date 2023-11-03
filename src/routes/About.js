function About({ about, lang = 'fr' }) {
  return (
    <>
      <h1>{about.key[lang]}</h1>
      <p>{about.data[lang]}</p>
    </>
  );
}
export default About;
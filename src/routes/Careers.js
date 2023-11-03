import Experience from "../components/Experience";

function Careers({ experiences, lang = 'fr' }) {
  return (
    <>
      <h1>{experiences.key[lang]}</h1>
      {experiences.data.map(e => <Experience experience={e} />)}
    </>
  );
}
export default Careers;
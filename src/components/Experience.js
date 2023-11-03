import './Experience.css';

function Experience({ experience, lang = 'fr' }) {
  return (
    <article class="container">
      <h2>{experience.company[lang]}</h2>
      <h3>{experience.position[lang]}</h3>
      <h4>{experience.from + '>' + (experience.to ? experience.to : '...')}</h4>
      <section>
        <p>{experience.description[lang]}</p>
        <p>
          <ul>
            {experience.technologies.map(t => <li>{t}</li>)}
          </ul>
        </p>
        <p>
          <ul>
            {experience.skills[lang].map(s => <li>{s}</li>)}
          </ul>
        </p>
      </section>
    </article>
  );
}

export default Experience;
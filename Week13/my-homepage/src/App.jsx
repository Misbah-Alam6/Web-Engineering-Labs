// Change the text below to your own details.
const profile = {
  name: 'Misbah Alam',
  role: 'Computer Science Student',
  school: 'Sukkur IBA University',
  intro:
    'I am learning to build web apps and machine learning projects. I like turning ideas into working software.',
  email: 'misbahaalamkhuhro.bscsf24@iba-suk.edu.pk',
  github: 'https://github.com/Misbah-Alam6/',
  linkedin: 'https://www.linkedin.com/in/misbah-alam-459a97325/',
}

const skills = ['HTML & CSS', 'JavaScript', 'React', 'Python', 'Git & GitHub', 'Machine Learning basics']

const projects = [
  {
    title: 'Web Engineering Labs',
    text: 'My weekly web engineering lab work, including HTML, CSS, JavaScript and React practice.',
    image: '/project1.svg',
    alt: 'Illustration of a blue browser window for the Web Engineering Labs project',
    link: 'https://github.com/Misbah-Alam6/Web-Engineering-Labs',
  },
  {
    title: 'ML Labs',
    text: 'My machine learning lab notebooks, such as linear regression, Naive Bayes and SVM.',
    image: '/project2.svg',
    alt: 'Illustration of a green chart for the ML Labs project',
    link: 'https://github.com/Misbah-Alam6/ML_LABS',
  },
  {
    title: 'Lab Agile Planning',
    text: 'My agile planning lab work, with project planning and team task organization.',
    image: '/project3.svg',
    alt: 'Illustration of an orange planning board for the Lab Agile Planning project',
    link: 'https://github.com/Misbah-Alam6/lab-agile-planning',
  },
]
export default function App() {
  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <a href="#home" className="logo">{profile.name}</a>
          <nav aria-label="Main navigation">
            <ul className="nav-list">
              <li><a href="#home">Home</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section id="home" className="hero container">
          <img src="/avatar.svg" alt={`Profile picture of ${profile.name}`} className="avatar" width="160" height="160" />
          <div>
            <p className="eyebrow">{profile.role} · {profile.school}</p>
            <h1>Hi, I am {profile.name}</h1>
            <p className="lead">{profile.intro}</p>
            <a className="button" href="#projects">See my projects</a>
          </div>
        </section>

        <section id="projects" className="container section">
          <h2>Projects</h2>
          <div className="grid">
            {projects.map((p) => (
              <article className="card" key={p.title}>
                <img src={p.image} alt={p.alt} loading="lazy" />
                <h3>{p.title}</h3>
                <p>{p.text}</p>
                <a href={p.link} target="_blank" rel="noreferrer">View on GitHub →</a>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="container section">
          <h2>Skills</h2>
          <ul className="skills">
            {skills.map((s) => <li key={s}>{s}</li>)}
          </ul>
        </section>

        <section id="contact" className="container section">
          <h2>Contact</h2>
          <p>Want to work together or just say hello? Reach me here:</p>
          <ul className="contact-list">
            <li><a href={`mailto:${profile.email}`}>{profile.email}</a></li>
            <li><a href={profile.github} target="_blank" rel="noreferrer">GitHub</a></li>
            <li><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
          </ul>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <p>© {new Date().getFullYear()} {profile.name}. Built with React.</p>
        </div>
      </footer>
    </>
  )
}

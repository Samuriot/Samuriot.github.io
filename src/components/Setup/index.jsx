import './index.scss'
import Loader from 'react-loaders'

const techStack = [
  {
    category: 'Physical Tech',
    summary: 'My basic physical tech environment as of lately. Slowly learning ArchLinux lol',
    tools: ['M1 Pro Macbook Pro', '2013 Macbook Pro (Arch)', 'Raspberry Pi 4 (hosting APIs)'],
  },
  {
    category: 'Backend',
    summary: 'Really enjoy learning about networking, concurrency, and a bunch of backend frameworks',
    tools: ['C++', 'Typescript', 'Python', 'Golang', 'ExpressJS', 'FastAPI', 'Fiber'],
  },
  {
    category: 'Data and Cloud',
    summary: 'Trying to expand my knowledge on Cloud & Data Workflows.',
    tools: ['AWS', 'OCI', 'Azure', 'MongoDB', 'DynamoDB', 'PostgreSQL'],
  },
  {
    category: 'Developer Workflows',
    summary: 'How I actually write code & be productive.',
    tools: ['NeoVim (Lazyvim config)', 'VS Code', 'Ghostty + tmux', 'Git', 'Opencode (shoutout student copilot)'],
  },
]

const Setup = () => {
  return (
    <>
      <div className="container setup-page">
        <div className="setup-content">
          <header className="setup-header">
            <p className="setup-kicker">Tech I like using</p>
            <h1>Tech Stack</h1>
            <p className="setup-intro">
              I like learning to use a bunch of tools to make software, but my favorite is definitely using C++.
            </p>
          </header>

          <section className="setup-grid" aria-label="Development technologies">
            {techStack.map((group) => (
              <article className="stack-card" key={group.category}>
                <h2>{group.category}</h2>
                <p>{group.summary}</p>
                <ul>
                  {group.tools.map((tool) => (
                    <li key={`${group.category}-${tool}`}>{tool}</li>
                  ))}
                </ul>
              </article>
            ))}
          </section>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Setup

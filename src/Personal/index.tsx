import './Personal.scss';
  
  interface CVData {
    photo: string;
    name: string;
    lastName: string;
    position: string;
  }
  
  const cvData: CVData = {
    photo: "https://placehold.co/400x400?text=MonikaSuleckaGrochowska",
    name: 'Monika',
    lastName: 'Sulecka - Grochowska',
    position: 'Front-End Developer',
  }

const Personal = () => {
    return (
        <aside className='cv-personal'>
      <h2>Personal data</h2>
      <img className='cv-photo' src={cvData.photo} alt={`${cvData.name} ${cvData.lastName} profile picture`} />
      <p>{ cvData.name } {cvData.lastName}</p>
      <small>{cvData.position}</small>
    </aside>
    )
}
export { Personal }
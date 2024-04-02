import { Header } from '../Header';
import { Personal } from '../Personal';
import { Details } from '../Details';
import { CVData } from '../types';
import './CV.scss';

const CV = () => {
    const cvData: CVData = {
        personal: {
            photo: "https://placehold.co/400x400?text=MonikaSuleckaGrochowska",
            name: 'Monika',
            lastName: 'Sulecka - Grochowska',
            position: 'Front-End Developer',
        },
        details: {
            experience: [
                { year: 2024, description: 'Owner, Cosmetics and Massage Workshops Monika Sulecka - Grochowska (18.08.2017 - present) Business management, team coordination, service and product development.' },
                {year: 2021, description: 'Lecturer, Collegium Medicum in Bydgoszcz (05.2020 - 06.2021) Conducting online professional practice, development of educational programmes.' },
              ],
              education: [
                '01.2024 - 12.2024 One-year Front-End course at MegaKa school - Frontowcy.pl Ltd.',
                '05.2023 - 05.2024 One-year Backend course at the MegaKa school - Frontowcy.pl Ltd.',
                '09.2023 - 07.2024 Merito University: postgraduate course in Front-End developer with Angular',
                '30.06.2022 University of Beauty Health and Education in Poznań - MA in Cosmetology',
                '27.08.2010 Medical University of Karol Marcinkowski in Poznań - Bachelor of Medical Science in Physiotherapy',
              ]
        }
      }

    return <main className='cv-main'>
        <Header data={cvData.personal}/>
        <Personal data={cvData.personal}/>
        <Details data={cvData.details}/>
    </main>
}

export { CV }
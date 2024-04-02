import { CVPersonal } from '../types';
import './Header.scss';

type Props = {
  data: CVPersonal;
}

const Header = ({data: {name, lastName}}: Props) => {
    return (
        <header className='cv-header'>
      <h1>CV {name} {lastName}</h1>
    </header>
    )
}

export { Header }
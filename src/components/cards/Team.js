// import { team } from '../../fixtures/team.js';

import { ReactComponent as TwitterIcon } from 'images/twitter-icon.svg';
import { ReactComponent as LinkedinIcon } from 'images/linkedin-icon.svg';
import { ReactComponent as GithubIcon } from 'images/github-icon.svg';

import './card.css';
import { Link } from 'react-router-dom';

const TeamCard = props => {
	let id = 1;
	return (
		<div className='container'>
			<div className='card' key={id++}>
				<div className='image'></div>

				<div className='meta'>
					<span>
						Ian <br /> Balijawa
					</span>
					<span>
						Systems <br /> Manager
					</span>
				</div>
				<div className='card__icons'>
					<Link to='#'>
						<TwitterIcon class='icon' />
					</Link>
					<Link to='#'>
						<LinkedinIcon class='icon' />
					</Link>
					<Link to='https://github.com/Ian-Balijawa'>
						<GithubIcon class='icon' />
					</Link>
				</div>
			</div>
		</div>
	);
};

export default TeamCard;

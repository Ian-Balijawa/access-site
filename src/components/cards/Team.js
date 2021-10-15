import team from 'fixtures/team';
import { ReactComponent as TwitterIcon } from 'images/twitter-icon.svg';
import { ReactComponent as LinkedinIcon } from 'images/linkedin-icon.svg';
import { ReactComponent as GithubIcon } from 'images/github-icon.svg';

import './styles/card.css';
import { Link } from 'react-router-dom';

const TeamCard = props => {
	let id = 1;
	return (
		<div className='container'>
			{team.map(member => (
				<div className='card' key={id++}>
					<img src={member.imageSrc} alt='member' />

					<div className='meta'>
						<span>
							{member.firstName} <br /> {member.lastName}
						</span>
						<span>
							{member.position.split(' ')[0]} <br />{' '}
							{member.position.split(' ')[1]}
						</span>
					</div>
					<div className='card__icons'>
						<Link to='#'>
							<TwitterIcon className='icon' />
						</Link>
						<Link to='#'>
							<LinkedinIcon className='icon' />
						</Link>
						<Link to='https://github.com/Ian-Balijawa'>
							<GithubIcon className='icon' />
						</Link>
					</div>
				</div>
			))}
		</div>
	);
};

export default TeamCard;

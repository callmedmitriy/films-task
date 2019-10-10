import React from 'react';

import Star from './Star';

function Stars(props) {

	const stars = [];

	for (let i = 0; i < props.count; i++) {
		stars.push(<Star/>);
	}


	return(
		<ul>
			{stars}
		</ul>
	);
}

export default Stars;
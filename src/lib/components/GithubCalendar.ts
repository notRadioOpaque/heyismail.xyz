import React from 'react';
import GitHubCalendar from 'react-github-calendar';
import { GRAPH_THEME } from '$lib/constants';

interface Props {
	year: number;
}

const username = 'notRadioOpaque';

const GitHubContributionCalendar: React.FC<Props> = ({ year }) => {
	return React.createElement(
		'div',
		{ style: { maxWidth: '100%', overflowX: 'auto' } },
		React.createElement(GitHubCalendar, {
			username,
			theme: GRAPH_THEME,
			colorScheme: 'light',
			blockSize: 13,
			year
		})
	);
};

export default GitHubContributionCalendar;

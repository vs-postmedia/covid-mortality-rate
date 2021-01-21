// CSS
import normalize from './css/normalize.css';
import colours from './css/colors.css';
import fonts from './css/fonts.css';
import css from './css/main.css';

// JS
import * as d3 from 'd3';
import smallMultiples from './js/small-multiples.js';
import config from './data/config.json';

// VARS
const el = '#charts';
const dataUrl = 'https://vs-postmedia-data.sfo2.digitaloceanspaces.com/covid/covid-mortality-daily.csv';

const init = async () => {

	// fetch & prep data
	const resp = await d3.csv(dataUrl);
	const data = transformData(resp);

	smallMultiples.init(data, el);
};

const transformData = (data) => {
	const parse = d3.timeParse('%d-%m-%Y');
	const cleanData = data.map(d => {
		return {
			date: parse(d.date_death_report),
			cumulative_100k: +d.cumulative_100k,
			cumulative_deaths: +d.cumulative_deaths,
			province: d.name,
			short_name: d.short_name
		}
	});

	// group by province
	return d3.nest()
		.key(d => d.short_name)
		.entries(cleanData)
		// sort by highest cumulative deaths
		.sort((a,b) => b.values[b.values.length - 1].cumulative_deaths - a.values[a.values.length - 1].cumulative_deaths)
		.filter(d => d.values[d.values.length - 1].cumulative_deaths > 0);
}

init();
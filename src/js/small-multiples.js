import * as d3 from 'd3';
import helper from './helper-functions';
import smallMultiples from './small-multiples.css';


// variables accessible to the rest of the functions inside SmallMultiples
const width = 100;
const height = 75;
const margin = {top: 15, right: 10, bottom: 40, left: 35};
let xScale, yScale, xValue, yValue;


const init = async (data, el) => {
	// scales
	xScale = d3.scaleTime().range([0,width]);
	yScale = d3.scaleLinear().range([height,0]);

	// accessor functions for x/y values
	xValue = d => d.date;
	yValue = d => d.cumulative_100k;

	// ---
	// Sets the domain for our x and y scales.
	// We want all the small multiples to have the
	// same domains, so we only have to do this once.
	// ---
	setupScales(data);

	const areaGenerator = d3.area()
		.curve(d3.curveLinear)
		.x(d => xScale(xValue(d)))
		.y0(yScale(0))
		.y1(d => yScale(yValue(d)));

	const lineGenerator = d3.line()
		// .curve(d3.curveLinear)
		.x(d => xScale(xValue(d)))
		.y(d => yScale(yValue(d)));


	// create our divs for each chart
	const svg = d3.selectAll(el)
		.selectAll('.chart')
		.data(data)
		.enter()
		.append('div')
			.attr('class', 'chart')
			.append('svg')
			.attr('width', width + margin.left + margin.right)
			.attr('height', height + margin.top + margin.bottom)
				.append('g')
				.attr('class', 'g-men')
				.attr('transform', `translate(${margin.left}, ${margin.top})`);

	// Invisible background rectangle that will capture all our mouse movements
	svg.append('rect')
		.attr('class', 'background')
		.style('pointer-events', 'all')
		.attr('width', width + margin.right)
		.attr('height', height)


	const lines = svg.append('g');
	// area
	lines.append('path')
		.attr('class', 'area')
		.style('pointer-events', 'none')
		.attr('d', c => areaGenerator(c.values));
	// line
	lines.append('path')
		.attr('class', 'line')
		.style('pointer-events', 'none')
		.attr('d', c => lineGenerator(c.values));


	// add labels
	addDates(lines);
	addTitle(lines);
	addYAxis(lines);
}

function addDates(lines) {
	lines.append('text')
		.attr('class', 'label static_year')
		.attr('text-anchor', 'start')
		.style('pointer-events', 'none')
		.attr('dy', 13)
		.attr('y', height)
		.attr('x', 0)
		.text(c => helper.months[xValue(c.values[0]).getMonth()]);
	 
	lines.append('text')
		.attr('class', 'label static_year')
		.attr('text-anchor', 'end')
		.style('pointer-events', 'none')
		.attr('dy', 13)
		.attr('y', height)
		.attr('x', width)
		.text(c => helper.months[xValue(c.values[c.values.length - 1]).getMonth()]);
}

function addTitle(lines) {
	// title
	lines.append('text')
		.attr('class', 'title')
		.attr('text-anchor', 'middle')
		.attr('y', 5)
		.attr('dy', margin.bottom / 2 - 15)
		.attr('x', margin.right + 5)
		.text(c => c.key);
}

function addYAxis(lines) {
	const yAxis = d3.axisLeft()
		.scale(yScale)
		.ticks(4)
		.tickSize(-width);

	lines.append('g')
		.attr('class', 'y axis')
		.call(yAxis);
}

function areaGeneratorX(d) {
	return d3.area()
		.curve(d3.curveLinear)
		.x(d => xScale(xValue(d)))
		.y0(height)
		.y(d => yScale(yValue(d)))
}

function lineGeneratorX() {
	return d3.line()
		.curve(d3.curveLinear)
		.x(d => xScale(xValue(d)))
		.y1(d => yScale(yValue(d)))
}

function setupScales(data) {
	let maxY = d3.max(data, c => d3.max(c.values, d => yValue(d)));
	maxY = maxY + (maxY * 1/4);
	yScale.domain([0, maxY]);

	const extentX = d3.extent(data[0].values, d => xValue(d));
	xScale.domain(extentX);
}

export default { init };
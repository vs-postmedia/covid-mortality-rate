import * as d3 from 'd3';
import helper from './helper-functions';
import smallMultiples from './small-multiples.css';


// variables accessible to the rest of the functions inside SmallMultiples
const width = 125;
const height = 75;
const margin = {top: 15, right: 5, bottom: 20, left: 30};
let annotation, circle, dateAnno, formatDate, index, xScale, yScale, xValue, yValue;



const init = async (data, el, metric) => {
	console.log(data)
	// format date for mouseover events
	formatDate = d3.timeFormat('%B %d');
	
	// scales
	xScale = d3.scaleTime().range([0,width]);
	yScale = d3.scaleLinear().range([height,0]);

	// accessor functions for x/y values
	// makes it easy to assign any var to x/y
	xValue = d => d.date;
	yValue = d => d[metric];

	// ---
	// Sets the domain for the x scale.
	// We want all the small multiples to have the
	// same domains, so we only have to do this once.
	// ---
	setupXScale(data);

	const areaGenerator = d3.area()
		.curve(d3.curveLinear)
		.x(d => xScale(xValue(d)))
		.y0(height)
		.y1(d => yScale(yValue(d)));

	const lineGenerator = d3.line()
		.curve(d3.curveLinear)
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
			.attr('id', d => d.key.toLowerCase().replaceAll('.', ''))
			.attr('width', width + margin.left + margin.right)
			.attr('height', height + margin.top + margin.bottom)
				.append('g')
				.attr('transform', `translate(${margin.left}, ${margin.top})`);

	// Invisible background rectangle that will capture all our mouse movements
	svg.append('rect')
		.attr('class', 'background')
		.style('pointer-events', 'all')
		.attr('width', width + margin.right)
		.attr('height', height)
		// .on('mouseover', mouseover)
		// .on('mousemove', mousemove)
		// .on('mouseout', mouseout);


	// group for area & line paths
	const lines = svg.append('g');
	
	// Add the area path elements. Note: the y-domain is set per element.
	lines.append('path')
		.attr('class', 'area')
		.style('pointer-events', 'all')
		.attr('d', d => {
			yScale.domain([0, d.maxValue]); 
			return areaGenerator(d.values);
		})
		.on('mouseover', mouseover)
		.on('mousemove', mousemove)
		.on('mouseout', mouseout);
		// .attr('d', c => areaGenerator(c.values));
	
	// Add the line path elements. Note: the y-domain is set per element.
	lines.append('path')
		.attr('class', 'line')
		.style('pointer-events', 'none')
		.attr('d', d => {
			yScale.domain([0, d.maxValue]); 
			return lineGenerator(d.values);
		});
		// .attr('d', c => lineGenerator(c.values));

	// add labels
	addDates(lines);
	addTitle(lines);
	addYAxis(svg);

	addInteractivity(lines);
}

function addDates(lines) {
	lines.append('text')
		.attr('class', 'label')
		.attr('text-anchor', 'start')
		.style('pointer-events', 'none')
		.attr('dy', 13)
		.attr('y', height)
		.attr('x', 0)
		.text(c => helper.months[xValue(c.values[0]).getMonth()]);
	 
	lines.append('text')
		.attr('class', 'label')
		.attr('text-anchor', 'end')
		.style('pointer-events', 'none')
		.attr('dy', 13)
		.attr('y', height)
		.attr('x', width)
		.text(c => helper.months[xValue(c.values[c.values.length - 1]).getMonth()]);
}

function addInteractivity(lines) {
	circle = lines.append('circle')
		.attr('r', 5)
		.attr('opacity', 0)
		.style('pointer-events', 'none')

	annotation = lines.append('text')
		.attr('class', 'annotation')
		.style('pointer-events', 'none')
		.attr('dy', -8)

	dateAnno = lines.append('text')
		.attr('class', 'date-anno')
		.style('pointer-events', 'none')
		.attr('dy', 13)
		.attr('y', height)
}

function addTitle(lines) {
	// title
	lines.append('text')
		.attr('class', 'title')
		.attr('text-anchor', 'middle')
		// .attr('y', 5)
		.attr('dy', margin.bottom / 2 - 15)
		.attr('x', margin.right + 5)
		.text(c => c.key);
}

function addYAxis(svg) {
	svg.each(d => {
		const chart = d3.select(d.key.toLowerCase().replaceAll('.', ''));

		yScale.domain([0, d.maxValue]);
		const yAxis = d3.axisLeft(yScale)
			.ticks(3)
			.tickSize(-width);

		chart.append('g')
			.attr('class', 'y-axis')
			.call(yAxis);
	});
}

function mousemove() {
	let index = 0;
	// const year = helper.months[xScale.invert(d3.mouse(this)[0]).getMonth()];
	const date = xScale.invert(d3.mouse(this)[0]);
	const bisect = d3.bisector(d => d.date).left;

	circle
		.attr('cx', xScale(date))
		.each(d => {

		})
		.attr('cy', d => {
			yScale.domain([0, d.maxValue]);

			index = bisect(d.values, date, 0, d.values.length - 1);
			return yScale(yValue(d.values[index]));
		});

	annotation
		.attr('x', xScale(date))
		.attr('y', d => {
			yScale.domain([0, d.maxValue]);
			return yScale(yValue(d.values[index]))
		})
		.text(d =>  {
			yScale.domain([0, d.maxValue]);
			return yValue(d.values[index])
		});

	dateAnno
		.attr('y', 10)
		.attr('dy', margin.bottom / 2 - 15)
		.attr('x', margin.right - 7)
		.attr('text-anchor', 'left')
		.text(formatDate(date));
}

function mouseover() {
	circle.attr('opacity', 1);
	d3.selectAll('.label').classed('hidden', true);
	mousemove.call(this);
}

function mouseout() {
	d3.selectAll('.label').classed('hidden', false)
	circle.attr('opacity', 0)
	annotation.text('')
	dateAnno.text('');
}


function setupXScale(data) {
	// let maxY = d3.max(data, c => d3.max(c.values, d => yValue(d)));
	// maxY = maxY + (maxY * 1/4);
	// yScale.domain([0, maxY]);

	const extentX = d3.extent(data[0].values, d => xValue(d));
	xScale.domain(extentX);
}

export default { init };
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__(138);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.for-each.js
var es_array_for_each = __webpack_require__(152);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__(31);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__(157);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.sort.js
var es_array_sort = __webpack_require__(158);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(159);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(84);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(161);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(50);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(15);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(51);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(33);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./src/css/normalize.css
var normalize = __webpack_require__(162);

// EXTERNAL MODULE: ./src/css/colors.css
var colors = __webpack_require__(163);

// EXTERNAL MODULE: ./src/css/fonts.css
var fonts = __webpack_require__(164);

// EXTERNAL MODULE: ./src/css/main.css
var main = __webpack_require__(165);

// EXTERNAL MODULE: ./node_modules/d3/index.js + 292 modules
var d3 = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__(166);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(86);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__(168);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.includes.js
var es_string_includes = __webpack_require__(169);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__(88);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__(89);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.search.js
var es_string_search = __webpack_require__(174);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.url.js
var web_url = __webpack_require__(176);

// CONCATENATED MODULE: ./src/js/helper-functions.js











var helper = {
  getUrlParam: function getUrlParam(param) {
    var defaultResult = null;
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    var paramValue = urlParams.get(param); // is there a value?

    paramValue = paramValue ? paramValue.toUpperCase() : defaultResult; // check if the province is a value province code

    if (param === 'prov') {
      paramValue = this.validProvinceCodes.includes(paramValue) ? paramValue : 'BC';
    }

    return paramValue;
  },
  map: function map(num, in_min, in_max, out_min, out_max) {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  },
  months: ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'June', 'July', 'Aug.', 'Sept.', 'Oct.', 'Nov.', 'Dec.'],
  numberWithCommas: function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  },
  validProvinceCodes: ['YT', 'NT', 'NU', 'BC', 'AB', 'SK', 'MB', 'ON', 'QC', 'NL', 'NB', 'PE', 'NS', 'CA']
};
/* harmony default export */ var helper_functions = (helper);
// EXTERNAL MODULE: ./src/js/components/header/header.css
var header = __webpack_require__(186);

// CONCATENATED MODULE: ./src/js/components/header/header.js




 // import template from 'header-template';

var init = /*#__PURE__*/function () {
  var _ref = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee(data, el) {
    var head;
    return regenerator_default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            head = document.querySelector(el);
            head.innerHTML = "\n\t\t\t<h2>The shape of COVID-19 deaths in Canada</h2>\n\t\t\t<p>Cumulative COVID-19 related deaths by province.</p>\n\t\t";

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function init(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ var header_header = ({
  init: init
});
// EXTERNAL MODULE: ./src/js/components/small-multiples/small-multiples.css
var small_multiples = __webpack_require__(187);

// CONCATENATED MODULE: ./src/js/components/small-multiples/small-multiples.js




 // variables accessible to the rest of the functions inside SmallMultiples

const width = 125;
const height = 75;
const margin = {
  top: 20,
  right: 25,
  bottom: 20,
  left: 30
};
let annotation, circle, dateAnno, formatDate, small_multiples_index, xScale, yScale, xValue, yValue;

const small_multiples_init = async (data, el, metric) => {
  // format date for mouseover events
  formatDate = d3["o" /* timeFormat */]('%b %d'); // scales

  xScale = d3["l" /* scaleTime */]().range([0, width]);
  yScale = d3["k" /* scaleLinear */]().range([height, 0]); // accessor functions for x/y values
  // makes it easy to assign any var to x/y

  xValue = d => d.date;

  yValue = d => d[metric]; // ---
  // Sets the domain for the x scale.
  // We want all the small multiples to have the
  // same domains, so we only have to do this once.
  // ---


  setupXScale(data);
  const areaGenerator = d3["a" /* area */]().curve(d3["e" /* curveLinear */]).x(d => xScale(xValue(d))).y0(height).y1(d => yScale(yValue(d)));
  const lineGenerator = d3["g" /* line */]().curve(d3["e" /* curveLinear */]).x(d => xScale(xValue(d))).y(d => yScale(yValue(d))); // create our divs for each chart

  const svg = d3["n" /* selectAll */](el).selectAll('.chart').data(data).enter().append('div').attr('class', 'chart').append('svg').attr('id', d => d.key.replace(/\./g, '')).attr('width', width + margin.left + margin.right).attr('height', height + margin.top + margin.bottom).append('g').attr('transform', `translate(${margin.left}, ${margin.top})`); // Invisible background rectangle that will capture all our mouse movements

  svg.append('rect').attr('class', 'background').style('pointer-events', 'all').attr('width', width + margin.right).attr('height', height); // group for area & line paths

  const lines = svg.append('g'); // Add the area path elements. Note: the y-domain is set per element.

  lines.append('path').attr('class', 'area').style('pointer-events', 'all').attr('d', d => {
    yScale.domain([0, d.maxValue]);
    return areaGenerator(d.values);
  }).on('mouseover', mouseover).on('mousemove', mousemove).on('mouseout', mouseout); // Add the line path elements. Note: the y-domain is set per element.

  lines.append('path').attr('class', 'line').style('pointer-events', 'none').attr('d', d => {
    yScale.domain([0, d.maxValue]);
    return lineGenerator(d.values);
  }); // add labels

  addDates(lines);
  addTitle(lines);
  addYAxis(svg);
  addInteractivity(lines);
};

function addDates(lines) {
  lines.append('text').attr('class', 'label').attr('text-anchor', 'start').style('pointer-events', 'none').attr('dy', 13).attr('y', height).attr('x', 0).text(c => helper_functions.months[xValue(c.values[0]).getMonth()]);
  lines.append('text').attr('class', 'label').attr('text-anchor', 'end').style('pointer-events', 'none').attr('dy', 13).attr('y', height).attr('x', width).text(c => helper_functions.months[xValue(c.values[c.values.length - 1]).getMonth()]);
}

function addInteractivity(lines) {
  circle = lines.append('circle').attr('r', 5).attr('opacity', 0).attr('class', 'dot').style('pointer-events', 'none');
  annotation = lines.append('text').attr('class', 'annotation').style('pointer-events', 'none').attr('dy', -8);
  dateAnno = lines.append('text').attr('class', 'date-anno').style('pointer-events', 'none').attr('dy', 13).attr('y', height);
}

function addTitle(lines) {
  // title
  lines.append('text').attr('class', 'title') // .attr('y', 5)
  .attr('dy', margin.bottom / 2 - 15).attr('x', -10).text(c => c.key);
}

function addYAxis(svg) {
  svg.each(d => {
    const chart = d3["m" /* select */](d.key.toLowerCase().replace(/\./g, ''));
    yScale.domain([0, d.maxValue]);
    const yAxis = d3["b" /* axisLeft */](yScale).ticks(3).tickSize(-width);
    chart.append('g').attr('class', 'y-axis').call(yAxis);
  });
}

function mousemove() {
  let index = 0;
  const date = xScale.invert(d3["i" /* mouse */](this)[0]);
  const bisect = d3["c" /* bisector */](d => d.date).left;
  circle.attr('cx', xScale(date)).each(d => {}).attr('cy', d => {
    yScale.domain([0, d.maxValue]);
    index = bisect(d.values, date, 0, d.values.length - 1);
    return yScale(yValue(d.values[index]));
  });
  annotation.attr('x', xScale(date)).attr('y', d => {
    yScale.domain([0, d.maxValue]);
    return yScale(yValue(d.values[index]));
  }).text(d => {
    yScale.domain([0, d.maxValue]);
    return helper_functions.numberWithCommas(yValue(d.values[index]));
  });
  dateAnno.attr('class', 'date-anno').attr('y', 15).attr('dy', margin.bottom / 2 - 15).attr('x', -10).text(formatDate(date));
}

function mouseover() {
  circle.attr('opacity', 1);
  d3["n" /* selectAll */]('.label').classed('hidden', true);
  mousemove.call(this);
}

function mouseout() {
  d3["n" /* selectAll */]('.label').classed('hidden', false);
  circle.attr('opacity', 0);
  annotation.text('');
  dateAnno.text('');
}

function setupXScale(data) {
  const extentX = d3["f" /* extent */](data[0].values, d => xValue(d));
  xScale.domain(extentX);
}

/* harmony default export */ var small_multiples_small_multiples = ({
  init: small_multiples_init
});
// CONCATENATED MODULE: ./src/index.js












// CSS



 // JS



 // import config from './data/config.json';
// VARS

var src_el = '#charts';
var headerEl = '#header';
var src_metric = 'cumulative_deaths';
var dataUrl = 'https://vs-postmedia-data.sfo2.digitaloceanspaces.com/covid/covid-mortality-daily.csv';

var src_init = /*#__PURE__*/function () {
  var _ref = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
    var resp, data;
    return regenerator_default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return d3["d" /* csv */](dataUrl);

          case 2:
            resp = _context.sent;
            data = src_transformData(resp); // header & chart

            header_header.init(data, headerEl);
            small_multiples_small_multiples.init(data, src_el, src_metric);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function init() {
    return _ref.apply(this, arguments);
  };
}();

var src_transformData = function transformData(data) {
  var parse = d3["p" /* timeParse */]('%d-%m-%Y');
  var cleanData = data.map(function (d) {
    return {
      date: parse(d.date_death_report),
      cumulative_100k: +d.cumulative_100k,
      cumulative_deaths: +d.cumulative_deaths,
      province: d.name,
      short_name: d.short_name
    };
  }); // group by province

  var nested = d3["j" /* nest */]().key(function (d) {
    return d.short_name;
  }).entries(cleanData) // sort by highest cumulative deaths
  .sort(function (a, b) {
    return b.values[b.values.length - 1].cumulative_deaths - a.values[a.values.length - 1].cumulative_deaths;
  }).filter(function (d) {
    return d.values[d.values.length - 1].cumulative_deaths > 0;
  }); // Compute the maximum price per symbol, needed for the y-domain.

  nested.forEach(function (c) {
    return c.maxValue = d3["h" /* max */](c.values, function (d) {
      return d.cumulative_deaths;
    });
  });
  return nested;
};

src_init();

/***/ })

},[[188,1,2]]]);
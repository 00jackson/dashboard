// Visualization.js

import * as d3 from 'd3';
import React from 'react';


function Visualization() {
    // Implement D3.js-based visualization here.
    // Define a color scale
    const colorScale = d3.scaleOrdinal()
        .range(['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728']); // Define your color range

    // Usage example:
    const color = colorScale('Category A'); // Get a color for a category
    // Sample data
    const data = [
        { category: 'Category A', intensity: 30, likelihood: 40, relevance: 50 },
        { category: 'Category B', intensity: 20, likelihood: 60, relevance: 70 },
        // Add more data entries
    ];

    // D3.js code to create a grouped bar chart
    const svg = d3.select('#visualization').append('svg');
    const margin = { top: 20, right: 20, bottom: 30, left: 40 };
    const width = +svg.attr('width') - margin.left - margin.right;
    const height = +svg.attr('height') - margin.top - margin.bottom;
    const g = svg.append('g').attr('transform', `translate(${margin.left},${margin.top})`);

    const x0 = d3.scaleBand().rangeRound([0, width]).paddingInner(0.1);
    const x1 = d3.scaleBand().padding(0.05);
    const y = d3.scaleLinear().rangeRound([height, 0]);

    const categories = data.map(d => d.category);
    const variables = ['intensity', 'likelihood', 'relevance'];

    x0.domain(categories);
    x1.domain(variables).rangeRound([0, x0.bandwidth()]);
    y.domain([0, d3.max(data, d => d3.max(variables, v => d[v]))]).nice();

    g.append('g')
        .selectAll('g')
        .data(data)
        .enter()
        .append('g')
        .attr('transform', d => `translate(${x0(d.category)},0)`)
        .selectAll('rect')
        .data(d => variables.map(v => ({ variable: v, value: d[v] })))
        .enter()
        .append('rect')
        .attr('x', d => x1(d.variable))
        .attr('y', d => y(d.value))
        .attr('width', x1.bandwidth())
        .attr('height', d => height - y(d.value))
        .attr('fill', d => color(d.variable)); // You can define a color scale

    // Add x and y axes, labels, and legends as needed

    return (
        <div id="visualization">
            {/* D3.js visualization */}
        </div>
    );
}

export default Visualization;

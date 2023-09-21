// Filters.js
import { default as React, default as React, useState } from 'react';

function Filters() {
   
    const [endYear, setEndYear] = useState('');
    const [selectedTopics, setSelectedTopics] = useState([]);
    const [selectedSector, setSelectedSector] = useState('');
    const [selectedRegion, setSelectedRegion] = useState('');
    const [selectedPEST, setSelectedPEST] = useState('');
    const [selectedSource, setSelectedSource] = useState('');
    const [selectedSWOT, setSelectedSWOT] = useState('');
    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedCity, setSelectedCity] = useState('');

   
    const topicsOptions = ['Topic 1', 'Topic 2', 'Topic 3'];
    const sectorOptions = ['Sector 1', 'Sector 2', 'Sector 3'];
    const regionOptions = ['Region 1', 'Region 2', 'Region 3'];
    const pestOptions = ['PEST 1', 'PEST 2', 'PEST 3'];
    const sourceOptions = ['Source 1', 'Source 2', 'Source 3'];
    const swotOptions = ['SWOT 1', 'SWOT 2', 'SWOT 3'];
    const countryOptions = ['Country 1', 'Country 2', 'Country 3'];
    const cityOptions = ['City 1', 'City 2', 'City 3'];

    return (
        <div>
            {/* End Year Filter */}
            <label htmlFor="endYear">End Year:</label>
            <input
                type="number"
                id="endYear"
                value={endYear}
                onChange={(e) => setEndYear(e.target.value)}
            />

            {/* Topics Filter (Multi-select) */}
            <label htmlFor="topics">Topics:</label>
            <select
                id="topics"
                multiple
                value={selectedTopics}
                onChange={(e) => setSelectedTopics(Array.from(e.target.selectedOptions, (option) => option.value))}
            >
                {topicsOptions.map((topic) => (
                    <option key={topic} value={topic}>
                        {topic}
                    </option>
                ))}
            </select>

            {/* Sector Filter */}
            <label htmlFor="sector">Sector:</label>
            <select
                id="sector"
                value={selectedSector}
                onChange={(e) => setSelectedSector(e.target.value)}
            >
                <option value="">Select Sector</option>
                {sectorOptions.map((sector) => (
                    <option key={sector} value={sector}>
                        {sector}
                    </option>
                ))}
            </select>
            {/* End Year Filter */}
            <label htmlFor="endYear">End Year:</label>
            <input
                type="number"
                id="endYear"
                value={endYear}
                onChange={(e) => setEndYear(e.target.value)}
            />

            {/* Topics Filter (Multi-select) */}
            <label htmlFor="topics">Topics:</label>
            <select
                id="topics"
                multiple
                value={selectedTopics}
                onChange={(e) => setSelectedTopics(Array.from(e.target.selectedOptions, (option) => option.value))}
            >
                {topicsOptions.map((topic) => (
                    <option key={topic} value={topic}>
                        {topic}
                    </option>
                ))}
            </select>

            {/* Sector Filter */}
            <label htmlFor="sector">Sector:</label>
            <select
                id="sector"
                value={selectedSector}
                onChange={(e) => setSelectedSector(e.target.value)}
            >
                <option value="">Select Sector</option>
                {sectorOptions.map((sector) => (
                    <option key={sector} value={sector}>
                        {sector}
                    </option>
                ))}
            </select>

            {/* Region Filter */}
            <label htmlFor="region">Region:</label>
            <select
                id="region"
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
            >
                <option value="">Select Region</option>
                {regionOptions.map((region) => (
                    <option key={region} value={region}>
                        {region}
                    </option>
                ))}
            </select>

            {/* PEST Filter */}
            <label htmlFor="pest">PEST:</label>
            <select
                id="pest"
                value={selectedPEST}
                onChange={(e) => setSelectedPEST(e.target.value)}
            >
                <option value="">Select PEST</option>
                {pestOptions.map((pest) => (
                    <option key={pest} value={pest}>
                        {pest}
                    </option>
                ))}
            </select>

            {/* Source Filter */}
            <label htmlFor="source">Source:</label>
            <select
                id="source"
                value={selectedSource}
                onChange={(e) => setSelectedSource(e.target.value)}
            >
                <option value="">Select Source</option>
                {sourceOptions.map((source) => (
                    <option key={source} value={source}>
                        {source}
                    </option>
                ))}
            </select>

            {/* SWOT Filter */}
            <label htmlFor="swot">SWOT:</label>
            <select
                id="swot"
                value={selectedSWOT}
                onChange={(e) => setSelectedSWOT(e.target.value)}
            >
                <option value="">Select SWOT</option>
                {swotOptions.map((swot) => (
                    <option key={swot} value={swot}>
                        {swot}
                    </option>
                ))}
            </select>

            {/* Country Filter */}
            <label htmlFor="country">Country:</label>
            <select
                id="country"
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
            >
                <option value="">Select Country</option>
                {countryOptions.map((country) => (
                    <option key={country} value={country}>
                        {country}
                    </option>
                ))}
            </select>

            {/* City Filter */}
            <label htmlFor="city">City:</label>
            <select
                id="city"
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
            >
                <option value="">Select City</option>
                {cityOptions.map((city) => (
                    <option key={city} value={city}>
                        {city}
                    </option>
                ))}
            </select>
        </div>
    );

}

export default Filters;


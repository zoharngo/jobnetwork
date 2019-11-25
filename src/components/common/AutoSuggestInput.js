import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import Autosuggest from 'react-autosuggest';
import AutosuggestHighlightMatch from 'autosuggest-highlight/match';
import AutosuggestHighlightParse from 'autosuggest-highlight/parse';
import "./AutoSuggestInput.css";

class AutoSuggestInput extends Component {
    constructor() {
        super();

        this.state = {
            value: '',
            suggestions: []
        };
    }

    onChange = (event, { newValue }) => {
        this.setState({
            value: newValue
        });
    };

    onSuggestionsFetchRequested = ({ value }) => {
        this.setState({
            suggestions: this.getSuggestions(value)
        });
    };

    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        });
    };

    getSuggestions = (value) => {
        const escapedValue = escapeRegexCharacters(value.trim());

        if (escapedValue === '') {
            return [];
        }

        const regex = new RegExp('^' + escapedValue, 'i');

        return this.props.jobsTitle.filter(title => regex.test(title.JobTitleText));
    };

    render() {
        const { value, suggestions } = this.state;
        const inputProps = {
            placeholder: "Job title or keyword",
            value,
            onChange: this.onChange
        };

        return (
            <Autosuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                getSuggestionValue={suggestion => suggestion.JobTitleText}
                renderSuggestion={renderSuggestion}
                inputProps={inputProps}
            />
        );
    }
}

export default connect(mapStateToProps, null)(AutoSuggestInput);

function mapStateToProps(state) {
    return {
        ...state,
        jobsTitle: state.jobs.jobsTitle
    };
}

AutoSuggestInput.propTypes = {
    jobsTitle: PropTypes.array.isRequired
};

function escapeRegexCharacters(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function renderSuggestion(suggestion, { query }) {
    const matches = AutosuggestHighlightMatch(suggestion.JobTitleText, query);
    const parts = AutosuggestHighlightParse(suggestion.JobTitleText, matches);

    return (
        <span>
            {parts.map((part, index) => {
                const className = part.highlight ? 'react-autosuggest__suggestion-match' : null;

                return (
                    <span className={className} key={index}>
                        {part.text}
                    </span>
                );
            })}
        </span>
    );
}

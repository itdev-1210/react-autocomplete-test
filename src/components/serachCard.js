import React, { Component } from 'react';

class SearchCard extends Component {
    render() {
        const { title, data, filmData } = this.props;

        return (
            <div>
                <div className="name">
                    {data.username}
                </div>
            </div>
        );
    }
}

export default SearchCard;

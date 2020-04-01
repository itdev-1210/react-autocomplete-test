import React, { Component } from 'react';
import './userName.css';
import { user } from '../actions/userAction';
import { DebounceInput } from 'react-debounce-input';
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { searchList } from '../actions/searchListAction'
import uuidv4 from 'uuid/v4';
import _ from 'lodash';
import SearchCard from './serachCard'


class UserName extends Component {
    constructor() {
        super()
        this.state = {
            searchText: '',
            openSearchResult: false,
            data: {},
            value: ''
        }
        this.upDateData = this.upDateData.bind(this);
        this.openSearch = this.openSearch.bind(this);
        this.selectedName = this.selectedName.bind(this);

    }

    componentWillMount() {
        this.props.dispatch(user());
    }



    upDateData(e) {
        let text = this.state.searchText;
        text = e.target.value;
        this.setState({ searchText: text, value: text });
        this.props.dispatch(searchList(this.props.user, this.state.searchText));
        this.openSearch();
    }

    openSearch() {
        this.setState({ openSearchResult: true })
    }

    selectedName(name) {
        this.setState({ value: name })
        this.setState({ openSearchResult: false })
    }

    render() {
        const { user, searchList } = this.props;
        const { data, openSearchResult, value } = this.state;

        return (
            <div className="App">
                <p>Enter User Name:</p>
                <form className="user-form">
                    <div className="input-field">
                        <div className="autocomplete">
                            <DebounceInput minLength={1} debounceTimeout={500} type="text" placeholder="User Name" value={value} onChange={(e) => this.upDateData(e)} />
                        </div>
                        <input type="submit" />
                    </div>
                    {
                        openSearchResult ? (
                            <div className="user-list">
                                {
                                    _.map(searchList, (user) => (
                                        <div key={uuidv4()} >
                                            <div className="name" onClick={() => this.selectedName(user.username)}>
                                                {user.username}
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        ) : ''
                    }
                </form>
            </div>
        );
    }
}


export default withRouter(connect((store) => {
    console.log(store)
    return {
        user: store.user.user,
        searchList: store.searchList.searchList
    };
})(UserName))


import { Component } from "react";

class SearchTask extends Component{
    constructor(props){
        super(props);
        this.state = {
            searchText : this.props.searchText
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);

    }

    handleChange = (e) => {
        let value = e.target.value;

        this.setState({
            searchText : value
        });
    }

    handleSearch = (e) => {
        e.preventDefault();

        let tempSearchText = this.state.searchText;

        this.props.handleSearch(tempSearchText);
    }

    componentDidMount(){
        this.setState({
            searchText: this.props.searchText
        })
    }

    render(){
        let searchText = this.state.searchText;
        console.log('search Tast ', searchText);
       return ( <>
        <div>
            <div className="d-flex mt-3">                
                <input type="text" name="tbSearch" id="tbSearch" className="form-control mx-2"  value = {searchText} placeholder=" Search" onChange={(e) => {this.handleChange(e)}} /> 
                <button type="button" className="btn bg-dark text-white" onClick={(e) => {this.handleSearch(e)}}>Search</button>
            </div>
        </div>
        </>
       );
    };
}

export default SearchTask;
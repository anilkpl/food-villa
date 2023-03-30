const SearchInput = ({inputVal,onChangeFun}) => {
    return (
        <div className="input-search">
            <input type="text" placeholder='Search Restaurent'
            value={inputVal} onChange={onChangeFun}/>
      </div>
    )
}

export default SearchInput;
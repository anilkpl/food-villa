const SearchInput = ({inputVal,onChangeFun}) => {
    return (
        <div className="flex justify-center">
            <input className="w-[500px] mt-4 p-2 text-center shadow-lg text-lg rounded-xl" type="text" placeholder='Search Restaurent'
            value={inputVal} onChange={onChangeFun}/>
      </div>
    )
}

export default SearchInput;
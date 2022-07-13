const Filter = ({ value, onChange }) => {
    return (
        <div>
            <label htmlFor="">
                Find contacts by name
                <input type="text" value={value} onChange={onChange}></input>
            </label>
        </div>
    )
}

export default Filter;
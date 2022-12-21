const Filter = ({
  filter,
  filterChangeHandler
}) => 
    <div>
        Filter names 
        <input value={filter} onChange={filterChangeHandler} />                
    </div>

export default Filter
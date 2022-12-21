const PersonForm = ({
                      name, 
                      nameChangeHandler,
                      number, 
                      numberChangeHandler,
                      addPersonHandler
                    }) => 
        <form onSubmit={addPersonHandler}>
          <div>
            name: <input value={name} onChange={nameChangeHandler} />
          </div>
          <div>
            number: <input value={number} onChange={numberChangeHandler} />
          </div>
          <div>
            <button type="submit">Add new</button>
          </div>
        </form>

export default PersonForm
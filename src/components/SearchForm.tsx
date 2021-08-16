import React from "react";

interface ISearchFormProps {
    searchedCity: string,
    setSearchedCity(searchedCity: string): void,
    keyPressHandler(event: React.KeyboardEvent): void
}



const SearchForm: React.FC<ISearchFormProps> = ({ keyPressHandler, searchedCity, setSearchedCity }) => {
 
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchedCity(event.target.value);
  };

  return (
    <div className="input-field mt2">
      <input
        onChange={changeHandler}
        onKeyPress={keyPressHandler}
        value={searchedCity}
        type="text"
        id="city"
        placeholder="Write a task"
      />
      <label htmlFor="city" className="active">
        Write the City
      </label>
    </div>
  );
};

export default SearchForm;

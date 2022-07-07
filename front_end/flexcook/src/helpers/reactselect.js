export const customStylesSelect = {
  option: (provided, state) => ({
    ...provided,
    padding: 5,
    background: "white",
    color: state.isFocused ? "red" : "black",
  }),
};

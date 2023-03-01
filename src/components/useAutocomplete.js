import * as React from "react";
import useAutocomplete from "@mui/base/useAutocomplete";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/system";

const Label = styled("label")({
  display: "block",
});

const Input = styled("input")(({ theme }) => ({
  width: 300,
  height: "30px",
  backgroundColor: theme.palette.mode === "light" ? "#fff" : "#000",
  color: theme.palette.mode === "light" ? "#000" : "#fff",
  border: "solid 1px grey",
  borderRadius: "5px",
}));

const Listbox = styled("ul")(({ theme }) => ({
  width: 300,
  margin: 0,
  padding: 0,
  zIndex: 1,
  position: "absolute",
  listStyle: "none",
  backgroundColor: theme.palette.mode === "light" ? "#fff" : "#000",
  overflow: "auto",
  maxHeight: 200,
  border: "1px solid rgba(0,0,0,.25)",
  "& li.Mui-focused": {
    backgroundColor: "#4a8df6",
    color: "white",
    cursor: "pointer",
  },
  "& li:active": {
    backgroundColor: "#2977f5",
    color: "white",
  },
}));

export default function UseAutocomplete() {
  const {
    getRootProps,
    getInputLabelProps,
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
  } = useAutocomplete({
    id: "use-autocomplete-demo",
    options: top100Films,
    getOptionLabel: (option) => option.title,
  });

  return (
    <div>
      <div {...getRootProps()} style={{ position: "relative" }}>
        <Label {...getInputLabelProps()}></Label>
        <Input {...getInputProps()} placeholder="Search by name" />
        <SearchIcon
          style={{ position: "absolute", right: "6px", top: "5px" }}
        />
      </div>
      {groupedOptions.length > 0 ? (
        <Listbox {...getListboxProps()}>
          {groupedOptions.map((option, index) => (
            <li {...getOptionProps({ option, index })}>{option.title}</li>
          ))}
        </Listbox>
      ) : null}
    </div>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: "Tulpaner", year: 1994 },
  { title: "Monstera", year: 1972 },
  { title: "fiolfikus", year: 1974 },
  { title: "Vit papegojblomma", year: 2008 },
  { title: "rundkalatea", year: 1957 },
  { title: "marmorblad", year: 1993 },
  { title: "Kroton Iceton", year: 1994 },
];

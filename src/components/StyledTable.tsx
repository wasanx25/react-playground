import styled from "@emotion/styled";

export const Table = styled.table({
  position: "absolute",
  zIndex: 100,
  transition: "opacity 600ms, visibility 600ms",
  backgroundColor: "white",
  margin: "1rem 0",
  "&.active": {
    opacity: 1,
    visibility: "visible",
  },
  "&.inactive": {
    opacity: 0,
    visibility: "hidden",
  },
  "& .arrow:hover, & td:hover": {
    backgroundColor: "#f5f3f3",
  },
  "& th, & td": {
    textAlign: "center",
  },
  "& th": {
    padding: ".75rem 1rem",
  },
  "& td": {
    padding: ".5rem 1rem",
  },
  "& .arrow, & td": {
    cursor: "pointer",
  },
});

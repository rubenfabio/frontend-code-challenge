import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Router from "next/router";
import { useState } from "react";
import styled from "styled-components";

const SearchInput: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <BoxSearchInput>
      <input
        type="text"
        placeholder="Procurando por algo específico?"
        value={searchTerm}
        onChange={(e) => handleInputChange(e)}
      />
      <Link href={`/search/${searchTerm}`}>Pesquisar</Link>
    </BoxSearchInput>
  );
};

export default SearchInput;

const BoxSearchInput = styled.div`
  background-color: ${(p) => p.theme?.palette?.primary?.contrastText};
`;

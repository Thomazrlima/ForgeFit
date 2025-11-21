import { useState } from "react";
import { Search } from "lucide-react";
import { Container, SearchButton, SearchInput } from "./styles";

interface SearchBarProps {
    placeholder?: string;
    onSearch: (query: string) => void;
    initialValue?: string;
}

const SearchBar = ({ placeholder = "Buscar...", onSearch, initialValue = "" }: SearchBarProps) => {
    const [query, setQuery] = useState(initialValue);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSearch(query);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    };

    return (
        <Container onSubmit={handleSubmit}>
            <SearchInput type="text" placeholder={placeholder} value={query} onChange={handleChange} />
            <SearchButton type="submit">
                <Search size={20} />
            </SearchButton>
        </Container>
    );
};

export default SearchBar;

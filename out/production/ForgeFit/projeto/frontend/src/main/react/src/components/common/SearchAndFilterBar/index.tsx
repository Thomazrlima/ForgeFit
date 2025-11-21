import SearchBar from "../SearchBar";
import FilterBar from "../FilterBar";
import { Container } from "./styles";

interface SearchAndFilterBarProps {
    searchPlaceholder?: string;
    onSearch: (query: string) => void;
    categories: string[];
    selectedCategory: string;
    onCategoryChange: (category: string) => void;
    initialSearchValue?: string;
}

const SearchAndFilterBar = ({ searchPlaceholder = "Buscar aulas, instrutores ou locais...", onSearch, categories, selectedCategory, onCategoryChange, initialSearchValue = "" }: SearchAndFilterBarProps) => {
    return (
        <Container>
            <SearchBar placeholder={searchPlaceholder} onSearch={onSearch} initialValue={initialSearchValue} />
            <FilterBar categories={categories} selectedCategory={selectedCategory} onCategoryChange={onCategoryChange} />
        </Container>
    );
};

export default SearchAndFilterBar;

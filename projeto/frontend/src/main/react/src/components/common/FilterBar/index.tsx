import { FilterButton, FilterSection } from "./styles";

interface FilterBarProps {
    categories: string[];
    selectedCategory: string;
    onCategoryChange: (category: string) => void;
}

const FilterBar = ({ categories, selectedCategory, onCategoryChange }: FilterBarProps) => {
    return (
        <FilterSection>
            {categories.map((category) => (
                <FilterButton key={category} active={selectedCategory === category} onClick={() => onCategoryChange(category)}>
                    {category}
                </FilterButton>
            ))}
        </FilterSection>
    );
};

export default FilterBar;

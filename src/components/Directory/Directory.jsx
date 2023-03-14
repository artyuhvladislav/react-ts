import CategoryItem from "../CategoryItem/CategoryItem";

const Directory = ({ categories }) => {
    const categoriesItems = categories.map((category) => <CategoryItem key={category.id} {...category} />)
    return <div className="grid">{categoriesItems}</div>
}

export default Directory
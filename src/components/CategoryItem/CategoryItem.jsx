const CategoryItem = ({ id, title, imageUrl }) => {
    return (
        <div className="grid-element" key={id}>
            <div className="grid-element__bg" style={{
                background: `url(${imageUrl})`
            }} />
            <div className="grid-element__text text-container">
                <h2 className="text-container__title">{title}</h2>
                <span className="text-container__text">shop now</span>
            </div>
        </div>
    )
}
export default CategoryItem
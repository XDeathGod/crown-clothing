import "./category-item.styles.scss";

const CategoryItem = ({ category }) => {
  const { title, imageUrl } = category;
  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      {/* {<img src={imageUrl} alt="1" />} */}
      <div className="category-body-container ">
        <h3>{title}</h3>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default CategoryItem;

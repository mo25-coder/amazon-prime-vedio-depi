import { useParams } from "react-router-dom";

function Category() {
  const { categoryType } = useParams();
  return (
    <div>
      this is the specific category that user decided to see more about it,
      <p>
        <strong>it is {categoryType} category </strong>{" "}
      </p>
    </div>
  );
}

export default Category;

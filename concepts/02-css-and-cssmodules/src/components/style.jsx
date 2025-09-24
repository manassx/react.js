import "./style.css";

function Style() {
  const isDarkMode = true;
  return (
    <div className={`container ${isDarkMode ? "bg-dark" : ""}`}>
      <h2>Hi, Manas</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
        earum sint qui, laboriosam consequatur animi libero exercitationem
        similique perspiciatis!
      </p>
    </div>
  );
}

export default Style;

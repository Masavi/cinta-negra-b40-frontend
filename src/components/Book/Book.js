import React from 'react';

const Book = (props) => {
  const textColor = "text-white"
  return (
      <div style={{
          borderRadius: "10px",
          border: "2px solid #8a99a8"
        }}
        className="bg-dark p-2 mt-2"> 
        <p className={textColor}
         style={{ fontSize: "1.5em", paddingLeft: "30px" }}>
            Autor: <u><span style={{ fontSize: "0.75em" }}> { props.author } </span></u>
        </p>
        <p className={textColor}
        style={{ fontSize: "1.5em", paddingLeft: "30px" }}>
            Title: <u><span style={{ fontSize: "0.75em" }}> { props.title } </span></u>
        </p>
      </div>
  );
}
 
export default Book;
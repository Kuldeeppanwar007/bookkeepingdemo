import React from "react";

const PersonCard = ({ name, postion, content, profile }) => {
  return (
    <>
      <div className="personCardMain p-3">
        {" "}
        <div className="row m-0">
          <div className="col-9">
            <div>
              <h4>{name}</h4>
              <p>{postion}</p>
            </div>
            <div>
              <span>{content}</span>
            </div>
          </div>
          <div className="col-3">
            <span>
              <img src={profile} />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonCard;

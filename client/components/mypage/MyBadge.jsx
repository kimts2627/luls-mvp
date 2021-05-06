import React from "react";

const MySingleBadge = ({ badge }) => {
  return (
    <div className="h-full w-1/4 flex justify-center items-center">
      <img src={badge.badge.img} alt={badge.badge.id} className="h-full" />
    </div>
  );
};

const MyBadge = ({ badges }) => {
  return (
    <section className="w-full h-1/3 flex flex-col items-center p-2">
      <h1 className="Montserrat flex-1 mb-3 mt-2">Badges</h1>
      <div className="bg-white h-full w-full shadow-md flex justify-evenly items-center p-1">
        {badges.map((badge) => (
          <MySingleBadge key={badge.id} badge={badge} />
        ))}
      </div>
    </section>
  );
};

export default MyBadge;

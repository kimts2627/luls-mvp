import React from "react";
import MyBdage from "./MyBadge";
import MyAttendances from "./MyAttendances";
import MyBulletIns from "./MyBulletIns";
import MyBadge from "./MyBadge";

const MyPageSection = ({ userInfo }) => {
  const {
    permission,
    email,
    f_name,
    l_name,
    birthday,
    createdAt,
    school,
    city,
    bulletin,
    mem_att,
    mem_badge,
  } = userInfo;
  return (
    <section className="w-3/4 h-150 p-12 flex flex-col items-center">
      <div className="w-52 rounded-full h-52 shadow-lg overflow-hidden">
        <img src="/img/female.jpeg" alt="" className="w-full h-full" />
      </div>
      <div className=" flex items-center justify-evenly h-32 w-2/3 mt-10">
        <div className=" flex flex-col h-full items-start justify-center">
          <p>
            <span className="Montserrat">Name</span>
            {` ${l_name} ${f_name}`}
          </p>
          <p>
            <span className="Montserrat">Email</span>
            {` ${email}`}
          </p>
        </div>
        <div className=" flex flex-col h-full items-start justify-center">
          <p>
            <span className="Montserrat">School</span>
            {school
              ? ` ${school.name} / ${school.major} / ${school.degree}`
              : ""}
          </p>
          <p>
            <span className="Montserrat">Joined us at:</span>
            {` ${createdAt.slice(0, 10)}`}
          </p>
          <p>{`${city.city}, ${city.state}, ${city.country}`}</p>
        </div>
      </div>
      <section className="flex w-full h-64 mt-10">
        <div className="flex flex-col h-full w-1/2 ">
          <MyAttendances attendances={mem_att} />
          <MyBadge badges={mem_badge} />
        </div>
        <div className="flex h-full w-1/2 ">
          <MyBulletIns bulletins={bulletin} />
        </div>
      </section>
    </section>
  );
};

export default MyPageSection;

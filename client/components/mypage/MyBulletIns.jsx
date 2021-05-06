import { useRouter } from "next/router";
import React from "react";

const SingleMyBulletIn = ({ bulletin }) => {
  const router = useRouter();
  const { status, Bulletin_id } = bulletin;
  return (
    <article
      className="w-full h-16 bg-white shadow-md mb-2 flex items-center justify-between cursor-pointer"
      onClick={() => router.push(`/tasks/posts/${Bulletin_id.id}`)}
    >
      <p className="p-4">{Bulletin_id.id}</p>
      <p className="p-4 flex-1 text-center">{Bulletin_id.title}</p>
      <p className="p-4 text-xs">
        {Bulletin_id.createdAt.split("T").join("/").slice(0, 16)}
      </p>
    </article>
  );
};

const MyBulletIns = ({ bulletins }) => {
  return (
    <section className="flex flex-col w-full h-full items-center justify-start">
      <h1 className="Montserrat flex-1">Tasks</h1>
      <div className="p-4 w-full h-full overflow-scroll">
        {bulletins.reverse().map((bulletin) => (
          <SingleMyBulletIn key={bulletin.id} bulletin={bulletin} />
        ))}
      </div>
    </section>
  );
};

export default MyBulletIns;

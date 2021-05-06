import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";
import Layout from "../../components/layout/";
import MyPageSection from "../../components/mypage/MyPageSection";

const mypage = () => {
  const userInfo = useSelector((state) => state.auth.userInfo);
  const router = useRouter();
  const dummyUserInfo = {
    id: 5,
    permission: "student",
    email: "kimtstststs@gmail.com",
    f_name: "태",
    l_name: "수",
    birthday: "2021-04-09",
    createdAt: "2021-04-27T11:23:53.971Z",
    updatedAt: "2021-04-27T11:23:53.971Z",
    school: {
      id: 5,
      name: "멋사대학교",
      degree: "석사",
      major: "미국과",
      entrance_year: "2013-03-01",
      graduation_year: "2023-03-01",
    },
    city: {
      id: 5,
      city: "Gangnam-gu",
      country: "북한",
      state: "Seoul",
    },
    bulletin: [
      {
        id: 16,
        status: false,
        Bulletin_id: {
          id: 122,
          title: "Dummy 101",
          content: "yeah",
          visible: true,
          submit_check: "pass",
          school: "멋사대학교",
          permission: "student",
          createdAt: "2021-04-27T18:31:38.806Z",
          updatedAt: "2021-04-30T16:57:02.000Z",
          reply: [],
          tag: [
            {
              id: 8,
              createdAt: "2021-04-28T18:53:48.365Z",
              updatedAt: "2021-04-28T18:53:48.389Z",
              tagId: {
                id: 1,
                name: "HW-1",
              },
            },
            {
              id: 9,
              createdAt: "2021-04-28T18:53:48.365Z",
              updatedAt: "2021-04-28T18:53:48.389Z",
              tagId: {
                id: 2,
                name: "HW-2",
              },
            },
          ],
        },
      },
      {
        id: 17,
        status: false,
        Bulletin_id: {
          id: 123,
          title: "Dummy 102",
          content: "yeeah",
          visible: true,
          submit_check: "pass",
          school: "멋사대학교",
          permission: "student",
          createdAt: "2021-04-28T15:27:14.225Z",
          updatedAt: "2021-04-30T16:57:08.000Z",
          reply: [],
          tag: [
            {
              id: 10,
              createdAt: "2021-04-28T18:53:48.365Z",
              updatedAt: "2021-04-28T18:53:48.389Z",
              tagId: {
                id: 6,
                name: "HW-6",
              },
            },
            {
              id: 11,
              createdAt: "2021-04-28T18:53:48.365Z",
              updatedAt: "2021-04-28T18:53:48.389Z",
              tagId: {
                id: 4,
                name: "HW-4",
              },
            },
            {
              id: 12,
              createdAt: "2021-04-28T18:53:48.365Z",
              updatedAt: "2021-04-28T18:53:48.389Z",
              tagId: {
                id: 9,
                name: "HW-9",
              },
            },
          ],
        },
      },
      {
        id: 18,
        status: false,
        Bulletin_id: {
          id: 124,
          title: "Dummy 103",
          content: "hello world",
          visible: true,
          submit_check: "0",
          school: "멋사대학교",
          permission: "student",
          createdAt: "2021-04-28T15:27:33.489Z",
          updatedAt: "2021-04-30T11:11:55.000Z",
          reply: [],
          tag: [
            {
              id: 13,
              createdAt: "2021-04-28T18:53:48.365Z",
              updatedAt: "2021-04-28T18:53:48.389Z",
              tagId: {
                id: 4,
                name: "HW-4",
              },
            },
            {
              id: 14,
              createdAt: "2021-04-28T18:53:48.365Z",
              updatedAt: "2021-04-28T18:53:48.389Z",
              tagId: {
                id: 3,
                name: "HW-3",
              },
            },
          ],
        },
      },
      {
        id: 19,
        status: false,
        Bulletin_id: {
          id: 125,
          title: "modify test!!!(수정맨)",
          content: "됐으면 좋겠다(수정맨)",
          visible: true,
          submit_check: "0",
          school: "멋사대학교",
          permission: "student",
          createdAt: "2021-04-28T15:28:02.335Z",
          updatedAt: "2021-04-29T18:03:34.000Z",
          reply: [],
          tag: [],
        },
      },
      {
        id: 20,
        status: false,
        Bulletin_id: {
          id: 126,
          title: "지금은 회의중 입니다 (수정했어요)(수정한번더)",
          content: "하하하!하하하!",
          visible: true,
          submit_check: "0",
          school: "멋사대학교",
          permission: "student",
          createdAt: "2021-04-28T16:17:46.502Z",
          updatedAt: "2021-04-29T16:39:00.000Z",
          reply: [],
          tag: [
            {
              id: 15,
              createdAt: "2021-04-28T18:53:48.365Z",
              updatedAt: "2021-04-28T18:53:48.389Z",
              tagId: {
                id: 1,
                name: "HW-1",
              },
            },
            {
              id: 16,
              createdAt: "2021-04-28T18:53:48.365Z",
              updatedAt: "2021-04-28T18:53:48.389Z",
              tagId: {
                id: 2,
                name: "HW-2",
              },
            },
          ],
        },
      },
      {
        id: 22,
        status: false,
        Bulletin_id: {
          id: 128,
          title: "Testing...",
          content: "Testing!!~",
          visible: true,
          submit_check: "0",
          school: "멋사대학교",
          permission: "student",
          createdAt: "2021-04-30T11:13:40.141Z",
          updatedAt: "2021-04-30T17:56:34.000Z",
          reply: [],
          tag: [
            {
              id: 18,
              createdAt: "2021-04-30T11:13:40.152Z",
              updatedAt: "2021-04-30T11:13:40.152Z",
              tagId: {
                id: 1,
                name: "HW-1",
              },
            },
            {
              id: 19,
              createdAt: "2021-04-30T11:13:40.156Z",
              updatedAt: "2021-04-30T11:13:40.156Z",
              tagId: {
                id: 2,
                name: "HW-2",
              },
            },
            {
              id: 20,
              createdAt: "2021-04-30T11:13:40.159Z",
              updatedAt: "2021-04-30T11:13:40.159Z",
              tagId: {
                id: 3,
                name: "HW-3",
              },
            },
            {
              id: 21,
              createdAt: "2021-04-30T11:13:40.164Z",
              updatedAt: "2021-04-30T11:13:40.164Z",
              tagId: {
                id: 4,
                name: "HW-4",
              },
            },
            {
              id: 22,
              createdAt: "2021-04-30T11:13:40.168Z",
              updatedAt: "2021-04-30T11:13:40.168Z",
              tagId: {
                id: 5,
                name: "HW-5",
              },
            },
            {
              id: 23,
              createdAt: "2021-04-30T11:13:40.173Z",
              updatedAt: "2021-04-30T11:13:40.173Z",
              tagId: {
                id: 10,
                name: "HW-10",
              },
            },
          ],
        },
      },
      {
        id: 23,
        status: false,
        Bulletin_id: {
          id: 129,
          title: "안녕",
          content: "하세요!!!!!!",
          visible: true,
          submit_check: "0",
          school: "멋사대학교",
          permission: "student",
          createdAt: "2021-04-30T16:27:46.199Z",
          updatedAt: "2021-04-30T17:39:18.000Z",
          reply: [],
          tag: [
            {
              id: 24,
              createdAt: "2021-04-30T16:27:46.210Z",
              updatedAt: "2021-04-30T16:27:46.210Z",
              tagId: {
                id: 2,
                name: "HW-2",
              },
            },
            {
              id: 25,
              createdAt: "2021-04-30T16:27:46.217Z",
              updatedAt: "2021-04-30T16:27:46.217Z",
              tagId: {
                id: 4,
                name: "HW-4",
              },
            },
          ],
        },
      },
    ],
    mem_badge: [
      {
        id: 5,
        status: 0,
        badge: {
          id: 3,
          img: "https://www.likelionustest.com/images/css.png",
        },
      },
      {
        id: 4,
        status: 0,
        badge: {
          id: 2,
          img: "https://www.likelionustest.com/images/html.png",
        },
      },
      {
        id: 3,
        status: 0,
        badge: {
          id: 1,
          img: "https://www.likelionustest.com/images/js-format.png",
        },
      },
    ],
    mem_att: [
      {
        id: 70,
        status: 1,
        comment: null,
        att: {
          id: 1,
          date: "2021-04-27T00:00:00.000Z",
        },
      },
      {
        id: 71,
        status: 1,
        comment: null,
        att: {
          id: 2,
          date: "2021-04-28T00:00:00.000Z",
        },
      },
      {
        id: 72,
        status: 1,
        comment: null,
        att: {
          id: 3,
          date: "2021-04-29T00:00:00.000Z",
        },
      },
      {
        id: 73,
        status: 3,
        comment: null,
        att: {
          id: 4,
          date: "2021-04-30T00:00:00.000Z",
        },
      },
      {
        id: 74,
        status: 2,
        comment: null,
        att: {
          id: 5,
          date: "2021-05-03T00:00:00.000Z",
        },
      },
      {
        id: 75,
        status: 1,
        comment: null,
        att: {
          id: 6,
          date: "2021-05-04T00:00:00.000Z",
        },
      },
      {
        id: 76,
        status: 0,
        comment: null,
        att: {
          id: 7,
          date: "2021-05-05T00:00:00.000Z",
        },
      },
      {
        id: 77,
        status: 0,
        comment: null,
        att: {
          id: 8,
          date: "2021-05-06T00:00:00.000Z",
        },
      },
      {
        id: 78,
        status: 0,
        comment: null,
        att: {
          id: 9,
          date: "2021-05-07T00:00:00.000Z",
        },
      },
      {
        id: 79,
        status: 0,
        comment: null,
        att: {
          id: 10,
          date: "2021-05-08T00:00:00.000Z",
        },
      },
      {
        id: 80,
        status: 0,
        comment: null,
        att: {
          id: 11,
          date: "2021-05-09T00:00:00.000Z",
        },
      },
      {
        id: 81,
        status: 0,
        comment: null,
        att: {
          id: 12,
          date: "2021-05-10T00:00:00.000Z",
        },
      },
      {
        id: 82,
        status: 0,
        comment: null,
        att: {
          id: 13,
          date: "2021-05-11T00:00:00.000Z",
        },
      },
      {
        id: 83,
        status: 0,
        comment: null,
        att: {
          id: 14,
          date: "2021-05-12T00:00:00.000Z",
        },
      },
      {
        id: 84,
        status: 0,
        comment: null,
        att: {
          id: 15,
          date: "2021-05-13T00:00:00.000Z",
        },
      },
      {
        id: 85,
        status: 0,
        comment: null,
        att: {
          id: 16,
          date: "2021-05-14T00:00:00.000Z",
        },
      },
    ],
  };

  return (
    <Layout>
      <div className="w-full h-smallFull flex justify-center mt-28">
        <section className="bg-green-100 w-full max-w-screen-xl h-full flex flex-col items-center">
          <h1 className="text-7xl mt-36 mb-20">MyPage</h1>
          <MyPageSection userInfo={dummyUserInfo} />
        </section>
      </div>
    </Layout>
  );
};

export default mypage;

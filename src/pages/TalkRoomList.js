import React from "react";

const TalkRoomList = ({ history }) => {
  const gotopage = () => {
    history.push("/talkroom");
  };

  return (
    <>
      <h1>トークルーム一覧</h1>
      <button onClick={gotopage}>talkroom A</button>
    </>
  );
};

export default TalkRoomList;

import React, { useState, useEffect } from "react";
import firebase from "../config/firebase";

import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";

// import moment from "moment";

const Message = () => {
  const [messages, setMessages] = useState(null);
  const [value, setValue] = useState("");

  useEffect(() => {
    firebase
      .firestore()
      .collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        const messages = snapshot.docs.map((doc) => {
          // console.log(doc.data().timestamp);
          return {
            content: doc.data().content,
            timestamp: doc.data().timestamp.toDate(), //この部分でfirebaseより取得
          };
        });

        // console.log(messages.slice(0, 10));

        // const length = messages.length;
        // for (let i = length - 1; i > length - 11; i--) {
        //   console.log(messages[i]);
        // }

        setMessages(messages);
        console.log(messages);
      });
  }, []);

  // // 引数 timestamp の単位はミリ秒であるとする
  // const timestampToTime = (timestamp) => {
  //   const date = new Date(messages.timestamp * 1000);
  //   const yyyy = `${date.getFullYear()}`;
  //   // .slice(-2)で文字列中の末尾の2文字を取得する
  //   // `0${date.getHoge()}`.slice(-2) と書くことで０埋めをする
  //   const MM = `0${date.getMonth() + 1}`.slice(-2); // getMonth()の返り値は0が基点
  //   const dd = `0${date.getDate()}`.slice(-2);
  //   const HH = `0${date.getHours()}`.slice(-2);
  //   const mm = `0${date.getMinutes()}`.slice(-2);
  //   const ss = `0${date.getSeconds()}`.slice(-2);

  //   return `${yyyy}/${MM}/${dd} ${HH}:${mm}:${ss}`;
  // };

  // timestamp = 100000000; // 1億
  // console.log(timestampToTime(timestamp));

  // console.log(messages);

  const handleSubmit = (e) => {
    e.preventDefault();

    let valueReplace = value.replace(/\s+/g, "");

    if (valueReplace === "") {
      alert("メッセージを入力してください。");
      return;
    }

    firebase.firestore().collection("messages").add({
      content: value,
      // user: user.displayName,
      timestamp: new Date(), //こうしてデータをtimestampに保存させています
      // key: messages.index,
    });
    setValue("");
  };

  const exportMessages = () => {
    if (messages !== null) {
      return messages.map((message, index) => (
        <li className="list" key={index}>
          {/* <span>（ユーザー名）</span> */}
          <ListItem>
            <ListItemAvatar>
              <Avatar alt="icon" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <span className="p-chat__bubble">{message.content}</span>
            {/* ここで日時を表示させたいです */}
            {/* <span>{message.timestamp}</span> */}
            <span>{formatTime}</span>
          </ListItem>
        </li>
      ));
    }
  };

  return (
    <>
      <ul>{exportMessages()}</ul>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          placeholder="メッセージを入力"
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">送信</button>
      </form>
    </>
  );
};

export default Message;

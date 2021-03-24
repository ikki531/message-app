// import React, { useState, useEffect } from "react";
// import firebase from "../config/firebase";

// import ListItem from "@material-ui/core/ListItem";
// import ListItemAvatar from "@material-ui/core/ListItemAvatar";
// import Avatar from "@material-ui/core/Avatar";

// import moment from "moment";

// const ExportMessages = () => {
//   const [messages, setMessages] = useState(null);

//   useEffect(() => {
//     firebase
//       .firestore()
//       .collection("messages")
//       .orderBy("timestamp", "asc")
//       .onSnapshot((snapshot) => {
//         const messages = snapshot.docs.map((doc) => {
//           return {
//             content: doc.data().content,
//             timestamp: doc.data().timestamp.toDate(), //この部分でfirebaseより取得
//           };
//         });

//         setMessages(messages);
//         console.log(messages);
//       });
//   }, []);

//   return messages.map((message, index) => (
//     <li className="list" key={index}>
//       {/* <span>（ユーザー名）</span> */}
//       <ListItem>
//         <ListItemAvatar>
//           <Avatar alt="icon" src="/static/images/avatar/1.jpg" />
//         </ListItemAvatar>
//         <span className="p-chat__bubble">{message.content}</span>
//         {/* ここで日時を表示させたいです */}
//         <span>{moment(message.timestamp).format("YYYY/MM/DD HH:mm")}</span>
//       </ListItem>
//     </li>
//   ));
// };

// export default ExportMessages;

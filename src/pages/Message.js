import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";

// import moment from "moment"; //moment.js使用時

const Message = ({ message }) => {
  //<- propsとしてmessageを受け取る。このコンポーネントの役割はMessageのひとつひとつを見せるということなのでコンポーネント名をMessageとする
  //↓ formatTimeを定義
  const formatTime = `${message.timestamp.getFullYear()}/${
    message.timestamp.getMonth() + 1
  }/${message.timestamp.getDate()} ${message.timestamp.getHours()}:${message.timestamp.getMinutes()}`;
  // 秒数をいれるなら、${message.timestamp.getSeconds()}
  return (
    <li className="list">
      {/* <span>（ユーザー名）</span> */}
      <ListItem
        className="list-item"
        style={{
          background: "gray",
          padding: "15px",
          margin: "30px",
          borderRadius: "4px",
          width: "100%",
          textAlign: "center",
        }}
      >
        <ListItemAvatar>
          <Avatar alt="icon" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <span className="p-chat">{message.content}</span>
        <div className="date-and-time">
          <span>{formatTime}</span>
        </div>
        {/* <span>{moment(message.timestamp).format("YYYY/MM/DD HH:mm")}</span> */}
        {/*moment.js使用時*/}
      </ListItem>
    </li>
  );
};

export default Message;

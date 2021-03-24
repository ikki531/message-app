import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";

const Message = ({ message }) => {
  //<- propsとしてmessageを受け取る。このコンポーネントの役割はMessageのひとつひとつを見せるということなのでコンポーネント名をMessageとする
  //↓ formatTimeを定義
  const formatTime = `${message.timestamp.getFullYear()}/${
    message.timestamp.getMonth() + 1
  }/${message.timestamp.getDate()} ${message.timestamp.getHours()}:${message.timestamp.getMinutes()}:${message.timestamp.getSeconds()}`;
  return (
    <li className="list">
      {/* <span>（ユーザー名）</span> */}
      <ListItem>
        <ListItemAvatar>
          <Avatar alt="icon" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <span className="p-chat">{message.content}</span>
        <span>{formatTime}</span> {/* formatTime表示 */}
      </ListItem>
    </li>
  );
};

export default Message;

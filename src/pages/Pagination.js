import MuiPagination from "@material-ui/lab/Pagination";
import { withStyles } from "@material-ui/core/styles";
import { useState } from "react";

const Pages = () => {
  //ページ番号
  const [page, setPage] = useState(1);

  const Pagination = withStyles({
    root: {
      display: "inline-block", //中央寄せのためインラインブロックに変更
    },
  })(MuiPagination);

  return (
    <div style={{ textAlign: "center" }}>
      <Pagination
        count={10} //総ページ数
        color="primary" //ページネーションの色
        onChange={(e, page) => setPage(page)} //変更されたときに走る関数。第2引数にページ番号が入る
        page={page} //現在のページ番号
      />
    </div>
  );
};

export default Pages;

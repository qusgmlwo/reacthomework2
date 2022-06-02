import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteBucket } from "./redux/modules/bucket";

import { Link } from "react-router-dom";

const Detail = (props) => {
  const dispatch = useDispatch();
  const params = useParams();
  const bucket_list = useSelector((state) => state.bucket.list);
  const bucket_index = params.index;

  return (
    <div>
      <h1>{bucket_list[bucket_index]}</h1>
      <Link to={{ pathname: "/" }}>
        <button
          onClick={() => {
            console.log("삭제하기");
            dispatch(deleteBucket(bucket_index));
          }}
        >
          삭제하기
        </button>
      </Link>
    </div>
  );
};

export default Detail;

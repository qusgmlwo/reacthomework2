// widgets.js

// Actions

const CREATE = "bucket/CREATE";
const DELETE = "bucket/DELETE";

const initialState = {
  list: ["영화관 가기", "매일 책읽기", "수영 배우기", "공부 하기"],
};

export function createBucket(bucket) {
  console.log("액션을 생성할거야");
  return { type: CREATE, bucket };
}

export function deleteBucket(bucket_index) {
  console.log("지울 버킷 인덱스", bucket_index);
  return { type: DELETE, bucket_index };
}

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "bucket/CREATE": {
      console.log("값을바꿀거야");
      const net_bucket_list = [...state.list, action.bucket];
      return { list: net_bucket_list };
    }
    case "bucket/DELETE": {
      console.log(state, action);
      const net_bucket_list = state.list.filter((l, idx) => {
        return parseInt(action.bucket_index) != idx;
      });

      return { list: net_bucket_list };
    }
    // do reducer stuff
    default:
      return state;
  }
}

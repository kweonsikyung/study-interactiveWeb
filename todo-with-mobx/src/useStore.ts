//useStore는 컴포넌트마다 스토어를 사용하기 위해 작성한다.
//만약 스토어가 여러개인 경우 불러와서 합쳐준다. 개별적으로 사용도 가능

import { todo } from './stores/todo';

const useStore = () => ({ todo });

export default useStore;
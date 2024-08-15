

'use client'
import { authAtom } from '../store/auth';
import { useAtom } from "jotai";

type Notification = {
  uid: string, 
  notification: string,
}

type Props = {
  data: Array<Notification>,
}

const NotificationList = (props: Props): JSX.Element => {
  const { data } = props;
  const [ { isLoggedIn, uid }, setAuth ] = useAtom(authAtom);
  return (
    <div>
      {
        data
          .filter(d => d.uid === uid)
          .map(d => <li key={d.notification}>{d.notification}</li>)
      }
    </div>
  )
}
export default NotificationList;

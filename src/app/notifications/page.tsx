import NotificationList from "./notification-list";

const Notifications = () => {
  const data = [
    { uid: 'td', notification: 'notice 1 td' },
    { uid: 'ab', notification: 'notice 1 ab' },
    { uid: 'td', notification: 'notice 2 td' },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <NotificationList data={data} />
    </main>
  );
}
module.exports =  Notifications;
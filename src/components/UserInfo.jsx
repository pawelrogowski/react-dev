export const UserInfo = ({ UserObject }) => {
  const { user, name, age, address, isLoggedIn } = UserObject;
  const { street, houseNumber, city } = address;
  return (
    <div>
      <p>user number: {user}</p>
      <p>user name: {name}</p>
      <p>user age: {age}</p>
      <p>
        user logged in?:{" "}
        {isLoggedIn ? <span>Logged</span> : <span>Not Logged</span>}
      </p>
      <p>user street: {street}</p>
      <p>user house#: {houseNumber}</p>
      <p>user city: {city}</p>
    </div>
  );
};

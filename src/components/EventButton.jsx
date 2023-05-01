export const EventButton = ({ buttonText, onClick }) => {
  return (
    <button type="button" onClick={onClick}>
      {buttonText}
    </button>
  );
};

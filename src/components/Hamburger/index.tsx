const Hamburger = ({
  hamburger,
  onSetHamburger,
}: {
  hamburger: boolean;
  onSetHamburger: () => void;
}) => {
  return (
    <button
      onClick={onSetHamburger}
      className="hamburger"
      type="button"
      aria-label="hamburger"
    >
      <svg
        id={hamburger ? "hamburger-active" : ""}
        width="25"
        height="21"
        viewBox="0 0 25 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 2.16667C0 1.24619 0.621827 0.5 1.38889 0.5H23.6111C24.3782 0.5 25 1.24619 25 2.16667C25 3.08714 24.3782 3.83333 23.6111 3.83333H1.38889C0.621827 3.83333 0 3.08714 0 2.16667Z"
          fill="#C97737"
        />
        <path
          d="M0 10.5C0 9.57952 0.621827 8.83333 1.38889 8.83333H23.6111C24.3782 8.83333 25 9.57952 25 10.5C25 11.4205 24.3782 12.1667 23.6111 12.1667H1.38889C0.621827 12.1667 0 11.4205 0 10.5Z"
          fill="#C97737"
        />
        <path
          d="M0 18.8333C0 17.9129 0.621827 17.1667 1.38889 17.1667H23.6111C24.3782 17.1667 25 17.9129 25 18.8333C25 19.7538 24.3782 20.5 23.6111 20.5H1.38889C0.621827 20.5 0 19.7538 0 18.8333Z"
          fill="#C97737"
        />
      </svg>
    </button>
  );
};

export default Hamburger;

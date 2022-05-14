import "./styles.scss";


function Button({children}) {
  return (
    <button className="button">
        {children}
    </button>
  )
}

export default Button
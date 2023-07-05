import colorNames from 'colornames'

const input = ({
    colorValue, setColorValue, setHexValue, isDarkText, setIsDarkText
}) => {
  return (
        <form onSubmit={(e) => e.preventDefault()}>
            <label>Add color name:</label>
            <input 
                autoFocus
                type = "text"
                placeholder = "Add color name"
                required
                value={colorValue}
                onChange={(e) => {
                setColorValue(e.target.value);
                setHexValue(colorNames(e.target.value));
            }}
        />
        <button
            type="button"
            onClick={() => setIsDarkText(!isDarkText)}
        >
            Toggle Text Color
        </button>
    </form>
  )
}

export default input

function App() {
    const handleClick = () => {
        alert('clicked')
    }
    return (
        <button onClick={handleClick}>Add Animals</button>
    )
}

export default App;
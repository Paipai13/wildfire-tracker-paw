import blueFire from './blue-fire-burning.gif'

const Loader = () => {
    return (
        <div className="loader">
            <img src ={blueFire} alt ="Loading" />
            <h1> Fetching Data </h1>
        </div>
    )
}

export default Loader

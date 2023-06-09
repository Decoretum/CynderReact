
function errorimage(image){
    image.currentTarget.src = './error.png'
}

function Moviecard({movie}){

    return (
        <>
            <div className='movie'> 
                <div>
                    <p> {movie.Year} </p>
                </div>

                <div>
                    <img src={movie.Poster !== '' || movie.Poster !== 'N/A' ? movie.Poster : 'err.png'} alt='No image provided'
                    //onError={(e) => {e.currentTarget.setAttribute('src','error.png')}}
                    //Had trouble setting the default pic to 400 error pic
                    />
                </div>

                <div>
                    <span>{movie.Type}</span>
                    <h3>{movie.Title}</h3>
                </div>
            </div>
        </>
    )
}

export default Moviecard;
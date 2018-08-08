import { connect } from 'react-redux';
import MovieComponent from '../components/MovieComponent';

import {    addMovieAction, fetchMoviesAction, 
            fetchSuccessAction, fetchFailedAction,
            updateItemAction, updateItemSuccessAction
        } from '../actions';

const mapStateToProps = (state) => {        
    return {        
        movies: state.movieReducers
    }
};

const mapDispatchToProps = (dispatch) => {
    return {    
        onFetchMovies: () => {                        
            dispatch(fetchMoviesAction());
        }, 
        //Not necessary !   
        // onSuccessFetch: () => {                        
        //     dispatch(fetchSuccessAction());
        // }, 
        onAddMovie: (newMovie) => {                        
            dispatch(addMovieAction(newMovie));
        },
        onUpdateItemAction: (updatedMovie) => {                        
            dispatch(updateItemAction(updatedMovie));
        }, 
        //Not necessary !  
        onUpdateItemSuccessAction: (updatedMovie) => {                        
            dispatch(updateItemSuccessAction(updatedMovie));
        },
    };
}
const MovieContainer = connect(mapStateToProps, mapDispatchToProps)(MovieComponent);
export default MovieContainer;
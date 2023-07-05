export const GifGridItem = ({ title, url, id }) => {
    return (
        <div class="card" style={ { width: '18rem' } } key={ id }>
            <img src={ url } class="card-img-top" alt={ title } />
            <div class="card-body">
                <h5 class="card-title">{ title }</h5>
            </div>
        </div>

    );
};

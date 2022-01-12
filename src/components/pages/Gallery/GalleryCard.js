import './GalleryCard.css';

function GalleryCard(props){
    return(
        <div className="galleryCard">
            <div className="galleryCardImage" >
                <img src={props.imageID} alt={props.imageName} />
            </div>
        </div>
    );
}
export default GalleryCard;
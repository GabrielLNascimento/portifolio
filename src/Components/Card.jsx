import PropTypes from "prop-types";

const Card = ({ link, title, image }) => {
    if (!link || !title || !image) {
        return <div>Erro, sem valor nos props</div>;
    }

    return (
        <a href={link} target="_blank">
            <div className="project-item">
                <span className="project-title">{ title }</span>
                <img src={image} alt={title} className="project-img" />
            </div>
        </a>
    );
};

Card.propTypes = {
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
};

export default Card;

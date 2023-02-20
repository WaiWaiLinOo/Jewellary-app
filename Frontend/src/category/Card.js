function Card(props) {
    // console.log(props);
    const { image, category } = props;
    return (
        <section className="card">
            <img src={image} alt="card-image" />
            <p className="text-uppercase fw-bold mt-3">{category}</p>
        </section>
   
    );
  }

export default Card;
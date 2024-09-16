import Card from "./Card";

function Tours({ tours, removeTours }) {
    return (
        <div className="container">
            <h1 className="title">Plan with Love</h1>
            <div className="cards">
                {
                    tours.map((tour) => {
                        return <Card  {...tour} removeTours={removeTours} />;
                    })
                }
            </div>
        </div>
    );
}

export default Tours;



const index = (data) => {
  console.log(data);

  return (
    <>
      <div className="intro__card">
        <img src={data.images} alt="card" />
        <h3 className="intro__card_title" title-id="cardtitle">
          {data.title}
        </h3>
        <p className="intro__card_text">{data.text}</p>
        <span className="intro__card_span">{data.span} <i className="bi bi-chevron-right"></i> </span>
      </div>
    </>
  );
};

export default index;

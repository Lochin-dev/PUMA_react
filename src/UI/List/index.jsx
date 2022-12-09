const componentName = (data) => {
  console.log(data);
  return (
    <>
      <div className="gallary__boots_div">
        <img src={data.images} alt="" />
        <div className="puma_div">
          <h3 className="gallary__boots_title">{data.title}</h3>
          <p className="gallary__boots_text">
            Size: <b>{data.size}</b>
          </p>
          <p className="gallary__boots_text" style={{ padding: "10px 0" }}>
            Price: <b> {data.narxi}</b>
          </p>
          <button className="nav__btn">Buy Now</button>
        </div>
      </div>
    </>
  );
};

export default componentName;

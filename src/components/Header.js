export default function Header({width,isOpen,handleClick}) {
  const share = width >= 0 && width <= 768
      ? "./assets/share-mobile.png"
      : "./assets/share-desktop.png";
  // const handleChange = (e) => {
  //   console.log(e.target.value)
  // }
  return (
    <div className="header">
      <div className="share_container">
        {isOpen && 
        <div className="info">Share link</div>
        }
        <div onClick={handleClick}>
        <img className="share" src={share} alt="share" />
        </div>
      </div>
      <div className="input_container">
        <img
          src={"./assets/profile.jpg"}
          className="profile"
          id="profile_img"
          alt="profile"
        />
        <input
          // onChange={handleChange}
          type="file"
          id="image"
          accept="image/*"
          name="image"
          className="input"
        />
        <div className="backdrop">
          <label htmlFor="image" className="upload_image">
            <img
              className="upload_image"
              src="./assets/camera.png"
              alt="choose profile"
            />
          </label>
        </div>
      </div>
      <div>
        <h4 id="twitter">KA_ODILY</h4>
        <h5 id="slack" className="slack">
          Isizoh Chika
        </h5>
      </div>
    </div>
  );
}

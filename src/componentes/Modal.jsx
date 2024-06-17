export default function Modal ({clickedImg,setClickedImg,handelRotationRight,handelRotationLeft}) {
    function handleClick(e) {
      if (e.target.classList.contains("dismiss")) {
        setClickedImg(null);
      }
    };
  
    return (
      <>
        <div className="overlay">
          <img src={clickedImg} alt="bigger pic" />
          <p className="dismiss close" onClick={handleClick}>
            X
          </p>
          <div onClick={handelRotationLeft} className="overlay-arrows_left">
            <div>
               <svg id="Layer_1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                  <path 
                    d="m510 15.327v479.522c0 6.524-.241 10.714-3.712 13.994-3.844 3.607-11.642-2.367-11.642-2.367l-214.605-204.382s-3.116-1.13-4.883.546c-1.306 1.24-2.209 2.697-2.209 2.697v189.513c0 6.524-.266 10.714-3.714 13.994-3.82 3.607-11.622-2.367-11.622-2.367l-249.956-238.052s-5.657-6.194-5.657-12.353c0-5.939 5.084-11.95 5.084-11.95l251.566-239.507s7.03-4.773 10.585-1.421c3.227 3.06 3.714 12.133 3.714 12.133s0 85.011 0 186.161c0 5.028-.466 5.32 2.209 7.872 1.742 1.676 4.795.619 4.795.619l215.732-205.364s7.003-4.773 10.604-1.421c3.204 3.06 3.711 12.133 3.711 12.133z" 
                    fill="#1c75bc" 
                    stroke="#1c75bc" 
                    stroke-miterlimit="10"/>
                </svg>
            </div>
          </div>
          <div onClick={handelRotationRight} className="overlay-arrows_right">
            <div>
              <svg id="Layer_1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                <path d="m510 255.964c0 5.926-5.071 11.926-5.071 11.926l-251.591 239.499s-7.005 4.762-10.577 1.425c-3.229-3.077-3.708-12.153-3.708-12.153s0-86.048 0-188.034c0-4.388.071-3.527-2.274-5.776-2-1.911-5.775.186-5.775.186l-214.675 204.352s-7.027 4.762-10.622 1.425c-3.185-3.078-3.707-12.153-3.707-12.153s0-359.566 0-479.481c0-6.564.25-10.73 3.707-14.029 3.867-3.602 11.646 2.402 11.646 2.402l213.194 202.997s4.119 2.626 6.231.6c1.958-1.875 2.274-7.425 2.274-7.425v-184.545c0-6.564.275-10.73 3.708-14.029 3.822-3.602 11.625 2.402 11.625 2.402l249.976 238.034s5.639 6.186 5.639 12.377z" 
                  fill="#1c75bc" 
                  stroke="#1c75bc" 
                  stroke-miterlimit="10"/>
              </svg>
            </div>
          </div>
        </div>
      </>
    );
  };
  
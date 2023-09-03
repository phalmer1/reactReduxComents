import React from 'react';
import module from '../coment/coment.module.css'

const Coment = ({coment}) => {


    return (
        <main>
            <div className={module.coment__container}>
              <div className={module.img__container}>
                <span className={module.img__span}>
                  <img src={coment.photo} alt="Icon" />
                </span>
              </div>
              <div className={module.content__data}>
                <div className={module.data}>
                  <div className={module.author__data}>
                    <span>
                      {coment.name}
                      <i
                        style={{ marginLeft: "5px" }}
                        className="fas fa-check-circle"
                      ></i>
                    </span>
                  </div>
                  <div className={module.author__data}>
                    <span className={module.span__data}>{coment.nickname}</span>
                  </div>
                  <div className={module.author__data}>
                    <span className={module.span__data}>{coment.date}</span>
                  </div>
                </div>
                <div className={module.content__text}>{coment.content}</div>
              </div>
            </div>
        </main>
    );
};

export default Coment;
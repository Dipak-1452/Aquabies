import { useEffect, useState } from "react";
import "./Home.css";



export const Home = () => {

  const [images, setImages] = useState([]);

  // useEffect(() => {
  //   const fetchImages = async () => {
  //     try {
  //       const response = await fetch("http://localhost:5000/api/message");
  //       const data = await response.json();
  //       setImages(data);
  //     } catch (error) {
  //       console.error("Error fetching the message:", error);
  //     }
  //   };

  //   fetchImages();
  // }, []);

  const handleBtnClick = () => {
    const post = document.querySelector('.postCon');
    post.classList.toggle('show');
  };

  const handleLickClick = (e) => {
    const Like = e.currentTarget;
    Like.classList.toggle('active');
  };

  const handleMessageClick = (e) => {
    const innerConWrapper = e.currentTarget.closest(".innerConWrapper");
    const messageCon2 = innerConWrapper.querySelector(".messageCon2");
    messageCon2.classList.toggle('active');

    const shareCon = innerConWrapper.querySelector(".shareCon");
    shareCon.classList.remove("active");

    const overlay = document.querySelector('.overlay');
    overlay.classList.toggle('active');


    document.addEventListener('click', function handleOutsideClick(event) {
      if (!innerConWrapper.contains(event.target)) {
        messageCon2.classList.remove('active');
        overlay.classList.remove('active');

        document.removeEventListener('click', handleOutsideClick);
      }
    });
  }


  const handleShareClick = (e) => {
    const innerConWrapper = e.currentTarget.closest(".innerConWrapper");
    const shareCon = innerConWrapper.querySelector(".shareCon");
    shareCon.classList.toggle("active");

    const messageCon2 = innerConWrapper.querySelector(".messageCon2");
    messageCon2.classList.remove('active');

    const overlay = document.querySelector('.overlay');
    overlay.classList.toggle('active');


    document.addEventListener('click', function handleOutsideClick(event) {
      if (!innerConWrapper.contains(event.target)) {
        shareCon.classList.remove('active');
        overlay.classList.remove('active');

        document.removeEventListener('click', handleOutsideClick);
      }
    });
  }

  const handleShareCancelClick = (e) => {
    const innerConWrapper = e.currentTarget.closest(".innerConWrapper");
    const shareCon = innerConWrapper.querySelector(".shareCon");
    shareCon.classList.toggle("active");

    const overlay = document.querySelector('.overlay');
    overlay.classList.toggle('active');
  }

  const handleBookmarkClick = (e) => {
    const Bookmark = e.currentTarget;
    Bookmark.classList.toggle('active');
  }

  const handleReplyClick = (e) => {
    const messFooter = e.currentTarget.closest('.messFooter');
    const arrowDown = messFooter.querySelector(".icon-park-outline--down");
    arrowDown.classList.toggle('active');
    const messageCon3 = e.currentTarget.closest(".messageCon3");
    const messRepliesCon = messageCon3.querySelector(".messRepliesCon");
    messRepliesCon.classList.toggle('active')
  }

  const handleRelyMessClick = (e) => {
    const messageEl = e.currentTarget.closest('.messageCon3');
    if (!messageEl) return;
    const replyControls = messageEl.querySelector('.messReplyCon');
    if (!replyControls) return;

    // toggle visibility classes
    replyControls.classList.toggle('active');
  }
  const handleMessRepliesReplyClick = (e) => {
    const messReplies = e.currentTarget.closest('.messReplies');
    const messRepliesReplyCon = messReplies.querySelector('.messRepliesReplyCon');
    messRepliesReplyCon.classList.toggle('active');
  }


  return (
    <div className="outerCon1">
      <div className="overlay"></div>
      <div className="outerCon2">
        {images.length > 0 ? (
          images.map((img) => (
            <div key={img._id} className="innerConWrapper">
              <div className="innerCon1">
                <div className="conheader">
                  <div className="proCon">
                    <img className="profileImg" src="src/assets/profileImage.png" alt="profile image" />
                    <span className="name">Tina_ka</span>
                    <span className="date">2d</span>
                  </div>
                </div>
                <div className="postCon">
                  <p className="post_text">🚀 Excited to share the logo of my new website AquaShare!
                    🌊 AquaShare is a platform for aquarium hobbyists to connect, share knowledge, donate/sell products, and help
                    <span className="more_text">
                      fellow enthusiasts grow.
                      📌 Whether you're a beginner or an expert, join the community and make your aquarium journey beautiful!
                      🐠 Website coming soon! Stay tuned 💙
                      #Aquarium #Startup #WebDevelopment #Aquascaping #ReactJS #MERN #AquariumCommunity
                    </span>
                  </p>
                  <button className="toggleBtn" onClick={handleBtnClick}></button>
                </div>
                <img
                  src={img.image}
                  alt="uploaded"
                  style={{ width: "400px", height: "550px", objectFit: "cover", borderRadius: "10px" }}
                />
                <div className="conFooter">
                  <span><span className='majesticons--heart-line Icons' onClick={handleLickClick}></span>like</span>
                  <span className="message"><span className="tabler-message Icons" onClick={handleMessageClick}></span>commend</span>
                  <span className="share"><span className="bitcoin-icons--share-filled Icons" onClick={handleShareClick}></span>share</span>
                  <span className="bookmark"><span className='si--bookmark-line Icons' onClick={handleBookmarkClick}></span>save</span>
                </div>
              </div>



              <div className="messageCon2">
                <div className="messageCon3">
                  <div className="messageProfile">
                    <div className="messageProfile2">
                      <img className="messProfileImg" src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="profile image" />
                      <span className="name">@Kono_chi</span>
                      <span className="date">6d ago</span>
                    </div>
                    <span className="iconamoon--menu-kebab-vertical-fill"></span>
                  </div>
                  <div className="messContent">
                    hello every one this is one of my project and one of my idea which i realy want to do
                  </div>
                  <div className="messFooter">
                    <span className='majesticonsHeart-line' onClick={handleLickClick}></span>
                    <span className="replyMess" onClick={handleRelyMessClick}>reply</span>
                    <span className="icon-park-outline--down" onClick={handleReplyClick}>replies...</span>
                  </div>


                  <div className="messReplyCon">
                    <input className="messReply" type="text" placeholder="Add a reply..." />
                    <div className="messReplyReply">
                      <div className="replyBtn" onClick={handleRelyMessClick}>cancel</div>
                      <div className="replyBtn">reply</div>
                    </div>
                  </div>


                  <div className="messRepliesCon">
                    <div className="messReplies">
                      <div className="messageProfile2">
                        <img className="messProfileImg" src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZSUyMGltYWdlfGVufDB8fDB8fHww" alt="profile image" />
                        <span className="name">@banos</span>
                        <span className="date">1min ago</span>
                      </div>
                      <div className="messContent">
                        nice bro keep it up
                      </div>
                      <div className="messFooter">
                        <span className='majesticonsHeart-line' onClick={handleLickClick}></span>
                        <span className="replyMess" onClick={handleMessRepliesReplyClick}>reply</span>
                      </div>
                      <div className="messRepliesReplyCon">
                        <input className="messRepliesReply" type="text" placeholder="Add a reply..." />
                      </div>
                    </div>

                    <div className="messReplies">
                      <div className="messageProfile2">
                        <img className="messProfileImg" src="https://plus.unsplash.com/premium_photo-1675129522693-bd62ffe5e015?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D" alt="profile image" />
                        <span className="name">@hari</span>
                        <span className="date">2h ago</span>
                      </div>
                      <div className="messContent">
                        🔥🔥🔥
                      </div>
                      <div className="messFooter">
                        <span className='majesticonsHeart-line' onClick={handleLickClick}></span>
                        <span className="replyMess" onClick={handleMessRepliesReplyClick}>reply</span>
                      </div>
                      <div className="messRepliesReplyCon">
                        <input className="messRepliesReply" type="text" placeholder="Add a reply..." />
                      </div>
                    </div>

                    <div className="messReplies">
                      <div className="messageProfile2">
                        <img className="messProfileImg" src="https://images.unsplash.com/photo-1503235930437-8c6293ba41f5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D" alt="profile image" />
                        <span className="name">@Abrahim_mohamad</span>
                        <span className="date">30min ago</span>
                      </div>
                      <div className="messContent">
                        boommm ..
                      </div>
                      <div className="messFooter">
                        <span className='majesticonsHeart-line' onClick={handleLickClick}></span>
                        <span className="replyMess" onClick={handleMessRepliesReplyClick}>reply</span>
                      </div>
                      <div className="messRepliesReplyCon">
                        <input className="messRepliesReply" type="text" placeholder="Add a reply..." />
                      </div>
                    </div>

                  </div>

                </div>





                <div className="messageCon3">
                  <div className="messageProfile">
                    <div className="messageProfile2">
                      <img className="messProfileImg" src="https://images.unsplash.com/photo-1618641986557-1ecd230959aa?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="profile image" />
                      <span className="name">@zoro</span>
                      <span className="date">3week ago</span>
                    </div>
                    <span className="iconamoon--menu-kebab-vertical-fill"></span>
                  </div>
                  <div className="messContent">
                    wow wow wow what a fish . is it guppy with cabomba plant .
                  </div>
                  <div className="messFooter">
                    <span className='majesticonsHeart-line' onClick={handleLickClick}></span>
                    <span className="replyMess" onClick={handleRelyMessClick}>reply</span>
                    <span className="icon-park-outline--down" onClick={handleReplyClick}>replies...</span>
                  </div>


                  <div className="messReplyCon">
                    <input className="messReply" type="text" placeholder="Add a reply..." />
                    <div className="messReplyReply">
                      <div className="replyBtn" onClick={handleRelyMessClick}>cancel</div>
                      <div className="replyBtn">reply</div>
                    </div>
                  </div>


                  <div className="messRepliesCon">
                    <div className="messReplies">
                      <div className="messageProfile2">
                        <img className="messProfileImg" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1061&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="profile image" />
                        <span className="name">@thanos</span>
                        <span className="date">1week ago</span>
                      </div>
                      <div className="messContent">
                        yeah it is.
                      </div>
                      <div className="messFooter">
                        <span className='majesticonsHeart-line' onClick={handleLickClick}></span>
                        <span className="replyMess" onClick={handleMessRepliesReplyClick}>reply</span>
                      </div>
                      <div className="messRepliesReplyCon">
                        <input className="messRepliesReply" type="text" placeholder="Add a reply..." />
                      </div>
                    </div>
                  </div>

                </div>





                <div className="innerMessCon">
                  <input className="innerMessInput" type="text" placeholder="Add a commend..." />
                </div>
              </div>





              <div className="shareCon">
                <div className="shareHeadingCon">
                  <p className="shareHeading">share</p>
                  <span className="material-symbols--cancel-rounded" onClick={handleShareCancelClick}></span>
                </div>
                <input className="shareInput" type="text" placeholder="search..." />
                <div className="userCon">

                  <div className="user">
                    <img className="shareUserImage" src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=989&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="user Image" />
                    <p>Iman Khan</p>
                  </div>

                  <div className="user">
                    <img className="shareUserImage" src="https://images.unsplash.com/photo-1499557354967-2b2d8910bcca?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="user Image" />
                    <p>laila HR</p>
                  </div>

                  <div className="user">
                    <img className="shareUserImage" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="user Image" />
                    <p>hanry Dan</p>
                  </div>

                  <div className="user">
                    <img className="shareUserImage" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="user Image" />
                    <p>kiki</p>
                  </div>

                  <div className="user">
                    <img className="shareUserImage" src="https://images.unsplash.com/photo-1533636721434-0e2d61030955?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="user Image" />
                    <p>ravi s</p>
                  </div>

                  <div className="user">
                    <img className="shareUserImage" src="https://images.unsplash.com/photo-1743449661678-c22cd73b338a?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="user Image" />
                    <p>gopi kumar</p>
                  </div>

                </div>

                <div className="shareFooter">
                  <div className="shareOther">
                    <span className="f7--link-circle"></span>
                    <p>copy link</p>
                  </div>

                  <div className="shareOther">
                    <span className="ic--baseline-facebook"></span>
                    <p>facebook</p>
                  </div>

                  <div className="shareOther">
                    <span className="streamline--instagram"></span>
                    <p>instagram</p>
                  </div>

                  <div className="shareOther">
                    <span className="ic--baseline-whatsapp"></span>
                    <p>whatsapp</p>
                  </div>

                  <div className="shareOther">
                    <span className="material-symbols--mail-outline"></span>
                    <p>email</p>
                  </div>

                </div>
              </div>



            </div>
          ))
        ) : (
          <p style={{ color: "black" }}>Loading images...</p>
        )}
      </div>
    </div>
  )
}
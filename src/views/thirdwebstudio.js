import React from 'react'

import { Helmet } from 'react-helmet'

import './thirdwebstudio.css'
const Thirdwebstudio = (props) => {
  
  const handleScroll = event => {
    var x = event.currentTarget.scrollTop/(event.currentTarget.scrollHeight-event.currentTarget.clientHeight)
    document.body.style.setProperty('--scroll', x);

  };



  return (
    
    <div className="thirdwebstudio-container">
      
      <Helmet>
        <title>exported project</title> 
      </Helmet>
      
      <div className="thirdwebstudio-thirdwebstudio">
        <img
          alt="arrowbottomsvg451"
          src="/external/arrowbottomsvg451-6otf.svg"
          className="thirdwebstudio-arrowbottomsvg"
        />
         
        <div id="chung" className="thirdwebstudio-container01" onScroll = {handleScroll}>
          <div className="thirdwebstudio-container02">
            <div className="thirdwebstudio-container03">
              <div id="header" className="thirdwebstudio-div">
                <span className="thirdwebstudio-text">The #1</span>
                <span className="thirdwebstudio-text01">Academic</span>
                <span className="thirdwebstudio-text02">Group</span>
                <span className="thirdwebstudio-text03">
                  <span>
                    &quot;In Pursuit of Perfection: Innovate, Inspire,
                    Illuminate.&quot;
                  </span>
                  <br></br>
                  <br></br>
                </span>
              </div>
              <img
                id="logobanner"
                alt="div441"
                src="https://cdn.discordapp.com/attachments/981727751998406686/1182071500363268137/fix.webp?ex=65835cdf&amp;is=6570e7df&amp;hm=4aa7710e077fa5ead7efb09a66f7e831b8fbf95771b99191edbb39e04a9bb0ca&amp;"
                loading="lazy"
                className="thirdwebstudio-div1"
              />
            </div>
          </div>
          <div id="p2" className="thirdwebstudio-container04">
            <div className="thirdwebstudio-container05">
              <div className="thirdwebstudio-div2">
                <span className="thirdwebstudio-text07">
                  <span>Why us?</span>
                </span>
                <span className="thirdwebstudio-text09">
                  <span>
                    Joining our elite student group isn&apos;t just a
                    choice—it&apos;s a statement. Here, you&apos;re not just
                    another student; you&apos;re part of the academic elite. We
                    boast top-notch GPAs and a trophy case of achievements.
                    Expect exclusive access to resources, networking with the
                    crème de la crème, and opportunities that others can only
                    dream of. We&apos;re the leaders, the innovators, the
                    future. If you&apos;re looking for just an education, look
                    elsewhere. If you&apos;re aiming to be among the best,
                    welcome to where you belong.
                  </span>
                </span>
              </div>
              <div className="thirdwebstudio-div3">
                <img
                  alt="textinfinitesvg473"
                  src="/external/textinfinitesvg473-kvo.svg"
                  className="thirdwebstudio-textinfinitesvg"
                />
              </div>
            </div>
            <div className="thirdwebstudio-container06">
              <div className="thirdwebstudio-container07">
                <img
                  id="attendance"
                  alt="attendance"
                  src="https://cdn.discordapp.com/attachments/981727751998406686/1182086689800323142/attendancefixd.png?ex=65836b04&amp;is=6570f604&amp;hm=f375cf8fcf8b7443083cc564b89076e95eb98b14f0ccee599d1e992e40b47c9e&amp;"
                  className="thirdwebstudio-logoa16zpng"
                />
              </div>
              <div className="thirdwebstudio-container09">
                <img
                  id="schol"
                  alt="logoa16zpng460"
                  src="https://media.discordapp.net/attachments/749849294298939417/1182086906171904052/gpafix.png?ex=65836b38&amp;is=6570f638&amp;hm=7697ce2e543772605c94033561d5b74f92505a14fe1d3e6f2d30f9dddc925522&amp;=&amp;format=webp&amp;quality=lossless&amp;width=896&amp;height=896"
                  className="thirdwebstudio-logoa16zpng2"
                />
              </div>
              <div className="thirdwebstudio-container08">
                <img
                  id="schol"
                  alt="logoa16zpng460"
                  src="https://cdn.discordapp.com/attachments/981727751998406686/1182103350037205163/scholarships_icon.png?ex=65837a89&amp;is=65710589&amp;hm=72d8b147e7474da75b9fe4afc4c1d94258b3d1a61d12f4a49259ce3cd23bd30b&amp;"
                  className="thirdwebstudio-logoa16zpng1"
                />
              </div>
              
            </div>
          </div>
        </div>
      
        

      </div>
    </div>
  )
}

export default Thirdwebstudio

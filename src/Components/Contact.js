import React from 'react'
import NavLink from 'react-bootstrap/esm/NavLink';
import { useNavigate } from 'react-router-dom';


const Contact = () => {


  const navigate = useNavigate();


  const validate = (e) => {
    e.preventDefault()
    var username = document.getElementById("uname")
    var email1 = document.getElementById("email")
    var message1 = document.getElementById("message")
    var number1 = document.getElementById("number1")
    var org1 = document.getElementById('org')
    var event1 = document.getElementById('event')

    if (username.value.trim() == "" || email1.value.trim() == "" || number1.value.trim() == "" ||
      org1.value.trim() == "" || event1.value.trim() == "" || message1.value.trim() == "") {
      alert('blank')
return false
    }
    else {

      navigate('/')

    }

  }

  return (
    <>

      <div className='blank '> </div><br />

      <div className='container-fluid text-center'>
        <div className='row text-center'>

          <div className='col-md-6 p-0 public-img text-center'>
            {/* <img src='https://static.wixstatic.com/media/38036e_e27ccbfadd4f462a8eb7f65fb114fb53~mv2.jpg/v1/fill/w_675,h_676,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/38036e_e27ccbfadd4f462a8eb7f65fb114fb53~mv2.jpg' /> */}
          </div><br />

          <div className='col-md-6 text-center p-3 m-0'>

            <h1 className='text-center publicText pt-3'>Public Speaking</h1>
            <h5 className="send py-4 px-5">Award-Winning Entrepreneurs, Forbes 30 Under 30,
              and Disability Activists</h5>
            <p className='publicText px-5'>When Izzy Wheels founders Ailbhe and Izzy Keane are on stage, their energy and warmth are palpable. It’s not just their brightly coloured clothes that make the multi-award-winning sisters stand out. Their positivity, determination, and sense of purpose are striking.<br /><br />
              These are also young women entrepreneurs who are helping to break down the stigma of disability by bringing attention to the personality in the wheelchair instead of the wheelchair itself. And they do so seamlessly, partly because they love what they do, but also because it makes business sense to tap into a market whose potential many others overlook.<br /><br />

              As a duo, Ailbhe and Izzy are warm, confident, and inspiring. Audiences who hear them speak leave feeling motivated and energized.
            </p>
          </div>
        </div>

      </div>

      <section className='contact-back'>

        <div className="container text-center">
          <h1 className='text-center send pt-5'>Speaker Request</h1><br />
          <div className="row">
            <div className="col-12">

              <form onSubmit={validate} className="px-5 text-center">
                {/* <h3 className="send">Send Us an Email:</h3> */}
                <p className="number">hello@izzywheels.com  |  Tel: +353 860571757</p><br />


                <input type={"text"} required placeholder="Name*" className="inputs " id="uname" /><br /><br />
                <input type={"email"} required placeholder="Email*" className="inputs" id="email" /><br /><br />
                <input type={"number"} required placeholder="Phone Number*" className="inputs" id="number1" /><br /><br />
                <input type={"text"} required placeholder="Organisation*" className="inputs" id="org" /><br /><br />
                <input type={"text"} required placeholder="Event Location*" className="inputs" id="event1" /><br /><br />

                <textarea type={"text"} maxLength="500" placeholder="Message*" className="inputs"
                  id="message"></textarea><br /><br />

                <button type={"submit"}  className=" btn rounded-0 send-but last-button">SUBMIT</button><br /><br />


              </form>


            </div>
          </div>
        </div>
      </section>




      <div className="container-fluid">
        <div className="row box">
          <div className="text-box col-7 ">
            <p className="last-line"> IF YOU CAN'T  STAND UP,<br />STAND OUT! </p>
          </div>
          <div className="follow-box col-2 ">
            <p className="follow-line centered"> FOLLOW US ON</p>
          </div>
          <div className="col-3 logo-box ">
            <img className="logo" src="https://static.wixstatic.com/media/e0678ef25486466ba65ef6ad47b559e1.png/v1/fill/w_39,h_39,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/e0678ef25486466ba65ef6ad47b559e1.png" />
            <img className="logo" src="https://static.wixstatic.com/media/da7ef6dd1302486c9a67baebe4b364bc.png/v1/fill/w_39,h_39,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/da7ef6dd1302486c9a67baebe4b364bc.png" />
            <img className="logo" src="https://static.wixstatic.com/media/c4392d634a0148fda8b7b2b0ad98293b.png/v1/fill/w_39,h_39,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c4392d634a0148fda8b7b2b0ad98293b.png" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
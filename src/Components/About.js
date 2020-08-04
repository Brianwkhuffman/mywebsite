import React, { Component } from 'react';
import profilepic from '../profilepic.jpg'

class About extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var bio = this.props.data.bio;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var hobbies = this.props.data.hobbies;
   }

   return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic" src={profilepic} alt="profile pic" />
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>{bio}</p>

            <h2>Hobbies</h2>
            <ul>
               {hobbies && hobbies.map(hobby => {
                  return (<li key={hobby.name}>{hobby.name}</li>)
               })}
            </ul>

            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
						   <span>{name}</span><br />
						   <span>{street}<br />
						         Located in {city} {state}, {zip}
                   </span><br />
						   <span>{phone}</span><br />
                        <a href='mailto:brianwkhuffman@gmail.com'>Email me! {email}</a>
					   </p>
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;

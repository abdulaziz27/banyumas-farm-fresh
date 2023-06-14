import React, { Fragment } from 'react'
import Menu from '../components/menu'

function Account() {
  return (
    <Fragment>
                            <>
    <Menu/>
  <div className="container-xl px-4 mt-4">
    {/* Account page navigation*/}
    <nav className="nav nav-borders">
      <a
        className="nav-link active ms-0"
        href="https://www.bootdey.com/snippets/view/bs5-edit-profile-account-details"
        target="__blank"
      >
        Profile
      </a>
      <a
        className="nav-link"
        href="https://www.bootdey.com/snippets/view/bs5-profile-billing-page"
        target="__blank"
      >
        Billing
      </a>
      <a
        className="nav-link"
        href="https://www.bootdey.com/snippets/view/bs5-profile-security-page"
        target="__blank"
      >
        Security
      </a>
      <a
        className="nav-link"
        href="https://www.bootdey.com/snippets/view/bs5-edit-notifications-page"
        target="__blank"
      >
        Notifications
      </a>
    </nav>
    <hr className="mt-0 mb-4" />
    <div className="row">
      <div className="col-xl-4">
        {/* Profile picture card*/}
        <div className="card mb-4 mb-xl-0">
          <div className="card-header">Profile Picture</div>
          <div className="card-body text-center">
            {/* Profile picture image*/}
            <img
              className="img-account-profile rounded-circle mb-2"
              src="http://bootdey.com/img/Content/avatar/avatar1.png"
              alt=""
            />
            {/* Profile picture help block*/}
            <div className="small font-italic text-muted mb-4">
              JPG or PNG no larger than 5 MB
            </div>
            {/* Profile picture upload button*/}
            <button className="btn btn-primary" type="button">
              Upload new image
            </button>
          </div>
        </div>
      </div>
      <div className="col-xl-8">
        {/* Account details card*/}
        <div className="card mb-4">
          <div className="card-header">Account Details</div>
          <div className="card-body">
            <form>
              {/* Form Group (username)*/}
              <div className="mb-3">
                <label className="small mb-1" htmlFor="inputUsername">
                  Username (how your name will appear to other users on the
                  site)
                </label>
                <input
                  className="form-control"
                  id="inputUsername"
                  type="text"
                  placeholder="Enter your username"
                  defaultValue="username"
                />
              </div>
              {/* Form Row*/}
              <div className="row gx-3 mb-3">
                {/* Form Group (first name)*/}
                <div className="col-md-6">
                  <label className="small mb-1" htmlFor="inputFirstName">
                    First name
                  </label>
                  <input
                    className="form-control"
                    id="inputFirstName"
                    type="text"
                    placeholder="Enter your first name"
                    defaultValue="Valerie"
                  />
                </div>
                {/* Form Group (last name)*/}
                <div className="col-md-6">
                  <label className="small mb-1" htmlFor="inputLastName">
                    Last name
                  </label>
                  <input
                    className="form-control"
                    id="inputLastName"
                    type="text"
                    placeholder="Enter your last name"
                    defaultValue="Luna"
                  />
                </div>
              </div>
              {/* Form Row        */}
              <div className="row gx-3 mb-3">
                {/* Form Group (organization name)*/}
                <div className="col-md-6">
                  <label className="small mb-1" htmlFor="inputOrgName">
                    Organization name
                  </label>
                  <input
                    className="form-control"
                    id="inputOrgName"
                    type="text"
                    placeholder="Enter your organization name"
                    defaultValue="Start Bootstrap"
                  />
                </div>
                {/* Form Group (location)*/}
                <div className="col-md-6">
                  <label className="small mb-1" htmlFor="inputLocation">
                    Location
                  </label>
                  <input
                    className="form-control"
                    id="inputLocation"
                    type="text"
                    placeholder="Enter your location"
                    defaultValue="San Francisco, CA"
                  />
                </div>
              </div>
              {/* Form Group (email address)*/}
              <div className="mb-3">
                <label className="small mb-1" htmlFor="inputEmailAddress">
                  Email address
                </label>
                <input
                  className="form-control"
                  id="inputEmailAddress"
                  type="email"
                  placeholder="Enter your email address"
                  defaultValue="name@example.com"
                />
              </div>
              {/* Form Row*/}
              <div className="row gx-3 mb-3">
                {/* Form Group (phone number)*/}
                <div className="col-md-6">
                  <label className="small mb-1" htmlFor="inputPhone">
                    Phone number
                  </label>
                  <input
                    className="form-control"
                    id="inputPhone"
                    type="tel"
                    placeholder="Enter your phone number"
                    defaultValue="555-123-4567"
                  />
                </div>
                {/* Form Group (birthday)*/}
                <div className="col-md-6">
                  <label className="small mb-1" htmlFor="inputBirthday">
                    Birthday
                  </label>
                  <input
                    className="form-control"
                    id="inputBirthday"
                    type="text"
                    name="birthday"
                    placeholder="Enter your birthday"
                    defaultValue="06/10/1988"
                  />
                </div>
              </div>
              {/* Save changes button*/}
              <button className="btn btn-primary" type="button">
                Save changes
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <footer className="section-p1">
    <div className="col">
      <img src="assets/img/Bj.png" className="logo" alt="" />
      <h4>contact</h4>
      <p>
        {" "}
        <strong>address: </strong> sad
      </p>
      <p>
        <strong>phone: </strong> sad
      </p>
      <p>
        <strong>hours: </strong> sda
      </p>
      <div className="follow">
        <h4>follow is</h4>
        <div className="icon">
          <i className="bi bi-facebook" />
          <i className="bi bi-twitter" />
          <i className="bi bi-instagram" />
          <i className="bi bi-youtube" />
        </div>
      </div>
    </div>
    <div className="col">
      <h4>about</h4>
      <a href="#">about us</a>
      <a href="#">delivery info</a>
      <a href="#">privacy policy</a>
      <a href="#">terms and condition</a>
      <a href="#">contact us</a>
    </div>
    <div className="col">
      <h4>my account</h4>
      <a href="#">sign in</a>
      <a href="#">view cart</a>
      <a href="#">my wishlist</a>
      <a href="#">track my order</a>
      <a href="#">help</a>
    </div>
    <div className="col install">
      <h4>install app</h4>
      <p>from app store or google play</p>
      <div className="row">
        <img src="assets/img/pay/app.jpg" alt="" />
        <img src="assets/img/pay/play.jpg" alt="" />
      </div>
      <p>secured payment gateaways</p>
      <img src="assets/img/pay/pay.png" alt="" />
    </div>
    <div className="copyright">
      <p>@ 2023, agyl aziz ashir - RPL PAK CAHYO</p>
    </div>
  </footer>
</>
    </Fragment>
  )
}

export default Account
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="maincontainer">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-4 col-xl-3 order-2 order-lg-1">
              <div className="card mb-3">
                <div className="card-body text-center">
                  <img
                    src="https://therichpost.com/wp-content/uploads/2021/03/avatar3.png"
                    alt="Jassa Jas"
                    className="img-fluid rounded-circle mb-2"
                    width="128"
                    height="128"
                  />
                  <h4 className="card-title mb-0">Jassa Jas</h4>
                  <div className="text-muted mb-2">Front-end Developer</div>

                  <div>
                    <a className="btn btn-primary btn-sm" href="#">
                      Follow
                    </a>
                    <a className="btn btn-primary btn-sm" href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="feather feather-message-square"
                      >
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                      </svg>{" "}
                      Message
                    </a>
                  </div>
                </div>
              </div>
              <div className="card mb-3">
                <div className="card-header">
                  <div className="card-actions float-right">
                    <div className="dropdown show">
                      <a href="#" data-toggle="dropdown" data-display="static">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="feather feather-more-horizontal align-middle"
                        >
                          <circle cx="12" cy="12" r="1"></circle>
                          <circle cx="19" cy="12" r="1"></circle>
                          <circle cx="5" cy="12" r="1"></circle>
                        </svg>
                      </a>

                      <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </div>
                    </div>
                  </div>
                  <h5 className="card-title mb-0">About</h5>
                </div>
                <div className="card-body">
                  <ul className="list-unstyled mb-0">
                    <li className="mb-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="feather feather-home feather-sm mr-1"
                      >
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                      </svg>{" "}
                      Lives in <a href="#">San Francisco, SA</a>
                    </li>
                    <li className="mb-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="feather feather-briefcase feather-sm mr-1"
                      >
                        <rect
                          x="2"
                          y="7"
                          width="20"
                          height="14"
                          rx="2"
                          ry="2"
                        ></rect>
                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                      </svg>{" "}
                      Works at <a href="#">GitHub</a>
                    </li>
                    <li className="mb-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="feather feather-map-pin feather-sm mr-1"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>{" "}
                      From <a href="#">Boston</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="card mb-3">
                <div className="card-header">
                  <div className="card-actions float-right">
                    <div className="dropdown show">
                      <a href="#" data-toggle="dropdown" data-display="static">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="feather feather-more-horizontal align-middle"
                        >
                          <circle cx="12" cy="12" r="1"></circle>
                          <circle cx="19" cy="12" r="1"></circle>
                          <circle cx="5" cy="12" r="1"></circle>
                        </svg>
                      </a>

                      <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </div>
                    </div>
                  </div>
                  <h5 className="card-title mb-0">Following</h5>
                </div>
                <div className="card-body">
                  <div className="media">
                    <img
                      src="https://therichpost.com/wp-content/uploads/2021/03/avatar3.png"
                      width="56"
                      height="56"
                      className="rounded-circle mr-2"
                      alt="Andrew Jones"
                    />
                    <div className="media-body">
                      <p className="my-1">
                        <strong>Andrew Jones</strong>
                      </p>
                      <a className="btn btn-sm btn-outline-primary" href="#">
                        Unfollow
                      </a>
                    </div>
                  </div>

                  <hr className="my-2" />

                  <div className="media">
                    <img
                      src="https://therichpost.com/wp-content/uploads/2021/03/avatar3.png"
                      width="56"
                      height="56"
                      className="rounded-circle mr-2"
                      alt="John Smit"
                    />
                    <div className="media-body">
                      <p className="my-1">
                        <strong>John Smit</strong>
                      </p>
                      <a className="btn btn-sm btn-outline-primary" href="#">
                        Unfollow
                      </a>
                    </div>
                  </div>

                  <hr className="my-2" />

                  <div className="media">
                    <img
                      src="https://therichpost.com/wp-content/uploads/2021/03/avatar3.png"
                      width="56"
                      height="56"
                      className="rounded-circle mr-2"
                      alt="Marie Salter"
                    />
                    <div className="media-body">
                      <p className="my-1">
                        <strong>Marie Salter</strong>
                      </p>
                      <a className="btn btn-sm btn-outline-primary" href="#">
                        Unfollow
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-8 col-xl-6 order-1 order-lg-2">
              <div className="card">
                <div className="card-body h-100">
                  <div className="media">
                    <img
                      src="https://therichpost.com/wp-content/uploads/2021/03/avatar3.png"
                      width="56"
                      height="56"
                      className="rounded-circle mr-3"
                      alt="Jassa Jas"
                    />
                    <div className="media-body">
                      <small className="float-right text-navy">5m ago</small>
                      <p className="mb-2">
                        <strong>Jassa Jas</strong>
                      </p>
                      <p>
                        Etiam rhoncus. Maecenas tempus, tellus eget condimentum
                        rhoncus, sem quam semper libero, sit amet adipiscing sem
                        neque sed ipsum. Nam quam nunc, blandit vel, luctus
                        pulvinar, hendrerit id, lorem. Maecenas nec odio et ante
                        tincidunt tempus. Donec vitae sapien ut libero venenatis
                        faucibus.
                      </p>

                      <div className="row no-gutters mt-1">
                        <div className="col-6">
                          <img
                            src="https://therichpost.com/wp-content/uploads/2021/03/avatar2.png"
                            className="img-fluid pr-1"
                            alt="Unsplash"
                          />
                        </div>
                        <div className="col-6">
                          <img
                            src="https://therichpost.com/wp-content/uploads/2021/03/avatar4.png"
                            className="img-fluid pl-1"
                            alt="Unsplash"
                          />
                        </div>
                      </div>

                      <small className="text-muted">Today 7:51 pm</small>
                      <br />
                      <a href="#" className="btn btn-sm btn-danger mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="feather feather-heart feather-sm"
                        >
                          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                        </svg>{" "}
                        Like
                      </a>

                      <div className="media mt-3">
                        <a className="pr-2" href="#">
                          <img
                            src="https://therichpost.com/wp-content/uploads/2021/03/avatar3.png"
                            width="36"
                            height="36"
                            className="rounded-circle mr-2"
                            alt="Marie Salter"
                          />
                        </a>
                        <div className="media-body">
                          <p className="text-muted">
                            <strong>Marie Salter</strong>: Nam pretium turpis et
                            arcu. Duis arcu tortor, suscipit eget, imperdiet
                            nec, imperdiet iaculis, ipsum. Sed aliquam ultrices
                            mauris. Integer ante arcu, accumsan a, consectetuer
                            eget, posuere ut, mauris.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <hr />
                  <div className="media">
                    <img
                      src="https://therichpost.com/wp-content/uploads/2021/03/avatar3.png"
                      width="56"
                      height="56"
                      className="rounded-circle mr-3"
                      alt="Andrew Jones"
                    />
                    <div className="media-body">
                      <small className="float-right text-navy">30m ago</small>
                      <p className="mb-2">
                        <strong>Andrew Jones</strong>
                      </p>
                      <p>
                        Etiam rhoncus. Maecenas tempus, tellus eget condimentum
                        rhoncus, sem quam semper libero, sit amet adipiscing sem
                        neque sed ipsum. Nam quam nunc, blandit vel, luctus
                        pulvinar, hendrerit id, lorem. Maecenas nec odio et ante
                        tincidunt tempus. Donec vitae sapien ut libero venenatis
                        faucibus. Nullam quis ante.
                      </p>
                      <small className="text-muted">Today 7:21 pm</small>
                      <br />
                      <a href="#" className="btn btn-sm btn-danger mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="feather feather-heart feather-sm"
                        >
                          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                        </svg>{" "}
                        Like
                      </a>
                    </div>
                  </div>

                  <hr />
                  <div className="media">
                    <img
                      src="https://therichpost.com/wp-content/uploads/2021/03/avatar3.png"
                      width="56"
                      height="56"
                      className="rounded-circle mr-3"
                      alt="John Smith"
                    />
                    <div className="media-body">
                      <small className="float-right text-navy">3h ago</small>
                      <p className="mb-2">
                        <strong>John Smith</strong>
                      </p>

                      <img
                        src="https://therichpost.com/wp-content/uploads/2021/03/avatar2.png"
                        className="img-fluid"
                        alt="Unsplash"
                      />

                      <small className="text-muted">Today 5:12 pm</small>
                      <br />
                      <a href="#" className="btn btn-sm btn-danger mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="feather feather-heart feather-sm"
                        >
                          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                        </svg>{" "}
                        Like
                      </a>

                      <div className="media mt-3">
                        <a className="pr-2" href="#">
                          <img
                            src="https://therichpost.com/wp-content/uploads/2021/03/avatar3.png"
                            width="36"
                            height="36"
                            className="rounded-circle mr-2"
                            alt="Marie Salter"
                          />
                        </a>
                        <div className="media-body">
                          <p className="text-muted">
                            <strong>Marie Salter</strong>: Nam pretium turpis et
                            arcu. Duis arcu tortor, suscipit eget, imperdiet
                            nec, imperdiet iaculis, ipsum. Sed aliquam ultrices
                            mauris. Integer ante arcu, accumsan a, consectetuer
                            eget, posuere ut, mauris.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <hr />
                  <div className="media">
                    <img
                      src="https://therichpost.com/wp-content/uploads/2021/03/avatar3.png"
                      width="56"
                      height="56"
                      className="rounded-circle mr-3"
                      alt="Jassa Jas"
                    />
                    <div className="media-body">
                      <small className="float-right text-navy">4h ago</small>
                      <p className="mb-2">
                        <strong>Jassa Jas</strong>
                      </p>
                      <p>
                        Etiam rhoncus. Maecenas tempus, tellus eget condimentum
                        rhoncus, sem quam semper libero, sit amet adipiscing sem
                        neque sed ipsum. Nam quam nunc, blandit vel, luctus
                        pulvinar, hendrerit id, lorem. Maecenas nec odio et ante
                        tincidunt tempus. Donec vitae sapien ut libero venenatis
                        faucibus. Nullam quis ante.
                      </p>
                      <small className="text-muted">Today 4:21 pm</small>
                      <br />
                      <a href="#" className="btn btn-sm btn-danger mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="feather feather-heart feather-sm"
                        >
                          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                        </svg>{" "}
                        Like
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-12 col-xl-3 order-3 order-lg-3">
              <div className="card">
                <div className="card-header">
                  <div className="card-actions float-right">
                    <div className="dropdown show">
                      <a href="#" data-toggle="dropdown" data-display="static">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="feather feather-more-horizontal align-middle"
                        >
                          <circle cx="12" cy="12" r="1"></circle>
                          <circle cx="19" cy="12" r="1"></circle>
                          <circle cx="5" cy="12" r="1"></circle>
                        </svg>
                      </a>

                      <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </div>
                    </div>
                  </div>
                  <h5 className="card-title mb-0">Activities</h5>
                </div>
                <div className="card-body h-100">
                  <div className="media">
                    <img
                      src="https://therichpost.com/wp-content/uploads/2021/03/avatar3.png"
                      width="36"
                      height="36"
                      className="rounded-circle mr-2"
                      alt="Jassa Jas"
                    />
                    <div className="media-body">
                      <small className="float-right text-navy">5m ago</small>
                      <strong>Jassa Jas</strong> started following{" "}
                      <strong>Marie Salter</strong>
                      <br />
                      <small className="text-muted">Today 7:51 pm</small>
                      <br />
                    </div>
                  </div>

                  <hr />
                  <div className="media">
                    <img
                      src="https://therichpost.com/wp-content/uploads/2021/03/avatar3.png"
                      width="36"
                      height="36"
                      className="rounded-circle mr-2"
                      alt="Andrew Jones"
                    />
                    <div className="media-body">
                      <small className="float-right text-navy">30m ago</small>
                      <strong>Andrew Jones</strong> posted something on{" "}
                      <strong>Marie Salter</strong>'s timeline
                      <br />
                      <small className="text-muted">Today 7:21 pm</small>
                      <div className="border text-sm text-muted p-2 mt-1">
                        Etiam rhoncus. Maecenas tempus, tellus eget condimentum
                        rhoncus, sem quam..
                      </div>
                    </div>
                  </div>

                  <hr />
                  <div className="media">
                    <img
                      src="https://therichpost.com/wp-content/uploads/2021/03/avatar3.png"
                      width="36"
                      height="36"
                      className="rounded-circle mr-2"
                      alt="Marie Salter"
                    />
                    <div className="media-body">
                      <small className="float-right text-navy">1h ago</small>
                      <strong>Marie Salter</strong> posted a new blog
                      <br />
                      <small className="text-muted">Today 6:35 pm</small>
                    </div>
                  </div>

                  <hr />
                  <div className="media">
                    <img
                      src="https://therichpost.com/wp-content/uploads/2021/03/avatar3.png"
                      width="36"
                      height="36"
                      className="rounded-circle mr-2"
                      alt="John Smith"
                    />
                    <div className="media-body">
                      <small className="float-right text-navy">3h ago</small>
                      <strong>John Smith</strong> posted two photos on{" "}
                      <strong>Marie Salter</strong>'s timeline
                      <br />
                      <small className="text-muted">Today 5:12 pm</small>
                      <div className="row no-gutters mt-1">
                        <div className="col-6 col-md-4 col-lg-4 col-xl-3">
                          <img
                            src="https://therichpost.com/wp-content/uploads/2021/03/avatar3.png"
                            className="img-fluid pr-2"
                            alt="Unsplash"
                          />
                        </div>
                        <div className="col-6 col-md-4 col-lg-4 col-xl-3">
                          <img
                            src="https://therichpost.com/wp-content/uploads/2021/03/avatar4.png"
                            className="img-fluid pr-2"
                            alt="Unsplash"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <hr />
                  <div className="media">
                    <img
                      src="https://therichpost.com/wp-content/uploads/2021/03/avatar3.png"
                      width="36"
                      height="36"
                      className="rounded-circle mr-2"
                      alt="Marie Salter"
                    />
                    <div className="media-body">
                      <small className="float-right text-navy">1d ago</small>
                      <strong>Marie Salter</strong> posted a new blog
                      <br />
                      <small className="text-muted">Yesterday 2:43 pm</small>
                    </div>
                  </div>

                  <hr />
                  <div className="media">
                    <img
                      src="https://therichpost.com/wp-content/uploads/2021/03/avatar3.png"
                      width="36"
                      height="36"
                      className="rounded-circle mr-2"
                      alt="Andrew Jones"
                    />
                    <div className="media-body">
                      <small className="float-right text-navy">1d ago</small>
                      <strong>Andrew Jones</strong> started following{" "}
                      <strong>Marie Salter</strong>
                      <br />
                      <small className="text-muted">Yesterdag 1:51 pm</small>
                    </div>
                  </div>

                  <hr />
                  <a href="#" className="btn btn-primary btn-sm btn-block">
                    Load more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

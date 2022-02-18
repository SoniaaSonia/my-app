import React from "react";

const Dashboard = () => {
  return (
    <div className="page-wrapper">
      <div className="page-breadcrumb">
        <div className="row align-items-center">
          <div className="col-md-6 col-8 align-self-center">
            <h3 className="page-title mb-0 p-0">Dashboard</h3>
            <div className="d-flex align-items-center">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">Home</li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Dashboard
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Daily Sales</h4>
                <div className="text-end">
                  <h2 className="font-light mb-0">
                    <i className="ti-arrow-up text-success" /> $120
                  </h2>
                  <span className="text-muted">Todays Income</span>
                </div>
                <span className="text-success">80%</span>

                <div className="progress">
                  <div
                    className="progress-bar bg-success"
                    role="progressbar"
                    style={{ width: "80%", height: "6px" }}
                    aria-valuenow={25}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Weekly Sales</h4>
                <div className="text-end">
                  <h2 className="font-light mb-0">
                    <i className="ti-arrow-up text-info" /> $5,000
                  </h2>
                  <span className="text-muted">Todays Income</span>
                </div>
                <span className="text-info">30%</span>
                <div className="progress">
                  <div
                    className="progress-bar bg-info"
                    role="progressbar"
                    style={{ width: "30%", height: "6px" }}
                    aria-valuenow={25}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-body">
                <div className="d-md-flex">
                  <h4 className="card-title col-md-10 mb-md-0 mb-3 align-self-center">
                    Projects of the Month
                  </h4>
                  <div className="col-md-2 ms-auto">
                    <select className="form-select shadow-none col-md-2 ml-auto">
                      <option selected>January</option>
                      <option value="1">February</option>
                      <option value="2">March</option>
                      <option value="3">April</option>
                    </select>
                  </div>
                </div>
                <div className="table-responsive mt-5">
                  <table className="table stylish-table no-wrap">
                    <thead>
                      <tr>
                        <th className="border-top-0" colSpan={2}>
                          Assigned
                        </th>
                        <th className="border-top-0">Name</th>
                        <th className="border-top-0">Budget</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style={{ width: "50px" }}>
                          <span className="round">S</span>
                        </td>
                        <td className="align-middle">
                          <h6>Sunil Joshi</h6>
                          <small className="text-muted">Web Designer</small>
                        </td>
                        <td className="align-middle">Elite Admin</td>
                        <td className="align-middle">$3.9K</td>
                      </tr>
                      <tr className="active">
                        <td>
                          <span className="round">
                            <img
                              src="./images/users/2.jpg"
                              alt="user"
                              width={50}
                            />
                          </span>
                        </td>
                        <td className="align-middle">
                          <h6>Andrew</h6>
                          <small className="text-muted">Project Manager</small>
                        </td>
                        <td className="align-middle">Real Homes</td>
                        <td className="align-middle">$23.9K</td>
                      </tr>
                      <tr>
                        <td>
                          <span className="round round-success">B</span>
                        </td>
                        <td className="align-middle">
                          <h6>Bhavesh patel</h6>
                          <small className="text-muted">Developer</small>
                        </td>
                        <td className="align-middle">MedicalPro Theme</td>
                        <td className="align-middle">$12.9K</td>
                      </tr>
                      <tr>
                        <td>
                          <span className="round round-primary">N</span>
                        </td>
                        <td className="align-middle">
                          <h6>Nirav Joshi</h6>
                          <small className="text-muted">Frontend Eng</small>
                        </td>
                        <td className="align-middle">Elite Admin</td>
                        <td className="align-middle">$10.9K</td>
                      </tr>
                      <tr>
                        <td>
                          <span className="round round-warning">M</span>
                        </td>
                        <td className="align-middle">
                          <h6>Micheal Doe</h6>
                          <small className="text-muted">Content Writer</small>
                        </td>
                        <td className="align-middle">Helping Hands</td>
                        <td className="align-middle">$12.9K</td>
                      </tr>
                      <tr>
                        <td>
                          <span className="round round-danger">N</span>
                        </td>
                        <td className="align-middle">
                          <h6>Johnathan</h6>
                          <small className="text-muted">Graphic</small>
                        </td>
                        <td className="align-middle">Digital Agency</td>
                        <td className="align-middle">$2.6K</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div className="card">
              <img
                className="card-img-top img-responsive"
                src="./images/big/img1.jpg"
                alt="Card"
              />
              <div className="card-body">
                <ul className="list-inline d-flex align-items-center">
                  <li className="ps-0">20 May 2021</li>
                  <li className="ms-auto">3 Comment</li>
                </ul>
                <h3 className="font-normal">
                  Featured Hydroflora Pots Garden &amp; Outdoors
                </h3>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="card">
              <img
                className="card-img-top img-responsive"
                src="./images/big/img2.jpg"
                alt="Card"
              />
              <div className="card-body">
                <ul className="list-inline d-flex align-items-center">
                  <li className="ps-0">20 May 2021</li>
                  <li className="ms-auto">3 Comment</li>
                </ul>
                <h3 className="font-normal">
                  Featured Hydroflora Pots Garden &amp; Outdoors
                </h3>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="card">
              <img
                className="card-img-top img-responsive"
                src="./images/big/img4.jpg"
                alt="Card"
              />
              <div className="card-body">
                <ul className="list-inline d-flex align-items-center">
                  <li className="ps-0">20 May 2021</li>
                  <li className="ms-auto">3 Comment</li>
                </ul>
                <h3 className="font-normal">
                  Featured Hydroflora Pots Garden &amp; Outdoors
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;

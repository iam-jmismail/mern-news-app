import React, { Fragment } from "react";

export default function Cat() {
  return (
    <Fragment>
      <section class='cat py-4'>
        <div class='container'>
          <h3 class='text-dark'>
            <i class='fas fa-boxes mr-2'></i>Categories
          </h3>
          <div class='row text-center'>
            <div class='col-md-3 mb-1'>
              <a href='index.html'>
                <div class='card'>
                  <div class='card-body'>
                    <i class='fas fa-rupee-sign'></i>
                  </div>
                  <div class='card-footer'>Buisness</div>
                </div>
              </a>
            </div>
            <div class='col-md-3 mb-1'>
              <a href='index.html'>
                <div class='card'>
                  <div class='card-body'>
                    <i class='fas fa-video'></i>
                  </div>
                  <div class='card-footer'>Entertainment</div>
                </div>
              </a>
            </div>
            <div class='col-md-3 mb-1'>
              <a href='index.html'>
                <div class='card'>
                  <div class='card-body'>
                    <i class='fas fa-hourglass-half'></i>
                  </div>
                  <div class='card-footer'>General</div>
                </div>
              </a>
            </div>
            <div class='col-md-3 mb-1'>
              <a href='index.html'>
                <div class='card'>
                  <div class='card-body'>
                    <i class='fas fa-first-aid'></i>
                  </div>
                  <div class='card-footer'>Health</div>
                </div>
              </a>
            </div>
          </div>
          <div class='row text-center mt-4'>
            <div class='col-md-3 mb-1'>
              <a href='index.html'>
                <div class='card'>
                  <div class='card-body'>
                    <i class='fas fa-vials'></i>
                  </div>
                  <div class='card-footer'>Science</div>
                </div>
              </a>
            </div>
            <div class='col-md-3 mb-1'>
              <a href='index.html'>
                <div class='card'>
                  <div class='card-body'>
                    <i class='fas fa-futbol'></i>
                  </div>
                  <div class='card-footer'>Sports</div>
                </div>
              </a>
            </div>
            <div class='col-md-3 mb-1'>
              <a href='index.html'>
                <div class='card'>
                  <div class='card-body'>
                    <i class='fas fa-microchip'></i>
                  </div>
                  <div class='card-footer'>Technology</div>
                </div>
              </a>
            </div>
            <div class='col-md-3 mb-1'>
              <a href='national.html'>
                <div class='card'>
                  <div class='card-body'>
                    <i class='fas fa-globe-asia'></i>
                  </div>
                  <div class='card-footer'>National</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

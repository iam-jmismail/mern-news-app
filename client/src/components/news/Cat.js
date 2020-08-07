import React, { Fragment } from "react";
import { Link } from "react-router-dom";
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
              <Link to='/business'>
                <div class='card'>
                  <div class='card-body'>
                    <i class='fas fa-rupee-sign'></i>
                  </div>
                  <div class='card-footer'>Buisness</div>
                </div>
              </Link>
            </div>

            <div class='col-md-3 mb-1'>
              <Link to='/entertainment'>
                <div class='card'>
                  <div class='card-body'>
                    <i class='fas fa-video'></i>
                  </div>
                  <div class='card-footer'>Entertainment</div>
                </div>
              </Link>
            </div>
            <div class='col-md-3 mb-1'>
              <Link to='/general'>
                <div class='card'>
                  <div class='card-body'>
                    <i class='fas fa-hourglass-half'></i>
                  </div>
                  <div class='card-footer'>General</div>
                </div>
              </Link>
            </div>
            <div class='col-md-3 mb-1'>
              <Link to='/health'>
                <div class='card'>
                  <div class='card-body'>
                    <i class='fas fa-first-aid'></i>
                  </div>
                  <div class='card-footer'>Health</div>
                </div>
              </Link>
            </div>
          </div>
          <div class='row text-center mt-4'>
            <div class='col-md-3 mb-1'>
              <Link to='/science'>
                <div class='card'>
                  <div class='card-body'>
                    <i class='fas fa-vials'></i>
                  </div>
                  <div class='card-footer'>Science</div>
                </div>
              </Link>
            </div>
            <div class='col-md-3 mb-1'>
              <Link to='/sports'>
                <div class='card'>
                  <div class='card-body'>
                    <i class='fas fa-futbol'></i>
                  </div>
                  <div class='card-footer'>Sports</div>
                </div>
              </Link>
            </div>
            <div class='col-md-3 mb-1'>
              <Link to='/technology'>
                <div class='card'>
                  <div class='card-body'>
                    <i class='fas fa-microchip'></i>
                  </div>
                  <div class='card-footer'>Technology</div>
                </div>
              </Link>
            </div>
            <div class='col-md-3 mb-1'>
              <Link to='/nation'>
                <div class='card'>
                  <div class='card-body'>
                    <i class='fas fa-globe-asia'></i>
                  </div>
                  <div class='card-footer'>National</div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

import React, { Component } from "react";

export default class Preloader extends Component {
  render() {
    return (
      <div id="preloader">
        <div className="ctn-preloader">
          <div className="animation-preloader">
            <div className="spinner" />
            <div class="txt-loading">
              <span data-text-preloader="A" class="letters-loading">
                A
              </span>
              <span data-text-preloader="J" class="letters-loading">
                J
              </span>
              <span data-text-preloader="A" class="letters-loading">
                A
              </span>
              <span data-text-preloader="N" class="letters-loading">
                N
              </span>
              <span data-text-preloader="T" class="letters-loading">
                T
              </span>
              <span data-text-preloader="R" class="letters-loading">
                R
              </span>
              <span data-text-preloader="I" class="letters-loading">
                I
              </span>
              <span data-text-preloader="K" class="letters-loading">
                K
              </span>

            </div>
            <p className="text-center">Loading</p>
          </div>
          
        </div>
      </div>
    );
  }
}
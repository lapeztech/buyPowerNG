import React from 'react'
import './style.css'

export default function Form() {
    return (
        <div className="row mt-4">
            <div className="col-md-1"></div>
            <div className="col-md-4 text-light form">
                <h3 class="mt-4">
                    Purchase electricity from the comfort of your home
                </h3>


                <form class="form-group mt-4">
                    <h5>
                        Enter your phone number to begin
                    </h5>
                    <input type="text" class="form-control" placeholder="0000-000-0000 " step="5" required />
                    <button class="button form-control">Click here to buy electricity</button>
                    <h4 class="mt-4">Need help? Call 0908-749-3044</h4>
                    <img src="./../../assets/images/logo.png" alt="" />

                </form>
            </div>
            <div className="col-md-7"></div>
        </div>
    )
}

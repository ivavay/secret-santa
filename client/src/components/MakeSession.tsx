import 'bootstrap/dist/css/bootstrap.min.css'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import { useState } from 'react';
import { useForm } from "react-hook-form"

function MakeSession(this: any) {
    const [startDate, setStartDate] = useState(new Date());
    const {
        register,
        formState: { errors },
        handleSubmit,
      } = useForm()
    const onSubmit = (data) => console.log(data)

    return(
        <>
        <div className="background d-flex justify-content-center">
            <div className="organize card border-success mb-3">
                <div className="card-body">
                <h5 className="card-title">Organize a session</h5>
                <p className="card-text">Let's get you set up for a gift giving session! Be sure to set the budget that each gift should be, the date, and invite the guests, and we'll take care of the rest.</p>
            
                    <div className="mb-3">
                    <label className="form-label">Session Date</label>
                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} minDate={new Date()}/>
                    </div>
                    <div className="mb-3">
                    <label className="form-label">Description (budget, rules)</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1"></textarea>
                    </div>

                    <div className="form-card">
                    <h5 className="card-title">Invite guests</h5>
                        <div className="mb-3">
                        <form onSubmit={handleSubmit(onSubmit)}>
                        <input placeholder="First Name"
                                {...register("firstName", { pattern: /^[A-Za-z]+$/i})}
                                aria-invalid={errors.firstName ? "true" : "false"}
                            />
                        {errors.firstName && <p role="alert">First name is required</p>}
                        <input placeholder="Last Name"{...register("lastName", { pattern: /^[A-Za-z]+$/i})} 
                            aria-invalid={errors.lastName ? "true" : "false"}/>
                            {errors.lastName && <p role="alert">Last name is required</p>}
                        <input placeholder="Email"
                            {...register("email", { pattern: /^[^\s@]+@[^\s@]+\.(com|net|edu|gmail)$/ })}
                            aria-invalid={errors.email ? "true" : "false"}
                        />
                        {errors.email && <p role="alert">Email is required</p>}
                        <input type="submit" />
                        </form>
                        </div>
                        <button type="submit" className="btn border-success space-btns">Add person</button>   
                        <button type="submit" className="btn btn-success space-btns">Save</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default MakeSession
import './Form.css';
import { useState } from 'react';
import { Formik } from 'formik';

export default function Form() {
    const [form, setForm] = useState({});

    const REGEX = {
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    }

    function handleChange(event) {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        });
    };

    function handleValidate() {
        const errors = {};
        if (!form.fullname) {
            errors.fullname = "Required";
        }
        if (!form.id) {
            errors.id = "Required";
        }
        if (!form.birthday) {
            errors.birthday = "Required";
        } else if (new Date(Date.parse(form.birthday)).getFullYear() <= 1900) {
            errors.birthday = "Invalid year birthday > 1900";
        }
        if (!form.nationality) {
            errors.nationality = "Required";
        }
        if (!form.province) {
            errors.province = "Required";
        }
        if (!form.district) {
            errors.district = "Required";
        }
        if (!form.subDistrict) {
            errors.subDistrict = "Required";
        }
        if (!form.group) {
            errors.group = "Required";
        }
        if (!form.phone) {
            errors.phone = "Required";
        }
        if (!form.email) {
            errors.email = "Required";
        } else if (!REGEX.email.test(form.email)) {
            errors.email = "Invalid email address";
        }
        return errors;
    };

    function handleSubmit() {
        alert("ok");
    };

    return (
        <div className='container'>
            <h1>Tờ khai y tế</h1>
            <Formik initialValues={form}
                    validate={handleValidate}
                    onSubmit={handleSubmit}>
                {({ errors, handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <div className={`custom-input ${errors.fullname ? "custom-input-error" : ""}`}>
                            <label>Họ tên</label>
                            <input name='fullname' value={form.fullname || ""} onChange={handleChange} />
                            <p className='error'>{errors.fullname}</p>
                        </div>
                        <div className={`custom-input ${errors.id ? "custom-input-error" : ""}`}>
                            <label>Số hộ chiếu/CMND</label>
                            <input type='number' name='id' value={form.id || ""} onChange={handleChange} />
                            <p className='error'>{errors.id}</p>
                        </div>
                        <div className={`custom-input ${errors.birthday ? "custom-input-error" : ""}`}>
                            <label>Năm sinh</label>
                            <input type='date' name='birthday' value={form.birthday || ""} onChange={handleChange} />
                            <p className='error'>{errors.birthday}</p>
                        </div>
                        <div className='custom-input'>
                            <label className='abc'>Giới tính</label>
                            <input style={{width: 'auto'}} type='radio' name='sex' id='male' value='male' />
                            <label className='abc' for='male'>Nam</label>
                            <input style={{width: 'auto'}} type='radio' name='sex' id='female' value='female' />
                            <label className='abc' for='female'>Nữ</label>
                        </div>
                        <div className={`custom-input ${errors.nationality ? "custom-input-error" : ""}`}>
                            <label>Quốc tịch</label>
                            <input name='nationality' value={form.nationality || ""} onChange={handleChange} />
                            <p className='error'>{errors.nationality}</p>
                        </div>
                        <div className='custom-input'>
                            <label>Công ty làm việc</label>
                            <input name='company' />
                        </div>
                        <div className='custom-input'>
                            <label>Bộ phận làm việc</label>
                            <input name='department' />
                        </div>
                        <div className='custom-input'>
                            <label className='abc'>Có thẻ bảo hiểm y tế</label>
                            <input style={{width: 'auto'}} type='checkbox' name='check' value='true' />
                        </div>    
                        <h3>Địa chỉ liên lạc tại Việt Nam</h3>
                        <div className={`custom-input ${errors.province ? "custom-input-error" : ""}`}>
                            <label>Tỉnh /thành phố</label>
                            <input name='province' value={form.province || ""} onChange={handleChange} />
                            <p className='error'>{errors.province}</p>
                        </div>
                        <div className={`custom-input ${errors.district ? "custom-input-error" : ""}`}>
                            <label>Quận /huyện</label>
                            <input name='district' value={form.district || ""} onChange={handleChange} />
                            <p className='error'>{errors.district}</p>
                        </div>
                        <div className={`custom-input ${errors.subDistrict ? "custom-input-error" : ""}`}>
                            <label>Phường /xã</label>
                            <input name='subDistrict' value={form.subDistrict || ""} onChange={handleChange} />
                            <p className='error'>{errors.subDistrict}</p>
                        </div>
                        <div className={`custom-input ${errors.group ? "custom-input-error" : ""}`}>
                            <label>Số nhà, phố, tổ dân phố /thôn /đội</label>
                            <input name='group' value={form.group || ""} onChange={handleChange} />
                            <p className='error'>{errors.group}</p>
                        </div>
                        <div className={`custom-input ${errors.phone ? "custom-input-error" : ""}`}>
                            <label>Điện thoại</label>
                            <input type='number' name='phone' value={form.phone || ""} onChange={handleChange} />
                            <p className='error'>{errors.phone}</p>
                        </div>
                        <div className={`custom-input ${errors.email ? "custom-input-error" : ""}`}>
                            <label>Email</label>
                            <input name='email' value={form.email || ""} onChange={handleChange} />
                            <p className='error'>{errors.email}</p>
                        </div>
                        <h3>Trong vòng 14 ngày qua, Anh /Chị có đến quốc gia /vùng lãnh thổ nào (có thể đi qua nhiều quốc gia)</h3>
                        <textarea/>
                        <h3>Trong vòng 14 ngày qua, Anh /Chị có thấy xuất hiện dấu hiệu nào sau đây không?</h3>
                        <div className='custom-input'>
                            <input style={{width: 'auto'}} type='checkbox' id='sot' />
                            <label className='abc' for='sot'>Sốt</label><br/>
                            <input style={{width: 'auto'}} type='checkbox' id='ho' />
                            <label className='abc' for='ho'>Ho</label><br/>
                            <input style={{width: 'auto'}} type='checkbox' id='khotho' />
                            <label className='abc' for='khotho'>Khó thở</label><br/>
                            <input style={{width: 'auto'}} type='checkbox' id='viemphoi' />
                            <label className='abc' for='viemphoi'>Viêm phổi</label><br/>
                            <input style={{width: 'auto'}} type='checkbox' id='dauhong' />
                            <label className='abc' for='dauhong'>Đau họng</label><br/>
                            <input style={{width: 'auto'}} type='checkbox' id='metmoi' />
                            <label className='abc' for='metmoi'>Mệt mỏi</label><br/>
                        </div>  
                        <h3>Trong vòng 14 ngày qua, Anh /Chị có tiếp xúc với?</h3>
                        <div className='custom-input'>
                            <input style={{width: 'auto'}} type='checkbox' id='nguoibenh' />
                            <label className='abc' for='nguoibenh'>Người bệnh hoặc nghi ngờ, mắc bệnh COVID-19</label><br/>
                            <input style={{width: 'auto'}} type='checkbox' id='nguoinuocngoai' />
                            <label className='abc' for='nguoinuocngoai'>Người từ nước có bệnh COVID-19</label><br/>
                            <input style={{width: 'auto'}} type='checkbox' id='nguoisot' />
                            <label className='abc' for='nguoisot'>Người có biểu hiện (Sốt, ho, khó thở, viêm phổi)</label><br/>
                        </div>    
                        <button type="submit">Submit</button>
                    </form>
                )}
            </Formik>
        </div>
    );
}